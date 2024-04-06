import PropTypes from "prop-types"

const CardBrideInformation = ({ imageCover, name="Nama Mempelai", nameWali1="Nama Ayah", nameWali2="Nama Ibu", address="-" }) => {
    return (
        <div className="w-[300px] h-[350px] relative overflow-clip rounded-3xl bg-white shadow-md flex flex-col gap-5 group">
            <img src={imageCover} alt={ name } />

            <div className="absolute w-full bottom-0 text-white bg-black/50 py-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <h1 className="text-2xl font-semibold mb-5">{ name }</h1>
                <p>Dari Pasangan</p>
                <p>{ nameWali1 }</p>
                <p>&</p>
                <p>{ nameWali2 }</p>
                <p>Beralamat di { address }</p>
            </div>
        </div>
    )
}

export default CardBrideInformation

CardBrideInformation.propTypes = {
    imageCover: PropTypes.string,
    name: PropTypes.string,
    nameWali1: PropTypes.string,
    nameWali2: PropTypes.string,
    address: PropTypes.string
}