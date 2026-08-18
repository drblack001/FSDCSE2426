const container = document.getElementById('container');
const button = document.getElementById('btn')
const about= document.createElement('p')


function ping(){
    container.innerHTML="<h1>MY Resume</h1><img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShaLQlvr-X6sJEcC8GewlKheD12x3k1fTNWwWK1Zerg&s> <h2>Professional Summary</h2> <h3>skills</h3> <p> mern stack, springboot,genai</p>"
}
button.addEventListener('click',ping);
