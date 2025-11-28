<script setup>
import GlassCard from "@/components/GlassCard.vue";
import { Code2, Database, Layout, Terminal } from "lucide-vue-next";

const techStack = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "Vue.js", icon: "simple-icons:vuedotjs" },
      { name: "Nuxt.js", icon: "simple-icons:nuxtdotjs" },
      { name: "React", icon: "simple-icons:react" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "HTML", icon: "simple-icons:html5" },
      { name: "CSS", icon: "simple-icons:css3" },
      { name: "JavaScript", icon: "simple-icons:javascript" },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", icon: "simple-icons:nodedotjs" },
      { name: "Bun", icon: "simple-icons:bun" },
      { name: "Nuxt.js", icon: "simple-icons:nuxtdotjs" },
      { name: "Laravel", icon: "simple-icons:laravel" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "MySQL", icon: "simple-icons:mysql" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Terminal,
    skills: [
      { name: "Git", icon: "simple-icons:git" },
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "Figma", icon: "simple-icons:figma" },
      { name: "CI/CD", icon: "simple-icons:gitlab" },
      { name: "Vite", icon: "simple-icons:vite" },
      { name: "Coolify", icon: "simple-icons:coolify" },
      { name: "Linux", icon: "simple-icons:linux" },
    ],
  },
];

const badgeClass =
  "inline-block px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-white uppercase";
</script>

<template>
  <section id="stack" class="relative py-24 z-10">
    <div class="container">
      <div class="text-center mb-16">
        <div :class="badgeClass">Tech Stack</div>
        <h2 class="text-3xl md:text-5xl font-bold mb-6">What I Use</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard v-for="(stack, i) in techStack" :key="i" class="p-6">
          <div class="flex items-center gap-4 mb-6">
            <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-violet-400">
              <component :is="stack.icon" :size="24" />
            </div>
            <h3 class="text-xl font-bold">{{ stack.category }}</h3>
          </div>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in stack.skills"
              :key="skill.name"
              class="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default flex items-center gap-2">
              <Icon :name="skill.icon" :size="16" />
              {{ skill.name }}
            </span>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
