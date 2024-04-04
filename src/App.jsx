import heroPattern from './assets/png/bingkai_bunga.png'
import imgAva from './assets/jpg/ava4.jpg'

export default function App(){
  return (
    <div className="h-cover flex flex-col justify-center items-center text-center">
      <div className="font-dancingScript font-bold text-4xl text-blue-900 w-[300px] px-20">
        <h1 className="text-left">Justin</h1>
        <p className="text-2xl text-black">&</p>
        <h1 className="text-right">Sisca</h1>
      </div>

      <div className='relative w-[300px] h-[300px]'>
        <div className="w-52 h-52 bg-red-500 rounded-full absolute top-12 right-10 overflow-hidden" >
          <img src={ imgAva } className="bg-contain relative bottom-16"/>
        </div>
        <img src={ heroPattern } alt="" className="relative"/>
      </div>

      <div className="font-bold text-blue-800">
        <p className="font-dancingScript font-extrabold text-xl text-blue-800">04 Maret 2025</p>
        <p>Kepada</p>
        <p>Bapak Budi</p>
      </div>

    </div>
  )
}