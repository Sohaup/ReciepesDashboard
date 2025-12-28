import React from 'react'
import { Drawer, DrawerHeader, DrawerItems } from 'flowbite-react'
import SideBar from '../SideBar/SideBar'

export default function DrawerSideBar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}  >
            <DrawerHeader>SideBar</DrawerHeader>
            <DrawerItems>
                <SideBar className='flex bg-white ' />
            </DrawerItems>
        </Drawer>
    )
}
