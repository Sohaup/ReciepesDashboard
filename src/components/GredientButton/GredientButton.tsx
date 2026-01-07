import { Button } from "flowbite-react";
import type { GredientButtonProps } from "../../types/uiTypes";

export default function GredientButton({Icon , text , className}:GredientButtonProps) {
  return (
    <Button className={`bg-linear-to-l px-8  rounded-[30px] relative ${className} `}>
        <div className="absolute left-2">
            <Icon color="black"/>
        </div>
        <div className="capitalize font-semibold min-w-15">
            {text}
        </div>
        
    </Button>
  )
}

export const buttonCaller = (props:GredientButtonProps) => {
     
    return <GredientButton {...props}/>
}
