import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../reducers/themeSlice'
import { RootState } from '../../store/index'

import './ThemeSwitcher.scss'

const ThemeSwitcher = () => {
	const dispatch = useDispatch()
	const theme = useSelector((state: RootState) => state.theme)

	const iconLight = (
		<svg className='icon sun-icon' width='14' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#a)'>
				<path d='M7 3.227a.602.602 0 0 1-.602-.602V1.312a.602.602 0 0 1 1.204 0v1.313A.602.602 0 0 1 7 3.227Zm0 10.062a.602.602 0 0 1-.602-.601v-1.313a.602.602 0 0 1 1.204 0v1.313a.602.602 0 0 1-.602.601Zm3.094-8.781a.602.602 0 0 1-.426-1.027l.928-.928a.602.602 0 0 1 .85.85l-.927.929a.6.6 0 0 1-.425.176Zm-7.116 7.115a.6.6 0 0 1-.425-1.027l.928-.928a.602.602 0 1 1 .85.85l-.927.929a.6.6 0 0 1-.426.176Zm9.71-4.021h-1.313a.602.602 0 0 1 0-1.204h1.313a.602.602 0 0 1 0 1.204Zm-10.063 0H1.312a.602.602 0 0 1 0-1.204h1.313a.602.602 0 0 1 0 1.204Zm8.397 4.021a.6.6 0 0 1-.426-.176l-.928-.928a.602.602 0 0 1 .85-.85l.929.927a.601.601 0 0 1-.425 1.027ZM3.906 4.508a.599.599 0 0 1-.425-.176l-.928-.928a.602.602 0 0 1 .85-.85l.929.927a.602.602 0 0 1-.426 1.027ZM7 9.789a2.789 2.789 0 1 1 0-5.578 2.789 2.789 0 0 1 0 5.578Z' fill='currentColor' />
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h14v14H0z' />
				</clipPath>
			</defs>
		</svg>
	)

	const iconDark = (
		<svg className='icon moon-icon' width='12' height='12' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
			<path d='M6.768 6a5.385 5.385 0 0 1 2.646-4.615A5.062 5.062 0 0 0 7.537 1a5 5 0 1 0 0 10 5.062 5.062 0 0 0 1.9-.385A5.384 5.384 0 0 1 6.767 6Z' fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)

	const handleToggle = () => {
		dispatch(toggleTheme())
	}

	return (
		<button className='theme-switch' type='button' role='switch' aria-checked={theme === 'light' ? false : true} aria-label='Dark theme' onClick={handleToggle}>
			{theme === 'light' ? iconDark : iconLight}
		</button>
	)
}

export default ThemeSwitcher
