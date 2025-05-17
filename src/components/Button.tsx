const Button = (props: { name: string , color?: string })  => {
    return(
        <div>
            <button className={`min-w-max outline-2 p-2 rounded-sm`} style={{color: `${props.color}`}} type='button'>{props.name} </button>
        </div>
    )
}
export default Button;