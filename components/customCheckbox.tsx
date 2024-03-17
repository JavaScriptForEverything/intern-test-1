'use client'

import { CheckboxIcon } from './icons'

export const CustomCheckbox = ({ id, name }: React.InputHTMLAttributes<HTMLInputElement>) => {

	const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		console.log({
			[evt.target.name]: evt.target.checked
		})
	}

	return (
		<span className='relative border flex justify-center items-center '>
			<input onChange={changeHandler} id={id} name={name} type="checkbox" 
				className='w-6 h-6 appearance-none border-2 border-slate-500 rounded checked:bg-slate-500 '/>
			<CheckboxIcon className='absolute place-items-center text-slate-50'/>
		</span>
	)
}
