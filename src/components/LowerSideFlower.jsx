import imgSudut from '../assets/webp/sudut_bunga.webp'

const LowerSideFlower = () => {
    return(
        <div className="z-10">
            <img src={ imgSudut } className="absolute w-52 -bottom-14 -left-14 -scale-x-100" />
          <img src={ imgSudut } className="absolute w-52 -bottom-14 -right-14" />
        </div>
    )
}

export default LowerSideFlower