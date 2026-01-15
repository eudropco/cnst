<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

// State
const showLoginModal = ref(false)
const showRegisterModal = ref(false)
const dockExpanded = ref(false)
const mobileMenuOpen = ref(false)
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Default to system preference if no saved preference
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

const route = useRoute()

import { 
  leftNavItems, 
  rightNavItems, 
  dockItems, 
  quickActions 
} from './constants/data'
</script>

<template>
  <div class="nova-hub">
    <!-- Top Navigation Bar -->
    <header class="top-bar">
      <nav class="nav-group left">
        <RouterLink 
          v-for="item in leftNavItems" 
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: route.path === item.path }"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-text">{{ item.name }}</span>
        </RouterLink>
      </nav>
      
      <!-- Centered Logo -->
      <RouterLink to="/" class="logo-center">
        <div class="logo-glow"></div>
        <span class="logo-text">Nova<span class="accent">MARKET</span></span>
      </RouterLink>
      
      <nav class="nav-group right">
        <RouterLink 
          v-for="item in rightNavItems" 
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: route.path === item.path }"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-text">{{ item.name }}</span>
        </RouterLink>
        
        <!-- Theme Toggle -->
        <button class="theme-toggle" @click="toggleTheme" :title="isDark ? 'Aydınlık Mod' : 'Karanlık Mod'">
          {{ isDark ? '🌞' : '🌙' }}
        </button>

        <!-- Auth Buttons -->
        <div class="auth-buttons">
          <button class="auth-btn secondary" @click="showLoginModal = true">Giriş</button>
          <button class="auth-btn primary" @click="showRegisterModal = true">Kayıt Ol</button>
        </div>
      </nav>
      
      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
        {{ mobileMenuOpen ? '✕' : '☰' }}
      </button>
    </header>
    
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <RouterLink 
        v-for="item in [...leftNavItems, ...rightNavItems]" 
        :key="item.path"
        :to="item.path"
        class="mobile-link"
        @click="mobileMenuOpen = false"
      >
        <span>{{ item.icon }}</span>
        {{ item.name }}
      </RouterLink>
      <div class="mobile-auth">
        <button class="auth-btn secondary" @click="showLoginModal = true; mobileMenuOpen = false">Giriş</button>
        <button class="auth-btn primary" @click="showRegisterModal = true; mobileMenuOpen = false">Kayıt Ol</button>
      </div>
    </div>
    
    <!-- Floating Icon Dock (Left) -->
    <aside 
      class="icon-dock" 
      :class="{ expanded: dockExpanded }"
      @mouseenter="dockExpanded = true"
      @mouseleave="dockExpanded = false"
    >
      <div class="dock-items">
        <RouterLink 
          v-for="item in dockItems" 
          :key="item.path"
          :to="item.path"
          class="dock-item"
          :class="{ active: route.path === item.path }"
        >
          <span class="dock-icon" v-html="item.icon"></span>
          <span class="dock-text">{{ item.name }}</span>
        </RouterLink>
      </div>
      <div class="dock-indicator"></div>
    </aside>
    
    <!-- Main Content Area -->
    <main class="main-content">
      <RouterView />
    </main>
    
    <!-- Quick Actions Bar (Bottom) -->
    <footer class="quick-bar">
      <div class="quick-bar-content">
        <div class="quick-left">
          <span class="copyright">© 2024 NovaMARKET</span>
        </div>
        
        <div class="quick-actions">
          <button 
            v-for="action in quickActions" 
            :key="action.action"
            class="quick-action-btn"
          >
            <span class="action-icon">{{ action.icon }}</span>
            <span class="action-text">{{ action.name }}</span>
          </button>
        </div>
        
        <div class="quick-right">
          <div class="social-links">
            <a href="#" class="social-btn">📱</a>
            <a href="#" class="social-btn">💬</a>
            <a href="#" class="social-btn">📷</a>
          </div>
        </div>
      </div>
    </footer>
    
    <!-- Login Modal -->
    <Teleport to="body">
      <div class="modal-overlay" :class="{ active: showLoginModal }" @click.self="showLoginModal = false">
        <div class="modal">
          <div class="modal-header">
            <div>
              <div class="modal-brand">NovaMARKET</div>
              <div class="modal-title">Giriş Yapın</div>
            </div>
            <button class="modal-close" @click="showLoginModal = false">✕</button>
          </div>
          
          <form @submit.prevent>
            <div class="form-group">
              <label class="form-label">Kullanıcı Adı veya E-posta</label>
              <input type="text" class="form-input" placeholder="Kullanıcı adı veya e-posta" />
            </div>
            <div class="form-group">
              <label class="form-label">Şifre</label>
              <input type="password" class="form-input" placeholder="Şifrenizi yazın" />
            </div>
            <a href="#" class="form-link">Şifremi Unuttum</a>
            <button type="submit" class="form-submit">
              <span>→</span> Giriş Yap
            </button>
          </form>
          
          <div class="form-divider"><span>veya</span></div>
          
          <p style="text-align: center; font-size: 13px; color: var(--text-muted);">
            Hesabınız yok mu? <a href="#" class="form-link" @click="showLoginModal = false; showRegisterModal = true">Kayıt Ol</a>
          </p>
        </div>
      </div>
    </Teleport>
    
    <!-- Register Modal -->
    <Teleport to="body">
      <div class="modal-overlay" :class="{ active: showRegisterModal }" @click.self="showRegisterModal = false">
        <div class="modal">
          <div class="modal-header">
            <div>
              <div class="modal-brand">NovaMARKET</div>
              <div class="modal-title">Kayıt Ol</div>
            </div>
            <button class="modal-close" @click="showRegisterModal = false">✕</button>
          </div>
          
          <form @submit.prevent>
            <div class="form-group">
              <label class="form-label">Kullanıcı Adı</label>
              <input type="text" class="form-input" placeholder="Kullanıcı adınız" />
            </div>
            <div class="form-group">
              <label class="form-label">E-Mail</label>
              <input type="email" class="form-input" placeholder="E-posta adresiniz" />
            </div>
            <div class="form-group">
              <label class="form-label">Şifre</label>
              <input type="password" class="form-input" placeholder="Şifrenizi yazın" />
            </div>
            <div class="form-group">
              <label class="form-label">Şifre Tekrar</label>
              <input type="password" class="form-input" placeholder="Şifrenizi tekrar yazın" />
            </div>
            <button type="submit" class="form-submit">
              <span>✨</span> Kayıt Ol
            </button>
          </form>
          
          <div class="form-divider"><span>veya</span></div>
          
          <p style="text-align: center; font-size: 13px; color: var(--text-muted);">
            Zaten hesabınız var mı? <a href="#" class="form-link" @click="showRegisterModal = false; showLoginModal = true">Giriş Yap</a>
          </p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.nova-hub {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ===== TOP NAVIGATION BAR ===== */
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  z-index: 100;
}

