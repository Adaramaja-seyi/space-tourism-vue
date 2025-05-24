<template>
  <nav-bar />
  <div class="technology">
    <div class="technology-content">
      <h2><span>03</span> Space launch 101</h2>
      <div class="technology-layout">
        <div class="left-section">
          <TechTabs
            :technologies="technologies"
            :selected-tech="selectedTech"
            @update:selectedTech="selectTech"
          />
        </div>
        <div class="tech-info">
          <h4>The terminology...</h4>
          <h3>{{ selectedTech.name }}</h3>
          <p>{{ selectedTech.description }}</p>
        </div>
        <div class="tech-image">
          <img
            :src="
              getImageUrl(
                windowWidth > 768
                  ? selectedTech.images?.portrait
                  : selectedTech.images?.landscape
              )
            "
            :alt="selectedTech.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TechTabs from "@/components/TechTabs.vue";
import techData from "@/assets/data.json";

export default {
  name: "AppTechnology",
  components: {
    
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
  color: #ffffff;
}

.technology-content {
  padding: 76px 0 0 165px;
}

h2 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  margin-bottom: 26px;
}

h2 span {
  opacity: 0.25;
  margin-right: 24px;
  font-weight: 700;
}

.technology-layout {
  display: flex;
  justify-content: space-evenly;
  gap: 60px;
  margin-top: 86px;

}

.left-section {
  display: flex;
  /* gap: 40px; */
  padding-top: 111px;
}

.tech-info {
  max-width: 470px;
  margin-top: 90px;
  margin-left: -120px;
}

h4 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 30px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
  text-transform: uppercase;
  margin-bottom: 11px;
}

h1 {
  font-family: "Bellefair", serif;
  font-size: 700px;
  text-transform: uppercase;
  margin-bottom: 17px;
}

p {
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}

.tech-image img {
  height: 527px;
  width: auto;
}

@media (max-width: 1024px) {
  .technology-content {
    padding: 76px 0 0 40px;
  }

  .technology-layout {
    gap: 60px;
  }

  .left-section {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .technology {
    background-image: url("/public/technology/background-technology-tablet.jpg");
  }

  .technology-content {
    padding: 40px 0 0;
  }

  h2 {
    font-size: 20px;
    letter-spacing: 3.375px;
    padding-left: 38px;
  }

  .technology-layout {
    flex-direction: column-reverse;
    gap: 56px;
    margin-top: 60px;
  }

  .left-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 4px;
    gap: 44px;
  }

  .tech-info {
    max-width: 958px;
    margin-left: 15px;
    text-align: center;
    padding: 30px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 28px;
  }

  .tech-image {
    width: 100%;
  }

  .tech-image img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .technology {
    background-image: url("/public/technology/background-technology-mobile.jpg");
  }

  h2 {
    font-size: 16px;
    letter-spacing: 2.7px;
    margin-bottom: 32px;
  }

  .technology-layout {
    gap: 4px;
    margin-top: 32px;
  }

  .left-section {
    gap: 26px;
  }

  h4 {
    font-size: 14px;
    letter-spacing: 2.36px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 15px;
    line-height: 25px;
  }
}
</style>
