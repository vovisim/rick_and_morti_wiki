/* eslint-disable */
import axios from 'axios'

const apiUrl = 'https://rickandmortyapi.com/api/'

async function GetCharacter (index) {
  try {
    // eslint-disable-next-line
    if (index != '') {
      return axios.get(apiUrl + 'character/' + index)
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
  }
}

async function GetEpisodes (index) {
  try {
    // eslint-disable-next-line
    return axios.get(apiUrl + 'episode/' + index)
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
  }
}

async function GetLocations (index) {
  try {
    // eslint-disable-next-line
    return axios.get(apiUrl + 'location/' + index)
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
  }
}

export { GetCharacter, GetEpisodes, GetLocations }
