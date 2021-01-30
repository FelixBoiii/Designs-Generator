<script>
    import { frequency } from "../stores/allSettings";
    import { reload } from "../generationUtils/genGrid";
</script>

<div class="frequency">
    <input
        type="range"
        min="0.1"
        max="1"
        step="0.1"
        bind:value={$frequency}
        on:change={() => {
            reload();
        }}
    />
</div>

<style>
</style>
