<script setup lang="ts">
</script>

<template>
  <div class="surveys-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">📊</span>
        Anketler
      </h3>
    </div>
    
    <div class="empty-state">
      <div class="empty-icon">📊</div>
      <h4 class="empty-title">Aktif Anket Yok</h4>
      <p class="empty-text">Şu anda aktif bir anket bulunmuyor.</p>
    </div>
  </div>
</template>

<style scoped>
.surveys-page {
  animation: slideUp 0.5s ease;
}
</style>
