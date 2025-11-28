<script setup>
import GlassCard from "@/components/GlassCard.vue";

const badgeClass =
  "inline-block px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-semibold tracking-wider text-white uppercase";
</script>

<template>
  <section id="about" class="relative py-24 z-10">
    <div class="container">
      <GlassCard class="p-8 xl:p-12">
        <div class="flex flex-col xl:flex-row gap-12 items-center">
          <div class="flex-1">
            <div :class="badgeClass">About Me</div>
            <h2 class="text-3xl font-bold mb-6">More than just code</h2>
            <div class="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                I'm a passionate developer based in New York with a keen eye for design and a drive for clean, efficient code. My journey
                began 4 years ago when I built my first website, and I haven't looked back since.
              </p>
              <p>
                I bridge the gap between engineering and design, ensuring that every product I build not only functions perfectly under the
                hood but looks beautiful on the surface.
              </p>
              <p>
                Being involved in open-source work drives me - I write code and share it freely because helping fellow developers matters.
                Building useful tools keeps me going, creating tools that help others build amazing things.
              </p>
              <p>When I'm not coding, you can find me exploring new tech trends, contributing to open source, or gaming.</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 w-full xl:w-auto xl:min-w-[400px]">
            <GlassCard variant="strong" class="p-5 text-center">
              <div class="text-4xl font-bold text-violet-700 mb-2">4</div>
              <div class="text-sm text-white/50 uppercase tracking-wide">Years of Experience</div>
            </GlassCard>
            <GlassCard variant="strong" class="p-5 text-center">
              <div class="text-4xl font-bold text-pink-400 mb-2">10+</div>
              <div class="text-sm text-white/50 uppercase tracking-wide">Projects</div>
            </GlassCard>
            <GlassCard variant="strong" class="p-5 text-center">
              <div class="text-4xl font-bold text-pink-400 mb-2">2</div>
              <div class="text-sm text-white/50 uppercase tracking-wide">Open Source Packages</div>
            </GlassCard>
            <GlassCard variant="strong" class="p-5 text-center">
              <div class="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div class="text-sm text-white/50 uppercase tracking-wide">NPM Downloads/Week</div>
            </GlassCard>
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
</template>
