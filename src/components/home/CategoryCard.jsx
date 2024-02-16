export default function CategoryCard(props) {
    const { name, src } = props.data;
    return (
        <div>
            <img src={src} className=" object-cover" />
            <button>{name}</button>
        </div>
    )
}