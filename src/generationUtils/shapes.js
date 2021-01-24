import { get } from 'svelte/store';
import { colorPallete, gridXY, ctx } from "../stores/allSettings";
import { getColorFromPallete } from "./genGrid";

export function StartObjectDraw(i, j) {
    get(ctx).save()
    get(ctx).translate(i + 40, j + 40)
    get(ctx).rotate(90 * Math.floor(Math.random() * 4) * (Math.PI / 180))
    get(ctx).beginPath()
    get(ctx).fill()
}

export function endObjectDraw() {
    get(ctx).fillStyle = getColorFromPallete(false)
    get(ctx).fill();
    get(ctx).restore()
}

export function StartObjectDrawSmall(i, j) {
    get(ctx).save()
    get(ctx).translate(i + 40, j + 40)
    get(ctx).rotate(90 * Math.floor(Math.random() * 4) * (Math.PI / 180))
    get(ctx).scale(0.4, 0.4)
    get(ctx).beginPath()
    get(ctx).fill()
}

export function quarterArcSmooth(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(-40, -40, 80, 0, 0.5 * Math.PI)
    get(ctx).lineTo(-80 / 2, -40 / 5)
    get(ctx).quadraticCurveTo(-40, -40, 0, -40)
    this.endObjectDraw()
}

export function Leaf(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(-40, -40, 80, 0, 0.5 * Math.PI)
    get(ctx).arc(40, 40, 80, Math.PI, 1.5 * Math.PI)
    this.endObjectDraw()
}

export function pyramid(i, j, randAngle) {
    get(ctx).save()
    get(ctx).translate(i + 40, j + 40)
    get(ctx).rotate(randAngle);
    get(ctx).beginPath()
    get(ctx).fill()
    get(ctx).moveTo(-40, -40)
    get(ctx).lineTo(40, -40)
    get(ctx).lineTo(-40, 40)
    this.endObjectDraw()
}

export function rectangle(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).moveTo(-40, -40)
    get(ctx).lineTo(40, -40)
    get(ctx).lineTo(40, 40)
    get(ctx).lineTo(-40, 40)
    this.endObjectDraw()
}

export function quarterArc(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(-40, -40, 80, 0, 0.5 * Math.PI)
    get(ctx).lineTo(-40, -40)
    this.endObjectDraw()
}

export function halfArc(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(0, 0, 40, 0, Math.PI)
    get(ctx).lineTo(-40, -40)
    get(ctx).lineTo(40, -40)
    this.endObjectDraw()
}

export function halfArcOff(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(0, 0, 40, 0, 0.5 * Math.PI)
    get(ctx).lineTo(-40, 40)
    get(ctx).arc(0, 0, 40, Math.PI, 1.5 * Math.PI)
    get(ctx).lineTo(40, -40)

    this.endObjectDraw()
}

export function threeQuarterArc(i, j) {
    this.StartObjectDraw(i, j)
    get(ctx).arc(0, 0, 40, 0, 1.5 * Math.PI)
    get(ctx).lineTo(40, -40)
    this.endObjectDraw()
}

export function fullCircle(i, j) {
    get(ctx).save()
    get(ctx).beginPath()
    get(ctx).fill()
    get(ctx).arc(i + 40, j + 40, 40, 0, 2 * Math.PI)
    get(ctx).fillStyle = getColorFromPallete(false)
    get(ctx).fill();
    get(ctx).restore()
}

export function halfArcOffSmall(i, j) {
    this.StartObjectDrawSmall(i, j)
    get(ctx).arc(0, 0, 40, 0, 0.5 * Math.PI)
    get(ctx).lineTo(-40, 40)
    get(ctx).arc(0, 0, 40, Math.PI, 1.5 * Math.PI)
    get(ctx).lineTo(40, -40)
    this.endObjectDraw()
}

export function threeQuarterArcSmall(i, j) {
    this.StartObjectDrawSmall(i, j)
    get(ctx).arc(0, 0, 40, 0, 1.5 * Math.PI)
    get(ctx).lineTo(40, -40)
    this.endObjectDraw()
}

export function fullCircleSmall(i, j) {
    get(ctx).save()
    get(ctx).beginPath()
    get(ctx).fill()
    get(ctx).arc(i + 40, j + 40, 40 * 0.4, 0, 2 * Math.PI)
    get(ctx).fillStyle = getColorFromPallete(false)
    get(ctx).fill();
    get(ctx).restore()
}
