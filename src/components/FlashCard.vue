<script setup lang="ts">
import { ref } from 'vue'

const isFlipped = ref(false)

const flipCard = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div class="flashcard-container" @click="flipCard">
    <div class="flashcard" :class="{ 'is-flipped': isFlipped }">
      <!-- Front of card -->
      <div class="flashcard-face front">
        <span class="japanese-text">早く</span>
      </div>

      <!-- Back of card -->
      <div class="flashcard-face back">
        <span class="english-text">Gotta go fast!</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flashcard-container {
  width: 16rem;
  height: 10rem;
  perspective: 1000px;
  cursor: pointer;
}

.flashcard {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.flashcard.is-flipped {
  transform: rotateY(180deg);
}

.flashcard-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 2px solid #e5e7eb;
}

.back {
  transform: rotateY(180deg);
}

.japanese-text {
  font-size: 2.25rem;
  font-weight: bold;
  color: #1f2937;
}

.english-text {
  font-size: 1.25rem;
  color: #374151;
}
</style>
