<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits(['close', 'switchToRegister'])

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log('Login attempt:', username.value)
}
</script>

<template>
  <div class="modal-overlay" :class="{ active: show }" @click.self="emit('close')">
    <div class="modal">
      <div class="modal-header">
        <div>
          <div style="font-size: 14px; font-weight: 600; color: var(--accent-orange); margin-bottom: 4px;">NovaMARKET</div>
          <div class="modal-title">Giriş Yapın</div>
        </div>
        <button class="modal-close" @click="emit('close')">✕</button>
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
        <a href="#" @click.prevent="emit('switchToRegister')" style="font-size: 13px; color: var(--accent-orange); font-weight: 600;">Kayıt Ol</a>
      </div>
    </div>
  </div>
</template>
