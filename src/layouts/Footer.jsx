import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
    <div className="">
        <div className="bg-[#FAFAFA]">
            <div className="flex justify-between items-center py-10">
                <h3 className="text-[#252B42] text-2xl font-bold">Bandage</h3>
                <div className="text-[#23A6F0] flex gap-[20px]">
                    <FontAwesomeIcon icon={faFacebook} size="lg" className="p-1"/>
                    <FontAwesomeIcon icon={faInstagram} size="lg" className="p-1"/>
                    <FontAwesomeIcon icon={faTwitter} size="lg" className="p-1"/>
                </div>
                <hr className="border border-[#E6E6E6]"></hr>
            </div>
        </div>
        <div></div>
        <div className="">
            <h6 className="text-[#737373] text-sm font-bold">Made With Love By Finland All Right Reserved</h6>
        </div>
    </div>
    )
}
