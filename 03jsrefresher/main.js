console.log("JavaScript Refresher");

// const buttons = document.getElementsByTagName('button');
// Array.from(buttons).forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const id = e.target.id;
//         window.alert('Button clicked with ID ' + id);
//     })
// })

// keywords to declare variables --> var, let & const
// let cname = "CodeWithLaksh";
// let cname = "Lakshyaraj";
// const age = 21;
// console.log(age);

// console.log(cname);
// console.log(typeof cname);

// let str = "CodeWithLaksh";

// for (const ch of str) console.log(ch);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str[0], str[1], str[2], str[3]);

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// console.log(str.substring(0,4));
// console.log(str.substring(10));
// console.log(str.substring(6));

// let str = "My  Channel Name is    CodeWithLaksh";
// console.log(str.split(" "));
// console.log(str.split(/\s+/g));

// let a = ["one", "two", "three", "four"]
// console.log(a);

// for (const num of a) {
//     console.log(num);
// }
// console.table(a);
// for (const index in a) {
//     console.log(index + ":" + a[index]);
    
// }

// console.log(a.join("."))

// let title = "JavaScript Refresher";
// console.log(title
//     .toLowerCase()
//     .split(/\s+/g)
//     .join("-")
// )

// let a = ["one", "two", "three", "four"]
// console.log("Old length " + a.length);
// a.push("five");
// let removed = a.shift();
// console.log("Removed element: " + removed);

// let newLen = a.unshift("five");
// console.log("New length " + newLen);

// console.log(a);

// let lastElem = a.pop();
// console.log("Last element was removed: " + lastElem);

// console.log(a);

// console.log(a.splice(0, 3));

// console.log(a);

// let filteredArr = a.filter((str) => {
//     return str.includes("o");
// })
// console.log(filteredArr);

// document.getElementById("list").innerHTML = a.map((str, index) => {
//     return `<li id="${index}">${str}</li>`
// }).join("")

// let a = ["one", "two", "three", "four"]
// let b = [...a, "five", "six", "seven", "eight"]

// console.log(...a);

// let obj = {cname: "CodeWithLaksh"};
// let obj2 = {subs: 177};

// console.table(obj);

// obj["created"] = 2026;
// console.table(obj);

// delete obj.cname
// console.table(obj);

// for (const [key, value] of Object.entries(obj)) {
//     console.log(key + " : " + value);
    
// }

// const {cname, created, age} = obj;
// console.log("Channel name: " + cname);
// console.log(age);

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // console.table(data);
    document.getElementById("list").innerHTML = data.map((post) => {
        return `<li id="${post.id}">
            <a href="https://jsonplaceholder.typicode.com/posts/${post.id}" target="_blank">${post.title}</a>
        </li>`
    }).join("");
}

fetchPosts();
