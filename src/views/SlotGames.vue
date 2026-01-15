<script setup lang="ts">
import { ref } from 'vue'

const providers = ref([
  { name: 'Pragmatic Play', active: true },
  { name: 'HACKSAW', active: false },
  { name: 'NETENT', active: false },
  { name: 'NOLIMIT', active: false },
  { name: 'PUSH', active: false },
  { name: 'PLAY N GO', active: false },
  { name: 'Gaming', active: false }
])

const slots = ref([
  { id: 1, name: 'Gates of Olympus', image: '⚡', provider: 'Pragmatic Play' },
  { id: 2, name: 'Sugar Rush', image: '🍭', provider: 'Pragmatic Play' },
  { id: 3, name: 'Sweet Bonanza', image: '🍬', provider: 'Pragmatic Play' },
  { id: 4, name: 'Wisdom of Athena', image: '🦉', provider: 'Pragmatic Play' },
  { id: 5, name: 'Big Bass Splash', image: '🐟', provider: 'Pragmatic Play' },
  { id: 6, name: 'Starlight Princess', image: '✨', provider: 'Pragmatic Play' },
  { id: 7, name: 'Olympus', image: '🏛️', provider: 'Pragmatic Play' },
  { id: 8, name: 'Sugar Rush', image: '🎂', provider: 'Pragmatic Play' },
  { id: 9, name: 'Sweet Baklava', image: '🥮', provider: 'Pragmatic Play' },
  { id: 10, name: 'Gates of Olympus Rush', image: '🌩️', provider: 'Pragmatic Play' },
  { id: 11, name: 'Sweet Bonanza Xmas', image: '🎄', provider: 'Pragmatic Play' },
  { id: 12, name: 'Wisdom of Athena 1000', image: '🔮', provider: 'Pragmatic Play' },
  { id: 13, name: 'Journey to the West', image: '🐲', provider: 'Pragmatic Play' },
  { id: 14, name: 'Gold Rush', image: '💰', provider: 'Pragmatic Play' },
  { id: 15, name: 'Bounty Hunter', image: '🤠', provider: 'Pragmatic Play' },
  { id: 16, name: 'Fruit Party', image: '🍇', provider: 'Pragmatic Play' },
  { id: 17, name: 'Jewels of Olympus', image: '💎', provider: 'Pragmatic Play' },
  { id: 18, name: 'Coffee Wild', image: '☕', provider: 'Pragmatic Play' },
  { id: 19, name: 'Romeo 2', image: '💕', provider: 'Pragmatic Play' },
  { id: 20, name: 'Super 7', image: '7️⃣', provider: 'Pragmatic Play' },
  { id: 21, name: 'Sugar Rush Xmas', image: '🎅', provider: 'Pragmatic Play' },
  { id: 22, name: 'Gates of Hades', image: '🔥', provider: 'Pragmatic Play' },
  { id: 23, name: 'Sweet Bonanza', image: '🍰', provider: 'Pragmatic Play' },
  { id: 24, name: '5 Lions', image: '🦁', provider: 'Pragmatic Play' },
  { id: 25, name: 'Triple Coffee', image: '☕', provider: 'Pragmatic Play' },
  { id: 26, name: 'Vikings Fortune', image: '⚔️', provider: 'Pragmatic Play' },
  { id: 27, name: 'Dragon Hero', image: '🐉', provider: 'Pragmatic Play' },
  { id: 28, name: 'Money Rain', image: '💸', provider: 'Pragmatic Play' }
])

const activeProvider = ref('Pragmatic Play')

const setProvider = (name: string) => {
  activeProvider.value = name
  providers.value.forEach(p => p.active = p.name === name)
}
</script>

<template>
  <div class="slot-games-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🎰</span>
        Slot Oyunları
      </h3>
    </div>
    
    <!-- Provider Tabs -->
    <div class="provider-tabs">
      <button 
        v-for="provider in providers" 
        :key="provider.name"
        class="provider-tab"
        :class="{ active: provider.active }"
        @click="setProvider(provider.name)"
      >
        {{ provider.name }}
      </button>
    </div>
    
    <!-- Slot Games Grid -->
    <div class="slot-games-grid">
      <div v-for="slot in slots" :key="slot.id" class="slot-card">
        <div class="slot-image">
          <span>{{ slot.image }}</span>
        </div>
        <div class="slot-name">{{ slot.name }}</div>
      </div>
    </div>
    
    <!-- Load More Button -->
    <div style="text-align: center; margin-top: 24px;">
      <button class="event-btn" style="display: inline-block; padding: 14px 48px;">
        Daha Fazla Yükle
      </button>
    </div>
  </div>
</template>

<style scoped>
.slot-games-page {
  animation: slideUp 0.5s ease;
}

.slot-games-grid {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.slot-card:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 32px rgba(255, 107, 0, 0.3);
}

.slot-image {
  background: linear-gradient(135deg, #2a2545 0%, #1a1530 100%);
  font-size: 40px;
}
</style>
