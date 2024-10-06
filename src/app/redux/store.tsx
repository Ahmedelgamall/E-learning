import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';  // Import your language reducer

// Load the initial state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error('Failed to load state:', err); // Log any loading error
    return undefined; // If error occurs, return undefined
  }
};

// Save the current state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Failed to save state:', err); // Log any saving error
  }
};

// Preload the state from localStorage
const preloadedState = loadState();

// Configure the Redux store
export const store = configureStore({
  reducer: {
    language: languageReducer,  // Add your language reducer
  },
  preloadedState, // Preload state from localStorage
});

// Subscribe to store changes and save the updated state to localStorage
store.subscribe(() => {
  saveState(store.getState()); // Save the entire state to localStorage
});

// Export RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
