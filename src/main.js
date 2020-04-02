import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDutUI_YGQX5IWz_cz9h5nO4yfpq2kipYw",
  authDomain: "admincoronaapp.firebaseapp.com",
  databaseURL: "https://admincoronaapp.firebaseio.com",
  projectId: "admincoronaapp",
  storageBucket: "admincoronaapp.appspot.com",
  messagingSenderId: "549524839196",
  appId: "1:549524839196:web:69b6d521f1aebc932bf8d9",
  measurementId: "G-42CW1CS4C3"
};
firebase.initializeApp(config);

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});



