<script setup>
import DarkVei from "@/components/DarkVei.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white selection:bg-violet-700 selection:text-white relative font-inter overflow-x-hidden">
    <div class="bg-noise" />

    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <DarkVei
        :hue-shift="353"
        :noise-intensity="0.1"
        :scanline-intensity="0"
        :speed="1"
        :scanline-frequency="0"
        :warp-amount="0"
        :resolution-scale="1" />
    </div>

    <TheHeader />
    <HeroSection />
    <AboutMeSection />
    <SelectedWorksSection />
    <WhatIUseSection />
    <WorkTogetherSection />
    <TheFooter />
  </div>
</template>
