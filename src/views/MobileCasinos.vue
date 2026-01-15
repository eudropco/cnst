<script setup lang="ts">
import { computed } from 'vue'
import { casinos } from '../constants/data'

const mobileCasinos = computed(() => {
  return casinos.filter(c => c.hasMobileApp)
})
</script>

<template>
  <div class="mobile-casinos-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">📱</span>
        Mobil Casinolar
      </h1>
      <p class="page-subtitle">Mobil uygulama ve responsive tasarıma sahip casino siteleri</p>
    </div>
    
    <!-- Mobile Benefits -->
    <div class="benefits-section">
      <h2>Neden Mobil Casino?</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <span class="benefit-icon">🚀</span>
          <h4>Hızlı Erişim</h4>
          <p>Tek tıkla favori oyunlarınıza ulaşın</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">🔔</span>
          <h4>Bildirimler</h4>
          <p>Bonus ve promosyonlardan anında haberdar olun</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">📍</span>
          <h4>Her Yerde</h4>
          <p>İstediğiniz yerden oyun oynayın</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">🔐</span>
          <h4>Güvenli Giriş</h4>
          <p>Parmak izi ve Face ID desteği</p>
        </div>
      </div>
    </div>
    
    <!-- Casino List -->
    <div class="casinos-section">
      <h2>📲 Mobil Uygulamalı Casinolar</h2>
      <div class="casinos-grid">
        <div v-for="casino in mobileCasinos" :key="casino.id" class="casino-card">
          <div class="casino-header">
            <div class="casino-logo" :style="{ background: `linear-gradient(135deg, ${casino.color}, ${casino.color}dd)` }">
              {{ casino.logo }}
            </div>
            <div class="casino-info">
              <h3>{{ casino.name }}</h3>
              <div class="rating">★ {{ casino.rating }}</div>
            </div>
            <div class="app-badges">
              <span class="badge ios">iOS</span>
              <span class="badge android">Android</span>
            </div>
          </div>
          
          <div class="casino-content">
            <div class="bonus-info">
              <span class="bonus-label">Mobil Bonus</span>
              <span class="bonus-value">{{ casino.bonusAmount }}</span>
            </div>
            
            <div class="features">
              <span v-for="feature in casino.features" :key="feature" class="feature">
                ✓ {{ feature }}
              </span>
            </div>
          </div>
          
          <div class="casino-footer">
            <button class="btn-download">
              <span>📥</span> Uygulamayı İndir
            </button>
            <button class="btn-web">Web'de Aç</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Download Guide -->
    <div class="guide-section">
      <h2>📖 Uygulama Nasıl İndirilir?</h2>
      <div class="steps-grid">
        <div class="step">
          <div class="step-number">1</div>
          <h4>Siteyi Ziyaret Edin</h4>
          <p>Casino sitesine mobil tarayıcınızdan girin</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h4>APK/IPA İndirin</h4>
          <p>Uygulama indirme bağlantısını bulun</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h4>Yükleyin</h4>
          <p>İndirilen dosyayı açıp kurulum yapın</p>
        </div>
        <div class="step">
          <div class="step-number">4</div>
          <h4>Giriş Yapın</h4>
          <p>Mevcut hesabınızla giriş yapın veya kayıt olun</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-casinos-page {
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

.benefits-section {
  margin-bottom: 40px;
}

.benefits-section h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 1100px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

.benefit-card {
  text-align: center;
  padding: 24px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
}

.benefit-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 12px;
}

.benefit-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.benefit-card p {
  font-size: 13px;
  color: var(--text-muted);
}

.casinos-section {
  margin-bottom: 40px;
}

.casinos-section h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
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
  overflow: hidden;
  transition: all 0.3s ease;
}

.casino-card:hover {
  border-color: var(--nova-red);
  transform: translateY(-4px);
}

.casino-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px;
  background: var(--bg-tertiary);
}

.casino-logo {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: white;
}

.casino-info h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.rating {
  font-size: 13px;
  color: #f59e0b;
  font-weight: 600;
}

.app-badges {
  margin-left: auto;
  display: flex;
  gap: 6px;
}

.badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}

.badge.ios {
  background: linear-gradient(135deg, #1a1a1a, #333);
  color: white;
}

.badge.android {
  background: linear-gradient(135deg, #3ddc84, #0f9d58);
  color: white;
}

.casino-content {
  padding: 20px;
}

.bonus-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background: linear-gradient(135deg, rgba(255, 42, 42, 0.1), rgba(255, 85, 85, 0.05));
  border-radius: var(--radius-md);
  margin-bottom: 16px;
}

.bonus-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
}

.bonus-value {
  font-size: 18px;
  font-weight: 800;
  color: var(--nova-red);
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature {
  font-size: 12px;
  color: var(--text-secondary);
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 20px;
}

.casino-footer {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--border-color);
}

.btn-download {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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

.btn-download:hover {
  transform: scale(1.02);
}

.btn-web {
  padding: 12px 20px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-web:hover {
  border-color: var(--nova-red);
}

.guide-section {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 32px;
}

.guide-section h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.step {
  text-align: center;
}

.step-number {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: white;
}

.step h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.step p {
  font-size: 13px;
  color: var(--text-muted);
}
</style>
