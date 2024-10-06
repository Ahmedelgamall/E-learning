import { createSlice } from '@reduxjs/toolkit';
import i18n from '.././i18n';  // Import the i18n configuration

// Create a slice for language management
export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'en',  // Default language
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);  // Change the language using i18next
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
