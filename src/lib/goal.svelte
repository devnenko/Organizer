<script lang="ts">
    import { goals, type GoalInt } from "../stores";

    export let goal: GoalInt;
    let selected = "Week";

    function remove() {
        $goals.splice($goals.indexOf(goal));
        $goals = $goals;
    }

    function change() {
        $goals = $goals;
    }
</script>

<div
    class="
    text-2xl
    text-neutral-300
    
    rounded-lg

    outline
    outline-1
    outline-neutral-400
    relative
    shadow-lg"
>
    <button
        class="aspect-square w-10 absolute right-0 outline
    outline-1
    outline-neutral-400 rounded-lg"
        on:click={remove}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><path
                fill="currentColor"
                d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
            /></svg
        >
    </button>
    <div class="flex flex-row"> 
    <input
        class="bg-transparent p-6 w-44 focus:outline-none focus:border-none"
        placeholder="Taskname"
        bind:value={goal.name}
        on:input={change}
    />
    
    <input
        class="bg-transparent m-6 p-1 w-20 outline-neutral-600 outline rounded focus:border-none"
        placeholder="Num"
        type="number"
        bind:value={goal.time}
        on:input={change}
    />
</div>

    <div class="flex flex-row p-6 justify-start items-center">
        <input
            class="bg-transparent my-6 mr-6 p-1 w-20 outline-neutral-600 outline rounded focus:border-none"
            placeholder="Num"
            type="number"
            bind:value={goal.amount}
            on:input={change}
        />
        per
        <select
            class="bg-transparent m-6 p-1 outline-neutral-600 border-none outline outline-2 rounded"
            bind:value={goal.per}
            on:change={change}
        >
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
        </select>
    </div>
</div>
