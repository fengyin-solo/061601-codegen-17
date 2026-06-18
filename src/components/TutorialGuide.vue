<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import { useGameStore } from '../stores/gameStore'

const gameStore = useGameStore()

const showGuide = computed(() => gameStore.tutorial.showGuide && !gameStore.tutorial.tutorialCompleted)
const currentStep = computed(() => gameStore.currentTutorialStep)
const progress = computed(() => gameStore.tutorialProgress)

const highlightStyle = ref<{ top: string; left: string; width: string; height: string } | null>(null)

function updateHighlight() {
  if (!currentStep.value?.highlightSelector) {
    highlightStyle.value = null
    return
  }
  nextTick(() => {
    const el = document.querySelector(currentStep.value!.highlightSelector!) as HTMLElement | null
    if (el) {
      const rect = el.getBoundingClientRect()
      highlightStyle.value = {
        top: `${rect.top + window.scrollY - 4}px`,
        left: `${rect.left + window.scrollX - 4}px`,
        width: `${rect.width + 8}px`,
        height: `${rect.height + 8}px`
      }
    } else {
      highlightStyle.value = null
    }
  })
}

watch(showGuide, (val) => {
  if (val) {
    updateHighlight()
  }
})

watch(currentStep, () => {
  updateHighlight()
})

onMounted(() => {
  if (showGuide.value) {
    updateHighlight()
  }
  window.addEventListener('resize', updateHighlight)
  window.addEventListener('scroll', updateHighlight)
})

function nextStep() {
  gameStore.completeCurrentTutorialStep()
}

function skip() {
  if (confirm('确定要跳过新手引导吗？之后可以通过帮助按钮重新查看。')) {
    gameStore.skipTutorial()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showGuide && currentStep" class="tutorial-overlay">
        <div v-if="highlightStyle" class="tutorial-highlight" :style="highlightStyle"></div>
        
        <div class="tutorial-modal">
          <div class="tutorial-emoji">{{ currentStep.emoji }}</div>
          
          <div class="tutorial-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: progress.percent + '%' }"></div>
            </div>
            <span class="progress-text">{{ progress.completed }}/{{ progress.total }}</span>
          </div>
          
          <h3 class="tutorial-title">{{ currentStep.title }}</h3>
          
          <div class="tutorial-content">
            <p v-for="(line, idx) in currentStep.content.split('\n')" :key="idx">{{ line }}</p>
          </div>
          
          <div class="tutorial-actions">
            <button class="btn-skip" @click="skip">跳过引导</button>
            <button class="btn-next" @click="nextStep">
              {{ currentStep.id === 'complete' ? '开始游戏' : '我知道了' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.tutorial-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tutorial-highlight {
  position: absolute;
  border: 3px solid #fbbf24;
  border-radius: 12px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  animation: pulse 1.5s ease-in-out infinite;
  z-index: 9999;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.7), 0 0 0 9999px rgba(0, 0, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(251, 191, 36, 0), 0 0 0 9999px rgba(0, 0, 0, 0.3);
  }
}

.tutorial-modal {
  background: linear-gradient(135deg, #ffffff 0%, #fef3f2 100%);
  border-radius: 20px;
  padding: 32px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10000;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tutorial-emoji {
  font-size: 64px;
  text-align: center;
  margin-bottom: 16px;
}

.tutorial-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ec4899, #f472b6);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.tutorial-title {
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tutorial-content {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 24px;
}

.tutorial-content p {
  margin: 0 0 8px 0;
}

.tutorial-content p:last-child {
  margin-bottom: 0;
}

.tutorial-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.btn-skip {
  padding: 10px 20px;
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 14px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
}

.btn-skip:hover {
  background: #f3f4f6;
  color: #374151;
}

.btn-next {
  padding: 10px 24px;
  border: none;
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
}

.btn-next:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
}

.btn-next:active {
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
