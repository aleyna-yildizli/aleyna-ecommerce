import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { data } from "../../data/data"

export default function TeamCardContainer() {
    const { teamCardContainer } = data.team;

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center gap-6">
                <h2 className="text-slate-800 text-[40px] font-bold py-[60px]">MEET ON YOUR TEAM</h2>
            </div>
            <div className="flex flex-wrap w-[70%] mx-auto justify-center gap-5">
                {teamCardContainer.map((item) => (
                    <div className="flex flex-col items-center w-[30%] ring-1 ring-slate-400 rounded shadow-lg">
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