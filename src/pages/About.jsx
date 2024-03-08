import { data } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Clients from "../components/global/Clients";
import TeamCard from "../components/global/TeamCard";

export default function About() {
  const { teamCards } = data.global;
  const { teamContainerText } = data.about;

  const {
    img,
    h5,
    h1,
    h4,
    btnText,
    h2,
    p,
    text,
    metricsTitle,
    metrics,
    video,
    clientsHeader,
    clientsText,
    containerH5,
    containerH2,
    containerImg,
    containerText,
    containerBtn,
  } = data.about;

  return (
    <div>
      <div className="flex flex-col gap-[150px] collection-text ">
        {/* İlk section başlangıcı */}
        <div className="flex flex-col md:flex-row items-center mx-auto sm:pl-[180px]  ">
          <div className="flex flex-col gap-[35px]  w-[276px]  sm:w-[376px]">
            <h5 className="text-[#252B42] font-bold sm:flex hidden">{h5}</h5>
            <h1 className=" text-[#252B42] sm:text-[58px] text-[40px] font-bold">
              {h1}
            </h1>
            <h4 className="  text-neutral-500 text-xl font-normal">{h4}</h4>
            <div className=" justify-start flex ">
              <button className="text-white text-sm font-bold px-[40px] py-[15px] rounded-[5px] bg-[#23A6F0] mx-[46px] sm:mx-[1px] ">
                {btnText}
              </button>
            </div>
          </div>
          <div className="w-[100%] sm:w-[70%] flex sm:hidden lg:flex justify-end pt-5 sm:pt-0 pl-[100px] ">
            <div className="relative flex justify-center items-center ">
              <img className="w-full z-1 mr-20 sm:mr-0  " src={img} />
              <div className="rounded-full absolute bg-[#FFE9EA] sm:w-[50%] sm:h-[75%] left-[5%] sm:left-[25%]  w-[60%] h-[89%]" />
              <div className="rounded-full absolute bg-[#7f4cb5] w-[2%] h-[3%] left-[5%] sm:left-[20%] bottom-[20%]" />
              <div className="rounded-full absolute bg-[#FFE9EA] w-[10%] h-[15%] left-[1%] sm:left-[15%] top-[10%]" />
              <div className="rounded-full absolute bg-[#7f4cb5] w-[2%] h-[3%] right-[20%] top-[20%]" />
              <div className="rounded-full absolute bg-[#FFE9EA] w-[4%] h-[6%] right-[18%] top-[45%]" />
            </div>
          </div>
        </div>
        {/* İkinci section başlangıcı */}

        <div className=" container px-5">
          <h2 className="text-red-500 text-sm font-normal">{h2}</h2>
          <div className="flex flex-col sm:flex-row gap-5">
            <p className="text-slate-800 text-2xl font-bold">{p}</p>
            <p className="text-neutral-500 text-sm font-normal">{text}</p>
          </div>
        </div>
        {/* Üçüncü section başlangıcı */}
        <div className="flex container flex-col sm:flex-row mx-auto justify-center gap-[100px] text-center flex-wrap ">
          <div className="">
            <p className="metrics">{metrics.one}</p>
            <p className="metricsTitle">{metricsTitle.one}</p>
          </div>
          <div className="">
            <p className="metrics">{metrics.two}</p>
            <p className="metricsTitle">{metricsTitle.two}</p>
          </div>
          <div className="">
            <p className="metrics">{metrics.three}</p>
            <p className="metricsTitle">{metricsTitle.three}</p>
          </div>
          <div className="">
            <p className="metrics">{metrics.four}</p>
            <p className="metricsTitle">{metricsTitle.four}</p>
          </div>
        </div>
        {/* Dördüncü section başlangıcı */}
        <div className="w-[70%] relative flex items-center justify-center rounded-lg mx-auto">
          <img
            className="w-full sm:h-[600px] h-[300px] mx-auto rounded-lg shadow-xl"
            src={video}
            alt="Video Thumbnail"
          />
          <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-black via-transparent via-opacity-0 to-opacity-84 rounded-lg shadow-xl" />
          <div className="flex items-center justify-center w-20 h-20 bg-[#23A6F0] rounded-full absolute shadow-xl cursor-pointer">
            <FontAwesomeIcon icon={faPlay} size="xl" className="text-white" />
          </div>
        </div>
        {/* Beşinci section başlangıcı */}
        <div className="flex flex-col items-center justify-center gap-2 ">
          <h2 className="text-slate-800 text-[40px] font-bold w-[229px] sm:w-[300px] items-center ">
            {teamContainerText.h2}
          </h2>
          <div className="w-[229px] sm:w-[469px]">
            <p className="text-[#737373] text-sm font-normal text-center">
              {teamContainerText.text}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-grow-1 items-center justify-center gap-5 flex-wrap mx-[50px] sm:mx-[150px]">
          {teamCards.slice(0, 3).map((item, index) => (
            <TeamCard key={item.id} item={item} />
          ))}
        </div>
        {/* Altıncı section başlangıcı */}
        <div className="bg-[#FAFAFA] py-[4%] collection-text ">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-[#252B42] text-[40px] font-bold ">
              {clientsHeader}
            </h2>
            <p className="text-[#737373] text-sm font-normal w-[280px] sm:w-[380px] ">
              {clientsText}
            </p>
          </div>
          <Clients />
        </div>
      </div>
      {/* Yedinci section başlangıcı */}
      <div className="flex w-full h-[600px] collection-text ">
        <div className="flex  w-[100%] sm:w-[70%] bg-[#2A7CC7] justify-center">
          <div className="w-[60%] sm:w-[60%] flex flex-col my-auto gap-7  ">
            <h5 className="text-white text-[18px] font-bold">{containerH5}</h5>
            <h2 className="text-white text-[40px] font-bold">{containerH2}</h2>
            <p className=" w-[100%] sm:w-[70%] text-white text-sm font-normal">
              {containerText}
            </p>
            <div className=" justify-center sm:justify-start flex ">
              <button className="text-[#FAFAFA] bg-transparent px-[40px] py-[15px] border border-slate-200 rounded-md text-[20px] font-bold mx-[100px]  sm:mx-[1px]">
                {containerBtn}
              </button>
            </div>
          </div>
        </div>
        <div className="w-[0%] sm:w-[40%] rounded-r-md">
          <img
            src={containerImg}
            className="w-full h-full rounded-r-md sm:flex hidden "
          />
        </div>
      </div>
    </div>
  );
}
