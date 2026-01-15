<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

const handleSubmit = () => {
  console.log('Register attempt:', username.value, email.value)
}
</script>

<template>
  <div class="register-page">
    <div style="max-width: 420px; margin: 40px auto;">
      <div style="background: var(--bg-secondary); border-radius: var(--radius-xl); padding: 32px; border: 1px solid var(--border-color);">
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-orange); margin-bottom: 8px;">NovaMARKET</div>
          <h2 style="font-size: 24px; font-weight: 700;">Kayıt Ol</h2>
        </div>
        
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="form-label">Kullanıcı Adı</label>
            <input 
              v-model="username"
              type="text" 
              class="form-input" 
              placeholder="Kullanıcı adınız"
            />
          </div>
          
          <div class="form-group">
            <label class="form-label">E-Mail</label>
            <input 
              v-model="email"
              type="email" 
              class="form-input" 
              placeholder="E-posta adresiniz"
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
          </div>
          
          <div class="form-group">
            <label class="form-label">Şifre Tekrar</label>
            <input 
              v-model="passwordConfirm"
              type="password" 
              class="form-input" 
              placeholder="Şifrenizi tekrar yazınız"
            />
          </div>
          
          <button type="submit" class="form-submit">
            <span>→</span>
            Kayıt Ol
          </button>
        </form>
        
        <div class="form-divider">
          <span>veya</span>
        </div>
        
        <div style="text-align: center;">
          <span style="font-size: 13px; color: var(--text-muted);">Zaten hesabınız var mı? </span>
          <router-link to="/login" style="font-size: 13px; color: var(--accent-orange); font-weight: 600;">Giriş Yap</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-page {
  animation: slideUp 0.5s ease;
}
</style>
