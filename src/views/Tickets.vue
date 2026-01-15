<script setup lang="ts">
</script>

<template>
  <div class="tickets-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🎟️</span>
        Biletler
      </h3>
    </div>
    
    <div class="empty-state">
      <div class="empty-icon">🎟️</div>
      <h4 class="empty-title">Aktif Bilet Etkinliği Yok</h4>
      <p class="empty-text">Bilet etkinlikleri yakında eklenecek.</p>
    </div>
  </div>
</template>

<style scoped>
.tickets-page {
  animation: slideUp 0.5s ease;
}
</style>
