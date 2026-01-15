<script setup lang="ts">
import { ref } from 'vue'

const selectedProvider = ref('Pragmatic Play')
const isSpinning = ref(false)
const selectedGame = ref('')

const providers = [
  'Pragmatic Play',
  'NetEnt',
  'Hacksaw Gaming',
  'NoLimit City',
  'Play\'n GO',
  'Push Gaming',
  'Big Time Gaming'
]

const games = [
  'Gates of Olympus', 'Sweet Bonanza', 'Sugar Rush', 'Starlight Princess',
  'Wisdom of Athena', 'Big Bass Splash', 'Dog House', 'Fruit Party'
]

const spin = () => {
  isSpinning.value = true
  
  setTimeout(() => {
    isSpinning.value = false
    selectedGame.value = games[Math.floor(Math.random() * games.length)] || ''
  }, 3000)
}
</script>

<template>
  <div class="game-picker-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🎲</span>
        Oyun Seçici
      </h3>
    </div>
    
    <div class="game-picker">
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Hangi Oyunu Oynayacağına Karar Veremedin mi?</h2>
      <p style="color: var(--text-muted); margin-bottom: 24px;">Sağlayıcı seç ve çarkı çevir!</p>
      
      <!-- Provider Select -->
      <select v-model="selectedProvider" class="picker-select">
        <option v-for="provider in providers" :key="provider" :value="provider">
          {{ provider }}
        </option>
      </select>
      
      <!-- Wheel -->
      <div class="picker-wheel" :class="{ 'animate-spin': isSpinning }">
        <div class="picker-center">🎰</div>
      </div>
      
      <!-- Selected Game Display -->
      <div v-if="selectedGame && !isSpinning" style="margin: 24px 0; padding: 16px; background: var(--bg-tertiary); border-radius: var(--radius-lg); border: 2px solid var(--accent-orange);">
        <div style="font-size: 14px; color: var(--text-muted); margin-bottom: 4px;">Seçilen Oyun:</div>
        <div style="font-size: 24px; font-weight: 700; color: var(--accent-orange);">{{ selectedGame }}</div>
      </div>
      
      <!-- Spin Button -->
      <button class="picker-btn" @click="spin" :disabled="isSpinning">
        {{ isSpinning ? 'Çevriliyor...' : 'ÇEVİR VE SEÇ!' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.game-picker-page {
  animation: slideUp 0.5s ease;
}

.picker-wheel {
  transition: transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99);
}

.picker-wheel.animate-spin {
  animation: none;
  transform: rotate(1800deg);
}

.picker-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
