<script lang="ts">
    import { goto } from "$app/navigation";
    import Goal from "$lib/goal.svelte";
    import { onMount } from "svelte";
    import { TimeEnum, getDay, goals } from "../../stores";
    import { base } from '$app/paths';

    function newGoal() {
        $goals = [
            ...$goals,
            {
                name: "",
                lastDown: getDay(),
                amount: 2,
                per: TimeEnum.Day,
                time:0
            },
        ];
    }
</script>

<div class=" flex flex-col m-7 gap-4">
    <div class=" flex flex-row justify-between py-2">
        <button class="h-full w-12 aspect-square" on:click={() => goto(base)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                ><path
                    fill="currentColor"
                    d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z"
                /></svg
            >
        </button>
        <div class="text-5xl font-bold text-transparent">Test</div>
    </div>
    {#each $goals as gl}
        <Goal goal={gl} />
    {/each}

    <button
        on:click={newGoal}
        class="
        text-center
            p-6
            text-2xl
            text-neutral-300
            rounded-lg
            outline
            outline-1
            outline-neutral-400
            "
    >
        New Goal
    </button>
</div>
