import PropTypes from "prop-types"

const LinkMenu = ({ children, id, isActive, duration }) => {
    return (
        <a href={ id } className={`bg-blue-500 flex justify-center items-center w-12 h-12 mb-3 font-bold text-white rounded-full translate-x-11 transition-all ${!isActive ? `translate-y-[90px] z-10 ${ duration } hide` : `-translate-y-1 ${ duration } show`}`}>
            { children }
        </a>
    )
}

LinkMenu.propTypes = {
    children: PropTypes.object,
    id: PropTypes.string,
    isActive: PropTypes.bool,
    duration: PropTypes.string
}

export default LinkMenu