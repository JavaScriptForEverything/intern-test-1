import { CheckboxIcon } from './icons'

type Props = {
	id?: React.ComponentProps<'input'>['id']
}
export const CustomCheckbox = ({ id }: Props) => {

	return (
		<span className='relative border flex justify-center items-center '>
			<input id={id} type="checkbox" 
				className='w-6 h-6 appearance-none border-2 border-slate-500 rounded checked:bg-slate-500 '/>
			<CheckboxIcon className='absolute place-items-center text-slate-50'/>
		</span>
	)
}
