<template>
  <div class="home">
    <nav-bar />
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 home-text text-center text-lg-left">
          <h3>So, you want to travel to</h3>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div class="col-lg-6 text-center">
          <router-link :to="{name: 'destination' } " class="explore-btn">  Explore</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    // Navbar,
  },
};
</script>

<style scoped>

 .home {
  min-height: 100vh;
  background-image: url("/public/hom_Image/background-home-desktop.jpg");
  background-size: cover;
  background-position: center;
  padding-top: 80px;
}

.home-text h3 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  letter-spacing: 4.725px;
  color: #d0d6f9;
  margin-top: 100px;
  margin-left: 80px;

}

.home-text h1 {
  font-family: "Bellefair", serif;
  font-size: 7rem;
  text-transform: uppercase;
  margin-left: 80px;
  margin-top: -16px;
}

.home-text p {
  font-family: "Barlow", sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #d0d6f9;
  max-width: 450px;
  margin-left: 70px;
  margin-top: -60px;
}

.explore-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 224px;
    height: 224px;
    margin-left: 920px ;
    margin-top: -230px;
    background: #FFFFFF;
    color: #0B0D17;
    border-radius: 50%;
    text-transform: uppercase;
    font-family: 'Bellefair', serif;
    font-size: 2rem;
    text-decoration: none;
    transition: box-shadow 0.3s;
}

.explore-btn:hover {
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .home {
    background-image: url("/public/hom_Image/background-home-tablet.jpg");
    text-align: center;
    padding: 5% 5%;
  }

  .home-text h1 {
    font-size: 5rem;
  }

  
  .explore-btn {
        width: 150px;
        height: 150px;
        font-size: 1.25rem;
        margin-top: 2rem; }
}

@media (max-width: 480px) {
  .home {
    background-image: url("/public/hom_Image/background-home-mobile.jpg");
  }

  .home-text h1 {
    font-size: 3.5rem;
  }
} 
</style>

