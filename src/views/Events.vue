<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const events = ref([
  {
    id: 1,
    logo: 'G',
    name: 'Gamedom',
    type: 'Nakit Ödül Yarışması',
    prize: '20,000.00 $',
    countdown: { days: 16, hours: 0, mins: 59, secs: 44 },
    participants: 1000
  },
  {
    id: 2,
    logo: 'H',
    name: 'HepBet',
    type: '1000 Kişiye Nakit Ödül',
    prize: '100,000.00 ₺',
    countdown: { days: 10, hours: 12, mins: 30, secs: 0 },
    participants: 500
  }
])

// Countdown Timer
const updateCountdown = () => {
  events.value.forEach(event => {
    if (event.countdown.secs > 0) {
      event.countdown.secs--
    } else if (event.countdown.mins > 0) {
      event.countdown.mins--
      event.countdown.secs = 59
    } else if (event.countdown.hours > 0) {
      event.countdown.hours--
      event.countdown.mins = 59
      event.countdown.secs = 59
    } else if (event.countdown.days > 0) {
      event.countdown.days--
      event.countdown.hours = 23
      event.countdown.mins = 59
      event.countdown.secs = 59
    }
  })
}

let countdownInterval: ReturnType<typeof setInterval>

onMounted(() => {
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(countdownInterval)
})
</script>

<template>
  <div class="events-page">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🎉</span>
        Etkinlikler
      </h3>
    </div>
    
    <div class="events-grid">
      <div v-for="event in events" :key="event.id" class="event-card">
        <div class="event-header">
          <div class="event-logo">{{ event.logo }}</div>
          <div class="event-info">
            <h4>{{ event.name }}</h4>
            <p>{{ event.type }}</p>
          </div>
        </div>
        <div class="event-body">
          <div class="event-prize">{{ event.prize }}</div>
          <div class="event-countdown">
            <div class="countdown-item">
              <div class="countdown-value">{{ event.countdown.days }}</div>
              <div class="countdown-label">Gün</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-value">{{ event.countdown.hours }}</div>
              <div class="countdown-label">Saat</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-value">{{ event.countdown.mins }}</div>
              <div class="countdown-label">Dk</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-value">{{ event.countdown.secs }}</div>
              <div class="countdown-label">Sn</div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 12px; color: var(--text-muted);">{{ event.participants }} Katılımcı</span>
            <span style="font-size: 12px; color: var(--accent-green);">Aktif</span>
          </div>
          <button class="event-btn">Etkinliğe Katıl</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events-page {
  animation: slideUp 0.5s ease;
}
</style>
