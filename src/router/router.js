import { createRouter, createWebHistory } from 'vue-router'
import CharactersWindow from '@/components/CharactersWindow'
import EpisodesWindow from '@/components/EpisodesWindow'
import LocationWindow from '@/components/LocationWindow'
import MoreInfoWindow from '@/components/MoreInfoWindow'
import MoreInfoEpisodeWindow from '@/components/MoreInfoEpisodeWindow'
import MoreInfoLocationWindow from '@/components/MoreInfoLocationWindow'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CharactersWindow
    },
    {
      path: '/episodes',
      component: EpisodesWindow
    },
    {
      path: '/locations',
      component: LocationWindow
    },
    {
      path: '/character/:id',
      component: MoreInfoWindow,
      name: 'MoreInfo',
      props: true
    },
    {
      path: '/episodes/:id',
      component: MoreInfoEpisodeWindow,
      name: 'MoreInfoEpisode',
      props: true
    },
    {
      path: '/locations/:id',
      component: MoreInfoLocationWindow,
      name: 'MoreInfoLocations',
      props: true
    }
  ]
})

export default router
