<template>
  <section class="flex flex-col items-center justify-center my-[350px]">

    <div class="w-full max-w-xl bg-gray-100  rounded-lg shadow-lg p-[80px]">


      <div class="text-center">
        <h1 class="text-4xl font-mono text-blue-600 mb-4">Welcome to Your To-Do List</h1>
        <p class="text-2xl text-blue-500 my-[40px] font-semibold">
          Organize your Tasks
        </p>
      </div>

      <div class="flex flex-col gap-[10px] justify-center items-center md:flex-row md:gap-[20px] ">

        <router-link :to="{name:'addTask'}" >
      <button class="btn btn-primary font-mono transition-all duration-300 hover:scale-110 text-lg p-[30px]  ">
          Add New Task✍️
        </button>
     </router-link>

    <router-link :to="{name:'viewTasks'}" ><button class="btn btn-secondary font-mono transition-all duration-300 hover:scale-110 text-lg p-[30px]">
          View Your Tasks📝
        </button></router-link>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>


