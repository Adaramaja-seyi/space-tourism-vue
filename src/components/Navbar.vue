<template>
  <nav class="nav-container">
    <div class="logo">
      <img src="/shared/logo.svg" alt="Space tourism logo" />
    </div>
    
    <div class="nav-line"></div>
    
    <button class="mobile-nav-toggle" 
            aria-controls="primary-navigation"
            :aria-expanded="isMenuOpen" 
            @click="toggleMenu">
      <span class="sr-only"></span>
    </button>

    <ul id="primary-navigation" 
        class="primary-navigation" 
        :class="{ 'show': isMenuOpen }">
      <li>
        <router-link to="/" class="nav-link" exact-active-class="active">
          <span>00</span> Home
        </router-link>
      </li>
      <li>
        <router-link to="/destination" class="nav-link" active-class="active">
          <span>01</span> Destination
        </router-link>
      </li>
      <li>
        <router-link to="/crew" class="nav-link" active-class="active">
          <span>02</span> Crew
        </router-link>
      </li>
      <li>
        <router-link to="/technology" class="nav-link" active-class="active">
          <span>03</span> Technology
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.nav-container {
  /* position: fixed; */
  top: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.logo {
  margin-left: 55px;
}

.nav-line {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
  margin-left: 64px;
  margin-right: -30px;
  z-index: 2;
}

.primary-navigation {
  display: flex;
  gap: 48px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  padding: 0 165px 0 123px;
  margin: 0;
  height: 96px;
  list-style: none;
  align-items: center;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  height: 96px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s ease;
}

.nav-link span {
  font-weight: 700;
  margin-right: 11px;
}

.nav-link:hover {
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.nav-link.active {
  border-bottom: 3px solid #FFFFFF;
}

.mobile-nav-toggle {
  display: none;
}

@media (max-width: 1024px) {
  .nav-line {
    display: none;
  }
  
  .nav-container {
    top: 0;
  }

  .primary-navigation {
    padding: 0 48px;
  }
}

@media (max-width: 768px) {
  .mobile-nav-toggle {
    display: block;
    /* position: fixed; */
    z-index: 2000;
    right: 24px;
    top: 34px;
    background: transparent;
    background-image: url('/shared/icon-hamburger.svg');
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;
    height: 21px;
    border: 0;
    cursor: pointer;
   
  }

  .mobile-nav-toggle[aria-expanded="true"] {
    background-image: url('/shared/icon-close.svg');
  }

  .primary-navigation {
    position: fixed;
    inset: 0 0 0 32%;
    flex-direction: column;
    padding: 118px 0 0 32px;
    gap: 32px;
    height: 100vh;
    transform: translateX(100%);
    transition: transform 350ms ease-out;
    align-items: flex-start;
  }

  .primary-navigation.show {
    transform: translateX(0);
  }

  .nav-link {
    height: auto;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .primary-navigation {
    inset: 0 0 0 0;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }

  .logo {
    margin-left: 24px;
  }

  .logo img {
    width: 40px;
    height: 40px;
  }
}
</style>