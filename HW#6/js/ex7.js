const calculateSum = () => {
  let [num1, num2] = [prompt("Enter first integer:"), prompt("Enter second integer:")];
  const contentDiv = document.getElementById('content');

  contentDiv.innerHTML = (/^-?\d+$/.test(num1) && /^-?\d+$/.test(num2))
    ? `<p>${num1} + ${num2} = <span style="color: red; font-weight: bold;">${parseInt(num1) + parseInt(num2)}</span></p>`
    : `<p><span style="color: red; font-weight: bold;">Error!</span> You must enter integers. You entered "${num1}" and "${num2}". Try again.</p>`;
};
calculateSum();