<template>
  <div class="destination-page">
    <nav-bar />
    <main class="destination-content">
      <h2><span>01</span> Pick your destination</h2>
      <div class="dest-container">
      <div class="destination-layout">
        <div class="planet-image">
          <img :src="selectedDestination.images.png" :alt="selectedDestination.name">
        </div>

        <div class="destination-info">
          <DestinationTabs
            :destinations="destinations"
            :selected-destination="selectedDestination"
            @update:selectedDestination="updateDestination"
          />

          <h1>{{ selectedDestination.name }}</h1>
          <p class="description">{{ selectedDestination.description }}</p>

          <div class="destination-meta">
            <div class="meta-item">
              <h3>Avg. Distance</h3>
              <p>{{ selectedDestination.distance }}</p>
            </div>
            <div class="meta-item">
              <h3>Est. Travel Time</h3>
              <p>{{ selectedDestination.travel }}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  </div>
</template>

<script>
import DestinationTabs from "@/components/DestinationTabs.vue";
import destinationData from "@/assets/data.json";

export default {
  name: "DestinationPage",
  components: {
    DestinationTabs,
  },
  data() {
    return {
      destinations: [],
      selectedDestination: null,
    };
  },
  created() {
    // Load destinations from JSON file
    this.destinations = destinationData.destinations;
    // Set initial selected destination
    this.selectedDestination = this.destinations[0];
  },
  methods: {
    updateDestination(destination) {
      this.selectedDestination = destination;
    },
    getImageUrl(imagePath) {
      // Handle both absolute and relative paths
      return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
    },
  },
};
</script>

<style scoped>
.destination-page {
  min-height: 100vh;
  background-image: url('/public/destination/background-destination-desktop.jpg');
  background-size: cover;
  background-position: center;
  color: #FFFFFF;
  /* padding: 76px 11.5% 0; */
  overflow: hidden;
  ;
}

h2 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  margin-bottom: 64px;
  margin-top: 16px;
  margin-left: 72px;
}

h2 span {
  opacity: 0.25;
  margin-right: 24px;
  font-weight: 700;
}

.destination-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 157px;
  align-items: start;
}

.planet-image {
  padding-left: 197px;
}

.planet-image img {
  width: 445px;
  height: 445px;
  animation: rotate 200s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.destination-info {
  max-width: 445px;
  padding-top: 37px;
}

h1 {
  font-family: 'Bellefair', serif;
  font-size: 100px;
  text-transform: uppercase;
  margin: 37px 0 14px;
}

.description {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #D0D6F9;
}

.destination-meta {
  margin-top: 54px;
  padding-top: 28px;
  border-top: 1px solid #383B4B;
  display: flex;
  gap: 79px;
}

.meta-item h3 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  letter-spacing: 2.362px;
  text-transform: uppercase;
  color: #D0D6F9;
  margin-bottom: 12px;
}

.meta-item p {
  font-family: 'Bellefair', serif;
  font-size: 28px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .destination-page {
    padding: 0;
    text-align: center;
    background-image: url('/public/destination/background-destination-tablet.jpg');
  }

  h2 {
    font-size: 28px;
    margin-left: -20px;
    /* letter-spacing: 3.375px; */
    /* padding-left: 28px; */
    padding: 12px;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  .destination-layout {
    grid-template-columns: 1fr;
    gap: 33px;
    padding:0 8px;
  }

  .planet-image img {
    width: 300px;
    height: 300px;
    margin-left: -200px;
  }

  .destination-info {
    margin: 0 auto;
    max-width: 373px;
    padding-top: 0;
  }

  h1 {
    font-size: 40px;
    margin: 32px 0 8px;
  }

  .description {
    font-size: 16px;
    line-height: 28px;
  }

  .destination-meta {
    flex-direction: row;
    justify-content: center;
    gap: 11px;
    margin-top: 49px;
    padding-top: 28px;
  }

  .meta-item {
    text-align: center;
    min-width: 216px;
  }
}

@media (max-width: 480px) {
  .destination-page {
    background-image: url('/public/destination/background-destination-mobile.jpg');
  }
  .dest-container{
    
    width: 100%;
    overflow: hidden;
    
  }

  h2 {
    font-size: 12px;
    letter-spacing: 2.7px;
    margin-top: 24px;
    margin-bottom: 32px;
  }

  .destination-layout {
    gap: 26px;
  }

  .planet-image img {
    width: 170px;
    height: 170px;
  }

  h1 {
    font-size: 36px;
    margin: 20px 0 1px;
  }

  .description {
    font-size: 13px;
    line-height: 25px;
  }

  .destination-meta {
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;
    padding-top: 32px;
  }

  .meta-item h3 {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .meta-item p {
    font-size: 28px;
  }
}
</style>
