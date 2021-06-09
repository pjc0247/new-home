import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import JSZip from 'jszip';
import { Tree } from 'antd';

const { DirectoryTree } = Tree;

interface IdeProps {

};
export const Ide = ({

}: IdeProps) => {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/repo/slowsharp.zip')       // 1) fetch the url
    .then(function (response) {                       // 2) filter on 200 OK
        if (response.status === 200 || response.status === 0) {
            return Promise.resolve(response.blob());
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    })
    .then(JSZip.loadAsync)
    .then(function (zip) {
      if (!zip) return null;
      console.log(zip.files);
      const root = zip.folder(Object.values(zip.files)[0].name)!;
      console.log(root.files);

      let data: any[] = [];
      const build = (depth: number, path: string, node: JSZip, dataNode: any[]) => {

        for (const file of Object.values(root.files)) {
          //console.log(file);
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
          };
          if (file.dir) {
            build(depth + 1, file.name, node.folder(file.name)!, d.children);
            d.children = d.children.sort((a: any, b: any) => a.dir ? 1 : -1);
          }
          dataNode.push(d);
        }
      };
      build(1, Object.values(zip.files)[0].name, root, data);
      data = data.sort((a: any, b: any) => a.dir ? (b.dir ? 1 : -1) : -1);

      console.log(data);
      setTree(data as any);

      return root.file("readme.md")!.async("string"); // 4) chain with the text content promise
    })
    .then((content) => {
      console.log(content);
    })
  }, []);

  return (
    <Container>
      <TreeView>
        <Tree
          onExpand={() => {}}
          treeData={[
            {
              key:'0',
              title: 'a',
              children: [
                { key:'0-0', title:'b', isLeaf: true}
              ]
            },
            {
              key:'1',
              title: 'b',
              children: [
                { key:'1-1', title:'b', isLeaf: true}
              ]
            }
          ]}
        />
      </TreeView>
      <CodeView>

      </CodeView>
    </Container>
  );
};

const Container = styled.div`
`;
const TreeView = styled.div`
  width: 200px;
  height: 100%;

  background: white;

  padding: 10px 10px;
`;
const CodeView = styled.div`
`;
