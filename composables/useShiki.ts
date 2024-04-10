import { getHighlighter } from 'shiki'

export const highlighter = await getHighlighter({
  themes: ['one-dark-pro', 'solarized-dark'],
  langs: ['css', 'js', 'vue', 'ts', 'text'],
})
