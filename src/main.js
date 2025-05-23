import './assets/main.css'
import Navbar from './components/Navbar.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.component('nav-bar', Navbar)

// import Vue from 'vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import './assets/main.css';
// import App from './App.vue';
// import AppDestination from './AppDestination.vue';
// import AppCrew from './AppCrew.vue';
// import AppTechnology from './AppTechnology.vue';


// Vue.config.productionTip = false;

// const currentPage = window.location.pathname.split('/').pop() || 'index.html';
// let AppComponent;

// if (currentPage === 'destination.html') {
//     AppComponent = AppDestination;
// } else if (currentPage === 'crew.html') {
//     AppComponent = AppCrew;
// } else if (currentPage === 'technology.html') {
//     AppComponent = AppTechnology;
// } else {
//     AppComponent = App;
// }

// new Vue({
//     render: h => h(AppComponent),
// // }).$mount('#app');
    app.mount('#app')