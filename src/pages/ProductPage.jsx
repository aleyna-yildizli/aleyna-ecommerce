import Clients from "../components/about/Clients"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar, faHeart, faCartShopping, faEye, } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import { useState } from "react";
import { data } from '../data/data'
import { images } from "../assest/images";

export default function ProductPage() {
    const { name, rate, reviews, price, availability, descriptionShort, color, slides, detailImage } = data.productPage;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const newSlides = slides.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <div className='h-[500px] rounded-lg'>
                    <img src={item} alt={name} className='rounded-t-lg' />
                </div>
            </CarouselItem>
        );
    });
    return (
        <div className='w-[75%] mx-auto flex flex-col gap-10'>
            <nav className='flex items-center gap-2'>
                <div className="text-slate-800 text-sm font-bold">Home</div>
                <FontAwesomeIcon icon={faChevronRight} size="md" className='text-[#BDBDBD] mt-1' />
                <div className="text-slate-400 text-sm font-bold">Shop</div>
            </nav>
            <div className='flex gap-8'>
                <div className='w-1/2'>
                    <div className='flex flex-col gap-2'>
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}>
                            {newSlides}
                            <CarouselControl
                                direction="prev"
                                directionText="Previous"
                                onClickHandler={previous}
                            />
                            <CarouselControl
                                direction="next"
                                directionText="Next"
                                onClickHandler={next}
                            />
                        </Carousel>
                        <div className='flex gap-3 '>
                            <img src={slides[1]} className='w-28 h-24 object-cover object-bottom hover:scale-105 hover:ease-out hover:duration-300 ease-out duration-300' />
                            <img src={slides[0]} className='opacity-50 w-28 h-24 object-cover object-bottom hover:scale-105 hover:ease-out hover:duration-300 ease-out duration-300' />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start gap-3'>
                    <h4 className='text-slate-800 text-xl font-normal leading-[30px]'>{name}</h4>
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-1'>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <img />
                        </div>
                        <h6 className='text-neutral-500 text-sm font-bold mt-2'>{reviews} Reviews</h6>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h5 className='text-slate-800 text-2xl font-bold'>{price}</h5>
                        <h6 className='text-neutral-500 text-sm font-bold'>Availability : <span className='text-sky-500 text-sm font-bold'>{availability}</span></h6>
                    </div>
                    <p className='text-[#858585] w-[60%] text-sm font-normal leading-tight tracking-tight'>{descriptionShort}</p>
                    <div className="w-[445px] h-[0px] border border-stone-300"></div>
                    <div className='flex gap-2'>
                        <div className="w-[30px] h-[30px] bg-sky-500 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-green-500 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-orange-400 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-slate-800 rounded-full shadow-sm" />
                    </div>
                    <div className='flex gap-2 mt-[19%]'>
                        <button className='text-white text-sm font-bold rounded-sm bg-sky-500 px-[20px] py-[10px]'> Select Options</button>
                        <div className="flex gap-2 ml-4 cursor-pointer">
                            <div className='productIcon'>
                                <FontAwesomeIcon icon={faHeart} className="text-[#252B42]" />
                            </div>
                            <div className='productIcon'>
                                <FontAwesomeIcon icon={faCartShopping} className='text-[#252B42]' />
                            </div>
                            <div className='productIcon'>
                                <FontAwesomeIcon icon={faEye} className='text-[#252B42]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <nav className='flex justify-center'>
                    <a className="navBar-product">Description</a>
                    <a className="navBar-product">Additional Information</a>
                    <a className="navBar-product ">Reviews<span className='text-[#23856D] font-bold pl-1'>(0)</span></a>
                </nav>
                <hr className='border border-gray-200' />
            </div>
            <div className='flex justify-between gap-[30px]'>
                <div className='w-[45%] relative bg-gray-100 rounded-md'>
                    <img className='w-[500px] h-[400px] rounded-md shadow-lg absolute top-0 left-0 object-cover' src={detailImage} />
                </div>
                <div className='w-[30%] flex flex-col gap-[30px] '>
                    <h5 className=' text-slate-800 text-2xl font-bold tracking-tight'>the quick fox jumps over</h5>
                    <h6 className='product-h6'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                    <h6 className='product-h6'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                    <h6 className='product-h6'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                </div>
                <div className='flex flex-col w-[30%] gap-6'>
                    <div className='flex flex-col gap-4'>
                        <h5 className=' text-slate-800 text-2xl font-bold tracking-tight'>the quick fox jumps over</h5>
                        <div className='flex flex-col gap-2'>
                            <div className='quick-div'>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" className='text-gray-300' />
                                <h6 className='quick-product'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='quick-div'>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" className='text-gray-300' />
                                <h6 className='quick-product'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='quick-div'>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" className='text-gray-300' />
                                <h6 className='quick-product'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='quick-div'>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" className='text-gray-300' />
                                <h6 className='quick-product'>the quick fox jumps over the lazy dog</h6>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h5 className=' text-slate-800 text-2xl font-bold  tracking-tight'>the quick fox jumps over</h5>
                        <div className='flex flex-col gap-2'>
                            <div className='quick-div'>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" className='text-gray-300' />
                                <h6 className='quick-product'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='quick-div'>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" className='text-gray-300' />
                                <h6 className='quick-product'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='quick-div'>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" className='text-gray-300' />
                                <h6 className='quick-product'>the quick fox jumps over the lazy dog</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clients Componenti Kullanıldı */}
            <div className="">
                <Clients />
            </div>

        </div>


    )
}