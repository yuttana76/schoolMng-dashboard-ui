import React from 'react'

const Annoucements = () => {
  return (
    <div className='bg-white p-4 rounded-md' >
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Annoucements</h1>
            <span className='text-xs text-gray-400'>View all</span>
        </div>

        <div className='flex flex-col gap-5 mt-4'>
            <div className='bg-lamaSkyLight ruound-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Annoucement 1</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2024-01-01</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>sjfsljflsjfjdsjffjsdkfd</p>
            </div>
        </div>
        <div className='flex flex-col gap-5 mt-4'>
            <div className='bg-lamaPurpleLight ruound-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Annoucement 2</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2024-01-01</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>sjfsljflsjfjdsjffjsdkfd</p>
            </div>
        </div>
        <div className='flex flex-col gap-5 mt-4'>
            <div className='bg-lamaYellowLight ruound-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Annoucement 3</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2024-01-01</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>sjfsljflsjfjdsjffjsdkfd</p>
            </div>
        </div>

        
        </div>
  )
}

export default Annoucements