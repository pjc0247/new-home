const fetch = require('node-fetch');
const fs = require('fs');

const downloadFile = async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
      res.body.pipe(fileStream);
      res.body.on("error", reject);
      fileStream.on("finish", resolve);
    });
};
const downloadRepo = async (owner, name, branch = 'master') => {
  await downloadFile(
    `https://github.com/${owner}/${name}/archive/refs/heads/${branch}.zip`,
    `./public/repo/${name}.zip`,
  );
};

downloadRepo('pjc0247', 'SlowSharp');
downloadRepo('pjc0247', 'rookie.lang');
