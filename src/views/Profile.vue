<script setup lang="ts">
import { ref } from 'vue'

const user = ref({
  username: 'NovaMember',
  email: 'user@example.com',
  joinDate: '15 Ocak 2024',
  novaPuan: 1250,
  level: 'Gold',
  avatar: '👤'
})

const stats = ref([
  { label: 'Toplam Puan', value: '1,250', icon: '⭐' },
  { label: 'Tamamlanan Görev', value: '24', icon: '✅' },
  { label: 'Referans', value: '5', icon: '👥' },
  { label: 'Kazanılan Bonus', value: '₺350', icon: '🎁' }
])

const recentActivity = ref([
  { action: 'Görev tamamlandı', detail: 'Twitter takip', points: '+100', time: '2 saat önce' },
  { action: 'Günlük giriş', detail: 'Streak: 7 gün', points: '+50', time: '1 gün önce' },
  { action: 'Anket katılımı', detail: 'Casino tercihleri', points: '+75', time: '3 gün önce' },
  { action: 'Referans bonusu', detail: 'Yeni üye: Ali', points: '+200', time: '1 hafta önce' }
])
</script>

<template>
  <div class="profile-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">👤</span>
        Profilim
      </h1>
      <p class="page-subtitle">Hesap bilgilerinizi ve aktivitelerinizi görüntüleyin</p>
    </div>
    
    <!-- Profile Card -->
    <div class="profile-card">
      <div class="avatar">{{ user.avatar }}</div>
      <div class="user-info">
        <h2>{{ user.username }}</h2>
        <p>{{ user.email }}</p>
        <span class="join-date">Üyelik: {{ user.joinDate }}</span>
      </div>
      <div class="level-badge" :class="user.level.toLowerCase()">
        {{ user.level }} Üye
      </div>
      <button class="btn-edit">Düzenle</button>
    </div>
    
    <!-- Stats Grid -->
    <div class="stats-section">
      <h2>📊 İstatistikler</h2>
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <span class="stat-icon">{{ stat.icon }}</span>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
    
    <!-- Nova Puan Progress -->
    <div class="puan-section">
      <div class="puan-header">
        <h2>⭐ Nova Puan</h2>
        <span class="puan-value">{{ user.novaPuan }} Puan</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: '62%' }"></div>
      </div>
      <div class="progress-labels">
        <span>Gold Üye</span>
        <span>Platinum Üye - 750 puan kaldı</span>
      </div>
    </div>
    
    <!-- Recent Activity -->
    <div class="activity-section">
      <h2>📋 Son Aktiviteler</h2>
      <div class="activity-list">
        <div v-for="activity in recentActivity" :key="activity.action + activity.time" class="activity-item">
          <div class="activity-info">
            <h4>{{ activity.action }}</h4>
            <p>{{ activity.detail }}</p>
          </div>
          <div class="activity-meta">
            <span class="activity-points">{{ activity.points }}</span>
            <span class="activity-time">{{ activity.time }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quick Actions -->
    <div class="actions-section">
      <h2>⚡ Hızlı İşlemler</h2>
      <div class="actions-grid">
        <router-link to="/gorevler" class="action-card">
          <span class="action-icon">📋</span>
          <span>Görevler</span>
        </router-link>
        <router-link to="/favoriler" class="action-card">
          <span class="action-icon">❤️</span>
          <span>Favoriler</span>
        </router-link>
        <router-link to="/bildirimler" class="action-card">
          <span class="action-icon">🔔</span>
          <span>Bildirimler</span>
        </router-link>
        <button class="action-card logout">
          <span class="action-icon">🚪</span>
          <span>Çıkış Yap</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  animation: slideUp 0.5s ease;
}

.page-header {
  margin-bottom: 28px;
}

.page-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.title-icon {
  font-size: 32px;
}

.page-subtitle {
  color: var(--text-muted);
  font-size: 15px;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px;
  background: linear-gradient(135deg, var(--bg-card), var(--bg-tertiary));
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  margin-bottom: 28px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}

.user-info {
  flex: 1;
}

.user-info h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.user-info p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 6px;
}

.join-date {
  font-size: 12px;
  color: var(--text-muted);
}

.level-badge {
  padding: 10px 20px;
  border-radius: var(--radius-lg);
  font-size: 13px;
  font-weight: 700;
}

.level-badge.gold {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.level-badge.silver {
  background: linear-gradient(135deg, #9ca3af, #6b7280);
  color: white;
}

.level-badge.platinum {
  background: linear-gradient(135deg, #a855f7, #9333ea);
  color: white;
}

.btn-edit {
  padding: 12px 24px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-edit:hover {
  border-color: var(--nova-red);
}

.stats-section,
.puan-section,
.activity-section,
.actions-section {
  margin-bottom: 28px;
}

.stats-section h2,
.activity-section h2,
.actions-section h2 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.stat-card {
  text-align: center;
  padding: 24px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
}

.stat-icon {
  font-size: 28px;
  display: block;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: var(--text-muted);
}

.puan-section {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 24px;
}

.puan-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.puan-header h2 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.puan-value {
  font-size: 20px;
  font-weight: 800;
  color: #f59e0b;
}

.progress-bar {
  height: 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #fbbf24);
  border-radius: 6px;
  transition: width 0.5s ease;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-muted);
}

.activity-list {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-info h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.activity-info p {
  font-size: 12px;
  color: var(--text-muted);
}

.activity-meta {
  text-align: right;
}

.activity-points {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 2px;
}

.activity-time {
  font-size: 11px;
  color: var(--text-muted);
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-card:hover {
  border-color: var(--nova-red);
  transform: translateY(-2px);
}

.action-card.logout {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

.action-card.logout:hover {
  background: rgba(239, 68, 68, 0.2);
}

.action-icon {
  font-size: 28px;
}

@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
    text-align: center;
  }
  
  .level-badge,
  .btn-edit {
    width: 100%;
  }
}
</style>
