// // const div=document.getElementsByTagName('div'); 
// // div[0].innerText="hell0 world"
// // div[0].style.backgroundColor="red"
// // div[0].style.Color="green"
// // console.log(div)

// const container = document.getElementsByClassName("container")
// // console.dir(container)
// // container[0].innerHTML='<h2 style=color:red>HElloo world</h2>'


// const h2 = document.createElement('h2')
// h2.innerText = 'ABES'
// h2.style.backgroundColor = "#212121"
// h2.style.color = "#fff"
// container[0].appendChild(h2)

// const img = document.createElement('img')


// const button = document.getElementById('btn')

// function msg() {
//     // return "hello , i am working on DOM"
//     // alert('hi i am using dom')
//     img.src = "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/"
//     img.setAttribute('height', '200px')
//     img.setAttribute('wigth', '200px')
//     container[0].appendChild(img)
//     const name = document.createElement('h3')
//     name.innerText = "ABES"
//     name.style.color = "grey"
//     name.style.backgroundColor = "black"
//     console.log(name)
//     container[0].appendChild(name)
// }
// button.addEventListener('click', msg)


// blocking and non-blocking code

// const button = document.getElementById("btn");

// function longData() {
//     console.log('start');
//     for (let i = 0; i < 100000000; i++) {  // reduced for demo
//         console.log(i);
//     }
//     console.log('end');
// }

// button.addEventListener('click', longData);

// callback functions

// function greetmsg(myname) {
//     return "hii " + myname + " welcome to my page"
// }
// function msgHandler(msg, clbk) {
//     // console.log(msg);
//     const data = clbk(msg);
//     return data
// }

// const student = ["rahul","aman", "vansh"]
// student.forEach((name)=> {
//     console.log(msgHandler(name, greetmsg))
// })

// const complete = msgHandler("hiii", greetmsg)
// console.log(complete);

// promise

// const myPromise = new Promise((resolve, reject) => {
//     const password = '123456asdf'
//     if(password.length > 8) {
//         resolve('password length is ok')
//     } else {
//         reject('password is invalid')
//     }
// })
// myPromise.then((result) => {
//     console.log(result);

// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log('all the resources are closed successfully');

// })

// async function handleData() {
//     const result = await myPromise
//     console.log(myPromise);

// }
// handleData()

const button = document.getElementById("btn");
const disp = document.getElementById("disp");
let table = `<table border="1" cellpadding="10" cellspacing="0">
                       <tr>
                         <th>Image</th>
                         <th>ID</th>
                         <th>Name</th>
                         <th>Ingredients</th>
                       </tr>`;

async function fetchData() {
    disp.innerHTML = "<h2>Data is Loading...</h2>";
    const response = await fetch('https://dummyjson.com/recipes');
    const jsonData = await response.json();
    // const recipe = jsonData.recipes[0];
    console.log(jsonData.recipes);
    jsonData.recipes.forEach(element => {
        table += ` <tr>
            <td><img src = ${element.image} height = "200" width = "200" alt='image'></td>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.ingredients}</td>
        </tr>`
    });

    // disp.innerHTML = "<h2>ID: " + recipe.id + "</h2>" +
    // "<h2>Name: " + recipe.name + "</h2>" +
    // "<img src='" + recipe.image + "' alt='" + recipe.name + "' width='200'>";
    table += '</table>'
    disp.innerHTML = table
}
button.addEventListener('click', fetchData);