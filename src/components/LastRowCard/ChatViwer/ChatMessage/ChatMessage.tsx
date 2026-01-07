

export default function ChatMessage({name , message , className}:{name:string , message:string , className:string}) {
  return (
    <div className="bg-slate-100 rounded-lg space-y-3 w-fit py-1 px-2">
        <h6 className={`${className}`}>{name}</h6>
        <p>{message}</p>
    </div>
  )
}
