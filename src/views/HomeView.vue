<template>
  <div class="home">
    <nav-bar />
    <main class="main-content">
      <div class="text-content">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="explore-container">
        <router-link :to="{ name: 'destination' }" class="explore-btn">
          EXPLORE
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    // NavBar,
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background-image: url("/public/hom_Image/background-home-desktop.jpg");
  background-size: cover;
  background-position: center;
  color: #ffffff;
  position: relative;
}

.main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 30px 0;
  gap: 20px;
}

.text-content {
  max-width: 450px;
}

h5 {
  font-family: "Barlow Condensed", sans-serif;
  /* font-size: 28px; */
  letter-spacing: 4.75px;
  color: #d0d6f9;
  font-weight: normal;
  margin-bottom: 24px;
}

h1 {
  font-family: "Bellefair", serif;
  font-size: 100px;
  line-height: 1;
  margin: 24px 0;
  font-weight: 100;
}

p {
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}

.explore-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 30px;
}

.explore-btn {
  width: 274px;
  height: 274px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: "Bellefair", serif;
  font-size: 32px;
  letter-spacing: 2px;
  color: #0b0d17;
  position: relative;
  z-index: 1;
}

.explore-btn::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.5);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: -1;
}

.explore-btn:hover::after {
  opacity: 1;
  transform: scale(1.5);
}

@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
    text-align: center;
    padding-top: 150px;
  }

  .text-content {
    margin-bottom: 80px;
  }

  .explore-container {
    padding-right: 0;
  }

  .explore-btn {
    width: 242px;
    height: 242px;
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .home {
    background-image: url("/public/home/background-home-tablet.jpg");
  }

  h5 {
    font-size: 20px;
    letter-spacing: 3.375px;
  }

  h1 {
    font-size: 120px;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .home {
    background-image: url("/public/hom_Image/background-home-mobile.jpg");
    text-align: center;
  }

  .main-content {
    padding-top: 112px;
    padding-inline: 24px;
  }

  h5 {
    font-size: 16px;
    letter-spacing: 2.7px;
  }

  h1 {
    font-size: 80px;
    margin: 16px 0;
  }

  p {
    font-size: 15px;
    line-height: 25px;
    padding: 0;
  }

  .text-content {
    margin-bottom: 81px;
  }

  .explore-btn {
    width: 150px;
    height: 150px;
    font-size: 20px;
  }
}
</style>
