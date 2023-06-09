import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import audioPlayerReducer from '../features/audioPlayer/audioPlayerSlice'
import themeReducer from './themeSlice'
import { worldsApi } from '../features/worlds/worldsAPI';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    audioPlayer: audioPlayerReducer,
    theme: themeReducer,
    [worldsApi.reducerPath]: worldsApi.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(worldsApi.middleware)
});
