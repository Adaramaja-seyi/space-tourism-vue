
   <template>
    <nav-bar/>
    <div class="destination-page">
      <h1>Pick your destination</h1>
      
      <DestinationTabs
        :destinations="destinations"
        :selectedDestination="selectedDestination"
        @update:selectedDestination="updateDestination"
      />
  
      <div v-if="selectedDestination" class="destination-content">
        <img :src="selectedDestination.image" :alt="selectedDestination.name">
        
        <div class="destination-info">
          <h2>{{ selectedDestination.name }}</h2>
          <p>{{ selectedDestination.description }}</p>
          
          <div class="destination-meta">
            <div>
              <h3>AVG. DISTANCE</h3>
              <p>{{ selectedDestination.distance }}</p>
            </div>
            <div>
              <h3>EST. TRAVEL TIME</h3>
              <p>{{ selectedDestination.travelTime }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DestinationTabs from '@/components/DestinationTabs.vue'
  import destinationData from '@/assets/data.json'
  
  export default {
    name: 'DestinationPage',
    components: {
      DestinationTabs
    },
    data() {
      return {
        destinations: [],
        selectedDestination: null
      }
    },
    created() {
      // Load destinations from JSON file
      this.destinations = destinationData.destinations
      // Set initial selected destination
      this.selectedDestination = this.destinations[0]
    },
    methods: {
      updateDestination(destination) {
        this.selectedDestination = destination
      },
      getImageUrl(imagePath) {
      // Handle both absolute and relative paths
      return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
    }
    }
  }
  </script>
  

  <style scoped>
  .destination-page {
    padding: 2rem;
    color: #ffffff;
  min-height: 100vh;
  background-image: url('/public/destination/background-destination-desktop.jpg');
  background-size: cover;
  background-position: center;
  padding: 2rem 10%;
  padding-top: 80px;
  color: #FFFFFF;
}

  
  h1 {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 4px;
    margin-bottom: 3rem;
  }
  
  .destination-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: -3rem;

  }
  
  .destination-info {
    padding: 1rem;
  }
  
  h2 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  .destination-meta {
    margin-top: 2rem;
    display: flex;
    gap: 4rem;
    padding-top: 2rem;
    border-top: 1px solid #383B4B;
  }
  
  h3 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.875rem;
    letter-spacing: 2.35px;
    color: #D0D6F9;
    margin-bottom: 0.75rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  @media (max-width: 768px) {
    .destination-content {
      grid-template-columns: 1fr;
      text-align: center;
      background-image: url('/public/destination/background-destination-tablet.jpg');
    }
    
    .destination-meta {
      justify-content: center;
    }
  }
  </style>

