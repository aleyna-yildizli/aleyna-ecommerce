import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedCard(props) {
  const { img, h4, p, date, text, learnMore, id, links } = props.data;
  return (
    <div
      key={id}
      className=" custom-box-shadow flex flex-col flex-grow-1 border sm:basis-[90%] basis-[30%]"
    >
      <div className="relative">
        <img src={img} className="w-full sm:h-[320px] h-[350px] object-cover " />
        <div className=" text-white bg-red-500 text-sm font-bold absolute rounded-[4px] shadow px-3 py-1 left-5 top-5">
          NEW
        </div>
      </div>
      <div className="flex flex-col p-6 gap-3">
        <div className="flex gap-3">
          {links.map((link, index) => (
            <span
              key={index}
              className="text-xs font-normal cursor-pointer text-[#737373] hover:text-[#8EC2F2]"
            >
              {link}
            </span>
          ))}
        </div>
        <h4 className="text-[#252B42] text-xl font-normal leading-[30px] w-[75%]">
          {h4}
        </h4>
        <p className="text-[#737373] text-sm font-normal w-[88%]">{p}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              size="xs"
              className="text-[#23A6F0] mb-3 mr-2"
            />
            <p className="text-[#737373] text-xs font-normal ">{date}</p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faChartLine}
              size="sm"
              className="text-[#23856D] mb-[13px] "
            />
            <p className="text-[#737373] text-xs font-normal">{text}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <p className="text-[#737373] text-sm font-bold">{learnMore}</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            className="text-[#23A6F0] mb-3"
          />
        </div>
      </div>
    </div>
  );
}