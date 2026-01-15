<script setup lang="ts">
</script>

<template>
  <div class="tasks-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">📋</span>
        Görevler
      </h3>
    </div>
    
    <div class="empty-state">
      <div class="empty-icon">📋</div>
      <h4 class="empty-title">Henüz Aktif Bir Görev Bulunmuyor</h4>
      <p class="empty-text">Yeni görevler yakında eklenecek. Takipte kalın!</p>
    </div>
  </div>
</template>

<style scoped>
.tasks-page {
  animation: slideUp 0.5s ease;
}
</style>
