<template>
    <nav
        class="fixed z-50 w-full bg-white py-2 shadow-lg shadow-transparent transition-shadow duration-300 dark:bg-zinc-900"
        ref="navbar">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
            <a
                class=""
                href="#">
                <img
                    class="py-1.5"
                    src="public/images/logo.svg"
                    alt="ARION PAUL" />
            </a>
            <button
                class="lg:hidden dark:text-indigo-400"
                @click="isMenuOpen = !isMenuOpen"
                :class="isMenuOpen && 'opened'"
                :aria-expanded="isMenuOpen"
                aria-label="Main Menu">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 100 100">
                    <path
                        class="line line1"
                        stroke="currentColor"
                        stroke-linecap="round"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path
                        class="line line2"
                        stroke="currentColor"
                        stroke-linecap="round"
                        d="M 20,50 H 80" />
                    <path
                        class="line line3"
                        stroke="currentColor"
                        stroke-linecap="round"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <div
                class="navbar-collapse w-full lg:w-auto"
                :class="isMenuOpen || 'collapsed'"
                id="navbarCollapse">
                <ul class="flex flex-col gap-4 lg:flex-row">
                    <li class="nav-item">
                        <a
                            id="btn-home"
                            class="active block border-b border-zinc-500 py-4 font-medium transition-colors duration-300 hover:text-indigo-400 lg:border-b-0 lg:px-2 dark:text-white [&.active]:text-indigo-400"
                            href="#">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            id="btn-about"
                            class="block border-b border-zinc-500 py-4 font-medium transition-colors duration-300 hover:text-indigo-400 lg:border-b-0 lg:px-2 dark:text-white"
                            href="#aboutme">
                            About me
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            id="btn-works"
                            class="block border-b border-zinc-500 py-4 font-medium transition-colors duration-300 hover:text-indigo-400 lg:border-b-0 lg:px-2 dark:text-white"
                            href="#myworks">
                            My Works
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            id="btn-contact"
                            class="block py-4 font-medium transition-colors duration-300 hover:text-indigo-400 lg:px-2 dark:text-white"
                            href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="overflow-hidden">
        <div class="container mx-auto">
            <div class="flex h-screen max-h-[1440px] items-center gap-6">
                <div class="w-full lg:w-7/12">
                    <h2 class="hello mb-4 text-2xl font-medium text-neutral-900 sm:text-3xl dark:text-white">HELLO</h2>
                    <h1 class="mb-4 text-4xl font-medium text-neutral-900 sm:text-5xl xl:text-6xl 2xl:text-7xl dark:text-white">
                        I AM ARION PAUL
                    </h1>
                    <h3 class="mb-12 text-2xl font-medium text-neutral-900 sm:text-3xl dark:text-indigo-400">FRONTEND DEVELOPER</h3>
                    <div class="flex gap-4 sm:gap-6">
                        <a
                            href="#aboutme"
                            class="border-graient relative rounded-lg px-4 text-sm font-medium leading-9 before:absolute before:inset-0 before:z-10 before:block before:rounded-sm before:bg-gradient-to-r before:from-indigo-600 before:to-violet-500 before:opacity-100 before:transition-opacity before:duration-300 hover:before:opacity-0 sm:px-7 sm:leading-[46px] dark:text-white"
                            role="button">
                            <span class="relative z-20">ABOUT ME</span>
                        </a>
                        <a
                            href="#myworks"
                            class="border-graient relative rounded-lg px-4 text-sm font-medium leading-9 before:absolute before:inset-0 before:z-10 before:block before:rounded-sm before:bg-gradient-to-r before:from-indigo-600 before:to-violet-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 sm:px-7 sm:leading-[46px] dark:text-white"
                            role="button">
                            <span class="relative z-20">MY WORKS</span>
                        </a>
                    </div>
                </div>
                <div class="hidden w-5/12 lg:block">
                    <img
                        class="w-full"
                        src="public/images/coding.svg"
                        alt="coding image" />
                </div>
            </div>
        </div>
    </section>
    <section
        id="aboutme"
        class="overflow-hidden">
        <div class="container mx-auto">
            <div class="flex h-screen max-h-[1440px] items-center gap-6">
                <div class="hidden w-6/12 lg:block">
                    <img
                        class="w-full pr-12"
                        src="public/images/table.svg"
                        alt="sitting image" />
                </div>
                <div class="w-full lg:w-6/12">
                    <h2 class="mb-4 text-3xl font-medium dark:text-white">Let me introduce myself</h2>
                    <p class="mb-12 text-zinc-300">
                        My name is Arion, and I'm a frontend developer. My job is to create impressive visual for websites. I read a lot
                        articles and keep track of new technologies to make my products better.
                        <br />
                        <br />
                        For 3 years I've been making websites and web design projects, currently I'm working as a frontend developer,
                        creating E-commerce templates for Opencart. Apart from it my hobby is to create 3d graphics.
                    </p>
                    <div class="flex">
                        <a
                            href="#myworks"
                            class="border-graient relative rounded-lg px-4 text-sm font-medium leading-9 before:absolute before:inset-0 before:z-10 before:block before:rounded-sm before:bg-gradient-to-r before:from-indigo-600 before:to-violet-500 before:opacity-100 before:transition-opacity before:duration-300 hover:before:opacity-0 sm:px-7 sm:leading-[46px] dark:text-white"
                            role="button">
                            <span class="relative z-20">SEE MY WORKS</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="overflow-hidden">
        <div class="container mx-auto">
            <div class="my-12 flex flex-col content-center py-12 lg:flex-row">
                <div class="mb-12 w-full lg:mb-0 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <h2 class="mb-12 text-center text-3xl font-medium lg:text-start dark:text-white">I USE IN MY PROJECTS</h2>
                    <div class="flex gap-4 xl:pr-36">
                        <div class="flex justify-center border border-neutral-400">
                            <img
                                width="120px"
                                height="120px"
                                class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                src="public/images/vue.svg"
                                alt="" />
                        </div>
                        <div class="flex justify-center border border-neutral-400">
                            <img
                                width="120px"
                                height="120px"
                                class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                src="public/images/nuxt.svg"
                                alt="" />
                        </div>
                        <div class="flex justify-center border border-neutral-400">
                            <img
                                width="120px"
                                height="120px"
                                class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                src="public/images/react.svg"
                                alt="" />
                        </div>
                        <div class="flex justify-center border border-neutral-400">
                            <img
                                width="120px"
                                height="120px"
                                class="p-3 brightness-50 grayscale transition-[filter] duration-300 hover:brightness-100 hover:grayscale-0 md:p-4"
                                src="public/images/ionic_light.svg"
                                alt="" />
                        </div>
                        <div class="flex justify-center border border-neutral-400">
                            <img
                                width="120px"
                                height="120px"
                                class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                src="public/images/tailwind.svg"
                                alt="" />
                        </div>
                    </div>
                </div>
                <div class="mt-12 flex items-start justify-center lg:mt-0 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
                    <div
                        class="relative max-w-80 bg-gray-100 p-6 before:absolute before:hidden before:w-40 after:hidden before:sm:block after:sm:block md:p-12 dark:bg-zinc-950">
                        <div class="relative z-10 mb-4 flex items-center justify-center gap-6 pb-12">
                            <h2 class="text-8xl font-medium text-indigo-500">2</h2>
                            <p class="text-xl font-medium uppercase text-neutral-800 dark:text-neutral-50">
                                Years <br />
                                Experience <br />
                                Working
                            </p>
                        </div>
                        <div class="flex items-center gap-4 pt-6">
                            <i class="icon-envelope-open text-5xl text-neutral-800 md:text-6xl dark:text-neutral-100"></i>
                            <div>
                                <p class="text-uppercase text-neutral-800 dark:text-neutral-50">MY email</p>
                                <p class="font-medium text-neutral-800 dark:text-neutral-50">paularion007@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section
        id="myworks"
        class="container mx-auto mt-12 py-12">
        <h2 class="mb-12 text-center text-3xl font-medium lg:text-start dark:text-white">My projects</h2>
        <div class="flex flex-col gap-12">
            <div
                class="flex flex-col lg:flex-row"
                v-for="myWork in myWorks">
                <div
                    class="order-last shrink-0 border border-neutral-800 bg-zinc-950 p-4 max-lg:rounded-b-lg lg:order-first lg:w-1/3 lg:rounded-s-lg xl:w-1/4">
                    <div class="mb-12">
                        <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-white">{{ myWork.title }}</h5>
                        <p
                            class="card-text text-neutral-800 dark:text-zinc-300"
                            v-html="myWork.text"></p>
                    </div>
                    <p class="text-zinc-400">
                        <small>{{ myWork.date.day }}<sup>th</sup> {{ myWork.date.month }} {{ myWork.date.year }}</small>
                    </p>
                </div>
                <div class="overflow-hidden max-lg:rounded-t-lg lg:rounded-e-lg">
                    <img
                        :src="myWork.image"
                        class=""
                        alt="..." />
                </div>
            </div>
            <div class="flex flex-col lg:flex-row">
                <div
                    class="order-last shrink-0 border border-neutral-800 bg-zinc-950 p-4 max-lg:rounded-b-lg lg:order-first lg:w-1/3 lg:rounded-s-lg xl:w-1/4">
                    <div class="mb-12">
                        <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-white">Coming soon</h5>
                    </div>
                </div>
                <div
                    class="card-image h-72 overflow-hidden max-lg:rounded-t-lg lg:rounded-e-lg xl:h-96"
                    style="background-color: #110f28">
                    <LottieAnimation
                        class="h-full"
                        :animation-data="SleepyJSON"
                        :auto-play="true"
                        :loop="true"
                        :speed="1"
                        ref="anim" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { LottieAnimation } from "lottie-web-vue";
