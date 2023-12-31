<template>
    <nav
        class="sticky top-0 z-50 w-full bg-zinc-100 py-2 shadow-lg transition-shadow duration-300 dark:bg-zinc-900"
        :class="isNavbarSticky ? 'shadow-neutral-200 dark:shadow-zinc-700' : 'shadow-transparent'">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
            <a
                class=""
                href="#">
                <img
                    class="py-1.5"
                    src="assets/svgs/logo.svg"
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
                <ul
                    class="flex flex-col gap-4 lg:flex-row"
                    v-scroll-spy-active
                    v-scroll-spy-link>
                    <li class="nav-item">
                        <a
                            class="block border-b border-zinc-400 py-4 font-medium transition-colors duration-300 hover:text-indigo-600 lg:border-b-0 lg:px-2 dark:border-zinc-600 dark:text-white dark:hover:text-indigo-400 [.active_&]:text-indigo-600 dark:[.active_&]:text-indigo-400"
                            href="#">
                            HOME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="block border-b border-zinc-400 py-4 font-medium transition-colors duration-300 hover:text-indigo-600 lg:border-b-0 lg:px-2 dark:border-zinc-600 dark:text-white dark:hover:text-indigo-400 [.active_&]:text-indigo-600 dark:[.active_&]:text-indigo-400"
                            href="#aboutme">
                            ABOUT ME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="block border-b border-zinc-400 py-4 font-medium transition-colors duration-300 hover:text-indigo-600 lg:border-b-0 lg:px-2 dark:border-zinc-600 dark:text-white dark:hover:text-indigo-400 [.active_&]:text-indigo-600 dark:[.active_&]:text-indigo-400"
                            href="#myworks">
                            MY WORKS
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="block py-4 font-medium transition-colors duration-300 hover:text-indigo-600 lg:border-b-0 lg:px-2 dark:text-white dark:hover:text-indigo-400 [.active_&]:text-indigo-600 dark:[.active_&]:text-indigo-400"
                            href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main v-scroll-spy="{ offset: 150 }">
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
                                class="border-graient relative rounded-lg px-4 text-sm font-medium leading-9 text-white transition-colors before:absolute before:inset-0 before:z-10 before:block before:rounded-sm before:bg-gradient-to-r before:from-indigo-600 before:to-violet-500 before:opacity-100 before:transition-opacity before:duration-300 hover:text-zinc-800 hover:before:opacity-0 sm:px-7 sm:leading-[46px] dark:hover:text-white">
                                <span class="relative z-20">ABOUT ME</span>
                            </a>
                            <a
                                href="#myworks"
                                class="border-graient relative rounded-lg px-4 text-sm font-medium leading-9 transition-colors before:absolute before:inset-0 before:z-10 before:block before:rounded-sm before:bg-gradient-to-r before:from-indigo-600 before:to-violet-500 before:opacity-0 before:transition-opacity before:duration-300 hover:text-white hover:before:opacity-100 sm:px-7 sm:leading-[46px] dark:text-white">
                                <span class="relative z-20">MY WORKS</span>
                            </a>
                        </div>
                    </div>
                    <div class="hidden w-5/12 lg:block">
                        <img
                            class="w-full"
                            src="assets/svgs/coding.svg"
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
                            src="assets/svgs/table.svg"
                            alt="sitting image" />
                    </div>
                    <div class="w-full lg:w-6/12">
                        <h2 class="mb-4 text-3xl font-medium dark:text-white">Let me introduce myself</h2>
                        <p class="mb-12 text-zinc-500 dark:text-zinc-300">
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
                                class="border-graient relative rounded-lg px-4 text-sm font-medium leading-9 text-white transition-colors before:absolute before:inset-0 before:z-10 before:block before:rounded-sm before:bg-gradient-to-r before:from-indigo-600 before:to-violet-500 before:opacity-100 before:transition-opacity before:duration-300 hover:text-zinc-800 hover:before:opacity-0 sm:px-7 sm:leading-[46px] dark:hover:text-white"
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
                        <h2 class="mb-6 text-center text-3xl font-medium lg:text-start dark:text-white">I USE IN MY PROJECTS</h2>
                        <div class="flex flex-wrap justify-center gap-4 sm:max-md:*:basis-1/6 lg:justify-start lg:*:basis-1/6 xl:pr-36">
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <img
                                        width="118px"
                                        height="118px"
                                        class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                        src="assets/svgs/vue.svg"
                                        alt="" />
                                </div>
                                <template #popper> Vue </template>
                            </VTooltip>
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <img
                                        width="118px"
                                        height="118px"
                                        class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                        src="assets/svgs/nuxt.svg"
                                        alt="" />
                                </div>
                                <template #popper> Nuxt </template>
                            </VTooltip>
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <img
                                        width="118px"
                                        height="118px"
                                        class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                        src="assets/svgs/react.svg"
                                        alt="" />
                                </div>
                                <template #popper> React </template>
                            </VTooltip>
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <img
                                        width="118px"
                                        height="118px"
                                        class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                        src="assets/svgs/alpine.svg"
                                        alt="" />
                                </div>
                                <template #popper> Alpine </template>
                            </VTooltip>
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <picture>
                                        <source
                                            media="(prefers-color-scheme: light)"
                                            srcset="assets/svgs/ionic_dark.svg" />
                                        <source
                                            media="(prefers-color-scheme: dark)"
                                            srcset="assets/svgs/ionic_light.svg" />
                                        <img
                                            width="118px"
                                            height="118px"
                                            class="p-3 brightness-125 contrast-0 grayscale transition-[filter] duration-300 hover:brightness-100 hover:contrast-100 hover:grayscale-0 md:p-4 dark:brightness-50 dark:contrast-100"
                                            src="assets/svgs/ionic_light.svg"
                                            alt="Flowers" />
                                    </picture>
                                </div>
                                <template #popper> Ionic </template>
                            </VTooltip>
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <img
                                        width="118px"
                                        height="118px"
                                        class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                        src="assets/svgs/tailwind.svg"
                                        alt="" />
                                </div>
                                <template #popper> Tailwind </template>
                            </VTooltip>
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <img
                                        width="118px"
                                        height="118px"
                                        class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                        src="assets/svgs/css3.svg"
                                        alt="" />
                                </div>
                                <template #popper> CSS3 </template>
                            </VTooltip>
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <img
                                        width="118px"
                                        height="118px"
                                        class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                        src="assets/svgs/javascript.svg"
                                        alt="" />
                                </div>
                                <template #popper> JavaScript </template>
                            </VTooltip>
                            <VTooltip :distance="8">
                                <div class="flex h-full justify-center border border-neutral-400">
                                    <img
                                        width="118px"
                                        height="118px"
                                        class="p-3 grayscale transition-[filter] duration-300 hover:grayscale-0 md:p-4"
                                        src="assets/svgs/typescript.svg"
                                        alt="" />
                                </div>
                                <template #popper> TypeScript </template>
                            </VTooltip>
                        </div>
                    </div>
                    <div class="mt-12 flex items-start justify-center lg:mt-0 lg:w-5/12 lg:justify-end xl:w-4/12 2xl:w-3/12">
                        <div
                            class="relative max-w-80 bg-white p-6 before:absolute before:hidden before:w-40 after:hidden before:sm:block after:sm:block md:p-12 dark:bg-zinc-950">
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
            class="container mx-auto mb-12 mt-12 py-12">
            <h2 class="mb-12 text-center text-3xl font-medium lg:text-start dark:text-white">My projects</h2>
            <div class="grid grid-cols-2 gap-4 lg:grid-cols-3">
                <ContentList
                    path="/my-works"
                    v-slot="{ list }">
                    <div
                        class="row-span-5 grid gap-0 overflow-hidden rounded-lg border border-neutral-300 bg-white [grid-template-rows:subgrid] dark:border-neutral-800 dark:bg-zinc-950"
                        v-for="myWork in list"
                        :key="myWork._path">
                        <div class="overflow-hidden">
                            <NuxtImg
                                :src="'images/' + myWork.image"
                                class="h-full w-full object-cover" />
                        </div>
                        <h5 class="row-span-1 mb-2 px-4 pt-4 text-xl font-medium text-neutral-800 dark:text-white">{{ myWork.title }}</h5>
                        <p
                            class="row-span-1 mb-6 px-4 text-neutral-800 dark:text-zinc-300"
                            v-html="myWork.description"></p>
                        <p class="row-span-1 px-4 pb-4 text-zinc-400">
                            <small>{{ myWork.date.day }}<sup>th</sup> {{ myWork.date.month }} {{ myWork.date.year }}</small>
                        </p>
                    </div>
                </ContentList>
                <div
                    class="row-span-5 grid gap-0 overflow-hidden rounded-lg border border-neutral-300 bg-white [grid-template-rows:subgrid] dark:border-neutral-800 dark:bg-zinc-950">
                    <div class="max-h-48 overflow-hidden bg-[#110f28] 2xl:max-h-56">
                        <LottieAnimation
                            class="h-full"
                            :animation-data="SleepyJSON"
                            :auto-play="true"
                            :loop="true"
                            :speed="1" />
                    </div>
                    <h5 class="row-span-1 mb-2 px-4 pt-4 text-xl font-medium text-neutral-800 dark:text-white">Coming soon</h5>
                </div>
            </div>
        </section>
        <section id="contact">
            <div class="container mx-auto">
                <div class="bg-gradient-to-r from-indigo-600 to-violet-400 py-12 text-center text-white">
                    <svg
                        height="60px"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute translate-x-24 lg:translate-x-48 xl:translate-x-80">
                        <circle
                            cx="70"
                            cy="20"
                            r="15"
                            fill="#ccb3ff" />
                        <circle
                            cx="40"
                            cy="45"
                            r="23"
                            fill="#eef4f3"
                            class="scale-y-[1.2]" />
                    </svg>

                    <h3 class="mt-6 pt-12 text-2xl font-medium">CONTACT WITH ME HERE</h3>
                    <p class="mb-12 px-4">You can contact with me any time you want.</p>
                    <h3 class="mb-6 pb-12 text-xl font-medium">paularion007@gmail.com</h3>
                    <i class="icon-lightbulb-alt absolute -translate-y-16 translate-x-32 text-2xl md:-translate-y-40 md:translate-x-64"></i>
                    <Icon
                        name="uil:lightbulb-alt"
                        size="24px"
                        class="absolute -translate-y-16 translate-x-32 md:-translate-y-40 md:translate-x-64" />
                </div>
            </div>
        </section>
    </main>

    <footer class="relative bg-gray-100 py-12 dark:bg-zinc-900">
        <div class="container mx-auto py-12">
            <div class="flex flex-col justify-center">
                <a
                    class="mb-12 flex justify-center"
                    href="#">
                    <img
                        class="w-44"
                        src="assets/svgs/logo.svg"
                        alt="ARION PAUL" />
                </a>
                <h4 class="mb-6 text-center text-2xl font-medium dark:text-white">Follow Me</h4>
                <div class="flex justify-center gap-6">
                    <a
                        class="transition-colors hover:text-indigo-400 dark:text-white"
                        href="https://www.facebook.com/arion.paul.3">
                        <Icon
                            name="uil:facebook-f"
                            size="24px" />
                    </a>
                    <a
                        class="transition-colors hover:text-indigo-400 dark:text-white"
                        href="https://www.instagram.com/arion_paul/?hl=en">
                        <Icon
                            name="uil:instagram"
                            size="24px" />
                    </a>
                    <a
                        class="transition-colors hover:text-indigo-400 dark:text-white"
                        href="https://t.me/ArionPaul">
                        <Icon
                            name="uil:telegram-alt"
                            size="24px" />
                    </a>
                    <a
                        class="transition-colors hover:text-indigo-400 dark:text-white"
                        href="https://vk.com/arionp">
                        <Icon
                            name="uil:vk-alt"
                            size="24px" />
                    </a>
                </div>
                <p class="mb-0 mt-6 pt-2 text-center dark:text-gray-200">
                    Copyright ©2020 <span class="text-indigo-400">DouxCode</span> Allrights reserved
                </p>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { LottieAnimation } from "lottie-web-vue";
import SleepyJSON from "~/assets/sleepy.json";

const { vScrollSpy, vScrollSpyLink, vScrollSpyActive } = useScrollSpy();

const isNavbarSticky = ref(false);
const isMenuOpen = ref(false);

useHead({
    title: "Arion Paul",
    htmlAttrs: {
        class: computed(() => {
            return [isMenuOpen.value ? "overflow-hidden" : "overflow-auto", "scroll-smooth"].join(" ");
        }),
    },
    bodyAttrs: {
        class: "bg-zinc-100 dark:bg-zinc-900",
    },
});

onMounted(() => {
    isNavbarSticky.value = window.scrollY > 0;

    window.addEventListener("scroll", () => {
        isNavbarSticky.value = window.scrollY > 0;
    });
});
</script>
