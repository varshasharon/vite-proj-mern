export default function ChildComp1 (props){
    console.log(props);
    
    return(
        <>
            <h2>Hello there, this is Child Component 1</h2>
            <p>Number : {props.num}</p>
            <p>String : {props.str}</p>
            <p>Boolean : {props.bool.toString()}</p>
            <p>Array : {props.arr}</p>
            
        </>
    )
}

export function ChildComp1Inner() {
    return(
        <>  
            <h2>Hi, this is Child Component 1 Inner</h2>
        </>
    )
}