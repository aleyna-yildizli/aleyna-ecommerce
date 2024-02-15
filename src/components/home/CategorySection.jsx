import { data } from '../../data/data'
import CategoryCard from './CategoryCard'

export default function CategorySection(props) {
    const { h3, p, man, woman, accessories, kids } = props.data

    return (
        <div className='w-full h-[770px]'>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-between items-center'>
                    <h3 className='text-slate-800 text-2xl font-bold'>{h3}</h3>
                    <p className='text-neutral-500 text-sm font-normal'>{p}</p>
                </div>
                <div className='flex'>
                    <div>edrftgyhpoıuydftyuıko
                        <CategoryCard data={man} />
                    </div>
                    <div>ASFDGUIEKMFVNREK
                        <CategoryCard data={woman} />
                    </div>
                    <div>
                        <div>123456789098765434567898765434567
                            <CategoryCard data={accessories} />
                        </div>
                        <div>ALEYNAAAAAAA
                            <CategoryCard data={kids} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}