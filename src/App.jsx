import heroPattern1 from './assets/webp/bingkai_bunga.webp'
import imgAva1 from './assets/jpg/ava4.jpg'
import imgAva2 from './assets/jpg/ava7.jpg'
import imgSudut from './assets/webp/sudut_bunga.webp'
import HeroImage from './components/HeroImage.component'
import heroPattern2 from './assets/webp/bingkai2.webp'
import tepianAwan from './assets/webp/tepian_awan.webp'

export default function App(){
  return (
    <div className="min-w-[350px] max-w-[550px]">
      
      {/* Slide 1 */}
      <section className="h-cover relative overflow-clip flex flex-col justify-center items-center text-center gap-5 py-5 bg-gradient-to-t from-blue-300 to-white">
        <div className="z-20 flex flex-col items-center">
          <img src={ imgSudut } className="absolute w-52 rotate-180 -inset-14" />
          <img src={ imgSudut } className="absolute w-52 -rotate-90 -top-12 -right-16" />
          
          <div className="font-dancingScript font-bold text-5xl text-blue-900 w-[300px] px-20">
            <h1 className="text-left">Andy</h1>
            <h1 className="text-right">
              <span className="text-2xl text-black">&</span>
              {" "}Angell
            </h1>
          </div>

          <HeroImage img={ imgAva1 } bingkai={ heroPattern1 } style={"w-52 h-52 top-12 right-10"}/>

          <p className="font-dancingScript font-extrabold text-blue-800 text-3xl">04 Maret 2025</p>
          <p className="px-5 font-semibold text-blue-950">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara kami.</p>
        </div>
        <img src={ tepianAwan } className="absolute -bottom-24 z-10" />
      </section>

      {/* Slide 2 */}
      <section className="h-cover relative bg-gradient-to-t from-white to-blue-300 py-10 px-5 flex flex-col items-center text-center gap-5 overflow-clip">
        <img src={ tepianAwan } className="absolute -top-24 rotate-180 -scale-x-100 z-10" />
        
        <div className="z-20 flex flex-col items-center">
          <div className="font-dancingScript text-4xl font-extrabold text-blue-900">
            <h1>The Wedding</h1>
            <p className="text-black">of</p>
            <h2>Andy & Angell</h2>
          </div>

          <p className="mt-10">Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di acara Kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada</p>
          <HeroImage img={ imgAva2 } bingkai={ heroPattern2 } style={"w-44 h-44 top-[75px] right-14"} />
          <p>Tuhan kami, Tuhan yang kami kasihi serta kami sembah. Tuhan pemilik kehidupan serta cinta kasih, kami memohon berkat kepada-Mu untuk pengantin wanita dan pengantin pria pada kehidupan bersama mereka sebagai sepasang kekasih yang dimadu cinta.</p>
        </div>
      </section>

    </div>
  )
}