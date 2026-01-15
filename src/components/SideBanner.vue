<script setup lang="ts">
defineProps<{
  side: 'left' | 'right'
}>()
</script>

<template>
  <div class="side-banner" :class="side">
    <div class="banner-content">
      <div class="banner-logo">HepBet</div>
      <div class="banner-bonus">500₺</div>
      <div class="banner-text">Nakit Deneme Bonusu</div>
      
      <div style="margin: 12px 0; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
        <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Günlük İlk Yatırımına</div>
        <div style="font-size: 24px; font-weight: 800; color: #4ade80;">%100</div>
        <div style="font-size: 11px; color: var(--text-secondary);">Kayıp Bonusu</div>
      </div>
      
      <div class="banner-image">
        <div class="banner-character">🎭</div>
      </div>
      
      <a href="#" class="banner-cta">Siteye Git</a>
      
      <div class="banner-extra">250₺</div>
      <div class="banner-extra-text">Havale Yatırım<br>İmkanı!</div>
    </div>
  </div>
</template>
