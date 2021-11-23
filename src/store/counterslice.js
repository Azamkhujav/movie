import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
      menu:['Новинки','Каталог','Подборки','Подписки','Мои фильмы','Дети'],
      films:[],
      popularfilms:[],
      NotFound:[],
      recomendation:[]
  },
  reducers: {
     productList(state,action){
         state.popularfilms = action.payload
      },
      newFilm(state,action){
        state.films = action.payload
     },
     setNotFound(state,action){
         state.NotFound = action.payload
         
      },
      setrecomend(state,action){
         state.recomendation = action.payload
      },

  },
})

export const {productList,newFilm,setNotFound,setrecomend} = counterSlice.actions

export const GetPopularFilms = (state) => state.counter.popularfilms;
export const GetNewFilms = (state) => state.counter.films;
export const GetNotFound = (state) => state.counter.NotFound;
export const GetRecomend = (state) => state.counter.recomendation;

export default counterSlice.reducer