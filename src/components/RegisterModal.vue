<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits(['close', 'switchToLogin'])

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

const handleSubmit = () => {
  console.log('Register attempt:', username.value, email.value)
}
</script>

<template>
  <div class="modal-overlay" :class="{ active: show }" @click.self="emit('close')">
    <div class="modal">
      <div class="modal-header">
        <div>
          <div style="font-size: 14px; font-weight: 600; color: var(--accent-orange); margin-bottom: 4px;">NovaMARKET</div>
          <div class="modal-title">Kayıt Ol</div>
        </div>
        <button class="modal-close" @click="emit('close')">✕</button>
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
        <a href="#" @click.prevent="emit('switchToLogin')" style="font-size: 13px; color: var(--accent-orange); font-weight: 600;">Giriş Yap</a>
      </div>
    </div>
  </div>
</template>
