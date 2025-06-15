import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faLinkedin, faGithub)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(MotionPlugin)
app.mount('#app')