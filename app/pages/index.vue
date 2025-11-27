<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import GlassCard from "@/components/GlassCard.vue";
import { Menu, X, ArrowRight, Github, Linkedin, Mail, Code2, Database, Layout, Terminal } from "lucide-vue-next";

// --- STATE ---
const isMenuOpen = ref(false);
const scrolled = ref(false);

// --- SCROLL HANDLER ---
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// --- DATA ---
const navLinks = ["About", "Projects", "Stack", "Contact"];

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A comprehensive analytics dashboard for online retailers featuring real-time sales tracking and inventory management.",
    tags: ["Vue.js", "Tailwind", "Firebase"],
    link: "#",
  },
  {
    title: "AI Image Generator",
    desc: "SaaS application leveraging Stable Diffusion to generate marketing assets for small businesses.",
    tags: ["React", "Python", "Stripe"],
    link: "#",
  },
  {
    title: "Crypto Portfolio Tracker",
    desc: "Mobile-first web app to track cryptocurrency assets across multiple wallets with live price updates.",
    tags: ["TypeScript", "Node.js", "Web3"],
    link: "#",
  },
];

const techStack = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["Vue.js", "React", "TypeScript", "Tailwind CSS", "Nuxt.js", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Python", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git", "Docker", "AWS", "Figma", "CI/CD", "Jest"],
  },
];

// --- STYLING HELPERS ---
const buttonBase = "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
const buttonVariants = {
  primary:
    "bg-violet-700 text-white shadow-[0_0_20px_rgba(145,30,246,0.4)] hover:shadow-[0_0_30px_rgba(145,30,246,0.6)] hover:bg-[#a43eff]",
  outline: "bg-transparent border border-violet-700/30 text-white hover:bg-violet-700/10 hover:border-violet-700/50",
  ghost: "text-white/70 hover:text-white hover:bg-white/5",
};

