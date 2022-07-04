export function Post(props) {
    return(
        <div>
            <p>{ props.content }</p>
            Escrito por <strong>{ props.author }</strong>
        </div>
    )
}