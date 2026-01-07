import { ArrowDown, Bell, type LucideIcon } from 'lucide-react'


export default function CardHeader({ Icon, text }: { Icon: LucideIcon, text: string }) {
  return (
    <div className="flex justify-between items-center ">
      <div className="group flex gap-3 items-center">
      <span>
        <Icon />
      </span>
      <h3 className='text-2xl font-bold'>{text}</h3>
      </div>
      <div className="group flex gap-3 items-center">
        <span>
          <Bell />
        </span>
        <span>
          <ArrowDown />
        </span>
      </div>
    </div>
  )
}
