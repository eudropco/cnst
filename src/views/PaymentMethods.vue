<script setup lang="ts">
import { ref, computed } from 'vue'
import { paymentMethods } from '../constants/data'

const activeFilter = ref('all')

const filters = [
  { id: 'all', name: 'Tümü', icon: '💎' },
  { id: 'crypto', name: 'Kripto', icon: '₿' },
  { id: 'ewallet', name: 'E-Cüzdan', icon: '💳' },
  { id: 'bank', name: 'Banka', icon: '🏦' }
]

const filteredMethods = computed(() => {
  if (activeFilter.value === 'all') return paymentMethods
  return paymentMethods.filter(m => m.type === activeFilter.value)
})
</script>

<template>
  <div class="payment-methods-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">💳</span>
        Ödeme Yöntemleri
      </h1>
      <p class="page-subtitle">Casino sitelerinde kullanabileceğiniz tüm ödeme seçenekleri</p>
    </div>
    
    <!-- Filters -->
    <div class="filter-tabs">
      <button 
        v-for="filter in filters" 
        :key="filter.id"
        class="filter-tab"
        :class="{ active: activeFilter === filter.id }"
        @click="activeFilter = filter.id"
      >
        <span class="tab-icon">{{ filter.icon }}</span>
        {{ filter.name }}
      </button>
    </div>
    
    <!-- Payment Methods Grid -->
    <div class="methods-grid">
      <div v-for="method in filteredMethods" :key="method.id" class="method-card">
        <div class="method-header">
          <div class="method-icon" :class="method.type">{{ method.icon }}</div>
          <div class="method-info">
            <h3>{{ method.name }}</h3>
            <span class="method-type">{{ 
              method.type === 'crypto' ? 'Kripto Para' :
              method.type === 'ewallet' ? 'E-Cüzdan' : 'Banka'
            }}</span>
          </div>
          <span v-if="method.popular" class="popular-badge">Popüler</span>
        </div>
        
        <div class="method-details">
          <div class="detail-row">
            <div class="detail-item">
              <span class="detail-label">Min. Yatırım</span>
              <span class="detail-value">{{ method.minDeposit }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Max. Yatırım</span>
              <span class="detail-value">{{ method.maxDeposit }}</span>
            </div>
          </div>
          
          <div class="detail-row">
            <div class="detail-item">
              <span class="detail-label">Min. Çekim</span>
              <span class="detail-value">{{ method.minWithdraw }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Max. Çekim</span>
              <span class="detail-value">{{ method.maxWithdraw }}</span>
            </div>
          </div>
          
          <div class="timing-row">
            <div class="timing-item deposit">
              <span class="timing-icon">⬇️</span>
              <span class="timing-text">Yatırım: {{ method.depositTime }}</span>
            </div>
            <div class="timing-item withdraw">
              <span class="timing-icon">⬆️</span>
              <span class="timing-text">Çekim: {{ method.withdrawTime }}</span>
            </div>
          </div>
          
          <div class="fee-info">
            <span class="fee-label">İşlem Ücreti:</span>
            <span class="fee-value" :class="{ free: method.fee === 'Ücretsiz' }">{{ method.fee }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Info Section -->
    <div class="info-section">
      <h2>💡 Ödeme Yöntemi Seçerken</h2>
      <div class="tips-grid">
        <div class="tip-card">
          <span class="tip-icon">⚡</span>
          <h4>Hız</h4>
          <p>Kripto ve e-cüzdanlar genellikle en hızlı işlem sürelerine sahiptir.</p>
        </div>
        <div class="tip-card">
          <span class="tip-icon">🔒</span>
          <h4>Güvenlik</h4>
          <p>Tüm yöntemler SSL şifrelemesi ile korunur. Kripto ek anonimlik sağlar.</p>
        </div>
        <div class="tip-card">
          <span class="tip-icon">💰</span>
          <h4>Limitler</h4>
          <p>Yüksek limitler için banka transferi veya kripto tercih edilebilir.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.payment-methods-page {
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

.filter-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.filter-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tab:hover {
  border-color: var(--nova-red);
  color: var(--text-primary);
}

.filter-tab.active {
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  border-color: transparent;
  color: white;
}

.tab-icon {
  font-size: 18px;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

@media (max-width: 900px) {
  .methods-grid {
    grid-template-columns: 1fr;
  }
}

.method-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 24px;
  transition: all 0.3s ease;
}

.method-card:hover {
  border-color: var(--nova-red);
  transform: translateY(-4px);
}

.method-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.method-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.method-icon.crypto {
  background: linear-gradient(135deg, #f7931a, #ffb84d);
}

.method-icon.ewallet {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.method-icon.bank {
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
}

.method-info h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.method-type {
  font-size: 12px;
  color: var(--text-muted);
}

.popular-badge {
  margin-left: auto;
  padding: 6px 12px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  font-size: 11px;
  font-weight: 700;
  border-radius: 20px;
}

.method-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.detail-row {
  display: flex;
  gap: 16px;
}

.detail-item {
  flex: 1;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
}

.detail-label {
  display: block;
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.detail-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.timing-row {
  display: flex;
  gap: 12px;
}

.timing-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: var(--radius-md);
}

.timing-item.deposit {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.timing-item.withdraw {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.timing-text {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
}

.fee-info {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.fee-label {
  font-size: 13px;
  color: var(--text-muted);
}

.fee-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.fee-value.free {
  color: #10b981;
}

.info-section {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 32px;
}

.info-section h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.tip-card {
  text-align: center;
  padding: 20px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-lg);
}

.tip-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 12px;
}

.tip-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.tip-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
}
</style>
