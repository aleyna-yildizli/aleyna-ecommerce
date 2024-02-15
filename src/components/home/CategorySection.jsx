import { data } from '../../data/data'

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
                    <div>fghjdkcdsfkjkdelekfjrkodells</div>
                    <div>ASFDGUIEKMFVNREK</div>
                    <div>
                        <div>123456789098765434567898765434567</div>
                        <div>ALEYNAAAAAAA</div>
                    </div>
                </div>
            </div>
        </div>
    )
}