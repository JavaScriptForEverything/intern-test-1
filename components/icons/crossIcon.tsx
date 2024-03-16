type Props = {
	className?: React.ComponentProps<'div'>['className']
}
export const CrossIcon = ({ className='text-slate-500/80 w-3.5 h-3.5' }: Props) => {

	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
			<path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/>
		</svg>
	)
}
