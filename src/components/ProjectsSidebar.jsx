export default function ProjectsSidebar(){
    return <aside className="w-1/3 px-8 my-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
     <h2 className="mb-8 ml-6 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
     <div>
        <button className="ml-6 px-4 py-2 text-xs md:text-base rounded bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-200">
           + Add Project
        </button>
     </div>
    </aside>
}