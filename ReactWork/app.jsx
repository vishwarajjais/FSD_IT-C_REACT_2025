const container = document.getElementById("container");
// console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement("h2", { style: { backgroundColor: 'brown', color: 'white', paddingLeft: "250px" } }, "Welcome to React JS");
// root.render(h2);
const name = React.createElement("h3", {}, "asdfghjkl");
const pic = React.createElement("img", { style: { borderRadius: "200px" }, src: "https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg", width: "200", height: "200" });
const header = React.createElement("div", { style: { display: "flex", gap: "200px", backgroundColor: "violet" } }, pic, name)



const li1 = React.createElement("li", {}, "Java");
const li2 = React.createElement("li", {}, "Python");
const li3 = React.createElement("li", {}, "React");
const ul = React.createElement("ul", { style: { backgroundColor: 'cyan' } }, li1, li2, li3);
// const wrapper = React.createElement("div", {}, h2, ul, header);



// JSX 

const h21 = <h2>welcome to react development</h2>
const li4 = <li>Angular</li>
const li5 = <li>Vue</li>
const ul4 = <ul>{li4}{li5}</ul>

const container1 = (
    <div>
        {h21},
        {ul4}
    </div>
)
const wrapper = React.createElement("div", {}, h2, ul, header, container1);

root.render(wrapper);