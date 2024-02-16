import { data } from '../../data/data'


export default function CategorySection(props) {
    const { h3, p, man, woman, accessories, kids } = props.data

    return (
        <div className="flex flex-col w-[1640px] h-[770px] gap-12 items-center ">
            <div className='flex flex-col text-center mt-5'>
                <h3 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">{h3}</h3>
                <p className="text-neutral-500 text-sm font-normal">{p}</p>
            </div>
            <div className="flex gap-8 h-[500px] ">
                <div className='w-[50%] relative'>
                    <img src={man.src} className='w-full h-full object-cover' />
                    <button className='absolute bottom-[5%] left-[21px] w-[35%] text-slate-800 text-base font-bold py-3 bg-white'>{man.name}</button>
                </div>
                <div className='w-[50%] flex gap-8 '>
                    <div className='w-[50%] relative '>
                        <img src={woman.src} className='w-full h-full object-cover' />
                        <button className='absolute bottom-[5%] left-[21px] w-[36%] h-[12%] text-slate-800 text-base font-bold py-3 bg-white'>{woman.name}</button>
                    </div>
                    <div className='flex flex-col w-[50%] gap-[2%]'>
                        <div className='w-full h-[49%] relative'>
                            <img src={accessories.src} className='w-full h-full object-cover' />
                            <button className='absolute bottom-[5%] left-[21px] w-[50%] text-slate-800 text-base font-bold py-3 bg-white'>{accessories.name}</button>
                        </div>
                        <div className='w-full h-[49%] relative'>
                            <img src={kids.src} className='w-full h-full object-cover' />
                            <button className='absolute bottom-[5%] left-[21px] w-[30%] text-slate-800 text-base font-bold  py-3 bg-white'>{kids.name}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}