const badgeClass =
  "inline-block px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-white uppercase";
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white selection:bg-violet-700 selection:text-white relative font-inter overflow-x-hidden">
    <!-- Noise Texture -->
    <div class="bg-noise" />

    <!-- --- DYNAMIC BACKGROUND SYSTEM --- -->
    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <DarkVei
        :hue-shift="353"
        :noise-intensity="0.125"
        :scanline-intensity="0"
        :speed="1"
        :scanline-frequency="0"
        :warp-amount="0"
        :resolution-scale="1" />
    </div>

    <!-- --- HEADER --- -->
    <header class="fixed top-0 w-full z-50 transition-all duration-300" :class="scrolled ? 'py-4' : 'py-6'">
      <div class="container mx-auto px-6">
        <div
          class="rounded-full transition-all duration-300"
          :class="
            scrolled
              ? 'bg-[#0a0a16]/60 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-lg'
              : 'bg-transparent border-transparent px-0'
          ">
          <nav class="flex items-center justify-between">
            <!-- Logo -->
            <a href="#" class="flex items-center gap-2 group">
              <div
                class="w-8 h-8 rounded-lg bg-linear-to-br from-violet-700 to-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(145,30,246,0.5)] group-hover:scale-105 transition-transform">
                AP
              </div>
              <span class="text-xl font-bold tracking-tight text-white group-hover:text-violet-700 transition-colors">Arion Paul</span>
            </a>

            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center gap-8">
              <a
                v-for="link in navLinks"
                :key="link"
                :href="`#${link.toLowerCase()}`"
                class="text-sm font-medium text-white/70 hover:text-violet-700 transition-colors">
                {{ link }}
              </a>
            </div>

            <!-- Socials & Menu Toggle -->
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-3 pr-4 border-r border-white/10">
                <a href="#" class="text-white/60 hover:text-violet-700 transition-colors"><Icon name="simple-icons:github" :size="20" /></a>
                <a href="#" class="text-white/60 hover:text-violet-700 transition-colors">
                  <Icon name="simple-icons:linkedin" :size="20" />
                </a>
                <a href="#" class="text-white/60 hover:text-violet-700 transition-colors"><Icon name="lucide:mail" :size="20" /></a>
              </div>

              <UiButton as="a" href="#contact">
                Hire Me
                <!-- class="hidden md:flex text-sm h-10 shadow-[0_0_15px_rgba(78,212,255,0.3)] py-2 px-4" -->
              </UiButton>

              <button class="md:hidden text-white/80 hover:text-white" @click="isMenuOpen = !isMenuOpen">
                <component :is="isMenuOpen ? X : Menu" :size="24" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full px-6 pt-2">
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
            <a href="#" class="text-white/60 hover:text-violet-700"><Github :size="24" /></a>
            <a href="#" class="text-white/60 hover:text-violet-700"><Linkedin :size="24" /></a>
            <a href="#" class="text-white/60 hover:text-violet-700"><Mail :size="24" /></a>
          </div>
          <button class="w-full" :class="[buttonBase, buttonVariants.primary]">Hire Me</button>
        </GlassCard>
      </div>
    </header>

    <!-- --- HERO SECTION --- -->
    <section class="relative pt-40 pb-20 md:pt-48 md:pb-32 z-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <!-- Text Content -->
          <div class="flex-1 text-center md:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span class="relative flex size-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span class="relative inline-flex size-3 rounded-full bg-green-500" />
              </span>
              <span class="text-xs font-medium text-white/80 tracking-wide">Available for new projects</span>
            </div>

            <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Building the <br />
              <span class="text-transparent bg-clip-text bg-linear-to-r from-violet-700 to-purple-400"> Future Web </span>
            </h1>

            <p class="text-lg md:text-xl text-white/80 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              Hi, I'm <span class="text-white font-semibold">Arion Paul</span>. A Frontend Developer specialized in building exceptional
              digital experiences that are fast, accessible, and visually stunning.
            </p>

            <div class="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
              <a href="#projects" :class="[buttonBase, buttonVariants.primary, 'w-full sm:w-auto']">
                View My Work <ArrowRight class="ml-2 w-5 h-5" />
              </a>
              <a href="#contact" :class="[buttonBase, buttonVariants.outline, 'w-full sm:w-auto']"> Contact Me </a>
            </div>
          </div>

          <!-- Hero Visual / Profile Card -->
          <div class="flex-1 relative w-full max-w-lg mx-auto md:max-w-none">
            <!-- Background glow -->
            <div class="absolute inset-0 bg-violet-700 blur-[100px] opacity-20 pointer-events-none" />

            <div>
              <GlassCard
                variant="strong"
                class="aspect-square md:aspect-[4/3] p-2 flex items-center justify-center relative overflow-hidden group">
                <!-- Code Snippet Visual -->
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
                  <!-- Overlay Gradient -->
                  <div class="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-gray-950 to-transparent" />
                </div>
              </GlassCard>

              <GlassCard variant="light" class="absolute -right-4 top-12 p-4 hidden sm:block">
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Code2 :size="20" /></div>
                  <div>
                    <div class="text-xs text-white/50">Experience</div>
                    <div class="text-lg font-bold text-white">4+ Years</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- --- ABOUT SECTION --- -->
    <section id="about" class="relative py-24 z-10">
      <div class="container mx-auto px-6">
        <GlassCard class="p-8 md:p-12">
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="flex-1">
              <div :class="badgeClass">About Me</div>
              <h2 class="text-3xl font-bold mb-6">More than just code</h2>
              <div class="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  I'm a passionate developer based in New York with a keen eye for design and a drive for clean, efficient code. My journey
                  began 5 years ago when I built my first website, and I haven't looked back since.
                </p>
                <p>
                  I bridge the gap between engineering and design, ensuring that every product I build not only functions perfectly under
                  the hood but looks beautiful on the surface.
                </p>
                <p>When I'm not coding, you can find me exploring new tech trends, contributing to open source, or gaming.</p>
              </div>
            </div>

            <!-- Quick Stats Grid -->
            <div class="grid grid-cols-2 gap-4 w-full md:w-auto md:min-w-[400px]">
              <GlassCard variant="strong" class="p-6 text-center">
                <div class="text-4xl font-bold text-violet-700 mb-2">5</div>
                <div class="text-sm text-white/50 uppercase tracking-wide">Years Exp.</div>
              </GlassCard>
              <GlassCard variant="strong" class="p-6 text-center">
                <div class="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div class="text-sm text-white/50 uppercase tracking-wide">Projects</div>
              </GlassCard>
              <GlassCard variant="strong" class="p-6 text-center">
                <div class="text-4xl font-bold text-pink-400 mb-2">20+</div>
                <div class="text-sm text-white/50 uppercase tracking-wide">Clients</div>
              </GlassCard>
              <GlassCard variant="strong" class="p-6 text-center">
                <div class="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div class="text-sm text-white/50 uppercase tracking-wide">Satisfaction</div>
              </GlassCard>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>

    <!-- --- PROJECTS SECTION --- -->
    <section id="projects" class="relative py-24 z-10">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div :class="badgeClass">Portfolio</div>
          <h2 class="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
          <p class="text-white/60 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in problem-solving and product building.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GlassCard v-for="(project, i) in projects" :key="i" :hover-effect="true" class="group flex flex-col h-full">
            <!-- Project Image Placeholder -->
            <div class="h-48 w-full bg-slate-800/50 relative overflow-hidden border-b border-white/10">
              <div
                class="absolute inset-0 bg-linear-to-br from-violet-700/20 to-purple-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  :href="project.link"
                  class="px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >View Live</a
                >
              </div>
            </div>

            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-bold mb-3 group-hover:text-violet-700 transition-colors">{{ project.title }}</h3>
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
          <a href="https://github.com/megaarmos" target="_blank" :class="[buttonBase, buttonVariants.outline, 'inline-flex']">
            View Github Profile <Github :size="18" />
          </a>
        </div>
      </div>
    </section>

    <!-- --- TECH STACK SECTION --- -->
    <section id="stack" class="relative py-24 z-10">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div :class="badgeClass">Tech Stack</div>
          <h2 class="text-3xl md:text-5xl font-bold mb-6">What I Use</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard v-for="(stack, i) in techStack" :key="i" class="p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-violet-700">
                <component :is="stack.icon" :size="24" />
              </div>
              <h3 class="text-xl font-bold">{{ stack.category }}</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in stack.skills"
                :key="skill"
                class="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                {{ skill }}
              </span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>

    <!-- --- CONTACT SECTION --- -->
    <section id="contact" class="relative py-24 z-10">
      <div class="container mx-auto px-6">
        <GlassCard class="relative p-12 md:p-20 text-center overflow-hidden border-violet-700/30 max-w-4xl mx-auto">
          <!-- Background radial glow -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-700/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 class="relative z-10 text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
          <p class="relative z-10 text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
          </p>
          <div class="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:contact@arionpaul.com" :class="[buttonBase, buttonVariants.primary, 'px-10 py-4']">
              <Mail :size="20" /> Send an Email
            </a>
            <a href="#" :class="[buttonBase, buttonVariants.outline, 'px-10 py-4']"> <Linkedin :size="20" /> LinkedIn </a>
          </div>
        </GlassCard>
      </div>
    </section>

    <!-- --- FOOTER --- -->
    <footer class="relative z-10 border-t border-white/5 bg-[#050511]/80 backdrop-blur-md py-8">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-sm text-white/40">© 2025 Arion Paul. All rights reserved. Built with Vue & Tailwind.</div>

        <div class="flex items-center gap-6">
          <a href="#" class="text-white/40 hover:text-white transition-colors text-sm">Github</a>
          <a href="#" class="text-white/40 hover:text-white transition-colors text-sm">Twitter</a>
          <a href="#" class="text-white/40 hover:text-white transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.bg-noise {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.03;
  pointer-events: none;
  z-index: 50;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Ambient Floating Blobs Animation */
@keyframes float {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-float-slow {
  animation: float 15s ease-in-out infinite;
}
.animate-float-medium {
  animation: float 10s ease-in-out infinite;
}
.animate-float-fast {
  animation: float 7s ease-in-out infinite;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0f172a;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>
