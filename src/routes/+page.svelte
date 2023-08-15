<script lang="ts">
    import { goto } from "$app/navigation";
    import Task from "$lib/task.svelte";
    import { onMount } from "svelte";
    import { TimeEnum, getDay, goals, todo } from "../stores";
    import { json } from "@sveltejs/kit";
    import { base } from "$app/paths";

    onMount(() => {
        //figure out local time
        //if next day add new tasks since that last updated day and keep track of day
 
        //localStorage.removeItem("lastDay")
        let lastDay:number=JSON.parse(localStorage.getItem("lastDay")||JSON.stringify(getDay()));
        localStorage.setItem("lastDay",JSON.stringify(getDay()));

        nextDay()
    });

    function nextDay() {
        //reset all todos
        //$todo=[];
        //add the tasks to happen on that day to the taskslist
        $goals.forEach((goal) => {
            let rate = 0;
            switch (goal.per) {
                case TimeEnum.Day:
                    rate = 1
                    break;
                case TimeEnum.Week:
                    rate = 7;
                    break;
                case TimeEnum.Month:
                    rate = 28;
                    break;
            }
            
            let daysBeforeNext = rate/goal.amount;
            console.log(goal.name+" Last:"+goal.lastDown+" Next:"+daysBeforeNext)

            let didIt=false;
            while (goal.lastDown + daysBeforeNext <= getDay()) {
                goal.lastDown+=daysBeforeNext;

                didIt=true;
                //task should be shown
                $todo.push(goal);
                $todo = $todo;
            }

            if(didIt){
                //goal.lastDown=getDay()
            }
            $goals=$goals
        });
    }
</script>

<div class="flex flex-col m-7 gap-4">
    <div class=" flex flex-row justify-between py-2">
        <div class="text-5xl font-bold">Tasks</div>
        <a class="h-12 aspect-square" href="{base}/edit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                ><path
                    fill="white"
                    d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z"
                /></svg
            >
        </a>
    </div>
    {#each $todo as td}
        <Task goal={td} />
    {/each}
</div>
