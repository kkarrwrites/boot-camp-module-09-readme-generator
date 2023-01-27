function generateFileName(data) {
  if (data.title) {
    return `app/${data.title}.md`;
  } else {
    return `app/READMESample.md`;
  }
}

module.exports = generateFileName;
