
  <script>
 
  import CrewTabs from '../components/CrewTabs.vue';
   import crewData from '@/assets/data.json'
  
  export default {
    name: 'AppCrew',
    components: {
      CrewTabs,
    },
    data() {
      return {
        crewMembers: [],
        selectedCrew: {},
      };
    },
    created() {
    // Load crew data from JSON file
    this.crewMembers = crewData.crew
    // Set initial selected crew member
    this.selectedCrew = this.crewMembers[0]
  },
  methods: {
    updateSelectedCrew(crew) {
      this.selectedCrew = crew
    },
    getImageUrl(path) {
      if (!path) return ''
      return path.startsWith('/') ? path : `/${path}`
    }
  }
  };
  </script>
  
 


<template>
  <nav-bar />
  <div class="crew">
    <div class="container">
      <h2><span>02</span> Meet your crew</h2>
      <div class="crew-layout">
        <div class="crew-content">
          <div class="crew-info">
            <h4>{{ selectedCrew.role }}</h4>
            <h3>{{ selectedCrew.name }}</h3>
            <p>{{ selectedCrew.bio }}</p>
          </div>
          <CrewTabs
            :crew-members="crewMembers"
            :selected-crew="selectedCrew"
            @update:selectedCrew="updateSelectedCrew"
          />
        </div>
        <div class="crew-image">
          <img :src="selectedCrew.images.png" :alt="selectedCrew.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.crew {
  min-height: 100vh;
  background-image: url('/images/crew/background-crew-desktop.jpg');
  background-size: cover;
  background-position: center;
  padding: 2rem 10%;
  color: #FFFFFF;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 80px;
}

h2 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  letter-spacing: 4.75px;
  text-transform: uppercase;
}

h2 span {
  opacity: 0.25;
  margin-right: 1rem;
}

.crew-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
}

.crew-content {
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.crew-info {
  margin-bottom: 4rem;
}

h4 {
  font-family: 'Bellefair', serif;
  font-size: 22px;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 1rem;
}

h3 {
  font-family: 'Bellefair', serif;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

p {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #D0D6F9;
}

.crew-image {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 600px;
}

.crew-image img {
  max-height: 700px;
  width: auto;
}

@media (max-width: 1024px) {
  .crew-layout {
    flex-direction: column;
    text-align: center;
  }

  .crew-content {
    order: 1;
  }

  .crew-image {
    order: 2;
  }

  .crew-image img {
    max-height: 500px;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .crew {
    background-image: url('/images/crew/background-crew-tablet.jpg');
    padding: 2rem 5%;
  }

  .crew-image img {
    max-height: 400px;
  }
}

@media (max-width: 480px) {
  .crew {
    background-image: url('/images/crew/background-crew-mobile.jpg');
  }

  .crew-image img {
    max-height: 300px;
  }

  h3 {
    font-size: 32px;
  }

  h4 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }
}
</style>