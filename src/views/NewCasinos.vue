<script setup lang="ts">
import { computed } from 'vue'
import { casinos } from '../constants/data'

const newCasinos = computed(() => {
  return casinos.filter(c => c.isNew || c.established >= 2023)
})
</script>

<template>
  <div class="new-casinos-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">🆕</span>
        Yeni Casinolar
      </h1>
      <p class="page-subtitle">2023 ve sonrasında açılan en güncel casino siteleri</p>
    </div>
    
    <div class="info-banner">
      <div class="banner-icon">💡</div>
      <div class="banner-content">
        <h3>Yeni Casino Avantajları</h3>
        <p>Yeni açılan siteler genellikle daha yüksek hoşgeldin bonusları ve rekabetçi oranlar sunar.</p>
      </div>
    </div>
    
    <div class="casinos-grid">
      <div v-for="casino in newCasinos" :key="casino.id" class="casino-card">
        <div class="new-badge">YENİ</div>
        
        <div class="casino-header">
          <div class="casino-logo" :style="{ background: `linear-gradient(135deg, ${casino.color}, ${casino.color}dd)` }">
            {{ casino.logo }}
          </div>
          <div class="casino-info">
            <h3>{{ casino.name }}</h3>
            <p class="established">Kuruluş: {{ casino.established }}</p>
          </div>
        </div>
        
        <div class="bonus-section">
          <div class="bonus-tag">HOŞGELDIN BONUSU</div>
          <div class="bonus-amount">{{ casino.bonusAmount }}</div>
          <div class="bonus-desc">{{ casino.bonus }}</div>
        </div>
        
        <div class="features-list">
          <div v-for="feature in casino.features" :key="feature" class="feature-item">
            <span class="check">✓</span>
            {{ feature }}
          </div>
        </div>
        
        <div class="casino-footer">
          <div class="meta-info">
            <span>🎮 {{ casino.games.toLocaleString() }} Oyun</span>
            <span>📜 {{ casino.licenses[0] }}</span>
          </div>
          <button class="btn-register">Kayıt Ol</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-casinos-page {
  animation: slideUp 0.5s ease;
}

.page-header {
  margin-bottom: 24px;
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

.info-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-lg);
  margin-bottom: 28px;
}

.banner-icon {
  font-size: 32px;
}

.banner-content h3 {
  font-size: 16px;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 4px;
}

.banner-content p {
  font-size: 14px;
  color: var(--text-secondary);
}

.casinos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .casinos-grid {
    grid-template-columns: 1fr;
  }
}

.casino-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.casino-card:hover {
  border-color: #10b981;
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.15);
}

.new-badge {
  position: absolute;
  top: 16px;
  right: -32px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 40px;
  transform: rotate(45deg);
  box-shadow: 0 2px 10px rgba(16, 185, 129, 0.3);
}

.casino-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
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
}

.casino-info h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.established {
  font-size: 13px;
  color: var(--text-muted);
}

.bonus-section {
  background: linear-gradient(135deg, rgba(255, 42, 42, 0.1), rgba(255, 85, 85, 0.05));
  border-radius: var(--radius-lg);
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.bonus-tag {
  font-size: 10px;
  font-weight: 700;
  color: var(--nova-red);
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.bonus-amount {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.bonus-desc {
  font-size: 14px;
  color: var(--text-secondary);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-secondary);
}

.check {
  color: #10b981;
  font-weight: 700;
}

.casino-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.meta-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  color: var(--text-muted);
}

.btn-register {
  padding: 12px 24px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-register:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35);
}
</style>
