import { MAIN_URL } from './constants'

export const fetchUsers = async () => {
	try {
		const response = await fetch(MAIN_URL)
		return await response.json()
	} catch (err) {
		console.log(err)
	}
}
