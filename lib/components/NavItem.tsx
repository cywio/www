import { MouseEventHandler, ReactNode, useContext } from 'react'
import { GlobalContext } from '@state'
import cx from 'classnames'

export const NavItem = ({
	children,
	onClick,
	href,
	hasArrow = true,
	isActive = false,
}: {
	children: ReactNode
	onClick?: MouseEventHandler<HTMLAnchorElement>
	href?: string
	hasArrow?: boolean
	isActive?: boolean
}) => {
	const { contentView } = useContext(GlobalContext)

	return (
		<a
			data-has-arrow={hasArrow}
			onClick={onClick}
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={cx('hover:underline cursor-pointer text-xl mb-3', {
				['text-orange-500']: isActive,
			})}
		>
			{children}
		</a>
	)
}
