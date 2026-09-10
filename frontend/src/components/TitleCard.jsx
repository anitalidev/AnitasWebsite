export default function TitleCard({ title, description}) {
    return (
        <div className="hero">
            <header>{ title }</header>
            <span className="small-text"> {description} </span>
        </div>
    )
}