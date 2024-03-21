<script setup lang="ts">
interface Props {
  data: string
}

defineProps<Props>()
</script>

<template>
  <div class="time-segment">
    <div class="display">
      <div class="display__top">
        {{ data }}
      </div>
      <div class="display__bottom">
        {{ data }}
      </div>
      <div class="overlay">
        <div class="overlay__top">
          {{ data }}
        </div>
        <div class="overlay__bottom">
          {{ data }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.time-segment {
  --uno: block w25 text-8xl fw500;

  & .display {
    --uno: relative hfull;

    & .display__top, .display__bottom {
      --uno: of-hidden wfull h50% relative;
    }

    & .display__top {
      --uno: text-gray-2 pt bg-dark leading-[1] rounded-t-md;
    }

    & .display__bottom {
      --uno: text-gray-1 pb bg-neutral-8 leading-[0];
      --uno: rounded-b-md;
    }

    & .overlay {
      --uno: absolute top-0 hfull wfull perspective-400;

      & .overlay__top, .overlay__bottom {
        --uno: absolute of-hidden wfull h50%;
      }

      & .overlay__top {
        --uno: top-0 text-gray-2 pt bg-dark leading-[1] rounded-t-md origin-bottom;
        animation: flip-top 0.8s linear;
      }

      & .overlay__bottom {
        --uno: bottom-0 text-gray-1 pb bg-neutral-8 leading-[0];
        --uno: rounded-b-md border-t-2 border-dark origin-top;
        animation: flip-bottom 0.8s linear;
      }
    }
  }
}

@keyframes flip-top {
  0% { transform: rotateX(0deg) }
  50%, 100% { transform: rotateX(-90deg) }
}

@keyframes flip-bottom {
  0%, 50% { transform: rotateX(90deg) }
  100% { transform: rotateX(9\0deg) }
}
</style>
