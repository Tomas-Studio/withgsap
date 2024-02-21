<template>
  <div flex="~ col" min-h-100dvh relative>
    <WebLayoutNav />
    <main flex-1>
      <slot />
    </main>
    <WebLayoutFooter />
  </div>
</template>
