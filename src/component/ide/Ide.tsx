import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import JSZip from 'jszip';
import { Tree } from 'antd';
import Editor from '@monaco-editor/react';

import { useWindow } from 'atom/window';

const { DirectoryTree } = Tree;

interface IdeProps {
  language: string;
  url: string;
};
export const Ide = ({
  language,
  url,
}: IdeProps) => {
  const window = useWindow();
  const [tree, setTree] = useState([]);
  const [editor, setEditor] = useState<any>();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (!url) return;
    loadZip(url);
  }, [url]);

  const loadZip = async (url: string) => {
    const blob = await (await fetch(process.env.PUBLIC_URL + url)).blob();
    const zip = await JSZip.loadAsync(blob);

    const root = zip.folder(Object.values(zip.files)[0].name)!;
    let data: any[] = [];
    const build = (depth: number, path: string, node: JSZip, dataNode: any[]) => {
      for (const file of Object.values(root.files)) {
        const fileName = file.name.endsWith('/') ? file.name.substr(0, file.name.length - 1) : file.name;
        const fileDepth = fileName.split('/').length - 1;
        if (!file.name.startsWith(path) || path === file.name || fileDepth !== depth)
          continue;
        const matches = fileName.match(/\/([^\/]+)$/);
        const d = {
          key: file.name,
          title: matches?.[1],
          isLeaf: !file.dir,
          children: [],
          file,
        };
        if (file.dir) {
          build(depth + 1, file.name, node.folder(file.name)!, d.children);
          d.children = [
            ...d.children.filter((x: any) => x.file.dir),
            ...d.children.filter((x: any) => !x.file.dir),
          ];
        }
        dataNode.push(d);
      }
    };
    build(1, Object.values(zip.files)[0].name, root, data);
    data = [
      ...data.filter((x) => x.file.dir),
      ...data.filter((x) => !x.file.dir),
    ];
    setTree(data as any);

    loadFile(root.file('readme.md'));
  };
  const loadFile = async (file: JSZip.JSZipObject | null) => {
    if (!file) return;

    const content = await file.async('string');
    setCode(content!.replace('\ufeff', ''));  // remove BOM
    editor?.setScrollPosition({ scrollTop: 0 });
    window.title = `CODEVIEW - ${file.name}`;
  };
  const onSelect = async (keys: React.Key[], { node }: any) => {
    loadFile(node.file);
  };

  return (
    <Container>
      <TreeView>
        <DirectoryTree
          treeData={tree}
          onSelect={onSelect}
        />
      </TreeView>
      <CodeView>
        <Editor
          height="100%"
          defaultLanguage={language}
          theme="vs-dark"
          value={code}
          onMount={setEditor}
        />
      </CodeView>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  overflow: hidden;
`;
const TreeView = styled.div`
  width: 300px;
  height: 100%;

  background: white;

  overflow: auto;

  padding: 10px 10px;
`;
const CodeView = styled.div`
  flex: 1;
`;
