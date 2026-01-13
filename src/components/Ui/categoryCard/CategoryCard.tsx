
export default function({title , src}:{title:string , src:string}) {
    return (
        <div className="border border-slate-300 rounded-lg px-5 py-3 flex flex-row-reverse gap-1 justify-center items-center transition-colors duration-300 hover:bg-black hover:text-white">
            <h2 className="font-inter">{title}</h2>
            <span>
                <img src={src} alt="food image" className="w-8 h-8"/>
            </span>
        </div>
    )
}
