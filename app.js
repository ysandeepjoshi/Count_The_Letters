let button = document.getElementById('btn');

button.addEventListener('click', function () {

    let word = document.getElementById('str').value;
    let count = word.length;

    let vowelCount = word.split('').filter(x => ['a', 'e', 'i', 'o', 'u'].includes(x)).length;


    let countWithoutSpaces = word.split('').filter(x => (x != ' ')).length;


    let outputDiv = document.getElementById('output');
    let outputDivWithoutSpace = document.getElementById('output_without_space');
    let outputDivVowels = document.getElementById('output_vowels');

    outputDivWithoutSpace.innerHTML = `<h1> Count without space: ${countWithoutSpaces}</h1>`
    outputDivVowels.innerHTML = `<h1>Vowel Count : ${vowelCount}</h1>`
    outputDiv.innerHTML = `<h1> total count : ${count}</h1>`;

})