<script setup>
import GlassCard from "@/components/GlassCard.vue";
import { Mail } from "lucide-vue-next";
</script>

<template>
  <section id="contact" class="py-24">
    <div class="container">
      <GlassCard class="p-12 md:p-20 text-center overflow-hidden border-violet-700/30 max-w-4xl mx-auto">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-700/10 blur-[100px] rounded-full pointer-events-none" />

        <h2 class="text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
        <p class="text-white/60 text-lg mb-10 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UiButton as="a" href="mailto:contact@paularion007@gmail.com" variant="outline"> <Mail :size="20" /> Send an Email </UiButton>
        </div>
      </GlassCard>
    </div>
  </section>
</template>
