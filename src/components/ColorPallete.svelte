<script>
    import { colorPallete } from "../stores/allSettings";
    import { reload } from "../generationUtils/genGrid";
</script>

<div class="colorPallete">
    {#each $colorPallete as color}
        <input
            type="color"
            bind:value={color}
            on:blur={() => {
                reload();
            }}
        />
    {/each}
</div>

<style>
    .colorPallete {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
