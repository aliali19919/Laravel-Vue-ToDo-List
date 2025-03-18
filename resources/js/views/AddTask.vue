<template>
    <section class="my-[350px] flex flex-col items-center justify-center">

      <div class="w-full max-w-lg bg-gray-100 rounded-lg - p-[50px]" >


        <div class="text-center">
          <h1 class="text-3xl font-bold font-mono text-blue-600  ">Welcome to Your To-Do List📒</h1>
          <p class="text-xl font-mono font-bold text-blue-500 my-[30px] ">
            Add a task to track your important activities.
          </p>
        </div>


        <form  @submit.prevent="submitHandler" method="post">

            <div class="flex flex-col">
            <label for="task" class="text-lg font-semibold text-blue-500 font-mono mb-2">Enter New Task</label>
            <input
              id="task"
              type="text"
              placeholder="Type your task here✍🏻"
              class="input input-bordered w-full px-4 py-[40px] border border-gray-300 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="task"
              />

            <input
            type="submit"
            class="btn btn-primary text-white text-xl font-mono my-[10px] font-semibold rounded-lg transition-all duration-200 hover:scale-110 "
            value="Add Task🚀"
          />
        </div>
          </form>
        </div>
    </section>

  </template>

  <script>

import router from '@/router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { count } from '../composables/GlobalVars';


  export default {
    name:"AddTask",
setup(){

let task=ref("")
let submitHandler= async()=>{
  try {
    let res = await axios.post("http://127.0.0.1:8000/api/tasks", { task: task.value }, { headers: { "Content-Type": "application/json", "Accept": "application/json" } });

    if (res.status === 200) {
      Swal.fire({ title: "Task Created 🚀", icon: "success" });
      count.value++
      task.value = "";
      router.push({ name: "viewTasks" });
    } else {
      Swal.fire({ title: "Failed To Create", icon: "Warning" });
      task.value = "";

    }
  } catch (error) {
    Swal.fire({title:"Creation Failed",icon:"error"})
  }
}
return{task,submitHandler,count}


}
  }
  </script>


