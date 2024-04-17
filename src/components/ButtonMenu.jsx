import { useState } from "react"
import LinkMenu from "./LinkMenu"
import { IconCalendar, IconHome, IconMap } from "./Icons"
import sound from "../assets/mp3/sound.mp3"

const ButtonMenu = () => {
    
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => setIsActive(state => !state)

    
    return (
        <div className="absolute right-36 z-20">
            <section className="fixed bottom-0">
                <LinkMenu id={"#home"} isActive={ isActive } duration={"duration-700"}>
                    <IconHome />
                </LinkMenu>

                <audio loop controls autoPlay={true}>
                    <source src={ sound } type="audio/mpeg" />
                </audio>
                
                <LinkMenu id={"#calendar"} isActive={ isActive } duration={"duration-150"}>
                    <IconCalendar />
                </LinkMenu>

                <LinkMenu id={"#map"} isActive={ isActive } duration={"duration-300"}>
                    <IconMap />
                </LinkMenu>

                <button onClick={ handleClick } className="bg-blue-800 rounded-full w-20 h-20 m-7 flex justify-center items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </section>
        </div>
    )
}

export default ButtonMenu