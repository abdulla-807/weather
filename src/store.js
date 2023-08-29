import { createStore } from 'vuex'
import axios from "axios";

// Create a new store instance.
const store = createStore({
  state: {  
    apiKey: '7d6a4baf5de7814f7af5d578ef57bad2',
    fullWeather: null
  },
  mutations: { 
    setWeather(state, weather){
      state.fullWeather = weather
    }
  },
  actions: {   
    async setWeather({commit, state}, city){
      try {
        let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`);
        let cityInfo = response.data[0]
        let {lat, lon, local_names } = cityInfo;
        let result = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
        let weather = result.data;
        let weatherObj = { ...weather, name: local_names.ru }
        commit('setWeather', weatherObj)
        console.log(weatherObj);
      } catch (error) {
        
      }
    }
  },
  getters: {  
    getFullWeather: (state)=> state.fullWeather
  }
})

export default store