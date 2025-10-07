<script setup>
import { useWebStore } from '../store/WebStore.js'
const webStore = useWebStore()
</script>
<template>
    <section class="relative h-[100vh] flex flex-col justify-center bg-gradient-to-b from-blue-700 to-blue-500 p-10 xl:p-20">
        <p class="text-xl text-center text-white font-semibold mb-20">Welcome to</p>
        <div class="flex flex-col justify-center items-center space-y-2">
            <div class="h-30 w-30 p-3 rounded-full bg-white overflow-hidden">
                <img v-bind:src="webStore.logo" class="h-full w-full object-contain" />
            </div>
            <p class="text-xl text-center text-white font-semibold">Musa-Carlos Space App</p>
            <p class="text-xs font-normal text-white text-center mt-15">We are the fastest growing Astronomic Technological Company in the world. Having attracted interests from SpaceX and other Multinational companies, we aim to scale way beyond our horizon and meet the Physical with Aeronautic Engineering communities</p>
        </div>
        <footer class="absolute bottom-0 left-0 flex flex-wrap justify-center items-center w-full gap-x-1 xl:gap-x-2 mb-5 xl:mb-10 text-white">
            <p class="text-sm text-white">Continue to <RouterLink to="/signin" class="font-semibold">Login</RouterLink></p>
            <p>|</p>
            <p class="text-sm text-white">Need any help? <RouterLink to="/contactus" class="font-semibold">Contact us</RouterLink></p>
        </footer>
    </section>
</template>