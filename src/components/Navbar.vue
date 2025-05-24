<template>
    <nav class="navbar">
      <div class="logo">
        <img src="/public/shared/logo.svg" alt="Space Tourism Logo" />
      </div>
      <b-button
        v-b-toggle.nav-collapse
        class="hamburger d-lg-none"
        variant="link"
      >
        <div></div>
        <div></div>
        <div></div>
      </b-button>
      <b-collapse id="nav-collapse" class="nav-links" is-nav>
        <ul class="nav-links-list">
          <li>
           
              <router-link :to="{name: 'home'}">  <span>00</span> Home </router-link>
            
          
          </li>
          <li>
            <router-link :to="{name: 'destination'}">   <span>01</span> Destination </router-link>
             
         
          </li>
          <li>
            <router-link :to="{name: 'crew'}">   <span>02</span> Crew </router-link>
          </li>
          <li>
            <router-link :to="{name: 'technology'}">  <span>03</span> Technology</router-link>
          </li>
        </ul>
      </b-collapse>
    </nav>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10%;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
  }
  
  .logo img {
    width: 48px;
  }
  
  .nav-links-list {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }
  
  .nav-links-list li a {
    color: #ffffff;
    text-decoration: none;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
    letter-spacing: 2.7px;
    padding-bottom: 1rem;
    transition: border-bottom 0.3s;
  }
  
  .nav-links-list li a span {
    margin-right: 0.5rem;
    font-weight: bold;
  }
  
  .nav-links-list li a:hover,
  .nav-links-list li a.active {
    border-bottom: 3px solid #ffffff;
  }
  
  .hamburger {
    padding: 0;
  }
  
  .hamburger div {
    width: 25px;
    height: 3px;
    background-color: #ffffff;
    margin: 5px;
  }
  
  @media (max-width: 991px) {
    .nav-links {
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 60%;
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(40.7742px);
      padding: 5rem 2rem;
      z-index: 1000;
    }
  
    .nav-links-list {
      flex-direction: column;
    }
  
    .hamburger {
      display: block;
    }
  }
  
  @media (min-width: 992px) {
    .hamburger {
      display: none;
    }
  }
  </style>