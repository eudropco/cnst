<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log('Login attempt:', username.value)
}
</script>

<template>
  <div class="login-page">
    <div style="max-width: 420px; margin: 40px auto;">
      <div style="background: var(--bg-secondary); border-radius: var(--radius-xl); padding: 32px; border: 1px solid var(--border-color);">
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-orange); margin-bottom: 8px;">NovaMARKET</div>
          <h2 style="font-size: 24px; font-weight: 700;">Giriş Yapın</h2>
        </div>
        
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="form-label">Kullanıcı Adı veya E-posta</label>
            <input 
              v-model="username"
              type="text" 
              class="form-input" 
              placeholder="Kullanıcı adı veya e-posta"
            />
          </div>
          
          <div class="form-group">
            <label class="form-label">Şifre</label>
            <input 
              v-model="password"
              type="password" 
              class="form-input" 
              placeholder="Şifrenizi yazınız"
            />
            <a href="#" class="form-link">Şifremi Unuttum</a>
          </div>
          
          <button type="submit" class="form-submit">
            <span>→</span>
            Giriş Yap
          </button>
        </form>
        
        <div class="form-divider">
          <span>veya</span>
        </div>
        
        <div style="text-align: center;">
          <span style="font-size: 13px; color: var(--text-muted);">Hesabınız yok mu? </span>
          <router-link to="/register" style="font-size: 13px; color: var(--accent-orange); font-weight: 600;">Kayıt Ol</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  animation: slideUp 0.5s ease;
}
</style>
