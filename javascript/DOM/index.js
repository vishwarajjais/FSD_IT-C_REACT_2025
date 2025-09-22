// const div=document.getElementsByTagName('div'); 
// div[0].innerText="hell0 world"
// div[0].style.backgroundColor="red"
// div[0].style.Color="green"
// console.log(div)

const container = document.getElementsByClassName("container")
// console.dir(container)
// container[0].innerHTML='<h2 style=color:red>HElloo world</h2>'


const h2 = document.createElement('h2')
h2.innerText = 'ABES'
h2.style.backgroundColor = "#212121"
h2.style.color = "#fff"
container[0].appendChild(h2)

const img = document.createElement('img')


const button = document.getElementById('btn')

function msg() {
    // return "hello , i am working on DOM"
    // alert('hi i am using dom')
    img.src = "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/"
    img.setAttribute('height', '200px')
    img.setAttribute('wigth', '200px')
    container[0].appendChild(img)
    const name = document.createElement('h3')
    name.innerText = "ABES"
    name.style.color = "grey"
    name.style.backgroundColor = "black"
    console.log(name)
    container[0].appendChild(name)
}
button.addEventListener('click', msg)
