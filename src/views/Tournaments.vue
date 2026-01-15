<script setup lang="ts">
</script>

<template>
  <div class="tournaments-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🏅</span>
        Turnuvalar
      </h3>
    </div>
    
    <div class="empty-state">
      <div class="empty-icon">🏅</div>
      <h4 class="empty-title">Henüz Aktif Bir Turnuva Bulunmuyor</h4>
      <p class="empty-text">Yeni turnuvalar yakında başlayacak. Takipte kalın!</p>
    </div>
  </div>
</template>

<style scoped>
.tournaments-page {
  animation: slideUp 0.5s ease;
}
</style>