.nav-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-group.left {
  flex: 1;
  justify-content: flex-start;
}

.nav-group.right {
  flex: 1;
  justify-content: flex-end;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  transition: var(--transition-normal);
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(255, 42, 42, 0.1);
}

.nav-link.active {
  color: var(--text-primary);
  background: var(--gradient-aurora-soft);
}

.nav-icon {
  font-size: 16px;
}

/* Centered Logo */
.logo-center {
  position: relative;
  padding: 12px 32px;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 40px;
  background: var(--gradient-aurora);
  filter: blur(30px);
  opacity: 0.4;
  border-radius: 50%;
}

.logo-text {
  position: relative;
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: 1px;
}

.logo-text .accent {
  background: var(--gradient-aurora);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-clip: text;
}

.theme-toggle {
  background: transparent;
  border: 1px solid var(--border-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 8px;
  transition: var(--transition-normal);
  color: var(--text-secondary);
}

.theme-toggle:hover {
  background: var(--nova-hover);
  border-color: var(--nova-red);
  color: var(--text-primary);
  transform: rotate(15deg);
}

/* Auth Buttons in Nav */
.auth-buttons {
  display: flex;
  gap: 10px;
  margin-left: 20px;
}

.auth-btn {
  padding: 10px 20px;
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 600;
  transition: var(--transition-normal);
}

.auth-btn.secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.auth-btn.secondary:hover {
  border-color: var(--nova-violet);
  background: rgba(255, 42, 42, 0.1);
}

.auth-btn.primary {
  background: var(--gradient-aurora);
  color: white;
  border: none;
}

.auth-btn.primary:hover {
  box-shadow: var(--glow-aurora);
  transform: translateY(-2px);
}

.mobile-toggle {
  display: none;
  background: var(--nova-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: 18px;
  color: var(--text-primary);
}

/* ===== FLOATING ICON DOCK ===== */
.icon-dock {
  position: fixed;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 12px 6px;
  z-index: 90;
  width: 64px;
  transition: var(--transition-normal);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.icon-dock.expanded {
  width: 220px;
  padding: 12px 10px;
}

.dock-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dock-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px;
  height: 48px;
  border-radius: 14px;
  color: var(--text-secondary);
  transition: all 0.25s ease;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.dock-item:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(2px);
}

.dock-item.active {
  color: white;
  background: linear-gradient(135deg, rgba(255, 42, 42, 0.8), rgba(255, 85, 85, 0.6));
  box-shadow: 0 4px 15px rgba(255, 42, 42, 0.3);
}

.dock-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.dock-icon :deep(svg) {
  width: 22px;
  height: 22px;
  transition: all 0.3s ease;
}

.dock-item:hover .dock-icon :deep(svg) {
  transform: scale(1.1);
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
}

.dock-text {
  font-size: 14px;
  font-weight: 600;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.icon-dock.expanded .dock-text {
  opacity: 1;
  transform: translateX(0);
}

.dock-indicator {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 4px;
  background: var(--gradient-aurora);
  border-radius: 4px;
  opacity: 0.6;
}

/* ===== MAIN CONTENT ===== */
.main-content {
  flex: 1;
  margin-top: 70px;
  margin-left: 90px;
  margin-bottom: 60px;
  padding: 32px 48px;
  min-width: 0;
  width: calc(100% - 90px);
  max-width: none;
}

/* ===== QUICK ACTIONS BAR (BOTTOM) ===== */
.quick-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-top: 1px solid var(--glass-border);
  z-index: 100;
}

.quick-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient-aurora);
  opacity: 0.3;
}

