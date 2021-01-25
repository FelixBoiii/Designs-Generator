import { gridXY, frequency, ctx, colorPallete } from "../stores/allSettings"
import { get } from 'svelte/store'
import * as shapes from './shapes'
import 'canvas2svg'

export function downloadButtonSVG() {
    let dl = document.createElement("a")
    document.body.appendChild(dl) // This line makes it work in Firefox
    dl.setAttribute("href", "data:image/svg+xml," + encodeURIComponent(get(ctx).getSerializedSvg(true)))
    dl.setAttribute("download", "patternSVG.svg")
    dl.click()
}

export function downloadButtonPNG() {
    //TODO:create download function
}

export function reload() {
    canvasSetup()
    drawGrid()
    document.getElementById('svgExample').innerHTML = ''
    document.getElementById('svgExample').insertAdjacentHTML('afterbegin', get(ctx).getSerializedSvg(true))
}

export function canvasSetup() {
    ctx.set(new C2S(800, 800))
    get(ctx).save()
    get(ctx).fillStyle = get(colorPallete)[0]
    get(ctx).fillRect(0, 0, 800, 800)
    get(ctx).restore()
}

export function drawGrid() {
    for (let i = 0; i < 800 / Math.max(...get(gridXY)) * get(gridXY)[0]; i += 800 / Math.max(...get(gridXY))) {
        for (let j = 0; j < 800 / Math.max(...get(gridXY)) * get(gridXY)[1]; j += 800 / Math.max(...get(gridXY))) {
            let randN = Math.random()
            drawGridV3(i, j, get(frequency), randN)
        }
    }
}

export function drawGridV1(i, j, percentage, randN) {
    if (Math.random() < percentage) {
        if (randN <= 0.70) {
            shapes.quarterArc(i, j)
        } else {
            shapes.fullCircle(i, j)
        }
    }
}

export function drawGridV2(i, j, percentage, randN) {
    let angle = Math.floor(Math.random() * 4)
    let newAngle = Math.floor(Math.random() * 4)
    while (((angle % 2 == 0 && newAngle % 2 == 0) || (angle % 2 == 1 && newAngle % 2 == 1)) && angle != newAngle) {
        newAngle = Math.floor(Math.random() * 4)
    }
    if (Math.random() < percentage) {
        shapes.pyramid(i, j, 90 * angle * (Math.PI / 180))
    }
    if (Math.random() < percentage) {
        shapes.pyramid(i, j, 90 * newAngle * (Math.PI / 180))
    }

}

// All rounded with second layer
export function drawGridV3(i, j, percentage, randN) {
    if (Math.random() < percentage) {
        if (randN <= 0.25) {
            shapes.halfArc(i, j)
        } else if (randN <= 0.50) {
            shapes.halfArcOff(i, j)
        } else if (randN <= 0.75) {
            shapes.threeQuarterArc(i, j)
        } else {
            shapes.fullCircle(i, j)
        }
    }
    drawSecondLayerRand(i, j, 0.25 * get(frequency), randN)
}
//WIP drip type beat
export function drawGridV4(i, j, percentage, randN) {
    if (Math.random() < percentage) {
        if (randN <= 0.35) {
            //TODO: cahnge 20
            shapes.halfArc(i, j, ctx, 20)
        }
    }
}

//grid
export function drawGridV5(i, j, percentage, randN) {
    shapes.fullCircleSmall(i, j)
}

export function drawSecondLayerRand(i, j, percentage, randN) {
    if (Math.random() < percentage) {
        if (Math.random() >= 0.34) {
            shapes.fullCircleSmall(i, j)
        } else if (Math.random() >= 0.67) {
            shapes.halfArcOffSmall(i, j)
        } else {
            shapes.threeQuarterArcSmall(i, j)
        }
    }
}

export function getColorFromPallete(includeAll) {
    const arr = get(colorPallete)
    if (!includeAll) {
        return arr[Math.floor(Math.random() * (arr.length - 1) + 1)]
    } else {
        return arr[Math.floor(Math.random() * arr.length)]
    }
}