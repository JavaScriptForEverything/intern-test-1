'use client'

import { useState } from 'react'

export const SearchPanel = () => {

	const [ search, setSearch ] = useState('')
	const searchChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(evt.target.value)
	}
	const goButtonClickHandler = () => {
		console.log({ search })
	}

	return (
		<>
			<input 
				value={search}
				onChange={searchChangeHandler}
				placeholder='Enter Profile ID' 
				className='
					w-40 border border-slate-300/90 rounded placeholder:text-sm 
					placeholder:text-slate-400 px-2 py-0.5 font-semibold 
					focus:outline-none focus:border-primary
				' 
			/>
			<button onClick={goButtonClickHandler} className='bg-primary text-slate-50 px-4 py-1 rounded shadow'>Go</button>
		</>
	)
}
