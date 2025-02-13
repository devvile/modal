import { forwardRef } from "react";

 const Input = forwardRef(function Input ({label, textarea, ...props}, ref){
    const classes= "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600";
    return(
    <p className="flex gap-1 flex-col my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? <textarea ref={ref}  className={classes} {...props}/> : <input ref={ref} className={classes} type="text" {...props} />}
    </p>
    )
})

export default Input;