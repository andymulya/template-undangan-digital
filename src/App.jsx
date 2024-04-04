import heroPattern from './assets/png/bingkai_bunga.png'
import imgAva from './assets/jpg/ava4.jpg'
import imgSudut from "./assets/png/sudut_bunga.png"

export default function App(){
  return (
    <div className="max-w-[550px]">
      {/* Slide 1 */}
      <div className="h-cover relative overflow-clip flex flex-col justify-center items-center text-center gap-5 py-5 bg-gradient-to-t from-blue-300 to-white">
        
        <img src={ imgSudut } className="absolute w-52 rotate-180 -inset-14" />
        <img src={ imgSudut } className="absolute w-52 -rotate-90 -top-12 -right-16" />
        
        <div className="font-dancingScript font-bold text-4xl text-blue-900 w-[300px] px-20">
          <h1 className="text-left">Justin</h1>
          
          <h1 className="text-right">
            <span className="text-2xl text-black">&</span>
            {" "}Sisca
          </h1>
        </div>

        <div className='relative w-[300px] h-[300px]'>
          <div className="w-52 h-52 bg-blue-500 rounded-full absolute top-12 right-10 overflow-hidden" >
            <img src={ imgAva } className="bg-contain relative bottom-16"/>
          </div>
          <img src={ heroPattern } alt="" className="relative"/>
        </div>

        <div className="font-semibold text-blue-800 text-2xl">
          <p className="font-dancingScript font-extrabold text-blue-800">04 Maret 2025</p>
          <p>Kepada</p>
          <p>Bapak Budi</p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="h-cover">

      </div>
    </div>
  )
}