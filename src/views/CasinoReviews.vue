<script setup lang="ts">
import { ref, computed } from 'vue'
import { casinos } from '../constants/data'

const filterLicense = ref('all')
const filterPayment = ref('all')
const sortBy = ref('rating')

const licenses = ['all', 'Curacao', 'MGA']
const payments = ['all', 'Papara', 'Kripto', 'Havale', 'USDT']

const filteredCasinos = computed(() => {
  let result = [...casinos]
  
  if (filterLicense.value !== 'all') {
    result = result.filter(c => c.licenses.includes(filterLicense.value))
  }
  
  if (filterPayment.value !== 'all') {
    result = result.filter(c => c.paymentMethods.includes(filterPayment.value))
  }
  
  if (sortBy.value === 'rating') {
    result.sort((a, b) => b.rating - a.rating)
  } else if (sortBy.value === 'bonus') {
    result.sort((a, b) => parseInt(b.bonusAmount) - parseInt(a.bonusAmount))
  } else if (sortBy.value === 'games') {
    result.sort((a, b) => b.games - a.games)
  }
  
  return result
})

const renderStars = (rating: number) => {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return { full, half, empty: 5 - full - (half ? 1 : 0) }
}
</script>

<template>
  <div class="casino-reviews-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">🎰</span>
        Casino İncelemeleri
      </h1>
      <p class="page-subtitle">En güvenilir ve avantajlı casino sitelerini keşfedin</p>
    </div>
    
    <!-- Filters -->
    <div class="filters-bar">
      <div class="filter-group">
        <label>Lisans</label>
        <select v-model="filterLicense">
          <option v-for="l in licenses" :key="l" :value="l">
            {{ l === 'all' ? 'Tüm Lisanslar' : l }}
          </option>
        </select>
      </div>
      
      <div class="filter-group">
        <label>Ödeme</label>
        <select v-model="filterPayment">
          <option v-for="p in payments" :key="p" :value="p">
            {{ p === 'all' ? 'Tüm Yöntemler' : p }}
          </option>
        </select>
      </div>
      
      <div class="filter-group">
        <label>Sırala</label>
        <select v-model="sortBy">
          <option value="rating">En Yüksek Puan</option>
          <option value="bonus">En Yüksek Bonus</option>
          <option value="games">En Çok Oyun</option>
        </select>
      </div>
    </div>
    
    <!-- Casino Cards -->
    <div class="casinos-grid">
      <div v-for="casino in filteredCasinos" :key="casino.id" class="casino-card">
        <div class="casino-header">
          <div class="casino-logo" :style="{ background: `linear-gradient(135deg, ${casino.color}, ${casino.color}dd)` }">
            {{ casino.logo }}
          </div>
          <div class="casino-info">
            <h3>
              {{ casino.name }}
              <span v-if="casino.isNew" class="badge-new">YENİ</span>
              <span v-if="casino.isFeatured" class="badge-featured">⭐</span>
            </h3>
            <div class="casino-rating">
              <span v-for="n in renderStars(casino.rating).full" :key="'f'+n" class="star filled">★</span>
              <span v-if="renderStars(casino.rating).half" class="star half">★</span>
              <span v-for="n in renderStars(casino.rating).empty" :key="'e'+n" class="star empty">★</span>
              <span class="rating-value">{{ casino.rating }}</span>
            </div>
          </div>
        </div>
        
        <div class="casino-bonus">
          <div class="bonus-label">Hoşgeldin Bonusu</div>
          <div class="bonus-value">{{ casino.bonus }}</div>
          <div class="bonus-amount">{{ casino.bonusAmount }}'ye kadar</div>
        </div>
        
        <div class="casino-features">
          <span v-for="feature in casino.features" :key="feature" class="feature-tag">
            {{ feature }}
          </span>
        </div>
        
        <div class="casino-meta">
          <div class="meta-item">
            <span class="meta-label">Oyun</span>
            <span class="meta-value">{{ casino.games.toLocaleString() }}+</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Min. Yatırım</span>
            <span class="meta-value">{{ casino.minDeposit }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Lisans</span>
            <span class="meta-value">{{ casino.licenses[0] }}</span>
          </div>
        </div>
        
        <div class="casino-actions">
          <button class="btn-primary">Siteye Git</button>
          <button class="btn-secondary">İncele</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.casino-reviews-page {
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

.filters-bar {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  padding: 20px;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.filter-group label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-group select {
  padding: 10px 16px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 14px;
  min-width: 160px;
  cursor: pointer;
}

.filter-group select:focus {
  border-color: var(--nova-red);
  outline: none;
}

.casinos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 1000px) {
  .casinos-grid {
    grid-template-columns: 1fr;
  }
}

.casino-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 24px;
  transition: all 0.3s ease;
}

.casino-card:hover {
  border-color: var(--nova-red);
  box-shadow: 0 8px 32px rgba(255, 42, 42, 0.1);
  transform: translateY(-2px);
}

.casino-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.casino-logo {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
}

.casino-info h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.badge-new {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 20px;
  font-weight: 700;
}

.badge-featured {
  font-size: 16px;
}

.casino-rating {
  display: flex;
  align-items: center;
  gap: 2px;
}

.star {
  font-size: 16px;
}

.star.filled {
  color: #f59e0b;
}

.star.half {
  color: #f59e0b;
  opacity: 0.5;
}

.star.empty {
  color: var(--text-muted);
  opacity: 0.3;
}

.rating-value {
  margin-left: 8px;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
}

.casino-bonus {
  background: linear-gradient(135deg, rgba(255, 42, 42, 0.1), rgba(255, 85, 85, 0.05));
  border: 1px solid rgba(255, 42, 42, 0.2);
  border-radius: var(--radius-lg);
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
}

.bonus-label {
  font-size: 11px;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.bonus-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--nova-red);
  margin-bottom: 4px;
}

.bonus-amount {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
}

.casino-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.feature-tag {
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
}

.casino-meta {
  display: flex;
  gap: 24px;
  padding: 16px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 16px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
}

.meta-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.casino-actions {
  display: flex;
  gap: 12px;
}

.btn-primary {
  flex: 1;
  padding: 14px 24px;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 42, 42, 0.35);
}

.btn-secondary {
  padding: 14px 24px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: var(--nova-red);
  color: var(--nova-red);
}

@media (max-width: 768px) {
  .filters-bar {
    flex-direction: column;
  }
  
  .filter-group select {
    width: 100%;
  }
  
  .casino-meta {
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .casino-actions {
    flex-direction: column;
  }
  
  .page-title {
    font-size: 22px;
  }
  
  .casino-card {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 18px;
    gap: 8px;
  }
  
  .title-icon {
    font-size: 24px;
  }
  
  .page-subtitle {
    font-size: 13px;
  }
  
  .filters-bar {
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .filter-group label {
    font-size: 11px;
  }
  
  .filter-group select {
    padding: 10px 12px;
    font-size: 13px;
  }
  
  .casino-card {
    padding: 14px;
  }
  
  .casino-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .casino-logo {
    margin: 0 auto;
  }
  
  .casino-rating {
    justify-content: center;
  }
  
  .casino-bonus {
    text-align: center;
  }
  
  .bonus-amount {
    font-size: 20px;
  }
  
  .casino-actions {
    gap: 8px;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 10px 16px;
    font-size: 12px;
  }
}
</style>
