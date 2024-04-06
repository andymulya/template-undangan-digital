import PropTypes from "prop-types"

const CardEventInformation = ({ nameEvent, date, time, place }) => {
    return (
        <div className="font-semibold text-center">
            <p className="mb-5">{ nameEvent }</p>
            <p className="font-bold text-3xl text-blue-950">{ date }</p>
            <p className="text-xl text-blue-800">Pukul { time } WIB</p>
            <p>{ place }</p>
        </div>
    )
}

export default CardEventInformation

CardEventInformation.propTypes = {
    nameEvent: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    place: PropTypes.string
}