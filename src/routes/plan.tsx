import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Plan = () => {
  const [isLeverage, setIsLeverage] = useState(false)

  return (
    <div className='bg-violet-800 flex-1 flex flex-row-reverse'>
      <div className='p-4 bg-slate-300'>
        <h2 className="text-3xl">Create a plan</h2>
        <form className="flex flex-col gap-4 mt-4">
          <label className="flex flex-col gap-1" htmlFor='name'>
            Name for your plan
            <input id='name' placeholder='Name for your plan'/>
          </label>
          <label className="flex flex-col gap-1" htmlFor='deposit'>
            Deposit
            <input id='deposit' placeholder='Your deposit'/>
          </label>
          <label className="flex flex-col gap-1" htmlFor='goal'>
            Trading goal
            <input id='goal' placeholder='Trading goal'/>
          </label>
          <div>
            <label htmlFor='lazy'>
              Lazy
              <input type="radio" id='lazy' name="risk" value={2.5}/>
            </label>
            <label htmlFor='active'>
              Active
              <input type="radio" id='active' name="risk" value={4}/>
            </label>
            <label htmlFor='full'>
              Full-time
              <input type="radio" id='full' name="risk" value={5.75}/>
            </label>
          </div>
          <label className="flex flex-col gap-1" htmlFor='date'>
            Choose date
            <input id='date' type={'date'}/>
          </label>
          <label htmlFor='isLeverage'>
            Will you use leverage?
            <input id="isLeverage" type={'checkbox'} checked={isLeverage} onChange={() => setIsLeverage(!isLeverage)}/>
          </label>
          { isLeverage && (
            <label className="flex flex-col gap-1" htmlFor='leverage'>
              What is your leverage?
              <input id='leverage' placeholder='Leverage'/>
            </label>
          )}
          <button type="button" className="bg-slate-400 rounded-full w-max px-4 py-1 self-center hover:bg-slate-500 active:bg-slate-600">
            + create
          </button>
        </form>
      </div>
      
      <Outlet />
    </div>
  )
}

export default Plan