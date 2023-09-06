type StatusProps = {
    status : string
}
export const Status = (props : StatusProps) => {
    let message 
    if(props.status =="Loading") message = "Data is on process to be fetched!"
    else message = "Data fetched successfully!"

    return (
        <div> <h1> Status - {message} </h1></div>
    )
}