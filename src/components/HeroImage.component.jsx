const HeroImage = ({ img, bingkai }) => {
    return (
        <div className='relative w-[300px] h-[300px]'>
          <div className="w-52 h-52 bg-blue-500 rounded-full absolute top-12 right-10 overflow-hidden" >
            <img src={ img } className="bg-contain relative bottom-16"/>
          </div>
          <img src={ bingkai } alt="" className="relative"/>
        </div>
    )
}

export default HeroImage