.quick-bar-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 0 100px;
}

.quick-left {
  display: flex;
  align-items: center;
}

.copyright {
  font-size: 12px;
  color: var(--text-muted);
}

.quick-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quick-action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--nova-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 500;
  transition: var(--transition-normal);
}

.quick-action-btn:hover {
  border-color: var(--nova-violet);
  background: var(--gradient-aurora-soft);
}

.action-icon {
  font-size: 16px;
}

.quick-right {
  display: flex;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 8px;
}

.social-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nova-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 16px;
  transition: var(--transition-normal);
}

.social-btn:hover {
  border-color: var(--nova-cyan);
  background: rgba(226, 226, 226, 0.1);
}

/* ===== MOBILE MENU ===== */
.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--nova-dark);
  padding: 24px;
  flex-direction: column;
  gap: 8px;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-normal);
}

.mobile-menu.open {
  opacity: 1;
  visibility: visible;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--nova-surface);
  border-radius: var(--radius-lg);
  color: var(--text-primary);
  font-size: 15px;
}

.mobile-auth {
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 24px;
}

.mobile-auth .auth-btn {
  flex: 1;
  justify-content: center;
}

/* ===== MODAL BRAND ===== */
.modal-brand {
  font-size: 14px;
  font-weight: 600;
  background: var(--gradient-aurora);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1200px) {
  .nav-text {
    display: none;
  }
  
  .nav-link {
    padding: 10px 12px;
  }
}

@media (max-width: 900px) {
  .nav-group {
    display: none;
  }
  
  .mobile-toggle {
    display: block;
  }
  
  .mobile-menu {
    display: flex;
  }
  
  .logo-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .icon-dock {
    display: none;
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .quick-bar-content {
    padding-left: 32px;
  }
}

@media (max-width: 600px) {
  .quick-actions {
    display: none;
  }
  
  .action-text {
    display: none;
  }
}
</style>
