<template>
  <div class="destination-tabs">
    <button
      v-for="destination in destinations"
      :key="destination.name"
      :data-destination="destination.name"
      :class="{ active: selectedDestination.name === destination.name }"
      @click="selectDestination(destination)"
    >
      {{ destination.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "DestinationTabs",
  props: {
    destinations: {
      type: Array,
      required: true,
    },
    selectedDestination: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectDestination(destination) {
      this.$emit("update:selectedDestination", destination);
    },
  },
};
</script>

<style scoped>
.destination-tabs {
  display: flex;
  gap: 35px;
  margin-bottom: 37px;
}

.destination-tabs button {
  background: none;
  border: none;
  color: #D0D6F9;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  padding-bottom: 12px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
}

.destination-tabs button.active {
  color: #FFFFFF;
  border-bottom: 3px solid #FFFFFF;
}

.destination-tabs button:hover:not(.active) {
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .destination-tabs {
    justify-content: center;
    margin-bottom: 32px;
    gap: 26px;
  }

  .destination-tabs button {
    font-size: 14px;
    letter-spacing: 1.36px;
  }
}

@media (max-width: 480px) {
  .destination-tabs {
    gap: 7px;
    margin-bottom: 20px;
  }

  .destination-tabs button {
    font-size: 14px;
    letter-spacing: 2.36px;
    padding-bottom: 8px;
  }
}
</style>
