<script setup lang="ts">
import Impression from '../components/Impression.vue'
import { useWebStore } from '../store/WebStore.ts'
const webStore = useWebStore()
</script>
<template>
    <section class="flex flex-col bg-white">
        <nav class="flex justify-between p-2 bg-blue-700">
            <div class="flex space-x-1 w-fit">
                <div class="h-10 w-10 rounded-full">
                    <img src="/space-awesome.svg" class="h-full w-full" />
                </div>
                <p class="text-sm text-white">Musa-Carlos Space App</p>
            </div>
            <img src="../assets/bars.svg" class="h-10 w-10" />
        </nav>
        <ul class="flex flex-col space-y-1">
            <li v-for="news in webStore.news" :key="news.id">
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
                    <p class="text-white font-semibold">{{ news.title }}</p>
                    <p class="text-gray-400 font-thin">{{ news.information }}</p>
                </div>
                <Impression />
            </li>
        </ul>
        <footer class="fixed bottom-0 left-0 w-full flex justify-center items-center space-x-5">
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
    </section>
</template>