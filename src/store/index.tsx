import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../reducers/themeSlice'
import userReducer from '../reducers/userSlice'

export const store = configureStore({
	reducer: {
		users: userReducer,
		theme: themeReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
