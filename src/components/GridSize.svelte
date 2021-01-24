<script>
    import { gridXY } from "../stores/allSettings";
    import { reload } from "../generationUtils/genGrid";
</script>

<div class="gridSize">
    <div>
        <label for="rows">Rows</label>
        <input
            type="number"
            min="1"
            max="50"
            bind:value={$gridXY[0]}
            on:input={() => {
                reload();
            }}
        />
    </div>
    <div>
        <label for="column" min="1" max="50">Column</label>
        <input
            type="number"
            min="1"
            max="50"
            bind:value={$gridXY[1]}
            on:input={() => {
                reload();
            }}
        />
    </div>
</div>

<style>
</style>
