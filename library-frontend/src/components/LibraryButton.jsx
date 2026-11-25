
function LibrayButton(props){
    
    return(
        <div>
            <div><button onClick={props.buttonAction}>{props.buttonLabel}</button></div>
        </div>
    )
}
export default LibrayButton;