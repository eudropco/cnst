<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['openLogin', 'openRegister', 'toggleSidebar'])

const searchQuery = ref('')
</script>

<template>
  <header class="header">
    <!-- Mobile Menu Toggle -->
    <button class="menu-toggle" @click="emit('toggleSidebar')">
      <span>☰</span>
    </button>
    
    <!-- Search Bar -->
    <div class="header-search">
      <span class="header-search-icon">🔍</span>
      <input 
        v-model="searchQuery"
        type="text" 
        placeholder="Etkinlik, sponsor veya sayfa ara..."
      />
    </div>
    
    <!-- Actions -->
    <div class="header-actions">
      <!-- Notification Bell -->
      <button class="chat-btn">
        🔔
        <span class="notification-dot"></span>
      </button>
      
      <!-- Auth Buttons -->
      <button class="header-btn secondary" @click="emit('openLogin')">
        Giriş Yap
      </button>
      <button class="header-btn primary" @click="emit('openRegister')">
        <span>✨</span>
        Kayıt Ol
      </button>
    </div>
  </header>
</template>

<style scoped>
.menu-toggle {
  display: none;
  background: var(--nova-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 12px 16px;
  font-size: 18px;
  color: var(--text-primary);
  transition: var(--transition-normal);
}

.menu-toggle:hover {
  background: var(--nova-hover);
  border-color: var(--nova-violet);
}

@media (max-width: 1024px) {
  .header-search {
    display: none;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .header-btn.secondary {
    display: none;
  }
  
  .header-btn.primary {
    padding: 10px 16px;
    font-size: 13px;
  }
}
</style>
