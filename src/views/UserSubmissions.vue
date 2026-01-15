<script setup lang="ts">
</script>

<template>
  <div class="user-submissions-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">📤</span>
        Sizden Gelenler
      </h3>
    </div>
    
    <div class="empty-state">
      <div class="empty-icon">📤</div>
      <h4 class="empty-title">Henüz Paylaşım Yok</h4>
      <p class="empty-text">Kullanıcılardan gelen paylaşımlar burada görüntülenecek.</p>
    </div>
  </div>
</template>

<style scoped>
.user-submissions-page {
  animation: slideUp 0.5s ease;
}
</style>
