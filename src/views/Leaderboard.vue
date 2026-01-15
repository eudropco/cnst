<script setup lang="ts">
import { ref } from 'vue'

const leaders = ref([
  { rank: 1, username: 'SlotKing2026', coins: 125000, badge: '👑' },
  { rank: 2, username: 'LuckyPlayer', coins: 98500, badge: '🥈' },
  { rank: 3, username: 'BetMaster', coins: 87300, badge: '🥉' },
  { rank: 4, username: 'GamerPro', coins: 75000, badge: '' },
  { rank: 5, username: 'WinnerX', coins: 68400, badge: '' },
  { rank: 6, username: 'SlotFan', coins: 62100, badge: '' },
  { rank: 7, username: 'NovaHunter', coins: 55800, badge: '' },
  { rank: 8, username: 'BonusBoy', coins: 48900, badge: '' },
  { rank: 9, username: 'SpinMaster', coins: 42500, badge: '' },
  { rank: 10, username: 'CasinoKing', coins: 38700, badge: '' }
])
</script>

<template>
  <div class="leaderboard-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">📈</span>
        Liderlik Tablosu
      </h3>
    </div>
    
    <!-- Top 3 Podium -->
    <div style="display: flex; justify-content: center; align-items: flex-end; gap: 20px; margin-bottom: 32px;">
      <!-- 2nd Place -->
      <div style="text-align: center;">
        <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #94a3b8, #64748b); border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 32px;">🥈</div>
        <div style="font-weight: 600; margin-bottom: 4px;">{{ leaders[1]?.username }}</div>
        <div style="font-size: 14px; color: var(--accent-yellow);">{{ leaders[1]?.coins?.toLocaleString() }} JC</div>
        <div style="width: 100px; height: 80px; background: linear-gradient(180deg, #94a3b8, #64748b); border-radius: var(--radius-md) var(--radius-md) 0 0; margin-top: 12px;"></div>
      </div>
      
      <!-- 1st Place -->
      <div style="text-align: center;">
        <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #fbbf24, #f59e0b); border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 44px; box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);">👑</div>
        <div style="font-weight: 700; font-size: 18px; margin-bottom: 4px;">{{ leaders[0]?.username }}</div>
        <div style="font-size: 16px; color: var(--accent-yellow); font-weight: 600;">{{ leaders[0]?.coins?.toLocaleString() }} JC</div>
        <div style="width: 120px; height: 120px; background: linear-gradient(180deg, #fbbf24, #f59e0b); border-radius: var(--radius-md) var(--radius-md) 0 0; margin-top: 12px;"></div>
      </div>
      
      <!-- 3rd Place -->
      <div style="text-align: center;">
        <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #cd7f32, #a0522d); border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 28px;">🥉</div>
        <div style="font-weight: 600; margin-bottom: 4px;">{{ leaders[2]?.username }}</div>
        <div style="font-size: 14px; color: var(--accent-yellow);">{{ leaders[2]?.coins?.toLocaleString() }} JC</div>
        <div style="width: 90px; height: 60px; background: linear-gradient(180deg, #cd7f32, #a0522d); border-radius: var(--radius-md) var(--radius-md) 0 0; margin-top: 12px;"></div>
      </div>
    </div>
    
    <!-- Leaderboard Table -->
    <div style="background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); overflow: hidden;">
      <div v-for="leader in leaders.slice(3)" :key="leader.rank" style="display: flex; align-items: center; padding: 16px 20px; border-bottom: 1px solid var(--border-color);">
        <div style="width: 40px; font-size: 18px; font-weight: 700; color: var(--text-muted);">#{{ leader.rank }}</div>
        <div style="flex: 1; font-weight: 500;">{{ leader.username }}</div>
        <div style="font-weight: 600; color: var(--accent-yellow);">{{ leader.coins.toLocaleString() }} JC</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.leaderboard-page {
  animation: slideUp 0.5s ease;
}
</style>
