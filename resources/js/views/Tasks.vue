<template >
<section class="min-h-svh overflow-x-auto my-[150px]">

<div class=" bg-slate-400 w-[130px]  ms-[20px] rounded-lg p-[10px] transition-all duration-200 hover:bg-slate-600" >
   <p class="text-white font-mono  text-center ">Total Tasks: {{ count}}📝</p>
</div>

  <table class="table table-zebra">

    <thead>
      <tr class="text-2xl font-serif">
        <!-- <th>ID</th> -->
        <th>Task📝</th>
        <th>Competed✔️</th>
        <th>Actions🎬</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="task in tasks" class="text-lg font-mono">
        <!-- <th>{{ task.id }}</th> -->
        <td>{{ task.task }}</td>
        <td><form  method="post">
            <input type="checkbox" :checked="task.is_checked" @change="isChecked(task)"  >
        </form>
    </td>
<td>
        <button @click="deleteTask(task.id)"  class="btn btn-warning text-2xl w-[100px] h-[70px] md:w-[200px] md:h-[50px]  font-bold transition-all duration-200 hover:scale-105 hover:btn-error">Delete Task</button>

</td>
      </tr>

    </tbody>
  </table>
    </section>
</template>
<script>
import { count } from '../composables/GlobalVars';
import axios from 'axios';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';

export default {
    name:"Tasks",

 setup(){

    let isChecked =(task) => {
        axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}`,{is_checked:!task.is_checked})

    }




count.value=window.localStorage.getItem("count")
let deleteTask=(id)=>{
  Swal.fire({title:"Are You Sure You Want To Delete The Task ⚠️",icon:"warning",showCancelButton:true}).then((res)=>{
    if(res.isConfirmed){
  axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`)
  if(tasks.value.length < 0){
   count.value=0
   window.localStorage.setItem("count",count.value)
  }else{
  count.value--
  window.localStorage.setItem("count",count.value)
  }
  tasks.value=tasks.value.filter((task)=>{return task.id!==id})


    }
  })
}

let tasks =ref([])
 onMounted(async ()=>{
  try{
  let response= await axios.get("http://127.0.0.1:8000/api/tasks");
  tasks.value=response.data}catch{
  Swal.fire({text:"Error",icon:"warning"})
  }
 })

 return{tasks,deleteTask,count,isChecked}
 }
}
</script>
