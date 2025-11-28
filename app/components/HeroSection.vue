<script setup>
import GlassCard from "@/components/GlassCard.vue";
import TextHighlight from "@/components/TextHighlight.vue";
import { ArrowRight, Code2 } from "lucide-vue-next";
</script>

<template>
  <section id="home" class="relative pt-40 pb-20 lg:pt-48 lg:pb-32 z-10">
    <div class="container">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span class="relative flex size-3">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span class="relative inline-flex size-3 rounded-full bg-green-500" />
            </span>
            <span class="text-xs font-medium text-white/80 tracking-wide">Available for new projects</span>
          </div>

          <h1 class="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building the <br />
            <!-- <span class="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-purple-300 to-purple-500"> Future Web </span> -->
            <TextHighlight class="bg-linear-to-r from-indigo-500 to-violet-600"> Future Web </TextHighlight>
          </h1>

          <p class="text-lg lg:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Hi, I'm <span class="text-white font-semibold">Arion Paul</span>. A Frontend Developer specialized in building exceptional
            digital experiences that are fast, accessible, and visually stunning.
          </p>

          <div class="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
            <UiButton as="a" href="#projects" variant="default" size="lg"> View My Work <ArrowRight class="ml-2 w-5 h-5" /> </UiButton>
            <UiButton as="a" href="#contact" variant="outline" size="lg" class=""> Contact Me </UiButton>
          </div>
        </div>

        <div class="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
          <div class="absolute inset-0 bg-violet-700 blur-[100px] opacity-20 pointer-events-none" />

          <div>
            <GlassCard variant="strong" class="lg:aspect-4/3 p-2 flex items-center justify-center relative overflow-hidden group">
              <div class="w-full h-full bg-gray-950 rounded-xl overflow-hidden relative border border-white/5 p-6 font-mono text-sm">
                <div class="flex gap-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-500/50" />
                  <div class="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div class="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div class="space-y-2 text-white/50">
                  <p><span class="text-purple-400">const</span> developer = {</p>
                  <p class="pl-4">name: <span class="text-green-400">'Arion Paul'</span>,</p>
                  <p class="pl-4">role: <span class="text-green-400">'Frontend Engineer'</span>,</p>
                  <p class="pl-4">
                    skills: [<span class="text-green-400">'Vue'</span>, <span class="text-green-400">'React'</span>,
                    <span class="text-green-400">'Node'</span>],
                  </p>
                  <p class="pl-4">hardWorker: <span class="text-blue-400">true</span>,</p>
                  <p class="pl-4">passionate: <span class="text-blue-400">true</span></p>
                  <p>};</p>
                  <br />
                  <p><span class="text-purple-400">function</span> <span class="text-yellow-300">buildFuture</span>() {</p>
                  <p class="pl-4"><span class="text-purple-400">return</span> developer.createAwesomeStuff();</p>
                  <p>}</p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-gray-950 to-transparent" />
              </div>
            </GlassCard>

            <GlassCard variant="light" class="absolute -right-3 -top-5 sm:right-0 sm:translate-x-1/3 sm:top-12 p-2.5">
              <div class="flex items-center gap-3">
                <div class="p-1 lg:p-2 bg-blue-500/20 rounded-lg text-blue-400"><Code2 :size="20" /></div>
                <div>
                  <div class="text-xs text-white/50">Experience</div>
                  <div class="text-base lg:text-lg font-bold text-white">4+ Years</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
