<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  slides, 
  quickLinks, 
  initialEvents, 
  initialTicketEvents, 
  socialTasks 
} from '../constants/data'

const baseUrl = import.meta.env.BASE_URL

// Slider
const currentSlide = ref(0)

let slideInterval: ReturnType<typeof setInterval>

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})

// Quick Links
// Quick Links (imported from data.ts)

// Events
// Events
const events = ref(JSON.parse(JSON.stringify(initialEvents)))

// Ticket Events
// Ticket Events
const ticketEvents = ref(JSON.parse(JSON.stringify(initialTicketEvents)))

// Social Tasks
// Social Tasks (imported from data.ts)

// Countdown Timer
const updateCountdown = () => {
  events.value.forEach((event: any) => {
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
  <div class="home-page">
    <!-- Hero Slider -->
    <div class="hero-slider">
      <div class="slider-container" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="slide image-slide">
          <img :src="`${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}${slide.image.startsWith('/') ? slide.image.slice(1) : slide.image}`" :alt="slide.alt" />
        </div>
      </div>
      
      <button class="slider-nav prev" @click="prevSlide">❮</button>
      <button class="slider-nav next" @click="nextSlide">❯</button>
      
      <div class="slider-dots">
        <div 
          v-for="(_, index) in slides" 
          :key="index"
          class="slider-dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></div>
      </div>
    </div>
    
    <!-- Quick Links -->
    <div class="quick-links">
      <div 
        v-for="link in quickLinks" 
        :key="link.title" 
        class="quick-link-card"
      >
        <div class="quick-link-icon" :class="link.color">{{ link.icon }}</div>
        <div class="quick-link-text">
          <h4>{{ link.title }}</h4>
          <p>{{ link.desc }}</p>
        </div>
      </div>
    </div>
    
    <!-- Events Section -->
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🎉</span>
        Etkinlikler
      </h3>
      <router-link to="/etkinlikler" class="section-link">
        Tümünü Gör →
      </router-link>
    </div>
    
    <div class="events-grid">
      <div v-for="event in events" :key="event.name" class="event-card">
        <div class="event-header">
          <div class="event-logo">{{ event.logo }}</div>
          <div class="event-info">
            <h4>{{ event.name }}</h4>
            <p>Nakit Ödül Yarışması</p>
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
          <button class="event-btn">Etkinliğe Git</button>
        </div>
      </div>
    </div>
    
    <!-- Ticket Events Section -->
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🎟️</span>
        Bilet Etkinlikleri
      </h3>
      <router-link to="/biletler" class="section-link">
        Tümünü Gör →
      </router-link>
    </div>
    
    <div class="events-grid">
      <div v-for="event in ticketEvents" :key="event.name" class="event-card">
        <div class="event-header">
          <div class="event-logo" style="background: linear-gradient(135deg, #ff4757, #ff6b81);">{{ event.logo }}</div>
          <div class="event-info">
            <h4>{{ event.name }}</h4>
            <p>Bilet Çekilişi</p>
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
          <button class="event-btn">Bilete Git</button>
        </div>
      </div>
    </div>
    
    <!-- Social Tasks Section -->
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">⭐</span>
        Puan Kazan
      </h3>
    </div>
    
    <div class="social-grid">
      <div v-for="task in socialTasks" :key="task.platform" class="social-card">
        <div class="social-icon" :class="task.icon">
          <span v-if="task.icon === 'telegram'">✈️</span>
          <span v-else-if="task.icon === 'twitter'">𝕏</span>
          <span v-else-if="task.icon === 'instagram'">📷</span>
          <span v-else-if="task.icon === 'youtube'">▶️</span>
          <span v-else-if="task.icon === 'kick'">K</span>
        </div>
        <h4>{{ task.platform }}</h4>
        <p>Hesabımızı takip et</p>
        <div class="social-reward">{{ task.reward }}</div>
        <button class="social-btn">Takip Et</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  animation: slideUp 0.5s ease;
}

.image-slide {
  min-width: 100%;
  padding: 0 !important;
  min-height: auto !important;
  background: transparent !important;
}

.image-slide img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-xl);
}
</style>
