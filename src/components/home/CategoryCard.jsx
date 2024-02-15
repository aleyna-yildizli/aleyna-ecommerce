export default function CategoryCard(props) {
    const { name, src } = props.data;
    return (
        <div>
            <img src={src} className="w-full object-cover" />
            <button></button>
        </div>
    )
}