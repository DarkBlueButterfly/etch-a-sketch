// console.log("hello world");
const container = document.querySelector("#container");

const canvasSize = 700;
container.style.width = `${canvasSize}px`;
container.style.height = `${canvasSize}px`;

function setUp(initialSize) {  
    //remove previous grid:
    const square = document.querySelectorAll(".grid");
    square.forEach((div) => div.remove());

    for(i = 0; i < initialSize; i++) {
        for (let j = 0; j < initialSize; j++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.width = `${canvasSize/initialSize}px`;
            grid.style.height = `${canvasSize/initialSize}px`;
            container.appendChild(grid);
        }
    }
}

const randomHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0,6);
};

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = randomHexColor();
});

const btn = document.querySelector("#btn");
btn.addEventListener("click", gridSize);

function gridSize() {
    let input = prompt("How large do you want your new grid? (1 - 100)");
    input = parseInt(input);
    while (input === input) {
        if (input > 100 || input <= 0) {
            input = parseInt(prompt("Please choose between 1 and 100"));
        } else {
            break;
        }
    }
    // return input;
    setUp(input);
}

//initiate code:
setUp(16); // Start with 16x16 grid