const HeroImage = ({ img, bingkai, style }) => {
    return (
        <div className='relative w-[300px] h-[300px]'>
          <div className={`bg-blue-500 rounded-full absolute overflow-hidden ${ style }`} >
            <img src={ img } className="bg-contain relative bottom-12"/>
          </div>
          <img src={ bingkai } alt="" className="relative"/>
        </div>
    )
}

export default HeroImage