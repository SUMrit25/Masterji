const input = document.querySelector('#textarea');  // text area selector
const output = document.querySelector('#preview');  // preview selector
const clear = document.querySelector('#clear');     // clear button selector

//Adding event listener for input 
input.addEventListener('input', () => {
    output.innerHTML = marked.parse(input.value);
    const code = output.querySelectorAll('pre code, code');
    code.forEach((block) => {
        hljs.highlightElement(block);
    })
});

//Adding event listener for clear button
clear.addEventListener('click', () => {
    input.value = '';
    output.innerHTML = '';
})