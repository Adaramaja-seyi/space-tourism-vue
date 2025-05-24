
<template>
  <div class="tech-tabs">
    <button
      v-for="(tech, index) in technologies"
      :key="tech.name"
      :class="{ active: selectedTech.name === tech.name }"
      @click="selectTech(tech)"
    >
      {{ index + 1 }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TechTabs',
  props: {
    technologies: {
      type: Array,
      required: true
    },
    selectedTech: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectTech(tech) {
      this.$emit('update:selectedTech', tech)
    }
  }
}
</script>

<style scoped>
.tech-tabs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-right: 4rem;
}

.tech-tabs button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: none;
  color: #FFFFFF;
  font-family: 'Bellefair', serif;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech-tabs button.active {
  background-color: #FFFFFF;
  color: #0B0D17;
}

.tech-tabs button:hover:not(.active) {
  border-color: #FFFFFF;
}

@media (max-width: 768px) {
  .tech-tabs {
    flex-direction: row;
    justify-content: center;
    margin: 2rem 0;
    gap: 1rem;
  }

  .tech-tabs button {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    
}
.tech-tabs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tech-tabs button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: none;
  color: #FFFFFF;
  font-family: 'Bellefair', serif;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech-tabs button.active {
  background-color: #FFFFFF;
  color: #0B0D17;
}

.tech-tabs button:hover:not(.active) {
  border-color: #FFFFFF;
}

@media (max-width: 768px)
 {
  .tech-tabs {
    flex-direction: row;
    justify-content: center;
    margin: 2rem 0;
  }

  .tech-tabs button {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
}
}
</style>