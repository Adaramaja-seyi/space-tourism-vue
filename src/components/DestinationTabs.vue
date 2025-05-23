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

    name: 'DestinationTabs',
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
        this.$emit('update:selectedDestination', destination);
      },
    },
  };
  </script>
  
  <style scoped>
  .destination-tabs {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
    margin-left: 580px;
  }
  
  .destination-tabs button {
    background: none;
    border: none;
    color: #d0d6f9;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    cursor: pointer;
    transition: color 0.3s, border-bottom 0.3s;
    
  }
  
  .destination-tabs button.active,
  .destination-tabs button:hover {
    color: #ffffff;
    border-bottom: 3px solid #ffffff;
  }
  
  @media (max-width: 768px) {
    .destination-tabs {
      justify-content: center;
    }
  }
  </style>