type MessageProps = {
    name : string
    count : number
    logged : boolean
}

export const Message = (props : MessageProps) => {
    return (
        <div>
            <h1>{props.logged ? `Hello, ${props.name}, you are the ${props.count}th messenger!!`: "Hello, Tarantula!!"}</h1>
        </div>
    )
}