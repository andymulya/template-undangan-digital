import heroPattern1 from './assets/webp/bingkai_bunga.webp'
import imgAva1 from './assets/jpg/ava4.jpg'
import imgAva2 from './assets/jpg/ava7.jpg'
import HeroImage from './components/HeroImage.component'
import heroPattern2 from './assets/webp/bingkai2.webp'
import CardBrideInformation from './components/CardBrideInformation.component'
import UpperSideFlower from './components/UpperSideFlower.component'
import LowerSideFlower from './components/LowerSideFlower.component'
import UpperSideCloud from './components/UpperSideCloud.component'
import LowerSideCloud from './components/LowerSideCloud.component'
import CardEventInformation from './components/CardEventInformation.component'

export default function App(){
  return (
    <div className="min-w-[350px] max-w-[550px] m-auto">
      
      {/* Slide 1 */}
      <section className="h-cover relative overflow-clip flex flex-col justify-center items-center text-center gap-5 py-5 bg-gradient-to-t from-blue-300 to-white">
        <div className="z-20 flex flex-col items-center">
          <UpperSideFlower />
          
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
        
        <LowerSideCloud />
      </section>

      {/* Slide 2 */}
      <section className="h-cover relative bg-gradient-to-t from-white to-blue-300 py-10 pb-28 px-5 flex flex-col items-center text-center gap-5 overflow-clip">
        <UpperSideCloud />
        
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

        <LowerSideFlower />
      </section>

      {/* Slide 3 */}
      <section className="h-cover relative bg-gradient-to-t from-blue-300 to-white flex flex-col items-center text-center gap-5 overflow-clip">
        <UpperSideFlower />

        <div className="z-20 flex flex-col gap-10 justify-center items-center py-20">
          <CardBrideInformation imageCover={ imgAva1 } name="Andy Eka Mulya" nameWali1="Ayah Andy" nameWali2="Ibu Andy" address="Jawa Timur" />
          <CardBrideInformation imageCover={ imgAva2 } name="Angelina Aisyah" nameWali1="Ayah Angel" nameWali2="Ibu Angel" address="Kalimantan Timur" />
        </div>

        <LowerSideCloud />
      </section>

      {/* Slide 4 */}
      <section className="h-cover relative bg-gradient-to-t from-white to-blue-300 flex flex-col items-center text-center gap-5 overflow-clip" >
        <UpperSideCloud />

        <div className="z-20 flex flex-col gap-15 justify-center items-center py-10">
          <h1 className="text-4xl font-bold text-blue-800 font-dancingScript">Save The Date</h1>

          <div className="flex flex-col gap-20 mt-20">
            <CardEventInformation nameEvent={"Akad Pernikahan"} date={"Jum'at, 05 Mei 2025"} time={"09.00 - Selesai"} place={"Gedung Adi Poday"} />
            <CardEventInformation nameEvent={"Resepsi Pernikahan"} date={"Jum'at, 05 Mei 2025"} time={"19.00 - Selesai"} place={"Gedung Adi Poday"} />
          </div>
        </div>

        <LowerSideFlower />
      </section>

      <section className="h-cover relative bg-gradient-to-t from-blue-300 to-white flex flex-col items-center text-center gap-5 overflow-clip">
        <UpperSideFlower />

        <div className="z-20 px-10 py-28 flex flex-col gap-10 font-bold text-4xl font-dancingScript text-blue-950">
          
          <div>
            <h1>Tempat Akad</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.017750674308!2d113.86408641001186!3d-7.007192392964941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9e42cd287a7bb%3A0xe831855da240c59d!2sGedung%20Adi%20Poday%20Sumenep!5e0!3m2!1sid!2sid!4v1712398153897!5m2!1sid!2sid" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-[350px] h-[300px] border-0 my-5 rounded-xl"></iframe>
          </div>
          
          <div>
            <h1>Tempat Resepsi</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.017750674308!2d113.86408641001186!3d-7.007192392964941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9e42cd287a7bb%3A0xe831855da240c59d!2sGedung%20Adi%20Poday%20Sumenep!5e0!3m2!1sid!2sid!4v1712398153897!5m2!1sid!2sid" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-[350px] h-[300px] border-0 my-5 rounded-xl"></iframe>
          </div>
        </div>

        <LowerSideCloud />
      </section>

    </div>
  )
}