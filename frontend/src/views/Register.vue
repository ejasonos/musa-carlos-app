<script setup>
import Home from "../views/Home.vue";
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const router = useRouter()

let name = ref('')
let username = ref('')
let faculty = ref('')
let department = ref('')
let email = ref('')
let password = ref('')

const register = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/auth/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name.value,
        username: username.value,
        faculty: faculty.value,
        department: department.value,
        email: email.value,
        password: password.value
      }),
    });
    
    if (!res.ok) {
      // handle non-2xx responses (show error in UI, etc.)
      const errBody = await res.json().catch(() => ({}));
      console.error("Login failed", errBody);
      return;
    }

    const data = await res.json();

    // optional: store token for auth (adjust field name according to your API)
    if (data.token) localStorage.setItem("token", data.token);

    // navigate to feed (use a named route if your router defines one)
    router.push("/feed");
  } catch (err) {
    console.error(err);
    throw err;
  }
};
</script>
<template>
  <section class="flex flex-col lg:flex-row">
    <Home class="hidden lg:flex w-1/3" />
    <main class="flex flex-col w-full xl:w-2/3 justify-center p-1 xl:pl-10">
      <p class="text-lg text-center xl:text-left text-black xl:pl-20 font-bold">
        Create your account
      </p>
      <form class="flex flex-col p-4 space-y-3" method="POST" @submit.prevent="register">
        <label for="name" class="text-sm text-black font-semibold">Name</label>
        <input
          type="text"
          name="name"
          v-model="name"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
          required
        />
        <label for="name" class="text-sm text-black font-semibold">Username</label>
        <input
          type="text"
          name="username"
          v-model="username"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
          required
        />
        <label for="email" class="text-sm text-black font-semibold"
          >Email</label
        >
        <input
          type="email"
          name="email"
          v-model="email"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
          required
        />
        <label for="faculty" class="text-sm text-black font-semibold"
          >Faculty</label
        >
        <input
          type="text"
          name="faculty"
          v-model="faculty"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
          required
        />
        <label for="department" class="text-sm text-black font-semibold"
          >Department</label
        >
        <input
          type="text"
          name="department"
          v-model="department"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
          required
        />
        <label for="password" class="text-sm text-black font-semibold">Password</label>
        <input
          type="password"
          v-model="password"
          class="border-2 border-transparent border-b-blue-300 xl:w-1/2 focus:border-transparent focus:pb-1 focus:border-2 focus:border-b-blue-300 focus:outline-transparent"
          required
        />
        <div class="flex space-x-1 items-center">
          <input type="checkbox" required />
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
