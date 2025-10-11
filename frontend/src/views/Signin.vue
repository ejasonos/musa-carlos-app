<script setup>
import Home from "../views/Home.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const router = useRouter();

let name = ref("");
let email = ref("");
let password = ref("");

const login = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    if (!res.ok) {
      // handle non-2xx responses (show error in UI, etc.)
      const errBody = await res.json().catch(() => ({}));
      // Show failure prompt
      const notifyFailure = () => {
        toast("Signin failed!", {
          autoClose: 5000,
        }); // ToastOptions
      };
      notifyFailure();
      console.error("Login failed", errBody);
      return;
    }

    const data = await res.json();
    console.log("login success", data);

    // optional: store token for auth (adjust field name according to your API)
    if (data.token) localStorage.setItem("token", data.token);

    // Show success prompt
    const notifySuccess = () => {
      toast("Signin Successful", {
        autoClose: 5000,
      }); // ToastOptions
    };
    notifySuccess();

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
        Login to your account
      </p>
      <form
        method="POST"
        class="flex flex-col p-4 space-y-3"
        @submit.prevent="login"
      >
        <p class="text-md text-black font-semibold"></p>
        <label for="name" class="text-sm text-black font-semibold">Name</label>
        <input
          type="text"
          name="name"
          v-model="name"
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
        <label for="password" class="text-sm text-black font-semibold"
          >Password</label
        >
        <input
          type="password"
          name="password"
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
          <button
            type="submit"
            class="px-4 py-1 rounded-full text-blue-600 bg-white border-2 border-blue-600 delay-50 transition-all hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-500 hover:text-white"
          >
            Sign in
          </button>
          <button
            class="px-4 py-1 rounded-full bg-blue-600 text-white delay-50 transition-all hover:bg-gradient-to-r hover:from-zinc-200 hover:to-blue-100 hover:text-blue-800"
          >
            <RouterLink to="/register">Register</RouterLink>
          </button>
        </div>
      </form>
    </main>
  </section>
</template>
