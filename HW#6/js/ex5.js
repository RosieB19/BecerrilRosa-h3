const createTable = () => {
  const table = document.createElement('table');
  for (let i = 1; i <= 12; i++) {
    const cell = document.createElement('td');
    cell.textContent = i;
    cell.className = i % 4 === 0 ? 'blue' : '';
    const row = document.createElement('tr');
    row.appendChild(cell);
    table.appendChild(row);
  }
  document.getElementById('output').appendChild(table);
};
createTable();