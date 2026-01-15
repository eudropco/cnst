<script setup lang="ts">
import { ref } from 'vue'

const coupons = ref([
  {
    id: 1,
    title: "GÜNÜN BETBUILDER KUPONU!",
    status: 'lost',
    statusText: 'Kaybetti',
    image: '📋',
    matches: [
      { home: 'Fenerbahçe', away: 'Galatasaray', bet: 'Maç Sonucu: 1', odds: 1.85 },
      { home: 'Barcelona', away: 'Real Madrid', bet: 'İlk Yarı Gol', odds: 1.20 }
    ]
  },
  {
    id: 2,
    title: "MİLLİ MAÇ ÖZEL",
    status: 'won',
    statusText: 'Kazandı',
    image: '🏆',
    matches: [
      { home: 'Türkiye', away: 'Gürcistan', bet: 'Maç Sonucu: 1', odds: 1.65 }
    ]
  }
])
</script>

<template>
  <div class="kuponjack-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">📝</span>
        KuponJack - Günün Kuponları
      </h3>
    </div>
    
    <div class="coupons-grid">
      <div v-for="coupon in coupons" :key="coupon.id" class="coupon-card">
        <div class="coupon-header">
          <span class="coupon-title">{{ coupon.title }}</span>
          <span class="coupon-status" :class="coupon.status">{{ coupon.statusText }}</span>
        </div>
        <div class="coupon-body">
          <div class="coupon-image">
            <span>{{ coupon.image }}</span>
          </div>
          
          <div style="margin-bottom: 16px;">
            <div v-for="(match, idx) in coupon.matches" :key="idx" style="background: var(--bg-tertiary); border-radius: var(--radius-sm); padding: 10px; margin-bottom: 8px;">
              <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 4px;">
                {{ match.home }} vs {{ match.away }}
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 13px; font-weight: 500;">{{ match.bet }}</span>
                <span style="font-size: 14px; font-weight: 600; color: var(--accent-yellow);">{{ match.odds }}</span>
              </div>
            </div>
          </div>
          
          <button class="coupon-btn">Siteye Git</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kuponjack-page {
  animation: slideUp 0.5s ease;
}
</style>
