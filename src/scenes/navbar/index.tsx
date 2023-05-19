import { Bars3Icon,XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/Types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";



type Props = {
    selectedPage: SelectedPage
    setSelectedPage:(value: SelectedPage) => void
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {

    const flexBetween='flex items-center justify-between'
    const isAboveMediumScreens= useMediaQuery("(min-width:1020px)")
    const [isMenuToggled, setIsMenuToggled]=useState<boolean>(false)


return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6 `}>
                {/*Left side */}
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="navigation logo" src={Logo} />
                </div>
                {/*Right side */}
                {isAboveMediumScreens ? (
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
                    
                    <div className={`${flexBetween} gap-8 pl-6`}>
                        <p>Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>Become A Member</ActionButton>
                    </div>
                    </div>
                    ):(
                        
                            <button className="rounded-full bg-secondary-500 px-2"
                            onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                        
                    )
                }

            </div>

        </div>
    </nav>
)
}

export default Navbar