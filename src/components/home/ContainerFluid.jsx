export default function ContainerFluid(props) {
    const { h5, h2, h4, src, buttonTextOne, buttonTextTwo } = props.data;

    return (

        <div className=" w-full pt-1 flex flex-col-reverse sm:flex-row gap-3 mt-5 sm:mt-0" >
            <div className="basis-1/2 flex flex-col justify-end items-end">
                <img src={src} className="w-[370px] sm:w-[670px] h-[382px] sm:h-[682px]" />
            </div>
            <div className="basis-1/2 flex justify-center items-center">
                <div className="w-[380px] sm:w-[400px] flex flex-col gap-4">
                    <h5 className="text-[#BDBDBD] sm:text-base text-center font-bold">{h5}</h5>
                    <h2 className="text-[#252B42] text-5xl font-bold sm:text-base text-center ">{h2}</h2>
                    <h4 className="text-[#737373] text-xl font-normal sm:text-base text-center ">{h4}</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="button primary-button">{buttonTextOne}</button>
                        <button className="button secondary-button">{buttonTextTwo}</button>
                    </div>
                </div>
            </div>
        </div>


    )
}