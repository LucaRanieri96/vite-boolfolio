import { createApp } from 'vue'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {router} from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faEye } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitch, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faYoutube, faTwitch, faInstagram, faLinkedin, faEye)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
