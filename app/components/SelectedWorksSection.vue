<script setup>
import GlassCard from "@/components/GlassCard.vue";
import { Github, ArrowRight } from "lucide-vue-next";

const projects = [
  {
    title: "E-Commerce Website",
    desc: "A high-load e-commerce website with a responsive design and a rich feature set.",
    tags: ["jQuery", "Twig", "OpenCart"],
    link: "https://tdsila.ru",
    image: "/images/e-commerce-website.png",
  },
  {
    title: "Open-source component",
    desc: "A component for vue to create a bottom sheet with a smooth animation.",
    tags: ["Vue.js", "HTML", "CSS"],
    link: "https://github.com/megaarmos/vue-spring-bottom-sheet",
    image: "/images/vsbs.png",
  },
  {
    title: "Dancing Instructor Website",
    desc: "A website for a dancing instructor with a modern design and a responsive layout.",
    tags: ["Vue.js", "Laravel", "Tailwind CSS"],
    link: "https://dancingdita.com/",
    image: "/images/dancingdita.png",
  },
];

const badgeClass =
  "inline-block px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-white uppercase";
</script>

<template>
  <section id="projects" class="relative py-24 z-10">
    <div class="container">
      <div class="text-center mb-16">
        <div :class="badgeClass">Portfolio</div>
        <h2 class="text-3xl md:text-5xl font-bold mb-6">Some of my Projects</h2>
        <p class="text-white/60 max-w-2xl mx-auto">
          A collection of projects that showcase my skills in problem-solving and product building.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GlassCard v-for="(project, i) in projects" :key="i" :hover-effect="true" class="group flex flex-col h-full">
          <div class="h-48 w-full bg-slate-800/50 relative overflow-hidden border-b border-white/10">
            <NuxtImg
              :src="project.image"
              alt="Project Image"
              class="w-full h-full object-cover"
              width="334"
              height="200"
              :format="'webp'" />
            <div
              class="absolute inset-0 flex items-center bg-black/40 backdrop-blur-xs justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <UiButton as="a" :href="project.link" target="_blank" variant="outline">View Live <ArrowRight :size="18" /></UiButton>
            </div>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold mb-3 transition-colors">{{ project.title }}</h3>
            <p class="text-white/60 text-sm mb-6 flex-1 leading-relaxed">{{ project.desc }}</p>

            <div class="flex flex-wrap gap-2 mt-auto">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs font-medium px-2 py-1 rounded bg-white/5 text-white/70 border border-white/10">
                {{ tag }}
              </span>
            </div>
          </div>
        </GlassCard>
      </div>

      <div class="text-center mt-12">
        <UiButton as="a" href="https://github.com/megaarmos" target="_blank" class="inline-flex" variant="outline">
          View Github Profile <Github :size="18" />
        </UiButton>
      </div>
    </div>
  </section>
</template>
