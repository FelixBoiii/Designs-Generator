<script>
    import { reload } from "../generationUtils/genGrid";
    import { ActiveGridVersion } from "../stores/allSettings";
    let allVersions = ["rosett", "båge", "trianglar", "runda"];
    //let isActive = 1;

    function onBlockChange(i) {
        ActiveGridVersion.set(i);
        reload();
    }
</script>

<div class="versionObs">
    {#each allVersions as version, i}
        <div
            class="version"
            on:click={() => onBlockChange(i)}
            class:selected={$ActiveGridVersion === i}
        >
            <p>{version}</p>
            <div id="versionSVG{i}" class="versionSVG" />
        </div>
    {/each}
</div>

<style>
    .versionObs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        grid-gap: 0.25em;
        margin: 1em 0;
    }

    .version {
        width: 8rem;
        padding: 1rem;
        border-radius: 0.25em;
        cursor: pointer;
        position: relative;
        background-color: #eeeeff;
    }

    .versionSVG {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }

    .selected {
        border: 2px solid #303a3f;
        margin: -2px;
    }
</style>
