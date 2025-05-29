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
    input = parseInt(input);
    while (input === input) {
        if (input > 100 || input <= 0) {
            input = parseInt(prompt("Please choose between 1 and 100"));
        } else {
            break;
        }
    }
}

// function gridSize() {
//     let input = prompt("How large do you want your new grid? (1 - 100)");
//     input = Number(input);
//     while (true) {
//     if (input > 100 || input <= 0) {
//         input = Number(prompt("Please choose between 1 and 100"));
//     } 
//     }
    // const grid = document.querySelectorAll("grid");
    // grid.container.removeChild();
    // return input;
    // for(i = 0; i < input; i++) {
    //     for(j = 0; j < input; j++) {
    //         const grid = document.createAttribute("div");
    //         grid.classList.add("grid");
    //         container.appendChild(grid);
    //     }
    // }

//}
// gridSize() //check

//clear all previous divs
// function clearDiv() {
//     grid.remove();
// }

// const grid = document.querySelectorAll("div");
//     grid.parentNode.removeChild();

//new grid
function newGrid() {
    // input = gridSize();
    for(i = 0; i < input; i++) {
        for(j = 0; j < input; j++) {
            const grid = document.createAttribute("div");
            grid.classList.add("grid");
            container.appendChild(grid);
        }
    }
}
