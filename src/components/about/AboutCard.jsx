import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { data } from "../../data/data"

export default function AboutCard() {
    const { teamContainerText, teamContainer } = data.about;

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center gap-6">
                <h2 className="text-slate-800 text-[40px] font-bold">{teamContainerText.h2}</h2>
                <div className="w-[22%] ">
                    <p className="text-[#737373] text-sm font-normal text-center">{teamContainerText.text}</p>
                </div>
            </div>
            <div className="flex w-[80%] mx-auto gap-5">
                {teamContainer.map((item) => (
                    <div className="flex flex-col items-center w-[33%] ring-1 ring-slate-400 rounded shadow-lg">
                        <img src={item.img} className="w-full h-full rounded-t" />
                        <div className="flex flex-col gap-2 text-center py-3">
                            <h5 className="text-slate-800 text-base font-bold">{item.h5}</h5>
                            <h6 className="text-[#737373] text-sm font-bold">{item.h6}</h6>
                            <div className="flex gap-3 items-center text-[#23A6F0]">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}