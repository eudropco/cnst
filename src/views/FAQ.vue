<script setup lang="ts">
import { ref, computed } from 'vue'
import { faqCategories, faqItems } from '../constants/data'

const activeCategory = ref('all')
const openItems = ref<string[]>([])

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'all') return faqItems
  return faqItems.filter(f => f.category === activeCategory.value)
})

const toggleItem = (id: string) => {
  if (openItems.value.includes(id)) {
    openItems.value = openItems.value.filter(i => i !== id)
  } else {
    openItems.value.push(id)
  }
}

const isOpen = (id: string) => openItems.value.includes(id)
</script>

<template>
  <div class="faq-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">❓</span>
        Sıkça Sorulan Sorular
      </h1>
      <p class="page-subtitle">Aklınıza takılan soruların cevaplarını bulun</p>
    </div>
    
    <!-- Category Filters -->
    <div class="category-tabs">
      <button 
        class="category-tab"
        :class="{ active: activeCategory === 'all' }"
        @click="activeCategory = 'all'"
      >
        <span>📋</span> Tümü
      </button>
      <button 
        v-for="cat in faqCategories" 
        :key="cat.id"
        class="category-tab"
        :class="{ active: activeCategory === cat.id }"
        @click="activeCategory = cat.id"
      >
        <span>{{ cat.icon }}</span> {{ cat.name }}
      </button>
    </div>
    
    <!-- FAQ Items -->
    <div class="faq-list">
      <div 
        v-for="faq in filteredFaqs" 
        :key="faq.id" 
        class="faq-item"
        :class="{ open: isOpen(faq.id) }"
      >
        <button class="faq-question" @click="toggleItem(faq.id)">
          <span class="question-text">{{ faq.question }}</span>
          <span class="toggle-icon">{{ isOpen(faq.id) ? '−' : '+' }}</span>
        </button>
        <div class="faq-answer" v-show="isOpen(faq.id)">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
    
    <!-- Contact CTA -->
    <div class="contact-cta">
      <div class="cta-icon">💬</div>
      <div class="cta-content">
        <h3>Sorunuz burada yok mu?</h3>
        <p>Canlı destek ekibimiz size yardımcı olmaktan mutluluk duyar.</p>
      </div>
      <router-link to="/iletisim" class="cta-button">İletişime Geç</router-link>
    </div>
  </div>
</template>

<style scoped>
.faq-page {
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

.category-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-tab:hover {
  border-color: var(--nova-red);
}

.category-tab.active {
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  border-color: transparent;
  color: white;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
}

.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--nova-red);
}

.faq-item.open {
  border-color: var(--nova-red);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.question-text {
  flex: 1;
  padding-right: 16px;
}

.toggle-icon {
  width: 32px;
  height: 32px;
  background: var(--bg-tertiary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 300;
  color: var(--text-secondary);
  flex-shrink: 0;
}

.faq-item.open .toggle-icon {
  background: linear-gradient(135deg, #ff2a2a, #ff5555);
  color: white;
}

.faq-answer {
  padding: 0 24px 20px;
}

.faq-answer p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.contact-cta {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px 32px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-xl);
}

.cta-icon {
  font-size: 40px;
}

.cta-content {
  flex: 1;
}

.cta-content h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.cta-content p {
  font-size: 14px;
  color: var(--text-secondary);
}

.cta-button {
  padding: 14px 28px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.35);
}
</style>
