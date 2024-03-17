import { CustomCheckbox } from '@/components'
import CustomOption from '@/components/customOption'
import { CheckboxIcon, InfoIcon } from '@/components/icons'


const optionItems = [
	{
		label: 'age',
		option: {
			start: ['18', '48'],
			end: ['20', '50'],
		}
	},
	{
		label: 'height',
		option: {
			start: ['5.4 cm'],
			end: ['8.4 cm'],
		}
	},
]

const dropDownItems = [
	{
		label: 'maritual status',
		options: [ 'married', 'never married' ],
	},
	{
		label: 'religion',
		options: [ 'hindu', 'muslim', 'christian' ],
	},
	{
		label: 'mother tongue',
		options: [ 'bengali', 'english', 'urdo', 'spanish' ],
	},
	{
		label: 'community',
		options: ["dosen't matter", 'unknown'],
	},
	{
		label: 'country living in',
		options: ['india', 'USA', 'UK', 'UAE', 'canada', 'soudi arabia', 'bangladesh'],
	},
	{
		label: 'state living in',
		options: ["dosen't matter", 'unknown'],
	},
]



const HomePage = () => {

	return (
	 <div className='container mx-auto h-screen grid grid-flow-col gap-3 bg-slate-300/30 text-slate-600 border border-slate-200'>

		<aside data-name='left-panel' className='mt-4 bg-slate-50 col-span-3 px-4 pt-16 flex flex-col gap-8 '>
			<table className='w-full border border-slate-50 '>
				<tbody>
					{optionItems.map(({label, option}) => (
						<tr key={label} className='h-16 flex items-center border-0 border-red-500'>
							<td className='capitalize w-40 border-0 border-slate-300'>{label}</td>
							<td className='flex items-center gap-2 '>
								<select className='text-sm border border-slate-300 rounded bg-slate-50 p-1'>
									{option.start.map( item => (
										<option key={item} className=''>{item}</option>
									))}
								</select>
								<span className='text-sm'>to</span>
								<select className='text-sm border border-slate-300 rounded bg-slate-50 p-1'>
									{option.end.map( item => (
										<option key={item} className=''>{item}</option>
									))}
								</select>
							</td>
						</tr>
					))}

				</tbody>
			</table>

			<table className='w-full border border-slate-50 -mt-6'>
				<tbody>
					{dropDownItems.map( ({ label, options }) => (
						<tr key={label} className='h-12 flex items-center'>
							<td className='capitalize w-40 border-0 border-slate-300'>{label}</td>
							<td className='flex-1'>
								<CustomOption optionList={options} /> 
							</td>
						</tr>
					))}
					<tr className='h-12 flex items-center'>
						<td className='capitalize w-40 border-0 border-slate-300'>Photo Settings</td>
						<td className='flex-1 flex items-center gap-4 whitespace-nowrap'>

							<div className='flex gap-2 items-center'>
								<CustomCheckbox id='visible-to-all' />
								<label htmlFor="visible-to-all">Visible to all</label>
							</div>

							<div className='flex gap-2 items-center'>
								<CustomCheckbox id='protected-photo' />
								<label htmlFor="protected-photo">Protected Photo</label>
							</div>

						</td>
					</tr>

					<tr className='h-12 flex items-center'>
						<td className='capitalize w-40 border-0 border-slate-300'>Do not Show</td>
						<td className='flex-1 flex items-center gap-4 whitespace-nowrap'>

							<div className='flex gap-2 items-center'>
								<CustomCheckbox id='profile-filtered' />
								<label htmlFor='profile-filtered'>Profiles that have filtered me out</label>
							</div>

							<div className='flex gap-2 items-center'>
								<CustomCheckbox id='profile-viewed' />
								<label htmlFor='profile-viewed'>Profiles that I have already viewed</label>
							</div>

						</td>
					</tr>

					<tr className='h-12 flex items-center'>
						<td className='capitalize w-40 border-0 border-slate-300'></td>
						<td className='flex-1'>
							<p className='text-primary font-semibold whitespace-nowrap underline capitalize'>Advance search options</p>
						</td>
					</tr>

				</tbody>
			</table>
		</aside>
	 

		<aside data-name='right-panel' className=' mt-4 flex flex-col gap-4'>
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

		</aside>

	 </div>
	)
}
export default HomePage
