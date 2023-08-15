<script lang="ts">
    import { goto } from "$app/navigation";
    import { todo, type GoalInt } from "../stores";

    export let goal: GoalInt;

    let button: HTMLButtonElement;

    function add() {}

    function remove() {
        if(goal.time!=0){
            //goto(timer)
        }
        $todo.splice($todo.indexOf(goal), 1);
        $todo = $todo;
    }
</script>

<button
    bind:this={button}
    on:click={remove}
    class="
    text-2xl
    text-neutral-300
    p-6
    rounded-lg

    outline
    outline-1
    outline-neutral-400
    shadow-lg
    relative"
>
    <div class="font-semibold">{goal.name}</div>
    {#if goal.time != 0}
        <div
            class="absolute right-0 top-0 p-2 outline outline-1 text-base outline-neutral-400 rounded-lg"
        >
            +{goal.time} Min
        </div>
    {/if}
</button>
