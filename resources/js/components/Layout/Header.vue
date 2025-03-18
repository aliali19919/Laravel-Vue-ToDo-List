<template >
    <div ref="header" class="navbar bg-slate-300 shadow-sm p-[30px] fixed top-0 transition-all duration-300 z-50 ">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li class="font-semibold text-lg font-mono"><router-link :to="{name:'addTask'}" >Add Task📒</router-link></li>
      <li class="font-semibold text-lg font-mono"><router-link :to="{name:'viewTasks'}" >Your Tasks🔎</router-link></li>
      </ul>
    </div>
    <router-link to="/" class="btn btn-ghost hover:btn-primary text-xl font-serif">Ali's ToDo-list ✏️</router-link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 font-semibold text-lg font-mono">
      <li><router-link :to="{name:'addTask'}" >Add Task📒</router-link></li>
      <li><router-link :to="{name:'viewTasks'}" >Your Tasks🔎</router-link></li>
      
    </ul>
  </div>

</div>
</template>
<script>
import { onMounted, ref } from 'vue';

export default {
  setup(){
    let header=ref("")
 onMounted(()=>{
 
    window.addEventListener("scroll",()=>{
      if(window.scrollY>200){
      header.value.style.padding="0"
      }else{
        header.value.style.padding="30px"
      }
    })
 })
return{header}
  }
    
}
</script>
