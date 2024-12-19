let firstHeader = document.getElementById('myTitle');

console.log(firstHeader.textContent);
console.log(firstHeader.innerText);


firstHeader.innerText = 'Hello'

let secondDiv = document.querySelector('.myDiv');

secondDiv.innerHTML += `
<ol>
<li>test</li>
<li>test1</li>
<li>test2</li>
</ol>
` // obavezno so back ticks 

