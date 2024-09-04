import UserTable from '../UserTable/UserTable'

import '../../styles/main.scss'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const App = () => (
	<>
		<Header />
		<main className='main'>
			<UserTable />
		</main>
		<Footer />
	</>
)

export default App
