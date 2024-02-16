import { data } from '../../data/data'
import CategoryCard from './CategoryCard'

export default function CategorySection(props) {
    const { h3, p, man, woman, accessories, kids } = props.data

    return (
        <div className='w-full h-[770px]'>
            <div className='w-[1050px] h-[770px] px-[80px] '>
                <div className='flex flex-col justify-between items-center'>
                    <h3 className='text-slate-800 text-2xl font-bold'>{h3}</h3>
                    <p className='text-neutral-500 text-sm font-normal'>{p}</p>
                </div>
                <div className='flex flex-row gap-4 w-[1050px] h-[500px]'>
                    <div className='flex-1 basis-1/2'>
                        <CategoryCard data={man} />
                    </div>
                    <div className=' flex-1 basis-1/4'>
                        <CategoryCard data={woman} />
                    </div>
                    <div className='flex flex-col flex-1 basis-1/4'>
                        <div>
                            <CategoryCard data={accessories} />
                        </div>
                        <div>
                            <CategoryCard data={kids} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}