import { gridXY, frequency, ctx, colorPallete, ActiveGridVersion } from "../stores/allSettings"
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

export function createVersionGrid() {
    canvasSetup(150, 100)
    drawGrid()
    document.getElementById('versionSVG1').innerHTML = ''
    document.getElementById('versionSVG1').insertAdjacentHTML('afterbegin', get(ctx).getSerializedSvg(true))
}

export function reload() {
    canvasSetup(700, 700)
    drawGrid()
    document.getElementById('svgExample').innerHTML = ''
    document.getElementById('svgExample').insertAdjacentHTML('afterbegin', get(ctx).getSerializedSvg(true))
}

export function canvasSetup(w, h) {
    ctx.set(new C2S(w, h))
    get(ctx).save()
    get(ctx).fillStyle = get(colorPallete)[0]
    get(ctx).fillRect(0, 0, w, h)
    get(ctx).restore()
}

export function drawGrid() {
    for (let i = 0; i < get(ctx).width / Math.max(...get(gridXY)) * get(gridXY)[0]; i += get(ctx).width / Math.max(...get(gridXY))) {
        for (let j = 0; j < get(ctx).height / Math.max(...get(gridXY)) * get(gridXY)[1]; j += get(ctx).height / Math.max(...get(gridXY))) {
            let randN = Math.random()
            switch (get(ActiveGridVersion)) {
                case 0:
                    drawGridV5(i, j, get(frequency), randN)
                    break;
                case 1:
                    drawGridV1(i, j, get(frequency), randN)
                    break;
                case 2:
                    drawGridV2(i, j, get(frequency), randN)
                    break;
                case 3:
                    drawGridV3(i, j, get(frequency), randN)
                    break;
                case 4:
                    drawGridV4(i, j, get(frequency), randN)
                    break;
                case 5:
                    drawGridV5(i, j, get(frequency), randN)
                    break;
            }
        }
    }
}

export function drawGridV0(i, j, percentage, randN) {
    drawSecondLayerRand(i, j, 0.25 * get(frequency), randN)
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
    /*let angle = Math.floor(Math.random() * 4)
    let newAngle = Math.floor(Math.random() * 4)
    while (((angle % 2 == 0 && newAngle % 2 == 0) || (angle % 2 == 1 && newAngle % 2 == 1)) && angle != newAngle) {
        newAngle = Math.floor(Math.random() * 4)
    }
    if (Math.random() < percentage) {
        shapes.pyramid(i, j, 90 * angle * (Math.PI / 180))
    }
    if (Math.random() < percentage) {
        shapes.pyramid(i, j, 90 * newAngle * (Math.PI / 180))
    }*/
    shapes.pyramid(i, j, 90 * Math.floor(Math.random() * 4) * (Math.PI / 180))

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
            //TODO: change 20
            shapes.halfArc(i, j, ctx, 20)
        }
    }
}

//grid
export function drawGridV5(i, j, percentage, randN) {
    shapes.rectangle(i, j, true)
    shapes.quarterArc(i, j, true)
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