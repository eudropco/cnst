<script setup lang="ts">
import { ref } from 'vue'

const marketItems = ref([
  { 
    id: 1, 
    name: 'Çin 2 Kişilik Tatil', 
    image: '🏝️', 
    price: 20000,
    desc: 'Vefasız Destinasyon, Manzaralı Hotel, Uçak Bileti',
    stock: 'Al'
  },
  { 
    id: 2, 
    name: 'iPhone 17 Pro Max', 
    image: '📱', 
    price: 150000,
    desc: 'Herşik ve Şıklığın Buluştuğu Telefon. iPhone 17',
    stock: 'Al'
  },
  { 
    id: 3, 
    name: 'Playstation 5', 
    image: '🎮', 
    price: 120000,
    desc: 'SlotNova ve Oyun Performansını Bir Arada Yaşa. PS5 Pro',
    stock: 'Al'
  },
  { 
    id: 4, 
    name: 'APPLE IPAD', 
    image: '📟', 
    price: 100000,
    desc: 'Yaratıcılığı Tanıyın|Güvenli Olarak Dönül Parmaklarınızda',
    stock: 'Al'
  },
  { 
    id: 5, 
    name: '1.000 Dolar ($)', 
    image: '💵', 
    price: 10000,
    desc: 'Satın alma yaparak kartınızdaki bakiyeyi ve işlemlerde Tarifin yaparsınız',
    stock: 'Sale Al'
  },
  { 
    id: 6, 
    name: '50 Dolar ($)', 
    image: '💰', 
    price: 500,
    desc: 'Satın alma yaparak kartınızdaki bakiyeyi ve işlemlerde Tarifin yaparsınız',
    stock: 'Sale Al'
  },
  { 
    id: 7, 
    name: '25 Dolar ($) Nakit Ödül', 
    image: '💸', 
    price: 255,
    desc: 'Satın alma yaparak fon kartındaki bakiyeyi edibilirsiniz Sayfantz Tasarıya',
    stock: 'Sale Al'
  },
  { 
    id: 8, 
    name: 'ENJOYBET 1000₺', 
    image: '🎁', 
    price: 4250,
    desc: '1000₺ tutarında siteye 1000 TL geldim edebilirsiniz gücü.',
    stock: 'Al'
  }
])

const bottomBrands = [
  { name: 'SLOTDAY', icon: '🎰' },
  { name: 'HepBet', icon: '🏆' },
  { name: 'Casino Rıza', icon: '👔' },
]
</script>

<template>
  <div class="market-page">
    <!-- Market Header -->
    <div class="section-header" style="margin-bottom: 8px;">
      <h3 class="section-title">
        <span class="title-icon">🛒</span>
        Puan Marketi
      </h3>
    </div>
    
    <p style="color: var(--text-muted); font-size: 13px; margin-bottom: 24px;">
      Kazandığınız puanlar ile markette bulunan kazılımlardan katılımıcılığınızı.
    </p>
    
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 24px;">
      <span style="color: var(--accent-yellow); font-weight: 600;">⚠️ Üyeler Ayda 1 Kere Nakit Ödül Alabilir.</span>
      <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Multi hesapla katılım sağlayanların puanları boda edilmeyerek ve etkinliklerindan men edilecektir.</p>
    </div>
    
    <!-- Market Grid -->
    <div class="market-grid">
      <div v-for="item in marketItems" :key="item.id" class="market-card">
        <div class="market-image">
          <span style="font-size: 64px;">{{ item.image }}</span>
        </div>
        <div class="market-body">
          <h4 class="market-title">{{ item.name }}</h4>
          <p class="market-desc">{{ item.desc }}</p>
          <div class="market-price">
            <div class="price-amount">
              <span class="price-icon">J</span>
              {{ item.price.toLocaleString() }}
            </div>
            <span class="stock-badge">{{ item.stock }}</span>
          </div>
          <button class="market-btn">Satın Al</button>
        </div>
      </div>
    </div>
    
    <!-- Bottom Brands -->
    <div style="display: flex; justify-content: center; gap: 32px; margin-top: 32px; padding: 24px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
      <div v-for="brand in bottomBrands" :key="brand.name" style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 32px;">{{ brand.icon }}</span>
        <div>
          <div style="font-weight: 700; color: var(--accent-orange);">{{ brand.name }}</div>
          <div style="font-size: 20px; font-weight: 700; color: var(--accent-yellow);">1,000₺</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.market-page {
  animation: slideUp 0.5s ease;
}
</style>
