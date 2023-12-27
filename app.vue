<template>
    <nav class="transition-shadow duration-300 shadow-lg fixed w-full z-50 py-2 shadow-transparent bg-white dark:bg-zinc-800" ref="navbar">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a class="" href="#">
                <img class="py-1.5" src="assets/images/logo.svg" alt="ARION PAUL" />
            </a>
            <button
                class="lg:hidden dark:text-indigo-400"
                @click="isMenuOpen = !isMenuOpen"
                :class="isMenuOpen && 'opened'"
                :aria-expanded="isMenuOpen"
                aria-label="Main Menu"
            >
                <svg width="32" height="32" viewBox="0 0 100 100">
                    <path
                        class="line line1"
                        stroke="currentColor"
                        stroke-linecap="round"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                    />
                    <path class="line line2" stroke="currentColor" stroke-linecap="round" d="M 20,50 H 80" />
                    <path
                        class="line line3"
                        stroke="currentColor"
                        stroke-linecap="round"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                    />
                </svg>
            </button>
            <div class="w-full lg:w-auto navbar-collapse" :class="isMenuOpen || 'collapsed'" id="navbarCollapse">
                <ul class="flex flex-col lg:flex-row gap-4">
                    <li class="nav-item">
                        <a
                            id="btn-home"
                            class="dark:text-white lg:px-2 block font-medium py-4 transition-colors duration-300 hover:text-indigo-400 active [&.active]:text-indigo-400 border-b lg:border-b-0 border-zinc-500"
                            href="#"
                            >Home</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            id="btn-about"
                            class="block py-4 font-medium transition-colors duration-300 lg:px-2 dark:text-white hover:text-indigo-400 border-b lg:border-b-0 border-zinc-500"
                            href="#aboutme"
                            >About me</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            id="btn-works"
                            class="block py-4 font-medium transition-colors duration-300 lg:px-2 dark:text-white hover:text-indigo-400 border-b lg:border-b-0 border-zinc-500"
                            href="#myworks"
                            >My Works</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            id="btn-contact"
                            class="block py-4 font-medium transition-colors duration-300 lg:px-2 dark:text-white hover:text-indigo-400"
                            href="#contact"
                            >Contact</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="overflow-hidden">
        <div class="container mx-auto">
            <div class="flex items-center h-screen max-h-[1440px] gap-6">
                <div class="w-full lg:w-7/12">
                    <h2 class="mb-4 hello font-medium dark:text-white text-2xl sm:text-3xl text-neutral-800">Hello</h2>
                    <h1 class="mb-4 font-medium dark:text-white text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-neutral-800">
                        I am Arion Paul
                    </h1>
                    <h3 class="mb-12 font-medium dark:text-white text-2xl sm:text-3xl text-neutral-800">Middle FRONTEND DEVELOPER</h3>
                    <div class="flex gap-6">
                        <a
                            href="#aboutme"
                            class="leading-[46px] px-7 font-medium border-2 rounded-lg text-sm border-violet-500"
                            role="button"
                            ><span>About ME</span></a
                        >
                        <a
                            href="#myworks"
                            class="leading-[46px] px-7 font-medium border-2 rounded-lg text-sm border-violet-500 dark:text-white"
                            role="button"
                            ><span>My Works</span></a
                        >
                    </div>
                </div>
                <div class="hidden lg:block w-5/12">
                    <img class="w-full" src="assets/images/coding.svg" alt="coding image" />
                </div>
            </div>
        </div>
    </section>
    <section id="aboutme" class="overflow-hidden">
        <div class="container mx-auto">
            <div class="flex items-center h-screen max-h-[1440px] gap-6">
                <div class="hidden lg:block w-6/12">
                    <img class="w-full pr-12" src="assets/images/table.svg" alt="sitting image" />
                </div>
                <div class="w-full lg:w-6/12">
                    <h2 class="text-3xl dark:text-white font-medium mb-4">Let me introduce myself</h2>
                    <p class="mb-12 opacity-70 dark:text-white">
                        My name is Arion, and I'm a frontend developer. My job is to create impressive visual for websites. I read a lot
                        articles and keep track of new technologies to make my products better.
                        <br />
                        <br />
                        For 3 years I've been making websites and web design projects, currently I'm working as a frontend developer,
                        creating E-commerce templates for Opencart. Apart from it my hobby is to create 3d graphics.
                    </p>
                    <div class="flex">
                        <a href="#myworks" class="btn btn-primary" role="button"><span>SEE MY WORKS</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
useHead({
    title: "Arion Paul",
    bodyAttrs: {
        class: "dark:bg-zinc-800",
    },
});

const navbar = ref(null);
const isMenuOpen = ref(false);

onMounted(() => {
    console.log(navbar.value);
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
