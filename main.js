let h1 = document.querySelector('h1')
h1.innerText= "Les attributs class et id"
let h2 = document.querySelectorAll('h2')[0]
h2.innerText = "Exercices 2 partie A"
let h2_bis= document.querySelectorAll('h2')[1]
h2_bis.innerText = "Exercices 2 partie B"
let p = document.querySelectorAll('p')[0]
p.innerHTML = "<b>par coeur</b>"
let p_bis = document.querySelectorAll('p')[1]
p_bis.innerHTML =  "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

// PARTIE 2

h1.setAttribute('id',"bigTitle")
let div = document.querySelectorAll('div')
div.classname = "container"
let h2_All = document.querySelectorAll('h2')
let p_All = document.querySelectorAll('p')
h2_All.forEach(element => {
    element.className="title"
});

p_All.forEach(element=>{
    element.className="text"
})

// Partie2.2

let section = document.querySelectorAll('section')[0]
section.className="margin-bottom border-black padding"
let section_bis = document.querySelectorAll('section')[1]
section_bis.className="margin-top border-black padding"

let div_enfant = document.querySelectorAll('section')[1].querySelector('div')
div_enfant.style.backgroundColor = "lightblue"
div_enfant.style.border ="5px"
div_enfant.style.height = "300px"
div_enfant.style.width = "20px"


