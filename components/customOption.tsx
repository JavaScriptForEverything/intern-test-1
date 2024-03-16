'use client'

import { CrossIcon, KeyboardArrowDownIcon } from './icons'

const CustomOption = () => {

	return (
		<div data-name='details' className='relative flex border border-slate-300 rounded'>
			<div className='flex-1 flex flex-wrap gap-4 items-center px-2 py-1.5 '>
				{[...new Array(3)].map( ((item, index) => (
					<div key={index} className='flex items-center gap-1 '>
						<span className='capitalize'>item</span>
						<button> <CrossIcon /> </button>
					</div>
				)))}
			</div>

			<input type='checkbox' id='dropdown' className='peer' />
			<label htmlFor="dropdown" className='peer-checked:block '>
				<ul className='absolute w-full'>
					<li className='border border-slate-300 px-2 py-1.5 rounded cursor-pointer hover:bg-slate-100'>Item one</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</label>

			{/* <button className='bg-slate-200 px-3 '> <KeyboardArrowDownIcon /> </button> */}
		</div>
	)

	// return (
	// 	<>
	// 	<select className='text-sm border border-slate-300 rounded bg-slate-50 p-1'>
	// 		<option className=''>
	// 			<span>

	// 				Never Married 
	// 			</span>
	// 		</option>
	// 		<option>50</option>
	// 	</select>
		
	// 	</>
	// )
}
export default CustomOption
