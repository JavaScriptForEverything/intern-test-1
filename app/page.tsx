'use client'

import { CrossIcon, InfoIcon, KeyboardArrowDownIcon } from '@/components/icons'
import { useState } from 'react'


const marriedListOptions = [
	'Married',
	'Never Married',
]


const HomePage = () => {
	const [ selectedItems, setSelectedItems ] = useState<typeof marriedListOptions>([
		marriedListOptions[0]
	])
	const [checked, setChecked ] = useState(false)

	const isItemAlreadyExists = (item: string) => {
		return selectedItems.find( currentItem => currentItem === item)
	}

	const toggleSelect = () => {
		setChecked( prevChecked => !prevChecked)
	}

	const optionClickHandler = (name: string) => () => {
		setChecked(false)

		if( !isItemAlreadyExists(name) ) selectedItems.push(name)

		console.log({ name })
	}

	const closeItemHandler = (item: string) => () => {
		const filteredSelectedItems = selectedItems.filter( currentItem => currentItem !== item )
		setSelectedItems( filteredSelectedItems )
	}

	return (
	 <div className='container mx-auto h-screen grid grid-flow-col gap-3 bg-slate-300/30 text-slate-600 border border-slate-200'>

		<div data-name='left-panel' className='mt-4 bg-slate-50 col-span-3 px-4 pt-16 flex gap-8 '>

			<div data-name='name-container' className='mt-1 flex flex-col gap-6 whitespace-nowrap'>
				<p className='capitalize'>age</p>
				<p className='capitalize'>Height</p>
				<p className='capitalize'>Maritual Status</p>
			</div>

			<div data-name='value-container' className='flex flex-col gap-6 whitespace-nowrap'>
				<div data-name='details' className='flex items-center gap-2 '>
					<select className='text-sm border border-slate-300 rounded bg-slate-50 p-1'>
						<option className=''>18</option>
					</select>
					<span className='text-sm'>to</span>
					<select className='text-sm border border-slate-300 rounded bg-slate-50 p-1'>
						<option>50</option>
					</select>
				</div>
				<div data-name='details' className='flex items-center gap-2 '>
					<select className='text-sm border border-slate-300 rounded bg-slate-50 p-1'>
						<option>18.04 cm</option>
					</select>
					<span className='text-sm'>to</span>
					<select className='text-sm border border-slate-300 rounded bg-slate-50 p-1'>
						<option>28.09 cm</option>
					</select>
				</div>

				<div className='relative'>
					<div data-name='details' className='flex border border-slate-300 rounded '>

						<div className='flex-1 flex flex-wrap gap-4 items-center px-2 py-1.5 '>

							{!selectedItems.length && (
								<div className='flex items-center gap-1 '>
									<span className='capitalize'>select one</span>
								</div>
							)}

							{selectedItems.map( ((item, index) => (
								<div key={index} className='flex items-center gap-1 '>
									<span className='capitalize'>{item}</span>
									<button onClick={closeItemHandler(item)}> <CrossIcon /> </button>
								</div>
							)))}

						</div>

						<button onClick={toggleSelect} id='dropdown-button' className='bg-slate-200 px-3 '> <KeyboardArrowDownIcon /> </button>
					</div>

					{checked && (
						<ul className='absolute w-full'>
							{marriedListOptions.map( (item) => (
								<li 
									key={item} 
									onClick={optionClickHandler(item)} 
									className='border-slate-300 px-2 py-1.5 rounded cursor-pointer hover:bg-slate-100'
								>{item}</li>
							))}
						</ul>
					)}


				</div>


			</div>
		</div>

		<div data-name='right-panel' className=' mt-4 flex flex-col gap-4'>

			<div className='bg-slate-50 p-1 whitespace-nowrap rounded shadow-md'>
				<p className='px-4 py-1.5 font-medium bg-slate-200/70 rounded'>Profile ID Search</p>
				<div className='mx-2 py-2 flex gap-4 items-center justify-center'>
					<input placeholder='Enter Profile ID' className='
						w-40 border border-slate-300/90 rounded
						placeholder:text-sm placeholder:text-slate-400
						px-2 py-0.5 font-semibold 
					' />
					<button className='bg-primary text-slate-50 px-4 py-1 rounded shadow'>Go</button>
				</div>
			</div>

			<div className='bg-slate-50 p-1 whitespace-nowrap rounded shadow-md'>
				<p className='px-4 py-1.5 font-medium bg-slate-200/70 rounded'>Recent Searches</p>
				<div className='mx-2 py-2 flex gap-2 items-center'>
					<InfoIcon />
					<p className='text-sm'>You have no recent searches</p>
				</div>
			</div>

		</div>
	 
	 </div>
	)
}
export default HomePage
