// JS

const helloJavaScript = () => alert('hello Wolrd');

helloJavaScript()

//jQuery

//DOM
// ready espera o DOM estar 100% carregado para realizar uma ação
$(document).ready(() => alert('Hello Wolrd em jQuery'))
 
// ou
$(document).ready(helloJavaScript())

// ou
$(() => alert('Eu sou um Hello World com uma função anonima'))