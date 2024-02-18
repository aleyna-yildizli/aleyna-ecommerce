import { data } from '../../data/data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function FeaturedPosts(props) {
    const { featuredPostsText, featuredPosts } = props.data;
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <div className=" flex flex-col justify-center items-center py-28 gap-20">
            <div className='flex flex-col text-center gap-[10px]'>
                <h6 className="text-[#23A6F0] text-sm font-bold">{featuredPostsText.h6}</h6>
                <h3 className="text-[#252B42] text-[40px] font-bold">{featuredPostsText.h3}</h3>
                <div>
                    <p className="text-[#737373] text-sm font-normal mb-[5px]">{featuredPostsText.p}</p>
                    <p className="text-[#737373] text-sm font-normal">{featuredPostsText.p2}</p>
                </div>
            </div>
            <div className="flex w-[80%] justify-center items-center gap-7">
                {featuredPosts.map((item) => (
                    <div key={item.key} className=" custom-box-shadow flex flex-col border basis-[30%]">
                        <div className="relative">
                            <img src={item.img} className="w-full h-[320px] object-cover " />
                            <div className=" text-white bg-red-500 text-sm font-bold absolute rounded-[4px] shadow px-3 py-1 left-5 top-5">NEW</div>
                        </div>
                        <div className="flex flex-col p-6 gap-3">
                            <div className="flex gap-3">
                                {item.links.map((link, index) => (
                                    <span key={index} className={`text-xs font-normal cursor-pointer ${link === hoveredLink ? "text-[#8EC2F2]" : "text-[#737373]"}`}
                                        onMouseEnter={() => setHoveredLink(link)}
                                        onMouseLeave={() => setHoveredLink(null)}>
                                        {link}
                                    </span>
                                ))}
                            </div>
                            <h4 className="text-[#252B42] text-xl font-normal leading-[30px] w-[60%]">{item.h4}</h4>
                            <p className="text-[#737373] text-sm font-normal w-[60%]">{item.p}</p>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faClock} size="xs" className="text-[#23A6F0] mb-3 mr-2" />
                                    <p className="text-[#737373] text-xs font-normal ">{item.date}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faChartLine} size="sm" className='text-[#23856D] mb-[13px] ' />
                                    <p className="text-[#737373] text-xs font-normal">{item.text}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <p className="text-[#737373] text-sm font-bold">{item.learnMore}</p>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" className='text-[#23A6F0] mb-3' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}