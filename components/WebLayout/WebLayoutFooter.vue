<script setup lang="ts">

</script>

<template>
  <footer pt8 pb12>
    <div flex px5 sm:px10>
      <div fyc>
        <div aria-hidden="true" mr2 text-2xl i-bi-chat-right-heart-fill />
        <p text-sm>
          Made in Lagos, Nigeria
        </p>
      </div>
      <div flex-auto />
      <div>
        <NuxtLink
          to="https://github.com/Tomas-Studio/withgsap"
          target="_blank"
          class="text-sm hover:text-g-blue duration-300
            focus-visible:(outline-0 underline text-g-blue)"
          aria-label="Link to github reposistory"
        >
          Github
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
