
   <template>
    <div class="crew-tabs">
      <button
        v-for="member in crewMembers"
        :key="member.name"
        :class="{ active: selectedCrew.name === member.name }"
        @click="selectCrew(member)"
      >
        <span class="sr-only">{{ member.name }}</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CrewTabs',
    props: {
      crewMembers: {
        type: Array,
        required: true
      },
      selectedCrew: {
        type: Object,
        required: true
      }
    },
    methods: {
      selectCrew(crew) {
        this.$emit('update:selectedCrew', crew)
      }
    }
  }
  </script>
  


  <style scoped>
  .crew-tabs {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
  }
  
  .crew-tabs button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.17);
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .crew-tabs button.active {
    background-color: #FFFFFF;
  }
  
  .crew-tabs button:hover:not(.active) {
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  @media (max-width: 768px) {
    .crew-tabs {
      justify-content: center;
    }
  }
  </style>