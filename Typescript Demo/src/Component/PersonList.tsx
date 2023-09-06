type PersonListProps = {
    names : {
        first : string,
        last : string
    }[]
}

export const PersonList = (props : PersonListProps) => {
  return ( 
    <div> 
    {props.names.map( name => { return (<h1> {name.first} {name.last}</h1>)})}
    </div>
    
  )
}