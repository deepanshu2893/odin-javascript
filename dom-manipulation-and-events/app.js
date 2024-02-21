// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';
// container.appendChild(content);

// const p = document.createElement("p");
// p.style.color = "red";
// p.textContent = "Hey I'm red!";
// container.appendChild(p);

// const h3 = document.createElement("h3");
// h3.style.color = "blue";
// h3.textContent = "I'm a blue h3!"
// container.appendChild(h3);

// const border = document.createElement("div");
// border.classList.add("container2");
// border.style.border = "solid black";
// border.style.backgroundColor = "pink";
// container.appendChild(border);

// const container2 = document.querySelector(".container2");
// const h1 = document.createElement("h1");
// h1.textContent = "I'm in a div";
// container2.appendChild(h1);

// const p2 = document.createElement("p");
// p2.textContent = "ME TOO!";
// container2.appendChild(p2);



// const btn = document.querySelector("button");

// btn.addEventListener('click', function (e) {
//     console.log(e);
// });

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
// });

// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
// });



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
