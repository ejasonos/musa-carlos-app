<script setup>
import Impression from "../components/Impression.vue";
import Home from "../views/Home.vue";
import { useWebStore } from "../store/WebStore.js";
const webStore = useWebStore();


</script>
<template>
  <section class="flex bg-blue-600">
    <nav class="flex flex-col space-y-1 p-2">
      <div class="flex space-x-1 w-fit items-center">
        <div class="h-10 w-10 rounded-full">
          <img src="/logo.png" class="h-full w-full" />
        </div>
        <p class="text-sm text-white">Username</p>
      </div>
      <img src="../assets/bars.svg" class="hidden h-10 w-10 filter invert-90" />
      <p
        class="text-3xl text-white font-semibold rounded-full hover:text-zinc-400"
      >
        x
      </p>
      <ul class="text-white w-full">
        <li
          class="p-1 delay-[500] hover:bg-gradient-to-r hover:from-zinc-200 hover:to-blue-200 hover:text-blue-600"
        >
          Feed
        </li>
        <li
          class="p-1 delay-[500] hover:bg-gradient-to-r hover:from-zinc-200 hover:to-blue-200 hover:text-blue-600"
        >
          Settings
        </li>
        <li
          class="p-1 delay-[500] hover:bg-gradient-to-r hover:from-zinc-200 hover:to-blue-200 hover:text-blue-600"
        >
          Saved
        </li>
      </ul>
    </nav>
    <ul class="flex flex-col h-[700px] w-full space-y-1 bg-white overflow-scroll">
      <li
        v-for="news in webStore.news"
        :key="news.id"
        class="rounded-xl m-2 shadow-sm p-2 w-1/3 space-y-2"
      >
        <!-- These are default data from store, on MongoDB we'll create the complex stuff there after studying the Mongo Schema to Backend interaction-->
        <div class="flex justify-between">
          <div class="flex space-x-1">
            <div class="h-5 w-5 rounded-full">
              <img :src="news.image" class="h-full w-full" />
            </div>
            <div class="text-sm flex flex-col">
              <p class="font-semibold">{{ news.author }}</p>
              <p class="text-gray-400">{{ news.date }}</p>
            </div>
          </div>
          <div class="flex space-x-1">
            <p class="px-3 py-1 rounded-full"></p>
            <img src="/down-left-and-up-right-to-center.svg" class="h-5 w-5" />
          </div>
        </div>
        <div class="flex flex-col text-sm space-y-2">
          <p class="text-gray-600 font-semibold">{{ news.title }}</p>
          <p class="text-gray-400 font-thin">{{ news.info.split(".")[0] }}</p>
        </div>
        <Impression />
      </li>
    </ul>
    <footer
      class="fixed bottom-0 left-0 w-full flex justify-center items-center space-x-5"
    >
      <div class="h-10 w-10">
        <img src="/home-alt.svg" class="h-full w-full" />
      </div>
      <div class="h-10 w-10">
        <img src="/bookmark.svg" class="h-full w-full" />
      </div>
      <div class="h-10 w-10">
        <img src="/grin-beam.svg" class="h-full w-full" />
      </div>
    </footer>
    <Home class="hidden lg:flex w-1/3" />
  </section>
</template>
