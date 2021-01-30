<script>
    import { onMount } from "svelte";
    import ColorPallete from "./ColorPallete.svelte";
    import Frequency from "./Frequency.svelte";
    import GridSize from "./GridSize.svelte";
    import VersionOb from "./VersionOb.svelte";
    import { colorPallete } from "../stores/allSettings";
    import {
        reload,
        createVersionGrid,
        downloadButtonSVG,
        downloadButtonPNG,
    } from "../generationUtils/genGrid";
    onMount(() => {
        //createVersionGrid();
        reload();
    });
</script>

<div class="gridGen" style="--bgColor: {$colorPallete[0]}">
    <div class="grid-show">
        <div id="svgExample" />
    </div>
    <div class="settings">
        <ColorPallete />
        <GridSize />
        <Frequency />
        <VersionOb />
        <button
            on:click={() => {
                reload();
            }}>Generate</button
        >
        <button
            on:click={() => {
                downloadButtonSVG();
            }}>Download SVG</button
        >
        <button
            on:click={() => {
                downloadButtonPNG();
            }}>Download PNG</button
        >
    </div>
</div>

<style>
    .gridGen {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;
    }

    .grid-show {
        background-color: var(--bgColor);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1em;
    }

    #svgExample {
        margin: 2rem 2rem;
    }

    .settings {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
