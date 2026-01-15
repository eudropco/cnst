<script setup lang="ts">
import { ref, computed } from 'vue'
import { casinos } from '../constants/data'

const selectedCasinos = ref<string[]>([])
const maxCompare = 3

const availableCasinos = computed(() => casinos)

const comparedCasinos = computed(() => 
  casinos.filter(c => selectedCasinos.value.includes(c.id))
)

const toggleCasino = (id: string) => {
  if (selectedCasinos.value.includes(id)) {
    selectedCasinos.value = selectedCasinos.value.filter(c => c !== id)
  } else if (selectedCasinos.value.length < maxCompare) {
    selectedCasinos.value.push(id)
  }
}

const clearAll = () => {
  selectedCasinos.value = []
}
</script>

<template>
  <div class="compare-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">⚖️</span>
        Casino Karşılaştır
      </h1>
      <p class="page-subtitle">En fazla {{ maxCompare }} casino sitesini yan yana karşılaştırın</p>
    </div>
    
    <!-- Casino Selector -->
    <div class="selector-section">
      <h2>Casino Seçin ({{ selectedCasinos.length }}/{{ maxCompare }})</h2>
      <div class="casino-selector">
        <button 
          v-for="casino in availableCasinos" 
          :key="casino.id"
          class="casino-chip"
          :class="{ selected: selectedCasinos.includes(casino.id) }"
          @click="toggleCasino(casino.id)"
          :disabled="!selectedCasinos.includes(casino.id) && selectedCasinos.length >= maxCompare"
        >
          <span class="chip-logo" :style="{ background: casino.color }">{{ casino.logo }}</span>
          {{ casino.name }}
          <span v-if="selectedCasinos.includes(casino.id)" class="check">✓</span>
        </button>
      </div>
      <button v-if="selectedCasinos.length > 0" @click="clearAll" class="btn-clear">
        Temizle
      </button>
    </div>
    
    <!-- Comparison Table -->
    <div v-if="comparedCasinos.length >= 2" class="comparison-section">
      <div class="comparison-table">
        <!-- Header Row -->
        <div class="comparison-row header-row">
          <div class="comparison-label"></div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            <div class="casino-header">
              <div class="logo" :style="{ background: `linear-gradient(135deg, ${casino.color}, ${casino.color}dd)` }">
                {{ casino.logo }}
              </div>
              <h3>{{ casino.name }}</h3>
            </div>
          </div>
        </div>
        
        <!-- Rating -->
        <div class="comparison-row">
          <div class="comparison-label">Puan</div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            <span class="rating-value">★ {{ casino.rating }}</span>
          </div>
        </div>
        
        <!-- Bonus -->
        <div class="comparison-row">
          <div class="comparison-label">Bonus</div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            <span class="bonus-value">{{ casino.bonusAmount }}</span>
            <span class="bonus-text">{{ casino.bonus }}</span>
          </div>
        </div>
        
        <!-- Games -->
        <div class="comparison-row">
          <div class="comparison-label">Oyun Sayısı</div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            {{ casino.games.toLocaleString() }}+
          </div>
        </div>
        
        <!-- Min Deposit -->
        <div class="comparison-row">
          <div class="comparison-label">Min. Yatırım</div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            {{ casino.minDeposit }}
          </div>
        </div>
        
        <!-- License -->
        <div class="comparison-row">
          <div class="comparison-label">Lisans</div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            {{ casino.licenses.join(', ') }}
          </div>
        </div>
        
        <!-- Payment Methods -->
        <div class="comparison-row">
          <div class="comparison-label">Ödeme</div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell payment-cell">
            <span v-for="method in casino.paymentMethods.slice(0, 3)" :key="method" class="payment-tag">
              {{ method }}
            </span>
          </div>
        </div>
        
        <!-- Mobile App -->
        <div class="comparison-row">
          <div class="comparison-label">Mobil Uygulama</div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            <span :class="casino.hasMobileApp ? 'yes' : 'no'">
              {{ casino.hasMobileApp ? '✓ Var' : '✗ Yok' }}
            </span>
          </div>
        </div>
        
        <!-- Live Casino -->
        <div class="comparison-row">
          <div class="comparison-label">Canlı Casino</div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            <span :class="casino.hasLiveCasino ? 'yes' : 'no'">
              {{ casino.hasLiveCasino ? '✓ Var' : '✗ Yok' }}
            </span>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="comparison-row cta-row">
          <div class="comparison-label"></div>
          <div v-for="casino in comparedCasinos" :key="casino.id" class="comparison-cell">
            <button class="btn-visit">Siteye Git</button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else-if="selectedCasinos.length === 1" class="select-more">
      <p>Karşılaştırma için en az 2 casino seçin</p>
    </div>
    
    <div v-else class="empty-state">
      <span class="empty-icon">⚖️</span>
      <h3>Casino seçin</h3>
      <p>Karşılaştırmak istediğiniz casinoları yukarıdan seçin</p>
    </div>
  </div>
</template>

<style scoped>
.compare-page {
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

.selector-section {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 24px;
  margin-bottom: 28px;
}

.selector-section h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.casino-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.casino-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.casino-chip:hover:not(:disabled) {
  border-color: var(--nova-red);
}

.casino-chip.selected {
  background: linear-gradient(135deg, rgba(255, 42, 42, 0.15), rgba(255, 85, 85, 0.1));
  border-color: var(--nova-red);
  color: var(--text-primary);
}

.casino-chip:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.chip-logo {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: white;
}

.check {
  color: var(--nova-red);
  font-weight: 700;
}

.btn-clear {
  padding: 8px 16px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 13px;
  color: var(--text-muted);
  cursor: pointer;
}

.btn-clear:hover {
  border-color: var(--nova-red);
  color: var(--nova-red);
}

.comparison-table {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.comparison-row {
  display: flex;
  border-bottom: 1px solid var(--border-color);
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-label {
  width: 160px;
  padding: 16px 20px;
  background: var(--bg-tertiary);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  flex-shrink: 0;
}

.comparison-cell {
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: var(--text-primary);
  border-left: 1px solid var(--border-color);
}

.header-row {
  background: var(--bg-tertiary);
}

.casino-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
}

.casino-header .logo {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  color: white;
}

.casino-header h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.rating-value {
  color: #f59e0b;
  font-weight: 700;
  font-size: 16px;
}

.bonus-value {
  font-size: 18px;
  font-weight: 800;
  color: #10b981;
  margin-bottom: 4px;
}

.bonus-text {
  font-size: 12px;
  color: var(--text-muted);
}

.payment-cell {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
}

.payment-tag {
  padding: 4px 8px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  font-size: 11px;
}

.yes {
  color: #10b981;
  font-weight: 600;
}

.no {
  color: var(--text-muted);
}

.cta-row .comparison-cell {
  padding: 20px;
}

.btn-visit {
  padding: 12px 28px;
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
  transform: scale(1.05);
}

.select-more,
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
}

.empty-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
}

.empty-state h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.empty-state p,
.select-more p {
  font-size: 14px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .comparison-label {
    width: 100px;
    font-size: 11px;
  }
  
  .comparison-cell {
    font-size: 12px;
    padding: 12px;
  }
}
</style>
