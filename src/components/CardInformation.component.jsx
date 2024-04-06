const CardInformation = ({ imageCover, name="Nama Mempelai", nameWali1="Nama Ayah", nameWali2="Nama Ibu", address="-" }) => {
    return (
        <div className="w-[300px] relative overflow-clip rounded-3xl bg-white shadow-md flex flex-col gap-5 group">
            <img src={imageCover} alt="" className="rounded-t-3xl" />

            <div className="absolute w-full bottom-0 text-white bg-black/50 py-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <h1 className="text-2xl font-semibold">{ name }</h1>
                <p>Dari Pasangan</p>
                <p>{ nameWali1 }</p>
                <p>&</p>
                <p>{ nameWali2 }</p>
                <p>Beralamat di { address }</p>
            </div>
        </div>
    )
}

export default CardInformation