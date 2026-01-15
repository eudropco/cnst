<script setup lang="ts">
import { responsibleGamblingTips, helplineContacts } from '../constants/data'
</script>

<template>
  <div class="responsible-gambling-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">⚠️</span>
        Sorumlu Kumar
      </h1>
      <p class="page-subtitle">Kumar eğlence amaçlıdır, kontrollü oynayın</p>
    </div>
    
    <!-- Warning Banner -->
    <div class="warning-banner">
      <div class="banner-icon">🔞</div>
      <div class="banner-content">
        <h3>18 Yaş Altı Yasaktır</h3>
        <p>Kumar yasal yaş sınırına tabi bir aktivitedir. Lütfen sadece yasal yaştaysanız ve ülkenizde kumara izin veriliyorsa oynayın.</p>
      </div>
    </div>
    
    <!-- Tips Section -->
    <div class="section">
      <h2>💡 Sorumlu Kumar İçin İpuçları</h2>
      <div class="tips-grid">
        <div v-for="tip in responsibleGamblingTips" :key="tip.title" class="tip-card">
          <span class="tip-icon">{{ tip.icon }}</span>
          <h4>{{ tip.title }}</h4>
          <p>{{ tip.description }}</p>
        </div>
      </div>
    </div>
    
    <!-- Self Assessment -->
    <div class="section assessment-section">
      <h2>🔍 Kendini Değerlendir</h2>
      <div class="assessment-card">
        <p>Aşağıdaki sorulardan herhangi birine "Evet" yanıtı veriyorsanız, profesyonel yardım almanızı öneririz:</p>
        <ul class="assessment-list">
          <li>Kumar oynamak için borç alıyor musunuz?</li>
          <li>Kaybettiğiniz parayı geri kazanmaya mı çalışıyorsunuz?</li>
          <li>Kumar yüzünden işinizi veya ilişkilerinizi ihmal ediyor musunuz?</li>
          <li>Kumar oynamayı bırakmakta zorlanıyor musunuz?</li>
          <li>Kumar konusunda yalan söylüyor musunuz?</li>
        </ul>
      </div>
    </div>
    
    <!-- Self Exclusion -->
    <div class="section">
      <h2>🔒 Kendini Dışlama Seçenekleri</h2>
      <div class="exclusion-grid">
        <div class="exclusion-card">
          <span class="exclusion-icon">🕐</span>
          <h4>Zaman Limiti</h4>
          <p>Günlük veya haftalık oyun süre limiti belirleyin</p>
        </div>
        <div class="exclusion-card">
          <span class="exclusion-icon">💸</span>
          <h4>Yatırım Limiti</h4>
          <p>Günlük/haftalık/aylık yatırım limiti koyun</p>
        </div>
        <div class="exclusion-card">
          <span class="exclusion-icon">⏸️</span>
          <h4>Geçici Durdurma</h4>
          <p>Hesabınızı belirli bir süre dondurun</p>
        </div>
        <div class="exclusion-card">
          <span class="exclusion-icon">🚫</span>
          <h4>Kalıcı Dışlama</h4>
          <p>Hesabınızı kalıcı olarak kapatın</p>
        </div>
      </div>
    </div>
    
    <!-- Helplines -->
    <div class="section helplines-section">
      <h2>📞 Yardım Hatları</h2>
      <div class="helplines-grid">
        <div v-for="contact in helplineContacts" :key="contact.name" class="helpline-card">
          <div class="helpline-info">
            <h4>{{ contact.name }}</h4>
            <p>{{ contact.description }}</p>
          </div>
          <a v-if="contact.phone" :href="`tel:${contact.phone}`" class="helpline-action">
            📞 {{ contact.phone }}
          </a>
          <a v-else :href="`https://${contact.url}`" target="_blank" class="helpline-action">
            🌐 Ziyaret Et
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.responsible-gambling-page {
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

.warning-banner {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 28px;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.05));
  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: var(--radius-xl);
  margin-bottom: 40px;
}

.banner-icon {
  font-size: 48px;
}

.banner-content h3 {
  font-size: 18px;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 6px;
}

.banner-content p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.tip-card {
  text-align: center;
  padding: 24px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.tip-card:hover {
  border-color: var(--nova-red);
  transform: translateY(-2px);
}

.tip-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 14px;
}

.tip-card h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.tip-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
}

.assessment-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 28px;
}

.assessment-card > p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.assessment-list {
  list-style: disc;
  padding-left: 24px;
}

.assessment-list li {
  font-size: 14px;
  color: var(--text-primary);
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.assessment-list li:last-child {
  border-bottom: none;
}

.exclusion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.exclusion-card {
  text-align: center;
  padding: 24px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
}

.exclusion-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 12px;
}

.exclusion-card h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.exclusion-card p {
  font-size: 12px;
  color: var(--text-muted);
}

.helplines-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.helpline-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
}

.helpline-info h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.helpline-info p {
  font-size: 13px;
  color: var(--text-muted);
}

.helpline-action {
  padding: 12px 20px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.helpline-action:hover {
  transform: scale(1.05);
}
</style>
