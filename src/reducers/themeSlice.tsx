import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ThemeState = 'light' | 'dark'

const initialTheme: ThemeState = (localStorage.getItem('theme') as ThemeState) || 'light'

const themeSlice = createSlice({
	name: 'theme',
	initialState: initialTheme,
	reducers: {
		toggleTheme: (state: ThemeState): ThemeState => {
			const newTheme: ThemeState = state === 'light' ? 'dark' : 'light'
			localStorage.setItem('theme', newTheme)
			return newTheme
		},
		setTheme: (_, action: PayloadAction<ThemeState>): ThemeState => {
			localStorage.setItem('theme', action.payload)
			return action.payload
		},
	},
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
