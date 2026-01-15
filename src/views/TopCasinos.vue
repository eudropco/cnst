<script setup lang="ts">
import { computed } from 'vue'
import { casinos } from '../constants/data'

const topCasinos = computed(() => {
  return [...casinos]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)
})
</script>

<template>
  <div class="top-casinos-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">🏆</span>
        En İyi Casinolar
      </h1>
      <p class="page-subtitle">Kullanıcı puanlarına göre en yüksek değerlendirilen siteler</p>
    </div>
    
    <div class="top-casinos-list">
      <div v-for="(casino, index) in topCasinos" :key="casino.id" class="top-casino-card">
        <div class="rank-badge" :class="{ gold: index === 0, silver: index === 1, bronze: index === 2 }">
          {{ index + 1 }}
        </div>
        
        <div class="casino-logo" :style="{ background: `linear-gradient(135deg, ${casino.color}, ${casino.color}dd)` }">
          {{ casino.logo }}
        </div>
        
        <div class="casino-info">
          <h3>{{ casino.name }}</h3>
          <div class="casino-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-value">{{ casino.rating }}/5</span>
          </div>
          <div class="casino-features">
            <span v-for="feature in casino.features.slice(0, 2)" :key="feature">{{ feature }}</span>
          </div>
        </div>
        
        <div class="casino-bonus">
          <div class="bonus-amount">{{ casino.bonusAmount }}</div>
          <div class="bonus-type">{{ casino.bonus }}</div>
        </div>
        
        <div class="casino-stats">
          <div class="stat">
            <span class="stat-value">{{ casino.games.toLocaleString() }}+</span>
            <span class="stat-label">Oyun</span>
          </div>
          <div class="stat">
            <span class="stat-value">{{ casino.established }}</span>
            <span class="stat-label">Kuruluş</span>
          </div>
        </div>
        
        <button class="btn-visit">Siteye Git</button>
      </div>
    </div>
    
    <div class="info-section">
      <h2>🎯 Nasıl Değerlendiriyoruz?</h2>
      <div class="criteria-grid">
        <div class="criteria-item">
          <span class="criteria-icon">🔒</span>
          <h4>Güvenlik</h4>
          <p>Lisans ve SSL sertifikası kontrolü</p>
        </div>
        <div class="criteria-item">
          <span class="criteria-icon">💰</span>
          <h4>Bonuslar</h4>
          <p>Hoşgeldin bonusu ve promosyonlar</p>
        </div>
        <div class="criteria-item">
          <span class="criteria-icon">🎮</span>
          <h4>Oyun Çeşitliliği</h4>
          <p>Slot, canlı casino, masa oyunları</p>
        </div>
        <div class="criteria-item">
          <span class="criteria-icon">💳</span>
          <h4>Ödeme Hızı</h4>
          <p>Yatırım ve çekim işlem süreleri</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-casinos-page {
  animation: slideUp 0.5s ease;
}

.page-header {
  margin-bottom: 32px;
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

.top-casinos-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
}

.top-casino-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  transition: all 0.3s ease;
}

.top-casino-card:hover {
  border-color: var(--nova-red);
  transform: translateX(8px);
}

.rank-badge {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  flex-shrink: 0;
}

.rank-badge.gold {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
}

.rank-badge.silver {
  background: linear-gradient(135deg, #9ca3af, #6b7280);
  color: white;
}

.rank-badge.bronze {
  background: linear-gradient(135deg, #cd7f32, #a0522d);
  color: white;
}

.casino-logo {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
}

.casino-info {
  flex: 1;
}

.casino-info h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.casino-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.stars {
  color: #f59e0b;
  font-size: 14px;
}

.rating-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
}

.casino-features {
  display: flex;
  gap: 8px;
}

.casino-features span {
  font-size: 12px;
  color: var(--text-muted);
  padding: 4px 10px;
  background: var(--bg-tertiary);
  border-radius: 12px;
}

.casino-bonus {
  text-align: center;
  min-width: 140px;
}

.bonus-amount {
  font-size: 24px;
  font-weight: 800;
  color: #10b981;
  margin-bottom: 2px;
}

.bonus-type {
  font-size: 12px;
  color: var(--text-muted);
}

.casino-stats {
  display: flex;
  gap: 24px;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
}

.btn-visit {
  padding: 14px 28px;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-visit:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 42, 42, 0.35);
}

.info-section {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 32px;
}

.info-section h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.criteria-item {
  text-align: center;
  padding: 20px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-lg);
}

.criteria-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 12px;
}

.criteria-item h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.criteria-item p {
  font-size: 13px;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .top-casino-card {
    flex-wrap: wrap;
  }
  
  .casino-stats {
    display: none;
  }
}

@media (max-width: 768px) {
  .top-casino-card {
    flex-direction: column;
    text-align: center;
  }
  
  .casino-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .casino-features {
    justify-content: center;
  }
}
</style>
