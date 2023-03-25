import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playing: false,
  visible: false,
  src: ""
};


export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    show: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.visible = true;
    },
    hide: (state) => {
      state.visible = false;
    },
    setAudioSource: (state, action) => {
      state.src = action.payload
    }
  }
});

export const { show, hide, setAudioSource } = audioPlayerSlice.actions;

export const displayAudioPlayer = (state) => state.audioPlayer.visible
export const audioPlayerSource = (state) => state.audioPlayer.src

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default audioPlayerSlice.reducer;
