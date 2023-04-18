var preguntas =[
    "¿Que princesa salvo China?",
    "¿Que princesa vive bajo el mar?",
    "¿Que princesa se pincho el dedo con una aguja?"
];
var respuestas=[
    ["Mulan","Ariel","Aurora","Blanca Nieves"],
    ["Blanca Nieves","Ariel","Mulan","Aurora"],
    ["Ariel","Aurora","Blanca Nieves","Mula"]
];

let question = document.getElementById("question");
for (i in preguntas) {
    question.innerText = preguntas[i];
}

function puntosTotales() {
    
}

let answer1 = document.getElementsById("ans1");
let answer2 = document.getElementsById("ans2");
let answer3 = document.getElementsById("ans3");
let answer4 = document.getElementsById("ans4");

//answer1.innerText = 
answer1.addEventListener('click', puntosTotales);

function btnDescifrar() {
    document.getElementById("root").style.display = 'none';
    document.getElementById("descifrar").style.display = 'block';
}
  


//var indice_aleatorio = Math.floor(Math.ramdom()*preguntas.length);


// var respuestas_posibles = respuestas[indice_aleatorio];

// var txt_respuestas="";
// for (i in respuestas_posible){
// txt_respuestas += <input type="radio"><label></input>+respuestas_posibles[i]+'</label>'
// }