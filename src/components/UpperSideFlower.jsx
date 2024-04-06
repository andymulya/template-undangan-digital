import imgSudut from '../assets/webp/sudut_bunga.webp'

const UpperSideFlower = () => {
    return(
        <div className="z-10">
            <img src={ imgSudut } className="absolute w-52 rotate-180 -top-14 -left-14" />
            <img src={ imgSudut } className="absolute w-52 -top-14 -right-14 -scale-y-100" />
        </div>
    )
}

export default UpperSideFlower