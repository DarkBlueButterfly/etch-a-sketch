// console.log("hello world");
const container = document.querySelector("#container");

for(i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
}

// const grid = document.querySelectorAll(".grid");
container.addEventListener("mouseover", (e) => {
    // grid.style.backgroundColor = "red";
    e.target.style.backgroundColor = "red";
});
