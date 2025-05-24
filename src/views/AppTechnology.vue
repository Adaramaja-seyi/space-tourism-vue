<template>
  <nav-bar />
  <div class="technology">
    <div class="container">
      <h2><span>03</span> Space launch 101</h2>
      <div class="technology-layout">
        <div class="left-section">
          <TechTabs
            :technologies="technologies"
            :selected-tech="selectedTech"
            @update:selectedTech="selectTech"
          />
        </div>
        <div class="tech-contain">
          <div class="tech-content">
            <h4>THE TERMINOLOGY...</h4>
            <h3>{{ selectedTech.name }}</h3>
            <p>{{ selectedTech.description }}</p>
          </div>
         </div>
          <div class="tech-image">
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
import TechTabs from "../components/TechTabs.vue";
import techData from "@/assets/data.json";

export default {
  name: "AppTechnology",
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
    this.technologies = techData.technology;
    // Set initial selected technology
    this.selectedTech = this.technologies[0];
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    selectTech(tech) {
      this.selectedTech = tech;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    getImageUrl(path) {
      if (!path) return "";
      return path.startsWith("/") ? path : `/${path}`;
    },
  },
};
</script>

<style scoped>
.technology {
  min-height: 100vh;
  background-image: url("/public/technology/background-technology-desktop.jpg");
  background-size: cover;
  background-position: center;
  padding: 2rem 0 2rem 10%;
  color: #ffffff;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 80px;
}
.tech-contain{
  display: flex;
  flex-direction: column;
}
h2 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  letter-spacing: 4.75px;
  text-transform: uppercase;
  margin-bottom: 3rem;
}

h2 span {
  opacity: 0.25;
  margin-right: 1rem;
}

.technology-layout {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 2rem;
}

.left-section {
  display: flex;
  align-items: flex-start;
  gap: 4rem;
}

.tech-content {
  max-width: 470px;
  margin-left: -10%;
}

h4 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
  margin-bottom: 1rem;
}

h3 {
  font-family: "Bellefair", serif;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

p {
  font-family: "Barlow", sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: #d0d6f9;
}

.tech-image {
  margin-right: 10%;
  display: flex;
  
}

.tech-image img {
  max-height: 527px;
  width: auto;
}

@media (max-width: 1024px) {
  h3 {
    font-size: 40px;
  }

  .left-section {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .technology {
    padding: 2rem 0;
    background-image: url("/images/technology/background-technology-tablet.jpg");
  }

  .technology-layout {
    flex-direction: column-reverse;
  }

  .left-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 5%;
  }

  .tech-image {
    margin-right: 0;
    width: 100%;
    
  }

  .tech-image img {
    width: 100%;
    max-height: none;
    object-fit: cover;
    gap: 3rem;
  }

  h2 {
    padding-left: 5%;
  }
}

@media (max-width: 480px) {
  .technology {
    background-image: url("/images/technology/background-technology-mobile.jpg");
  }

  h3 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
  }
}
</style>
