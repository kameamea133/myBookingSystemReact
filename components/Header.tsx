'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, Fragment } from "react"
import { 
    Bars3Icon,
    ChevronDownIcon,
    HomeIcon,
    ChatBubbleLeftIcon,
    PaperAirplaneIcon,
    PlayCircleIcon
} from "@heroicons/react/24/outline"
import { PopoverGroup, Popover, Disclosure, Dialog, Transition, PopoverButton } from "@headlessui/react"

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header className='bg-[#f07167]'>
        <nav className='mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className="flex lg:flex-1">
            <Link href='/' className="-m-1.5 p -1.5">
                <span className="sr-only">myBooking.com</span>
                <Image 
                src="/bookingLogo.png" 
                alt="logo"
                width={120}
                height={120}
                priority={true}
                className="w-auto"
                />
            </Link>
            </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>
            </div>
        </nav>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
                <PopoverButton>
                    Stays
                    <ChevronDownIcon 
                    className="h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                    />
                </PopoverButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacitty-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    >
                </Transition>
            </Popover>
        </PopoverGroup>
    </header>
  )
}

export default Header