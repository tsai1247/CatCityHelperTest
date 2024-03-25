/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)
app.use(VCalendar, {})

registerPlugins(app)

app.mount('#app')
