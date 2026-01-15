import { createRouter, createWebHistory } from 'vue-router'

// Core Views
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

// Casino Views
import CasinoReviews from '../views/CasinoReviews.vue'
import TopCasinos from '../views/TopCasinos.vue'
import NewCasinos from '../views/NewCasinos.vue'
import LiveCasino from '../views/LiveCasino.vue'
import MobileCasinos from '../views/MobileCasinos.vue'
import Compare from '../views/Compare.vue'

// Event & Activity Views
import Sponsors from '../views/Sponsors.vue'
import Tasks from '../views/Tasks.vue'
import Surveys from '../views/Surveys.vue'
import Stream from '../views/Stream.vue'
import Events from '../views/Events.vue'
import Tickets from '../views/Tickets.vue'
import Bonuses from '../views/Bonuses.vue'
import Tournaments from '../views/Tournaments.vue'
import Leaderboard from '../views/Leaderboard.vue'

// Game Views
import SpecialOdds from '../views/SpecialOdds.vue'
import GamePicker from '../views/GamePicker.vue'
import UserSubmissions from '../views/UserSubmissions.vue'

// Info Views
import PaymentMethods from '../views/PaymentMethods.vue'
import FAQ from '../views/FAQ.vue'
import ResponsibleGambling from '../views/ResponsibleGambling.vue'
import Contact from '../views/Contact.vue'

// User Views
import Profile from '../views/Profile.vue'
import Favorites from '../views/Favorites.vue'

const routes = [
  // Core
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },

  // Casino
  { path: '/casino-incelemeleri', name: 'CasinoReviews', component: CasinoReviews },
  { path: '/en-iyi-casinolar', name: 'TopCasinos', component: TopCasinos },
  { path: '/yeni-casinolar', name: 'NewCasinos', component: NewCasinos },
  { path: '/canli-casino', name: 'LiveCasino', component: LiveCasino },
  { path: '/mobil-casinolar', name: 'MobileCasinos', component: MobileCasinos },
  { path: '/karsilastir', name: 'Compare', component: Compare },

  // Events & Activities
  { path: '/sponsors', name: 'Sponsors', component: Sponsors },
  { path: '/gorevler', name: 'Tasks', component: Tasks },
  { path: '/anketler', name: 'Surveys', component: Surveys },
  { path: '/yayin', name: 'Stream', component: Stream },
  { path: '/etkinlikler', name: 'Events', component: Events },
  { path: '/biletler', name: 'Tickets', component: Tickets },
  { path: '/bonuslar', name: 'Bonuses', component: Bonuses },
  { path: '/turnuvalar', name: 'Tournaments', component: Tournaments },
  { path: '/liderlik-tablosu', name: 'Leaderboard', component: Leaderboard },

  // Games
  { path: '/ozel-oranlar', name: 'SpecialOdds', component: SpecialOdds },
  { path: '/oyun-secici', name: 'GamePicker', component: GamePicker },
  { path: '/sizden-gelenler', name: 'UserSubmissions', component: UserSubmissions },

  // Info
  { path: '/odeme-yontemleri', name: 'PaymentMethods', component: PaymentMethods },
  { path: '/sss', name: 'FAQ', component: FAQ },
  { path: '/sorumlu-kumar', name: 'ResponsibleGambling', component: ResponsibleGambling },
  { path: '/iletisim', name: 'Contact', component: Contact },

  // User
  { path: '/profil', name: 'Profile', component: Profile },
  { path: '/favoriler', name: 'Favorites', component: Favorites },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

