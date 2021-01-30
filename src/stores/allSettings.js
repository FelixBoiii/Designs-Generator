import { writable } from 'svelte/store';
import { readable } from 'svelte/store';
import 'canvas2svg';
//Writes---------------------------------
export const colorPallete = writable([
    "#ffe6e6",
    "#ffabe1",
    "#a685e2",
    "#6155a6",
])
export const gridXY = writable([10, 10])
export const frequency = writable(0.7)
export const ActiveGridVersion = writable(1)
export const ctx = writable(new C2S(800, 800))
//export const gridSize = writable(80)

//Reads-----------------------------------
export const AllColorPalletes = readable([
    ["#FFFFFF", "#5fa8d3", "#1b4965", "#62b6cb", "#ff6b6b"],
    ["#FFFCF9", "#26547C", "#EF476F", "#FFD166", "#06D6A0"],
    ["#e7e7de", "#008891", "#00587a", "#0f3057", "#3DB2BA"]
])