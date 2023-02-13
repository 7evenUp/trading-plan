import { Outlet } from 'react-router-dom'

const plan = () => {
  return (
    <div className='bg-violet-800 flex-1 flex flex-row-reverse'>
      <div>
        <h2>Create a plan</h2>
        <form>
          <label htmlFor='name'>
            <input id='name' placeholder='Name for your plan'/>
          </label>
        </form>
      </div>
      
      <Outlet />
    </div>
  )
}

export default plan