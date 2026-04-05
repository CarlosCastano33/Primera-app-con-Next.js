import Principal from '@/components/atoms/Buttons/Principal'
import Login from '@/components/atoms/Buttons/Login'

const index = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center w-1/2 justify-around'>
        <Principal text='Principalo'/>
        <Login text='Login papá'/>
    </div>
  )
}

export default index