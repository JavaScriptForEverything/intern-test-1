'use client'

type Props = {
	option: string[]
}
export const Select = ({ option }: Props ) => {

	const changeHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(evt.target.value)
	}

	return (
		<select onChange={changeHandler} className='text-sm border border-slate-300 rounded bg-slate-50 p-1'>
			{option.map( item => (
				<option key={item} value={item}>{item}</option>
			))}
		</select>
	)
}
