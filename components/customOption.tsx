'use client'

import { useState } from 'react'
import { CrossIcon, KeyboardArrowDownIcon } from './icons'

type Props = {
	optionList: string[]
}

export const CustomOption = ({ optionList }: Props) => {
	const [ selectedItems, setSelectedItems ] = useState<typeof optionList>([
		optionList[0]
	])

	const [checked, setChecked ] = useState(false)

	const isItemAlreadyExists = (item: string) => {
		return selectedItems.find( currentItem => currentItem === item)
	}

	const closeHandler = () => setChecked(false)
	const toggleSelect = () => setChecked( prevChecked => !prevChecked)
	// const optionBlurHandler = () => closeHandler()

	const optionClickHandler = (name: string) => () => {
		closeHandler()

		if( !isItemAlreadyExists(name) ) selectedItems.push(name)

		console.log({ name })
		console.log({ selectedItems })
	}

	const closeItemHandler = (item: string) => () => {
		const filteredSelectedItems = selectedItems.filter( currentItem => currentItem !== item )
		setSelectedItems( filteredSelectedItems )
	}


	return (
		<div className='relative'>
			<div data-name='details' className='flex border border-slate-300 rounded '>

				<div className='flex-1 flex flex-wrap gap-6 items-center px-2 py-1.5 '>

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
				<ul className='absolute w-full bg-slate-100 z-50'>
					{optionList.map( (item) => (
						<li 
							key={item} 
							onClick={optionClickHandler(item)} 
							className='border border-slate-200 px-2 py-1.5 rounded capitalize cursor-pointer hover:bg-slate-100 '
						>{item}</li>
					))}
				</ul>
			)}


		</div>
	)

}
