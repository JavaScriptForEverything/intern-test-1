type Props = {
	className?: React.ComponentProps<'div'>['className']
}
export const KeyboardArrowDownIcon = ({ className='text-slate-500 w-2.5 h-2.5' }: Props) => {

	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
			<path fill="currentColor" d="M7.5 12L0 4h15z"/>
		</svg>
	)
}

