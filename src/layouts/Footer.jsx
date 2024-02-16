import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from '../data/data';


export default function Footer() {
    const { title, sections, buttonTitle, buttonContext, buttonText, inputSubText, content } = data.home.footer;

    return (
        <div className="w-full justify-around">
            <div className="bg-[#FAFAFA]">
                <div className="flex justify-between items-center py-10">
                    <h3 className="text-[#252B42] text-2xl font-bold pl-[105px]">{title}</h3>
                    <div className="text-[#23A6F0] flex gap-3 pr-[180px]">
                        <FontAwesomeIcon icon={faFacebook} size="lg" className="p-1" />
                        <FontAwesomeIcon icon={faInstagram} size="lg" className="p-1" />
                        <FontAwesomeIcon icon={faTwitter} size="lg" className="p-1" />
                    </div>
                </div>
                <hr className="border border-[#E6E6E6]"></hr>
            </div>
            <div className="flex justify-around py-10">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-10">
                        <h5 className="text-gray-800 text-base font-bold">{section.title}</h5>
                        <div className="flex flex-col gap-3">
                            {section.links.map((link, linkIndex) => (
                                <a key={linkIndex} className="text-gray-500 text-sm items-left font-bold no-underline">{link}</a>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="flex flex-col gap-4">
                    <h5 className="text-gray-800 text-base font-bold">{buttonTitle}</h5>
                    <div className="flex flex-col items-start">
                        <div className="flex items-center">
                            <input type="text" placeholder={buttonContext} className="p-[5%] border rounded-l-md text-gray-500 font-normal bg-gray-50" />
                            <button type="submit" className="py-[5%] px-[4%] border border-gray-200 bg-[#23A6F0] text-white rounded-r-md">{buttonText}</button>
                        </div>
                        <p className="text-gray-500 text-xs font-normal mt-1">{inputSubText}</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 pb-3 pt-3 pl-[90px]">
                <h6 className="text-gray-700 text-sm font-bold">{content}</h6>
            </div>
        </div>
    );
}
