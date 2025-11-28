<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import GlassCard from "@/components/GlassCard.vue";
import { Menu, X } from "lucide-vue-next";

const isMenuOpen = ref(false);
const scrolled = ref(false);

const navLinks = ["Home", "About", "Projects", "Stack", "Contact"];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300" :class="scrolled ? 'py-4' : 'py-10'">
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="rounded-full transition-all duration-300"
        :class="
          scrolled
            ? 'bg-gray-950/60 backdrop-blur-xl border border-white/10 px-6 lg:px-8 py-3 shadow-lg'
            : 'bg-transparent border-transparent px-0'
        ">
        <nav class="flex items-center justify-between">
          <a href="#" class="flex items-center gap-2 group">
            <div
              class="w-8 h-8 rounded-lg bg-linear-to-br from-violet-700 to-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(145,30,246,0.5)] group-hover:scale-110 transition-transform">
              AP
            </div>
            <span class="text-lg lg:text-xl font-bold tracking-tight text-white">Arion Paul</span>
          </a>

          <div class="hidden lg:flex items-center gap-8">
            <a
              v-for="link in navLinks"
              :key="link"
              :href="`#${link.toLowerCase()}`"
              class="text-sm font-medium text-white/70 hover:text-violet-700 transition-colors">
              {{ link }}
            </a>
          </div>

          <div class="flex items-center gap-4">
            <div class="hidden lg:flex items-center gap-3 pr-4 border-r border-white/10">
              <UiButton
                class="bg-transparent! hover:text-violet-500!"
                size="icon"
                variant="ghost"
                as="a"
                href="https://github.com/megaarmos"
                target="_blank"
                rel="noopener noreferrer">
                <Icon name="simple-icons:github" :size="20" />
              </UiButton>
            </div>

            <UiButton as="a" href="#contact"> Get in touch </UiButton>

            <button class="lg:hidden text-white/80 hover:text-white" @click="isMenuOpen = !isMenuOpen">
              <component :is="isMenuOpen ? X : Menu" :size="24" />
            </button>
          </div>
        </nav>
      </div>
    </div>

    <div v-if="isMenuOpen" class="lg:hidden absolute top-full left-0 w-full px-6 pt-2">
      <GlassCard variant="strong" class="flex flex-col p-6 space-y-4">
        <a
          v-for="link in navLinks"
          :key="link"
          :href="`#${link.toLowerCase()}`"
          class="text-lg font-medium text-white/80"
          @click="isMenuOpen = false">
          {{ link }}
        </a>
        <div class="flex gap-4 py-4 border-t border-white/10 justify-center">
          <a href="https://github.com/megaarmos" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-violet-700">
            <Icon name="simple-icons:github" :size="24" />
          </a>
        </div>
      </GlassCard>
    </div>
  </header>
</template>
