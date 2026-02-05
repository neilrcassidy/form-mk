import { bgImage } from '../assets/img'

const Background = () => {
  return (
    <>
      <div className='w-[100vw] h-[100vh] absolute'>
        <img src={bgImage} className='absolute w-full h-full object-cover object-bottom'></img>
        <div className='absolute w-full h-full bg-gray-800 opacity-95'></div>
      </div>
    </>
  )
}

export default Background