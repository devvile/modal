import { forwardRef, useImperativeHandle , useRef} from "react"
import {createPortal} from "react-dom";
import Button from "./Button";

const Modal = forwardRef( function Modal({children, buttonText, ...props}, ref){
    const  dialog = useRef();
    useImperativeHandle(

        ref, ()=>{
            return{
            open(){
                dialog.current.showModal();
            },
        }
    }
    );

    return createPortal(<dialog {...props} ref={dialog}>
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonText}</Button>
            </form>
    </dialog>, document.getElementById("modal-root"))
})

export default Modal;