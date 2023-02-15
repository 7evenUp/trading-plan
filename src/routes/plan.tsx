import { Outlet } from 'react-router-dom'

const plan = () => {
  return (
    <div className='bg-violet-800 flex-1 flex flex-row-reverse'>
      <div className='p-4'>
        <h2>Create a plan</h2>
        <form>
          <label htmlFor='name'>
            Name for your plan
            <input id='name' placeholder='Name for your plan'/>
          </label>
          <label htmlFor='date'>
            Choose date
            <input id='date' type={'date'}/>
          </label>
        </form>
      </div>
      
      <Outlet />
    </div>
  )
}

export default plan