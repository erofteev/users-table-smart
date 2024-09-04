import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
	id: number
	name: string
	username: string
	email: string
	phone: string
}

interface UserState {
	users: User[]
	filter: string
}

const initialState: UserState = {
	users: [],
	filter: '',
}

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers(state, action: PayloadAction<User[]>) {
			state.users = action.payload
		},
		setFilter(state, action: PayloadAction<string>) {
			state.filter = action.payload
		},
	},
})

export const { setUsers, setFilter } = userSlice.actions

export default userSlice.reducer
