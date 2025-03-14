const words = [
  { term: "Procrastination", definition: "Avoidance of doing a task that needs to be accomplished" },
  { term: "Tautology", definition: "Logical argument constructed in such a way that it is logically irrefutable" },
  { term: "Oxymoron", definition: "Figure of speech that juxtaposes elements that appear to be contradictory" }
];
const createDictionary = () => {
  const dl = document.createElement("dl");
  words.forEach(({ term, definition }) => {
    dl.innerHTML += `<dt><strong>${term}</strong></dt><dd>${definition}</dd><br>`;
  });
  document.getElementById("content").appendChild(dl);
};
createDictionary();