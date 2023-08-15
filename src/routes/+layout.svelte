<script lang="ts">
    import { onMount } from "svelte";
    import "../app.css";
    import { goals, todo } from "../stores";

    onMount(() => {
    });
</script>

<div class="max-w-xl m-auto">
    <slot />
</div>
