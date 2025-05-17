import type {ChangeEventHandler} from "react";

const Input = (props: {type: string , name: string , placeHolder: string,value: string ,change: ChangeEventHandler<HTMLInputElement>}) => {
    return (
        <div>
            <input type={props.type} name={props.name} placeholder={props.placeHolder} className='w-full rounded-2xl p-2 text-white m-2 h-[50px] bg-[#2F3E46] shadow-xl/30 ...' value={props.value} onChange={props.change}/>
        </div>
    )
}
export default Input;