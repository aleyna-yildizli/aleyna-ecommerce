import { data } from '../../data/data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeaturedPosts(props) {
    const { featuredPostsText, featuredPosts, featuredPostsLinks } = props.data;
    return (
        <div className=" flex flex-col justify-center items-center py-28 gap-20">
            <div className='flex flex-col text-center gap-3'>
                <h6 className="text-[#23A6F0] text-sm font-bold">{featuredPostsText.h6}</h6>
                <h3 className="text-[#252B42] text-[40px] font-bold">{featuredPostsText.h3}</h3>
                <p className="text-[#737373] text-sm font-normal">{featuredPostsText.p}</p>
            </div>
            <div>
                mapping
            </div>
        </div>
    )
}