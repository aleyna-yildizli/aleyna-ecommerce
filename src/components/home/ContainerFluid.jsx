

export default function ContainerFluid(props) {
    const { h5, h2, h4, src, buttonTextOne, buttonTextTwo } = props.data;

    return (

        <div className=" w-full flex pt-1">
            <div className="basis-1/2 flex justify-end items-end">
                <img src={src} className="w-[670px] h-[682px]" />
            </div>
            <div className="basis-1/2 flex justify-center items-center">
                <div className="w-[400px] flex flex-col gap-4">
                    <h5 className="text-[#BDBDBD] text-base font-bold">{h5}</h5>
                    <h2 className="text-[#252B42] text-5xl font-bold">{h2}</h2>
                    <h4 className="text-[#737373] text-xl font-normal">{h4}</h4>
                    <div className="flex gap-3">
                        <button className="button primary-button">{buttonTextOne}</button>
                        <button className="button secondary-button">{buttonTextTwo}</button>
                    </div>
                </div>
            </div>
        </div>


    )
}


