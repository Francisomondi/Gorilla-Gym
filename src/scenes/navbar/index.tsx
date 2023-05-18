import { Bars3Icon,XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import Logo from "@/assets/Logo.png";
import Link from "./Link";


type Props = {
    selectedPage: string
    setSelectedPage:(value: string) => void
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
    const flexBetween='flex items-center justify-between'
return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6 `}>
                {/*Left side */}
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="navigation logo" src={Logo} />
                </div>
                {/*Left side */}
                <div className={`${flexBetween} w-full ` }>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link
                        page="Our classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Contacts"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />


                    </div>
                    <div className={`${flexBetween} gap-8 `}>
                        <p>Sign In</p>
                        <p>Become A Member</p>
                    </div>

                </div>

            </div>

        </div>
    </nav>
)
}

export default Navbar