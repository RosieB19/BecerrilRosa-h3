const bodyNodes = () => {
  const childNodes = document.body.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    console.log(childNodes[i]);
  }
};

bodyNodes();