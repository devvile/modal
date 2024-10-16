import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import { useRef } from "react";

export default function NewProject({onSave, onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal   =useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate= dueDate.current.value;

        if(enteredTitle.trim()=== '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
             modal.current.open();
            return;
        }{
            onSave({
                title : title.current.value,
                description : description.current.value,
                dueDate : dueDate.current.value,
            })
        }
    }

    return (
    <>
    <Modal ref={modal} buttonText={"Close"} className="p-4">
        <h2 className="text-center text-lg text-stone-500">Invalid input</h2>
        <p>Oops... looks like you forgot to eneter a value.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={()=>onCancel()} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="py-2 px-8 bg-stone-800 text-stone-100 hover:bg-stone-950 rounded-md">Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea/>
            <Input type="date" ref={dueDate} label="Due Date"/>
        </div>
    </div>
    </>
    )
}