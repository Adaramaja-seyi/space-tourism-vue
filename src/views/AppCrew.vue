<template>
  <nav-bar />
    <div class="crew">
      <div class="container-fluid">
        <h2><span>02</span> Meet your crew</h2>
        <div class="row crew-content">
          <div class="col-lg-6 crew-info text-center text-lg-left">
            <CrewTabs
              :crew-members="crewMembers"
              :selected-crew="selectedCrew"
              @update:selectedCrew="selectedCrew = $event"
            />
            <h4>{{ selectedCrew.role.toUpperCase() }}</h4>
            <h3>{{ selectedCrew.name.toUpperCase() }}</h3>
            <p>{{ selectedCrew.bio }}</p>
          </div>
          <div class="col-lg-6 crew-image text-center">
            <img :src="selectedCrew.images.png" :alt="selectedCrew.name" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
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
  
 
<style scoped>
.crew {
  min-height: 100vh;
  background-image: url('/public/crew/background-crew-desktop.jpg');
  background-size: cover;
  background-position: center;
  padding: 2rem 10%;
  padding-top: 80px;
  color: #FFFFFF;
}

h2 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.75rem;
  letter-spacing: 4.725px;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

h2 span {
  color: #d0d6f9;
  opacity: 0.25;
  margin-right: 1rem;
}

.crew-content {
  align-items: center;
  margin-top: 3rem;
}

.crew-info {
  max-width: 450px;
}

h4 {
  font-family: 'Bellefair', serif;
  font-size: 2rem;
  color: #d0d6f9;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 0.5rem;
}

h3 {
  font-family: 'Bellefair', serif;
  font-size: 3.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

p {
  font-family: 'Barlow', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #d0d6f9;
  margin-bottom: 2rem;
}

.crew-image img {
  max-height: 600px;
  width: auto;
}

@media (max-width: 768px) {
  .crew {
    background-image: url('/public/crew/background-crew-tablet.jpg');
    text-align: center;
  }

  .crew-content {
    flex-direction: column-reverse;
  }

  .crew-image img {
    max-height: 400px;
  }

  .crew-info {
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .crew {
    background-image: url('/public/crew/background-crew-mobile.jpg');
  }

  h3 {
    font-size: 2rem;
  }

  .crew-image img {
    max-height: 300px;
  }
}
</style>