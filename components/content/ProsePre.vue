<script setup lang="ts">
import { getHighlighter } from 'shiki'
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers'

interface Props {
  code: string
  language: string
  filename?: string | null
  meta: string | null
  class: string | null
  highlights?: () => Array<number>
  style?: string | object | null
}

const props = withDefaults(defineProps<Props>(), { code: '', filename: null, language: '', meta: null, class: null, highlights: () => [], style: null })

const highlighter = await getHighlighter({
  themes: ['one-dark-pro', 'solarized-dark'],
  langs: ['css', 'js', 'vue', 'ts', 'text'],
})

const highlight = computed(() => {
  return highlighter.codeToHtml(props.code, {
    lang: props.language,
    themes: {
      light: 'one-dark-pro',
      dark: 'one-dark-pro',
    },
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
    ],
  })
})
</script>

<template>
  <div relative>
    <div class="[&>pre]:(px4 pt14 pb2 of-x-auto) sb focus-visible:( [&>pre]:(outline-1 outline-g-yellow outline-dashed)) [&>code]:( [&>pre]:(font-mono text-sm)) border-neutral-3 dark:border-neutral-8 my6 rounded-sm" v-html="highlight" />
    <div class="absolute top-0 left-0 py1 pl4 pr2 fyc wfull border-b-2 border-dark">
      <span class="text-(3.75 neutral-5) font-mono">
        {{ props.language }}
      </span>
      <div flex-auto />
      <span class="text-(3.75 neutral-5) font-mono mr0.5">
        {{ props.filename }}
      </span>
      <button
        v-tooltip.left="{ content: 'Copied', triggers: [] }"
        class="p2 text-base text-neutral-4 hover:text-neutral-5 duration-300" focus-visible:text-neutral-6 dark:focus-visible:text-neutral-3
        focusable
        aria-label="Copy code"
      >
        <div i-fluent:copy-select-20-regular />
        <!-- <div i-fluent:copy-select-20-filled /> -->
      </button>
    </div>
  </div>
</template>
