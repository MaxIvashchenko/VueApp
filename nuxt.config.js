const firebaseConfig = {
  apiKey: "AIzaSyBfXO5myRpghqr9Et9i_loziSunvQQhOBc",
  authDomain: "vue-app-33c6f.firebaseapp.com",
  projectId: "vue-app-33c6f",
  storageBucket: "vue-app-33c6f.appspot.com",
  messagingSenderId: "179475418864",
  appId: "1:179475418864:web:b20c3a8e244893d5fbfc35",
  measurementId: "G-YNYRXVCXS3"
};

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vue-vuex-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: 'blue' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    // '@nuxtjs/firebase',
    [
      '@nuxtjs/firebase',
      {
        config: firebaseConfig,
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
          },
          firestore: true,
          storage: true
        }
      }
    ]
  ],
  // firebaseConfig : {
  //   apiKey: "AIzaSyBfXO5myRpghqr9Et9i_loziSunvQQhOBc",
  //   authDomain: "vue-app-33c6f.firebaseapp.com",
  //   projectId: "vue-app-33c6f",
  //   storageBucket: "vue-app-33c6f.appspot.com",
  //   messagingSenderId: "179475418864",
  //   appId: "1:179475418864:web:b20c3a8e244893d5fbfc35",
  //   measurementId: "G-YNYRXVCXS3"
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
