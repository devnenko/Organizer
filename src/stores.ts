import { browser } from "$app/environment";
import { onMount } from "svelte";
import { writable } from "svelte/store";

export enum TimeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month"
}
export interface GoalInt {
    name: string,
    lastDown: number,
    amount: number,
    per: TimeEnum,
    time:number
}

const initialGoals = browser ? JSON.parse(window.localStorage.getItem('goal')||"[]"): [];
export let goals = writable<GoalInt[]>(initialGoals)

goals.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('goal', JSON.stringify(value));
    }
});

const initialTodo = browser ? JSON.parse(window.localStorage.getItem('do')||"[]"): [];
export let todo = writable<GoalInt[]>(initialTodo)

todo.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('do', JSON.stringify(value));
        console.log(value)
    }
});

export function getDay() {
    let today = new Date().setHours(0, 0, 0, 0);
    let diff = today - new Date("2023-08-14").setHours(0, 0, 0, 0);
    let days = (diff / (1000 * 60 * 60 * 24))+23
    console.log("Day:"+days)
    return days;
}
