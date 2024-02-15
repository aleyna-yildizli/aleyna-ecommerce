export default function CategoryCard(props) {
    const { name, src } = props.data;
    return (
        <div>
            <img src={src} />
            <button>{name}</button>
        </div>
    )
}