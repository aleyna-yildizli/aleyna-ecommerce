import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { data } from "../data/data";
import TeamCard from "../components/global/TeamCard";

export default function Team() {
  const { womanCategory, socialFooter } = data.team;
  const { teamCards } = data.global;

  console.log(data);
  return (
    <div className="flex flex-col sm:py-20 py-5 ">
      {/* İlk section */}
      <div className="flex flex-col gap-4 items-center ">
        <h5 className="text-base font-bold text-[#737373] ">WHAT WE DO</h5>
        <h2 className="text-[#252B42] font-bold md:text-6xl  text-[40px] sm:leading-[80px] tracking-[0.2px] collection-text">
          Innovation tailored for you
        </h2>
        <div className="flex justify-center items-center gap-2 mb-[90px]">
          <Link
            to="/"
            className="text-[#252B42] no-underline text-md font-bold"
          >
            Home
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            className="p-1 text-[#BDBDBD]"
          />
          <h6 className="text-md text-[#737373] font-bold pt-2">Team</h6>
        </div>
      </div>
      {/* İkinci section */}
      <div className="flex flex-wrap justify-center mb-[14px]">
        <div>
          <img
            src={womanCategory.womanImageOne}
            className="w-[700px] h-[530px] object-cover mt-2 mr-3"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <div className="">
            <img
              src={womanCategory.womanImageTwo}
              className="w-[180px] sm:w-[360px] h-[260px] object-cover mb-[9px] "
            />
            <img
              src={womanCategory.womanImageFour}
              className="w-[180px] sm:w-[360px]  h-[260px] object-cover mb-[9px]"
            />
          </div>
          <div>
            <img
              src={womanCategory.womanImageThree}
              className="w-[180px] sm:w-[360px]  h-[260px] object-cover mb-[9px]"
            />
            <img
              src={womanCategory.womanImageFive}
              className="w-[180px] sm:w-[360px]  h-[260px] object-cover mb-[9px]"
            />
          </div>
        </div>
      </div>
      {/* Üçüncü section */}
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-slate-800 text-[40px] font-bold py-[60px] w-[200px] sm:w-[300px] text-center">
          Meet Our Team
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 flex-wrap mx-[50px] sm:mx-[150px]">
        {teamCards.slice(0, 12).map((item, index) => (
          <TeamCard item={item} />
        ))}
      </div>{" "}
      {/* Dördüncü section */}
      <div className="flex flex-col items-center justify-center gap-10 py-[10%]  ">
        <h2 className="text-4xl font-bold w-[240px] sm:w-[480px] ">
          {socialFooter.h2}
        </h2>
        <h6 className="text-base font-normal text-[#737373] text-center w-[250px] sm:w-[400px]">
          {socialFooter.h6}
        </h6>
        <button className="bg-[#23A6F0] text-white py-3.5 px-12 font-bold text-base rounded-md ">
          {socialFooter.btnText}
        </button>
        <div className="flex gap-10 text-[#395185]">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2xl"
            className="text-[#55ACEE]"
          />
          <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="text-black"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="text-[#0A66C2]"
          />
        </div>
      </div>
    </div>
  );
}
