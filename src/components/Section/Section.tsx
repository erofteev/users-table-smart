import { FC, ReactNode } from 'react'

import './Section.scss'

interface SectionProps {
	children: ReactNode
	[key: string]: any
}

const Section: FC<SectionProps> = ({ children, ...rest }) => <section {...rest}>{children}</section>

export default Section
