const makeParagraphsBold = () => {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.style.fontWeight = 'bold';
    p.style.backgroundColor = 'yellow';
  });
};
makeParagraphsBold();