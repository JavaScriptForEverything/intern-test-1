type Props = {
	className?: React.ComponentProps<'div'>['className']
}
export const InfoIcon = ({ className='text-slate-500/80 w-6 h-6' }: Props) => {

	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
			<circle cx="24" cy="24" r="21" fill="#2196f3"/>
			<path fill="#fff" d="M22 22h4v11h-4z"/>
			<circle cx="24" cy="16.5" r="2.5" fill="#fff"/>
		</svg>
	)
}

