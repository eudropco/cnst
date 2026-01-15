<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const route = useRoute()

// Navigation sections
const casinoSection = ref({
  title: 'Casino',
  items: [
    { name: 'Casino İncelemeleri', path: '/casino-incelemeleri', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/><path d="M12 12h.01"/></svg>` },
    { name: 'En İyi Casinolar', path: '/en-iyi-casinolar', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>` },
    { name: 'Yeni Casinolar', path: '/yeni-casinolar', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/></svg>`, badge: 'YENİ' },
    { name: 'Canlı Casino', path: '/canli-casino', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>` },
    { name: 'Mobil Casinolar', path: '/mobil-casinolar', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>` },
    { name: 'Karşılaştır', path: '/karsilastir', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/></svg>` },
  ]
})

const activitySection = ref({
  title: 'Etkinlikler',
  items: [
    { name: 'Sponsorlar', path: '/sponsors', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>` },
    { name: 'Etkinlikler', path: '/etkinlikler', badge: '3', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>` },
    { name: 'Görevler', path: '/gorevler', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>` },
    { name: 'Bonuslar', path: '/bonuslar', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>` },
    { name: 'Turnuvalar', path: '/turnuvalar', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
    { name: 'Liderlik Tablosu', path: '/liderlik-tablosu', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>` },
  ]
})

const infoSection = ref({
  title: 'Bilgi',
  items: [
    { name: 'Ödeme Yöntemleri', path: '/odeme-yontemleri', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>` },
    { name: 'SSS', path: '/sss', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>` },
    { name: 'Sorumlu Kumar', path: '/sorumlu-kumar', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16h.01"/><path d="M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/></svg>` },
    { name: 'İletişim', path: '/iletisim', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>` },
  ]
})

const userSection = ref({
  title: 'Hesabım',
  items: [
    { name: 'Profilim', path: '/profil', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>` },
    { name: 'Favorilerim', path: '/favoriler', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>` },
  ]
})

const isActive = (path: string) => route.path === path
</script>

<template>
  <aside class="sidebar" :class="{ open: isOpen }">
    <!-- Logo -->
    <router-link to="/" class="sidebar-logo">
      <div class="logo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      </div>
      <span class="logo-text">NovaMARKET</span>
    </router-link>
    
    <!-- Nova Puan Button -->
    <div class="novacoin-btn">
      <span class="coin-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      </span>
      <span>NOVA PUAN</span>
    </div>
    
    <!-- Navigation -->
    <nav class="sidebar-nav">
      <!-- Casino Section -->
      <div class="nav-section">
        <div class="section-title">{{ casinoSection.title }}</div>
        <router-link 
          v-for="item in casinoSection.items" 
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: isActive(item.path) }"
          @click="emit('close')"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-text">{{ item.name }}</span>
          <span v-if="item.badge" class="nav-badge">{{ item.badge }}</span>
        </router-link>
      </div>
      
      <!-- Activity Section -->
      <div class="nav-section">
        <div class="section-title">{{ activitySection.title }}</div>
        <router-link 
          v-for="item in activitySection.items" 
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: isActive(item.path) }"
          @click="emit('close')"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-text">{{ item.name }}</span>
          <span v-if="item.badge" class="nav-badge">{{ item.badge }}</span>
        </router-link>
      </div>
      
      <!-- Info Section -->
      <div class="nav-section">
        <div class="section-title">{{ infoSection.title }}</div>
        <router-link 
          v-for="item in infoSection.items" 
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: isActive(item.path) }"
          @click="emit('close')"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-text">{{ item.name }}</span>
        </router-link>
      </div>
      
      <!-- User Section -->
      <div class="nav-section">
        <div class="section-title">{{ userSection.title }}</div>
        <router-link 
          v-for="item in userSection.items" 
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: isActive(item.path) }"
          @click="emit('close')"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-text">{{ item.name }}</span>
        </router-link>
      </div>
    </nav>
    
    <!-- Sidebar Footer -->
    <div class="sidebar-footer">
      <div class="footer-divider"></div>
      <p class="footer-text">© 2026 NovaMARKET</p>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: var(--sidebar-width, 260px);
  background: linear-gradient(180deg, 
    rgba(15, 15, 20, 0.98) 0%, 
    rgba(10, 10, 15, 0.99) 50%,
    rgba(5, 5, 10, 1) 100%
  );
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(180deg, 
    rgba(255, 42, 42, 0.08) 0%, 
    transparent 100%
  );
  pointer-events: none;
}

.sidebar-logo {
  padding: 24px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  z-index: 1;
}

.sidebar-logo .logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #ff2a2a 0%, #ff5555 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 
    0 4px 20px rgba(255, 42, 42, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.sidebar-logo:hover .logo-icon {
  transform: scale(1.05);
  box-shadow: 
    0 6px 30px rgba(255, 42, 42, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

.sidebar-logo .logo-text {
  font-size: 20px;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.3px;
}

.novacoin-btn {
  margin: 8px 16px 20px;
  padding: 14px 18px;
  background: linear-gradient(135deg, 
    rgba(255, 42, 42, 0.15) 0%, 
    rgba(255, 85, 85, 0.1) 100%
  );
  border: 1px solid rgba(255, 42, 42, 0.25);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
}

.novacoin-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  transition: 0.5s ease;
}

.novacoin-btn:hover::before {
  left: 100%;
}

.novacoin-btn:hover {
  background: linear-gradient(135deg, #ff2a2a 0%, #ff5555 100%);
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 42, 42, 0.35);
}

.novacoin-btn .coin-icon {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #ff2a2a 0%, #ff5555 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 10px rgba(255, 42, 42, 0.4);
}

.novacoin-btn:hover .coin-icon {
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav {
  flex: 1;
  padding: 4px 12px;
  overflow-y: auto;
}

.nav-section {
  margin-bottom: 16px;
}

.section-title {
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 12px 16px 8px;
  margin-top: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 13px 16px;
  margin: 3px 0;
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  font-weight: 500;
  gap: 14px;
  position: relative;
  transition: all 0.25s ease;
  border-radius: 12px;
  text-decoration: none;
}

.nav-item:hover {
  color: rgba(255, 255, 255, 0.95);
  background: rgba(255, 255, 255, 0.06);
}

.nav-item:hover .nav-icon {
  color: #ff5555;
}

.nav-item.active {
  color: #ffffff;
  background: linear-gradient(135deg, 
    rgba(255, 42, 42, 0.2) 0%, 
    rgba(255, 85, 85, 0.12) 100%
  );
}

.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
  width: 3px;
  background: linear-gradient(180deg, #ff2a2a 0%, #ff5555 100%);
  border-radius: 0 4px 4px 0;
  box-shadow: 0 0 15px rgba(255, 42, 42, 0.6);
}

.nav-item.active .nav-icon {
  color: #ff5555;
}

.nav-item .nav-icon {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.nav-item .nav-icon :deep(svg) {
  width: 20px;
  height: 20px;
}

.nav-item .nav-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-item .nav-badge {
  padding: 4px 10px;
  background: linear-gradient(135deg, #ff2a2a 0%, #ff5555 100%);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  color: white;
  box-shadow: 0 2px 10px rgba(255, 42, 42, 0.4);
}

.nav-item .dropdown-icon {
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.25s ease;
}

.nav-item:hover .dropdown-icon {
  color: rgba(255, 255, 255, 0.7);
}

.sidebar-footer {
  padding: 16px 20px 20px;
  margin-top: auto;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.08) 50%, 
    transparent 100%
  );
  margin-bottom: 16px;
}

.footer-text {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
  font-weight: 500;
}

/* Mobile Sidebar */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
}
</style>
