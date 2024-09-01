import React from 'react'

function AddEmployee() {
  return (
    <div className='flex flex-col max-w-2xl mx-auto shadow border-b'>
        <div className='px-4 py-4'>
            <div className='flex justify-center font-thin text-2xl tracking-wider'>
                <p>Add New Employee</p>
            </div>
            <div className="h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    First Name
                </label>
                <input type='text' className='h-10 w-96 border px-2 py-2'></input>
            </div>
            <div className="h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Last Name
                </label>
                <input type='text' className='h-10 w-96 border px-2 py-2'></input>
            </div>
            <div className="h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Email 
                </label>
                <input type='email' className='h-10 w-96 border px-2 py-2'></input>
            </div>
            <div className=' h-14 w-full my-4 space-x-4 pt-4'>
                <button className='rounded font-semibold text-white bg-green-400 hover:bg-green-700 px-6 py-2'>
                    Save
                </button>
                <button className='rounded font-semibold text-white bg-red-400 hover:bg-red-700 px-6 py-2'>
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee
