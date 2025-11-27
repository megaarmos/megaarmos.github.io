<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

type Variant = "default" | "strong" | "light";

interface Props {
  variant?: Variant;
  hoverEffect?: boolean;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  hoverEffect: false,
});

// Styles corresponding to the original React version
const variants: Record<Variant, string> = {
  default: "bg-white/5 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
  strong: "bg-slate-900/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
  light: "bg-white/10 backdrop-blur-lg border-white/20 shadow-[0_4px_16px_0_rgba(255,255,255,0.05)]",
};

const baseStyles = "relative overflow-hidden transition-all duration-300 border";
const hoverStyles = "hover:-translate-y-1 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_15px_40px_rgba(78,212,255,0.15)]";
</script>

<template>
  <div :class="cn(baseStyles, variants[props.variant], props.hoverEffect ? hoverStyles : '', 'rounded-2xl', props.class)">
    <!-- Glossy sheen reflection on top -->
    <div
      class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-50 pointer-events-none" />
    <slot />
  </div>
</template>
