<script setup lang="ts">
import { ref } from 'vue'

const games = ref([
  { 
    id: 1, 
    name: 'Blackjack', 
    image: '🃏', 
    badge: 'Created by SlotNova',
    desc: 'Klasik kart oyunu'
  },
  { 
    id: 2, 
    name: 'Dice', 
    image: '🎲', 
    badge: 'Created by SlotNova',
    desc: 'Zar at, kazan!'
  },
  { 
    id: 3, 
    name: 'Mines', 
    image: '💣', 
    badge: 'Created by SlotNova',
    desc: 'Mayınlardan kaç!'
  },
  { 
    id: 4, 
    name: 'Limbo', 
    image: '🚀', 
    badge: 'Created by SlotNova',
    desc: 'Yüksek çarpan'
  }
])
</script>

<template>
  <div class="games-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🎮</span>
        Oyunlar
      </h3>
    </div>
    
    <div class="games-grid" style="grid-template-columns: repeat(4, 1fr);">
      <div v-for="game in games" :key="game.id" class="game-card">
        <div v-if="game.badge" class="game-card-badge">{{ game.badge }}</div>
        <div class="game-image">
          <span style="font-size: 64px; position: relative; z-index: 1;">{{ game.image }}</span>
          <div class="game-overlay">
            <div class="game-play-btn">▶</div>
          </div>
        </div>
        <div class="game-info">
          <h4>{{ game.name }}</h4>
          <p class="game-provider">{{ game.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.games-page {
  animation: slideUp 0.5s ease;
}

.games-grid {
  gap: 24px;
}

.game-card {
  min-height: 220px;
}

.game-image {
  height: 180px;
}
</style>
