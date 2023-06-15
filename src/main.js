import { createApp } from 'vue'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {router} from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faYoutube, faTwitch, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faTwitter, faYoutube, faTwitch, faInstagram)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
