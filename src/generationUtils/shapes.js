import { get } from 'svelte/store';
import { gridXY, ctx } from "../stores/allSettings";
import { getColorFromPallete } from "./genGrid";

let hObjectSize = get(ctx).width / Math.max(...get(gridXY)) * 0.5

function updateHObjectSize() {
    hObjectSize = get(ctx).width / Math.max(...get(gridXY)) * 0.5
}

export function StartObjectDraw(i, j) {
    updateHObjectSize()
    get(ctx).save()
    get(ctx).translate(i + hObjectSize, j + hObjectSize)
    get(ctx).rotate(90 * Math.floor(Math.random() * 4) * (Math.PI / 180))
    get(ctx).beginPath()
    get(ctx).fill()
}

export function endObjectDraw(bgColor = false) {
    get(ctx).fillStyle = getColorFromPallete(bgColor)
    get(ctx).fill();
    get(ctx).restore()
}

export function StartObjectDrawSmall(i, j) {
    updateHObjectSize()
    get(ctx).save()
    get(ctx).translate(i + hObjectSize, j + hObjectSize)
    get(ctx).rotate(90 * Math.floor(Math.random() * 4) * (Math.PI / 180))
    get(ctx).scale(0.4, 0.4)
    get(ctx).beginPath()
    get(ctx).fill()
}

export function quarterArcSmooth(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(-hObjectSize, -hObjectSize, hObjectSize * 2, 0, 0.5 * Math.PI)
    get(ctx).lineTo(-hObjectSize, -hObjectSize / 5)
    get(ctx).quadraticCurveTo(-hObjectSize, -hObjectSize, 0, -hObjectSize)
    this.endObjectDraw()
}

export function Leaf(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(-hObjectSize, -hObjectSize, hObjectSize * 2, 0, 0.5 * Math.PI)
    get(ctx).arc(hObjectSize, hObjectSize, hObjectSize * 2, Math.PI, 1.5 * Math.PI)
    this.endObjectDraw()
}

export function pyramid(i, j, randAngle) {
    updateHObjectSize()
    get(ctx).save()
    get(ctx).translate(i + hObjectSize, j + hObjectSize)
    get(ctx).rotate(randAngle);
    get(ctx).beginPath()
    get(ctx).fill()
    get(ctx).moveTo(-hObjectSize, -hObjectSize)
    get(ctx).lineTo(hObjectSize, -hObjectSize)
    get(ctx).lineTo(-hObjectSize, hObjectSize)
    this.endObjectDraw()
}

export function rectangle(i, j, bgColor) {
    this.StartObjectDraw(i, j)
    get(ctx).moveTo(-hObjectSize, -hObjectSize)
    get(ctx).lineTo(hObjectSize, -hObjectSize)
    get(ctx).lineTo(hObjectSize, hObjectSize)
    get(ctx).lineTo(-hObjectSize, hObjectSize)
    this.endObjectDraw(bgColor)
}

export function quarterArc(i, j, bgColor) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(-hObjectSize, -hObjectSize, hObjectSize * 2, 0, 0.5 * Math.PI)
    get(ctx).lineTo(-hObjectSize, -hObjectSize)
    this.endObjectDraw(bgColor)
}

export function halfArc(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(0, 0, hObjectSize, 0, Math.PI)
    get(ctx).lineTo(-hObjectSize, -hObjectSize)
    get(ctx).lineTo(hObjectSize, -hObjectSize)
    this.endObjectDraw()
}

export function halfArcOff(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(0, 0, hObjectSize, 0, 0.5 * Math.PI)
    get(ctx).lineTo(-hObjectSize, hObjectSize)
    get(ctx).arc(0, 0, hObjectSize, Math.PI, 1.5 * Math.PI)
    get(ctx).lineTo(hObjectSize, -hObjectSize)

    this.endObjectDraw()
}

export function threeQuarterArc(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(0, 0, hObjectSize, 0, 1.5 * Math.PI)
    get(ctx).lineTo(hObjectSize, -hObjectSize)
    this.endObjectDraw()
}

export function fullCircle(i, j) {
    updateHObjectSize()
    get(ctx).save()
    get(ctx).beginPath()
    get(ctx).fill()
    get(ctx).arc(i + hObjectSize, j + hObjectSize, hObjectSize, 0, 2 * Math.PI)
    get(ctx).fillStyle = getColorFromPallete(false)
    get(ctx).fill();
    get(ctx).restore()
}

export function halfArcOffSmall(i, j) {
    this.StartObjectDrawSmall(i, j)
    get(ctx).arc(0, 0, hObjectSize, 0, 0.5 * Math.PI)
    get(ctx).lineTo(-hObjectSize, hObjectSize)
    get(ctx).arc(0, 0, hObjectSize, Math.PI, 1.5 * Math.PI)
    get(ctx).lineTo(hObjectSize, -hObjectSize)
    this.endObjectDraw()
}

export function threeQuarterArcSmall(i, j) {
    this.StartObjectDrawSmall(i, j)
    get(ctx).arc(0, 0, hObjectSize, 0, 1.5 * Math.PI)
    get(ctx).lineTo(hObjectSize, -hObjectSize)
    this.endObjectDraw()
}

export function fullCircleSmall(i, j) {
    updateHObjectSize()
    get(ctx).save()
    get(ctx).beginPath()
    get(ctx).fill()
    get(ctx).arc(i + hObjectSize, j + hObjectSize, hObjectSize * 0.4, 0, 2 * Math.PI)
    get(ctx).fillStyle = getColorFromPallete(false)
    get(ctx).fill();
    get(ctx).restore()
}
