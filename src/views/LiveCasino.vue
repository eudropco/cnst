<script setup lang="ts">
import { liveCasinoProviders, liveCasinoGames } from '../constants/data'
</script>

<template>
  <div class="live-casino-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">🎲</span>
        Canlı Casino
      </h1>
      <p class="page-subtitle">Gerçek krupiyelerle canlı casino deneyimi yaşayın</p>
    </div>
    
    <!-- Live Banner -->
    <div class="live-banner">
      <div class="live-indicator">
        <span class="live-dot"></span>
        CANLI
      </div>
      <div class="banner-content">
        <h2>Şu An Aktif Oyunlar</h2>
        <p>{{ liveCasinoGames.reduce((sum, g) => sum + g.players, 0).toLocaleString() }}+ oyuncu şu anda oynuyor</p>
      </div>
    </div>
    
    <!-- Popular Games -->
    <div class="section">
      <h2 class="section-title">🔥 Popüler Canlı Oyunlar</h2>
      <div class="games-grid">
        <div v-for="game in liveCasinoGames" :key="game.name" class="game-card">
          <div class="game-icon">{{ game.icon }}</div>
          <div class="game-info">
            <h4>{{ game.name }}</h4>
            <span class="provider">{{ game.provider }}</span>
          </div>
          <div class="players-count">
            <span class="player-icon">👥</span>
            {{ game.players.toLocaleString() }}
          </div>
          <button class="btn-play">Oyna</button>
        </div>
      </div>
    </div>
    
    <!-- Providers -->
    <div class="section">
      <h2 class="section-title">🎯 Oyun Sağlayıcıları</h2>
      <div class="providers-grid">
        <div v-for="provider in liveCasinoProviders" :key="provider.name" class="provider-card">
          <div class="provider-icon" :class="{ popular: provider.popular }">{{ provider.icon }}</div>
          <div class="provider-info">
            <h4>{{ provider.name }}</h4>
            <span>{{ provider.games }} oyun</span>
          </div>
          <span v-if="provider.popular" class="popular-tag">En Popüler</span>
        </div>
      </div>
    </div>
    
    <!-- Game Types -->
    <div class="section">
      <h2 class="section-title">🃏 Oyun Türleri</h2>
      <div class="game-types-grid">
        <div class="type-card">
          <span class="type-icon">🎡</span>
          <h4>Rulet</h4>
          <p>Lightning, Speed, Immersive</p>
        </div>
        <div class="type-card">
          <span class="type-icon">🃏</span>
          <h4>Blackjack</h4>
          <p>VIP, Party, Speed</p>
        </div>
        <div class="type-card">
          <span class="type-icon">🎴</span>
          <h4>Baccarat</h4>
          <p>Speed, No Commission</p>
        </div>
        <div class="type-card">
          <span class="type-icon">🎯</span>
          <h4>Game Shows</h4>
          <p>Crazy Time, Monopoly, Deal</p>
        </div>
        <div class="type-card">
          <span class="type-icon">♠️</span>
          <h4>Poker</h4>
          <p>Turkish, Caribbean, 3 Card</p>
        </div>
        <div class="type-card">
          <span class="type-icon">🎰</span>
          <h4>Şans Oyunları</h4>
          <p>Mega Wheel, Sweet Bonanza</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.live-casino-page {
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

.live-banner {
  background: linear-gradient(135deg, #1e1e2e, #2d2d3f);
  border: 1px solid rgba(255, 42, 42, 0.3);
  border-radius: var(--radius-xl);
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 800;
  color: white;
  letter-spacing: 1px;
}

.live-dot {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.banner-content h2 {
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
}

.banner-content p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 1000px) {
  .games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .games-grid {
    grid-template-columns: 1fr;
  }
}

.game-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.game-card:hover {
  border-color: var(--nova-red);
  transform: translateX(4px);
}

.game-icon {
  font-size: 28px;
}

.game-info {
  flex: 1;
}

.game-info h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.provider {
  font-size: 12px;
  color: var(--text-muted);
}

.players-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-secondary);
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 20px;
}

.btn-play {
  padding: 10px 18px;
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-play:hover {
  transform: scale(1.05);
}

.providers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 1000px) {
  .providers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .providers-grid {
    grid-template-columns: 1fr;
  }
}

.provider-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.provider-card:hover {
  border-color: var(--nova-red);
}

.provider-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  color: var(--text-primary);
}

.provider-icon.popular {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.provider-info h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.provider-info span {
  font-size: 12px;
  color: var(--text-muted);
}

.popular-tag {
  margin-left: auto;
  font-size: 11px;
  color: #f59e0b;
  font-weight: 600;
}

.game-types-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

@media (max-width: 1100px) {
  .game-types-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 650px) {
  .game-types-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.type-card {
  text-align: center;
  padding: 24px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.type-card:hover {
  border-color: var(--nova-red);
  transform: translateY(-4px);
}

.type-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 12px;
}

.type-card h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.type-card p {
  font-size: 12px;
  color: var(--text-muted);
}
</style>
