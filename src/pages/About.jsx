import { data } from '../data/data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import TeamContainer from '../components/about/TeamContainer';


export default function About() {
    const { img, h5, h1, h4, btnText, h2, p, text, metricsTitle, metrics, video } = data.about;


    return (
        <div className="flex flex-col gap-[150px]">
            {/* İlk section başlangıcı */}
            <div className="flex items-center max-w-[1700px] mx-auto pl-[180px]">
                <div className="flex flex-col gap-[35px] items-start">
                    <h5 className="text-[#252B42] text-base font-bold">{h5}</h5>
                    <h1 className=" text-[#252B42] text-[58px] font-bold">{h1}</h1>
                    <h4 className=" w-[65%] text-neutral-500 text-xl font-normal">{h4}</h4>
                    <button className="text-white text-sm font-bold px-[40px] py-[15px] rounded-[5px] bg-[#23A6F0]">{btnText}</button>
                </div>
                <div className="w-[70%] flex justify-end">
                    <div className="relative flex justify-center items-center">
                        <img className="w-full z-1" src={img} />
                        <div className="rounded-full absolute bg-[#FFE9EA] w-[50%] h-[75%]" />
                        <div className="rounded-full absolute bg-[#7f4cb5] w-[2%] h-[3%] left-[20%] bottom-[20%]" />
                        <div className="rounded-full absolute bg-[#FFE9EA] w-[10%] h-[15%] left-[15%] top-[10%]" />
                        <div className="rounded-full absolute bg-[#7f4cb5] w-[2%] h-[3%] right-[20%] top-[20%]" />
                        <div className="rounded-full absolute bg-[#FFE9EA] w-[4%] h-[6%] right-[18%] top-[45%]" />
                    </div>
                </div>
            </div>
            {/* İkinci section başlangıcı */}
            <div className="flex items-center w-[80%] mx-auto">
                <div className="flex flex-col gap-5">
                    <h2 className="text-red-500 text-sm font-normal">{h2}</h2>
                    <p className="text-slate-800 text-2xl w-[50%] font-bold">{p}</p>
                </div>
                <div className="flex flex-wrap mt-[30px]">
                    <p className="text-neutral-500 w-[110%] text-sm font-normal">{text}</p>
                </div>
            </div>
            {/* Üçüncü section başlangıcı */}
            <div className="flex w-[85%] mx-auto justify-between">
                <div className="metricsSection">
                    <p className="metrics">{metrics.one}</p>
                    <p className="metricsTitle">{metricsTitle.one}</p>
                </div>
                <div className="metricsSection">
                    <p className="metrics">{metrics.two}</p>
                    <p className="metricsTitle">{metricsTitle.two}</p>
                </div>
                <div className="metricsSection">
                    <p className="metrics">{metrics.three}</p>
                    <p className="metricsTitle">{metricsTitle.three}</p>
                </div>
                <div className="metricsSection">
                    <p className="metrics">{metrics.four}</p>
                    <p className="metricsTitle">{metricsTitle.four}</p>
                </div>
            </div>
            {/* Dördüncü section başlangıcı */}

            <div className="w-[70%] relative flex items-center justify-center rounded-lg mx-auto">
                <img className="w-full h-[600px] mx-auto rounded-lg shadow-xl" src={video} alt="Video Thumbnail" />
                <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-black via-transparent via-opacity-0 to-opacity-84 rounded-lg shadow-xl" />
                <div className="flex items-center justify-center w-20 h-20 bg-[#23A6F0] rounded-full absolute shadow-xl cursor-pointer">
                    <FontAwesomeIcon icon={faPlay} size="xl" className="text-white" />
                </div>
            </div>
            {/* Beşinci section başlangıcı */}
            <TeamContainer />
        </div >
    )
}
