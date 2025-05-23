
<template>
  <nav-bar />
    <div class="technology">
      <div class="container-fluid">
        <h2><span>03</span> Space launch 101</h2>
        <div class="row technology-content">
          <div class="col-lg-2 tech-tabs-col">
            <TechTabs
              :technologies="technologies"
              :selected-tech="selectedTech"
              @update:selectedTech="selectTech"
            />
          </div>
          <div class="col-lg-5 tech-info text-center text-lg-left">
            <h4>The terminology...</h4>
            <h3>{{ selectedTech.name.toUpperCase() }}</h3>
            <p>{{ selectedTech.description }}</p>
          </div>
          <div class="col-lg-5 tech-image text-center">
            <img
              :src="
                windowWidth > 768
                  ? selectedTech.images.portrait
                  : selectedTech.images.landscape
              "
              :alt="selectedTech.name"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import TechTabs from '../components/TechTabs.vue';
  import techData from '@/assets/data.json'
  
  export default {
    name: 'AppTechnology',
    components: {
      // Navbar,
      TechTabs,
    },
    data() {
      return {
        technologies: [],
        selectedTech: {},
        windowWidth: window.innerWidth,
      };
    },
    created() {
    // Load technology data from JSON file
    this.technologies = techData.technology
    // Set initial selected technology
    this.selectedTech = this.technologies[0]
  },
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      selectTech(tech) {
        this.selectedTech = tech;
      },
      handleResize() {
        this.windowWidth = window.innerWidth;
      },
      getImageUrl(path) {
      if (!path) return ''
      return path.startsWith('/') ? path : `/${path}`
    }
    },
  };
  </script>
  
  <style scoped>
  .technology {
    min-height: 100vh;
    background-image: url('/public/technology/background-technology-desktop.jpg');
    background-size: cover;
    padding: 2rem 10%;
    padding-top: 80px;
  }
  
  h2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.75rem;
    letter-spacing: 4.725px;
    margin-bottom: 2rem;
  }
  
  h2 span {
    color: #d0d6f9;
    margin-right: 1rem;
  }
  
  .technology-content {
    align-items: center;
  }
  
  .tech-info {
    max-width: 470px;
  }
  
  .tech-info h4 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
    letter-spacing: 2.7px;
    color: #d0d6f9;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  
  .tech-info h3 {
    font-family: 'Bellefair', serif;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  
  .tech-info p {
    font-family: 'Barlow', sans-serif;
    font-size: 1.125rem;
    line-height: 1.8;
    color: #d0d6f9;
  }
  
  .tech-image img {
    max-width: 515px;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .technology {
      background-image: url('/public/technology/background-technology-tablet.jpg');
      text-align: center;
    }
  
    .technology-content {
      flex-direction: column;
    }
  
    .tech-tabs-col {
      order: 2;
    }
  
    .tech-info {
      order: 1;
    }
  
    .tech-image {
      order: 0;
    }
  
    .tech-image img {
      max-width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .technology {
      background-image: url('/public/technology/background-technology-mobile.jpg');
    }
  
    .tech-info h3 {
      font-size: 2rem;
    }
  }
  </style>