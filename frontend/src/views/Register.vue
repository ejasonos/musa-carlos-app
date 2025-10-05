<script setup lang="ts">
import Home from "../views/Home.vue";

let name: String;
let faculty: String;
let department: String;
let email: String;
let dob: String;

const createUser = () => {
  fetch("http://localhost:3000/createuser");
};
</script>
<template>
  <section class="flex flex-col lg:flex-row">
    <Home class="hidden lg:flex w-1/3" />
    <main class="flex flex-col w-full xl:w-2/3 justify-center p-1 xl:pl-10">
      <p class="text-lg text-center xl:text-left text-black xl:pl-20 font-bold">
        Create your account
      </p>
      <form class="flex flex-col p-4 space-y-3" v-on:submit="createUser()">
        <label for="name" class="text-sm text-black font-semibold">Name</label>
        <input
          type="text"
          name="name"
          v-model="name"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
        />
        <label for="faculty" class="text-sm text-black font-semibold"
          >Faculty</label
        >
        <input
          type="text"
          name="faculty"
          v-model="faculty"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
        />
        <label for="department" class="text-sm text-black font-semibold"
          >Department</label
        >
        <input
          type="text"
          name="department"
          v-model="department"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
        />
        <label for="email" class="text-sm text-black font-semibold"
          >Email</label
        >
        <input
          type="email"
          name="email"
          v-model="email"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
        />
        <label for="dob" class="text-sm text-black font-semibold">DOB</label>
        <input
          type="date"
          v-model="dob"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
        />
        <div class="flex space-x-1 items-center">
          <input type="checkbox" />
          <p class="text-sm text-black font-light">
            By signing up you agree to our
            <RouterLink class="font-semibold" to="/tandc"
              >Terms and Conditions</RouterLink
            >
          </p>
        </div>
        <div class="flex space-x-3">
          <button type="submit"
            class="px-4 py-1 rounded-full bg-blue-600 text-white delay-50 transition-all hover:bg-gradient-to-r hover:from-zinc-200 hover:to-blue-100 hover:text-blue-800"
          >
            Register
          </button>
          <button
            class="px-4 py-1 rounded-full text-blue-600 bg-white border-2 border-blue-600 delay-50 transition-all hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-500 hover:text-white"
          >
            <RouterLink to="/signin">Sign in</RouterLink>
          </button>
        </div>
      </form>
    </main>
  </section>
</template>
