let grid = []
let bombGrid = new Array(256)
bombGrid.fill(false)

async function pushDownSmileyButton() {
    const smiley = document.getElementById("smiley")
    smiley.src = "/minesweeper/face_smile_pressed.png"
    setTimeout(() => {
        smiley.src = "/minesweeper/face_smile.png"
    }, 500)
}

function setTimer(seconds, shouldClearAllDigits) {
    const digitOne = document.getElementById("second-0")
    const digitTwo = document.getElementById("second-1")
    const digitThree = document.getElementById("second-2")
    if (shouldClearAllDigits) {
        const zero = "/minesweeper/0_seconds.png"
        digitOne.src = zero
        digitTwo.src = zero
    }
    const secondsString = seconds.toString()
    const length = secondsString.length
    let [unit, tenth, hundredth] = [0, 0, 0]
    switch (length) {
        case 1:
            digitThree.src = `/minesweeper/${seconds}_seconds.png`
            break
        case 2:
            tenth = secondsString[0]
            unit = secondsString[1]
            digitTwo.src = `/minesweeper/${tenth}_seconds.png`
            digitThree.src = `/minesweeper/${unit}_seconds.png`
            break
        case 3:
            hundredth = secondsString[0]
            tenth = secondsString[1]
            unit = secondsString[2]
            digitOne.src = `/minesweeper/${hundredth}_seconds.png`
            digitTwo.src = `/minesweeper/${tenth}_seconds.png`
            digitThree.src = `/minesweeper/${unit}_seconds.png`
            break
    }
}

function fillGrid() {
    const parent = document.getElementById("game-grid")
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("img")
        cell.src = "/minesweeper/blank.png"
        cell.id = i.toString()
        grid.push(cell)
        parent.appendChild(cell)
    }
}

function explode() {
    console.log("testaaaaaaaa")
}

function assignBombsToGrid() {
    for (let i = 0; i < 40; i++) {
        const childIndex = Math.floor(Math.random() * 256).toString()
        const currentChild = document.getElementById(childIndex)
        currentChild.addEventListener("click", explode)
        bombGrid[childIndex] = true
    }
}

function init() {
    document.getElementById("smiley").addEventListener("mouseup", pushDownSmileyButton)
    fillGrid()
    assignBombsToGrid()
    const timeStarted = new Date()
    let gameStarted = false
    // initialise timer
    const timer = setInterval(() => {
        const currentTime = new Date()
        let secondsElapsed = Math.floor((currentTime.getTime() - timeStarted.getTime()) / 1000)
        let shouldClearAllDigits = false
        if (secondsElapsed >= 1000) {
            secondsElapsed -= 1000
            shouldClearAllDigits = true
        }
        setTimer(secondsElapsed, shouldClearAllDigits)
    }, 1000)
}

document.addEventListener("gamestarted", init)