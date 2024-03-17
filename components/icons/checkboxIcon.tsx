type Props = {
	className?: React.ComponentProps<'div'>['className']
}
export const CheckboxIcon = ({ className='text-slate-500/80 w-6 h-6' }: Props) => {

	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
			<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 7L10 17l-5-5"/>
		</svg>
	)
}

