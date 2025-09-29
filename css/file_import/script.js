const button = document.getElementById("btn");
const disp = document.getElementById("disp");
let table = `<table border="1" cellpadding="10" cellspacing="0">
                       <tr>
                         <th>ID</th>
                         <th>FirstName</th>
                         <th>LastName</th>
                       </tr>`;

async function fetchData() {
    disp.innerHTML = "<h2>Data is Loading...</h2>";
    const response = await fetch('https://dummyjson.com/users');
    const jsonData = await response.json();
    jsonData.users.forEach(element => {
        table += ` <tr>
            <td>${element.id}</td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
        </tr>`
    });

    table += '</table>'
    disp.innerHTML = table
}
button.addEventListener('click', fetchData);