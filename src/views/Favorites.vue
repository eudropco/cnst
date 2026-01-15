<script setup lang="ts">
import { ref } from 'vue'
import { casinos } from '../constants/data'

// Simulated favorites (in real app would come from user store)
const favoriteIds = ref(['betivo', 'gamedom', 'hepbet'])

const favoriteCasinos = casinos.filter(c => favoriteIds.value.includes(c.id))

const removeFavorite = (id: string) => {
  favoriteIds.value = favoriteIds.value.filter(f => f !== id)
}
</script>

<template>
  <div class="favorites-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">❤️</span>
        Favorilerim
      </h1>
      <p class="page-subtitle">Beğendiğiniz casino sitelerine hızlı erişin</p>
    </div>
    
    <div v-if="favoriteCasinos.length > 0" class="favorites-grid">
      <div v-for="casino in favoriteCasinos" :key="casino.id" class="favorite-card">
        <button class="remove-btn" @click="removeFavorite(casino.id)">×</button>
        
        <div class="casino-logo" :style="{ background: `linear-gradient(135deg, ${casino.color}, ${casino.color}dd)` }">
          {{ casino.logo }}
        </div>
        
        <div class="casino-info">
          <h3>{{ casino.name }}</h3>
          <div class="rating">★ {{ casino.rating }}</div>
        </div>
        
        <div class="bonus-info">
          <span class="bonus-amount">{{ casino.bonusAmount }}</span>
          <span class="bonus-text">{{ casino.bonus }}</span>
        </div>
        
        <div class="card-actions">
          <button class="btn-visit">Siteye Git</button>
          <router-link :to="`/casino/${casino.id}`" class="btn-details">Detay</router-link>
        </div>
      </div>
    </div>
    
    <div v-else class="empty-state">
      <span class="empty-icon">💔</span>
      <h3>Henüz favori yok</h3>
      <p>Casino incelemelerinden beğendiğiniz siteleri favorilerinize ekleyin</p>
      <router-link to="/casino-incelemeleri" class="btn-browse">Casinoları Keşfet</router-link>
    </div>
  </div>
</template>

<style scoped>
.favorites-page {
  animation: slideUp 0.5s ease;
}

.page-header {
  margin-bottom: 28px;
}

.page-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.title-icon {
  font-size: 32px;
}

.page-subtitle {
  color: var(--text-muted);
  font-size: 15px;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1100px) {
  .favorites-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .favorites-grid {
    grid-template-columns: 1fr;
  }
}

.favorite-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.favorite-card:hover {
  border-color: var(--nova-red);
  transform: translateY(-4px);
}

.remove-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: #ef4444;
  border-color: #ef4444;
  color: white;
}

.casino-logo {
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 800;
  color: white;
}

.casino-info h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.rating {
  color: #f59e0b;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
}

.bonus-info {
  padding: 16px;
  background: linear-gradient(135deg, rgba(255, 42, 42, 0.1), rgba(255, 85, 85, 0.05));
  border-radius: var(--radius-md);
  margin-bottom: 16px;
}

.bonus-amount {
  display: block;
  font-size: 22px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.bonus-text {
  font-size: 13px;
  color: var(--text-muted);
}

.card-actions {
  display: flex;
  gap: 10px;
}

.btn-visit {
  flex: 1;
  padding: 12px;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-visit:hover {
  transform: scale(1.02);
}

.btn-details {
  padding: 12px 16px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-details:hover {
  border-color: var(--nova-red);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
}

.empty-icon {
  font-size: 64px;
  display: block;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.empty-state p {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.btn-browse {
  display: inline-block;
  padding: 14px 28px;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  color: white;
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-browse:hover {
  transform: scale(1.05);
}
</style>
