import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data/data";

export default function Footer() {
  const {
    title,
    sections,
    buttonTitle,
    buttonContext,
    buttonText,
    inputSubText,
    content,
  } = data.home.footer;

  return (
    <div className="bg-[#FAFAFA] ">
      <div className="mx-5 w-[full] px-[50px] sm:pl-[125px] pl-[0px] sm:pr-[10px] py-[50px] flex flex-col sm:flex-row justify-between gap-3  ">
        <h3 className="font-bold text-2xl leading-8 text-[#252B42] ">
          {title}
        </h3>
        <div className="text-[#23A6F0] flex gap-3 pr-[180px] ">
          <FontAwesomeIcon icon={faFacebook} size="lg" className="p-1" />
          <FontAwesomeIcon icon={faInstagram} size="lg" className="p-1" />
          <FontAwesomeIcon icon={faTwitter} size="lg" className="p-1" />
        </div>
      </div>
      <hr className="border border-[#E6E6E6]"></hr>

      <div className="flex flex-col gap-5  sm:flex-row justify-between flex-wrap w-[full] px-[50px] sm:px-[175px] py-5">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2 ">
            <h5 className="text-gray-800 text-base font-bold ">
              {section.title}
            </h5>
            <div className="flex flex-col gap-2">
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex} className="text-[#737373] text-sm items-left font-bold no-underline">
                  {link}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-4 mr-[100px]">
          <h5 className="text-gray-800 text-base font-bold">{buttonTitle}</h5>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <input
                type="text"
                placeholder={buttonContext}
                className="p-[5%] border rounded-l-md text-gray-500 font-normal bg-gray-50"
              />
              <button
                type="submit"
                className="py-[5%] px-[4%] border border-gray-200 bg-[#23A6F0] text-white rounded-r-md"
              >
                {buttonText}
              </button>
            </div>
            <p className="text-gray-500 text-xs font-normal mt-1">
              {inputSubText}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[full] px-[50px] sm:px-[165px] py-4 bg-gray-100 collection-text">
        <h6 className="font-bold leading-6 text-sm text-[#737373]">
          {content}
        </h6>
      </div>
    </div>
  );
}