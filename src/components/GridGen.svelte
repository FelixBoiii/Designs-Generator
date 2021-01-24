<script>
    import { onMount } from "svelte";
    import ColorPallete from "./ColorPallete.svelte";
    import Frequency from "./Frequency.svelte";
    import GridSize from "./GridSize.svelte";
    import {
        reload,
        downloadButtonSVG,
        downloadButtonPNG,
    } from "../generationUtils/genGrid";
    onMount(() => {
        reload();
    });
</script>

<div class="gridGen">
    <div class="grid-show">
        <div id="svgExample" />
    </div>
    <div class="settings">
        <ColorPallete />
        <GridSize />
        <Frequency />
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
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;
    }

    .grid-show {
        min-height: 100%;
        width: 60%;
        background-color: #f2f5fc;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #svgExample {
        border: 3px solid slategray;
    }

    .settings {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
