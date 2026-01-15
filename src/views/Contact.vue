<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>

<template>
  <div class="contact-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">📞</span>
        İletişim
      </h1>
      <p class="page-subtitle">Sorularınız için bize ulaşın, en kısa sürede yanıtlayalım</p>
    </div>
    
    <div class="contact-content">
      <!-- Contact Form -->
      <div class="contact-form-section">
        <h2>Bize Yazın</h2>
        
        <form v-if="!isSubmitted" @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label>Adınız</label>
            <input type="text" v-model="form.name" placeholder="Adınızı girin" required />
          </div>
          
          <div class="form-group">
            <label>E-posta</label>
            <input type="email" v-model="form.email" placeholder="E-posta adresinizi girin" required />
          </div>
          
          <div class="form-group">
            <label>Konu</label>
            <select v-model="form.subject" required>
              <option value="">Konu seçin</option>
              <option value="general">Genel Soru</option>
              <option value="bonus">Bonus Hakkında</option>
              <option value="technical">Teknik Destek</option>
              <option value="partnership">İş Birliği</option>
              <option value="complaint">Şikayet</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Mesajınız</label>
            <textarea v-model="form.message" placeholder="Mesajınızı yazın..." rows="5" required></textarea>
          </div>
          
          <button type="submit" class="btn-submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder' }}
          </button>
        </form>
        
        <div v-else class="success-message">
          <span class="success-icon">✅</span>
          <h3>Mesajınız Gönderildi!</h3>
          <p>En kısa sürede size geri dönüş yapacağız.</p>
          <button @click="isSubmitted = false" class="btn-new">Yeni Mesaj</button>
        </div>
      </div>
      
      <!-- Contact Info -->
      <div class="contact-info-section">
        <h2>Diğer Yollar</h2>
        
        <div class="info-cards">
          <div class="info-card telegram">
            <span class="info-icon">✈️</span>
            <div class="info-content">
              <h4>Telegram</h4>
              <p>En hızlı yanıt için</p>
              <a href="#" class="info-link">@NovaMARKET</a>
            </div>
          </div>
          
          <div class="info-card email">
            <span class="info-icon">📧</span>
            <div class="info-content">
              <h4>E-posta</h4>
              <p>Detaylı konular için</p>
              <a href="mailto:destek@novamarket.com" class="info-link">destek@novamarket.com</a>
            </div>
          </div>
          
          <div class="info-card live">
            <span class="info-icon">💬</span>
            <div class="info-content">
              <h4>Canlı Destek</h4>
              <p>7/24 Aktif</p>
              <button class="info-link">Sohbeti Başlat</button>
            </div>
          </div>
        </div>
        
        <div class="social-section">
          <h3>Sosyal Medya</h3>
          <div class="social-links">
            <a href="#" class="social-link twitter">𝕏</a>
            <a href="#" class="social-link instagram">📷</a>
            <a href="#" class="social-link youtube">▶️</a>
            <a href="#" class="social-link telegram">✈️</a>
          </div>
        </div>
        
        <div class="hours-section">
          <h3>Çalışma Saatleri</h3>
          <p>Canlı destek: 7/24</p>
          <p>E-posta yanıt: 24 saat içinde</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 32px;
}

.contact-form-section,
.contact-info-section {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 28px;
}

.contact-form-section h2,
.contact-info-section h2 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 14px 16px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 14px;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--nova-red);
  outline: none;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.btn-submit {
  padding: 16px;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 42, 42, 0.35);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: 40px 20px;
}

.success-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
}

.success-message h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.success-message p {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.btn-new {
  padding: 12px 24px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--bg-tertiary);
}

.info-icon {
  font-size: 28px;
}

.info-content h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.info-content p {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.info-link {
  font-size: 13px;
  color: var(--nova-red);
  font-weight: 600;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.info-link:hover {
  text-decoration: underline;
}

.social-section,
.hours-section {
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  margin-top: 20px;
}

.social-section h3,
.hours-section h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 14px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 44px;
  height: 44px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  transform: translateY(-2px);
}

.hours-section p {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 6px;
}

@media (max-width: 900px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
