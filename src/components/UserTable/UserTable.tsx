import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setFilter, setUsers } from '../../reducers/userSlice'
import { RootState } from '../../store'
import { fetchUsers } from '../../utils/userAPI'
import Section from '../Section/Section'
import './UserTable.scss'

const UserTable: React.FC = () => {
	const dispatch = useDispatch()
	const users = useSelector((state: RootState) => state.users.users)
	const filter = useSelector((state: RootState) => state.users.filter)

	useEffect(() => {
		const loadUsers = async () => {
			const users = await fetchUsers()
			dispatch(setUsers(users))
		}
		loadUsers()
	}, [dispatch])

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setFilter(e.target.value))
	}

	const filteredUsers = users.filter(user => Object.values(user).some(value => value.toString().toLowerCase().includes(filter.toLowerCase())))

	return (
		<Section className='section container'>
			<div className='section__header'>
				<h1 className='section__header-title'>Users table</h1>
				<div className='section__header-search search'>
					<input className='search__input' name='search' id='search' type='text' aria-label='Search' placeholder='Find a user' value={filter} onChange={handleFilterChange} />
				</div>
			</div>
			<div className='section__body'>
				<table className='table' role='table'>
					<thead className='table__head'>
						<tr className='table__tr'>
							<th className='table__th' scope='col'>
								Name
							</th>
							<th className='table__th' scope='col'>
								Username
							</th>
							<th className='table__th' scope='col'>
								Email
							</th>
							<th className='table__th' scope='col'>
								Phone
							</th>
						</tr>
					</thead>
					<tbody className='table__body'>
						{filteredUsers.length > 0 ? (
							filteredUsers.map(user => (
								<tr className='table__tr' key={user.id}>
									<td className='table__td' data-label='Name'>
										{user.name}
									</td>
									<td className='table__td' data-label='Username'>
										{user.username}
									</td>
									<td className='table__td' data-label='Email'>
										{user.email}
									</td>
									<td className='table__td' data-label='Phone'>
										{user.phone}
									</td>
								</tr>
							))
						) : (
							<tr className='table__tr'>
								<td className='table__td' colSpan={4} style={{ textAlign: 'center' }}>
									User not found
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</Section>
	)
}

export default UserTable
