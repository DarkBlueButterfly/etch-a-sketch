// console.log("hello world");
const container = document.querySelector("#container");

for(i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
}

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
});

const btn = document.querySelector("#btn");
btn.addEventListener("click", gridSize);

function gridSize() {
    let input = prompt("How large do you want your new grid? (1 - 100)");
    input = Number(input);
    // console.log(typeof input);
    while (input > 100 || input <= 0) {
        input = Number(prompt("Please choose between 1 and 100"));
    }
}
// gridSize() //check
