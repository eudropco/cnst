<script setup lang="ts">
</script>

<template>
  <div class="stream-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">📺</span>
        Canlı Yayın
      </h3>
    </div>
    
    <div class="empty-state">
      <div class="empty-icon">📺</div>
      <h4 class="empty-title">Giriş Yapmanız Gerekiyor</h4>
      <p class="empty-text">Canlı yayınları izlemek için lütfen giriş yapın.</p>
    </div>
  </div>
</template>

<style scoped>
.stream-page {
  animation: slideUp 0.5s ease;
}
</style>