import SleepyJSON from "~/assets/sleepy.json";

const navbar = ref(null);
const isMenuOpen = ref(false);

const ImgURL = (image) => {
    return new URL(`./public/images/${image}`, import.meta.url).href;
};

const myWorks = [
    {
        title: "Website made with CSS and HTML",
        text: "A simple website, made with only CSS and HTML. <br> Directed by University GeekBrains.",
        date: {
            day: "10",
            month: "August",
            year: "2019",
        },
        image: ImgURL("firstweb.png"),
    },
    {
        title: "Website made with CSS and HTML",
        text: "A simple website, made with only CSS and HTML. <br> Directed by University GeekBrains.",
        date: {
            day: "21",
            month: "September",
            year: "2021",
        },
        image: ImgURL("proweb.png"),
    },
];

useHead({
    title: "Arion Paul",
    htmlAttrs: {
        class: computed(() => {
            return [isMenuOpen.value ? "overflow-hidden" : "overflow-auto", "scroll-smooth"].join(" ");
        }),
    },
    bodyAttrs: {
        class: "dark:bg-zinc-900",
    },
});

onMounted(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            navbar.value.classList.add("shadow-neutral-200", "dark:shadow-zinc-700");
            navbar.value.classList.remove("shadow-transparent");
        } else {
            navbar.value.classList.add("shadow-transparent");
            navbar.value.classList.remove("shadow-neutral-200", "dark:shadow-zinc-700");
        }
    });
});
</script>
