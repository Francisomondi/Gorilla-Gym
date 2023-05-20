import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/Types'
import HomePageText from "@/assets/HomepageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'






type Props = {
    setSelectedPage: (value: SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width-1060px)")

  return (
    <section
     id='home'
     className='gap-16 bg-gray-20 pb=10 py-10 md: h-full md:pb-0'
     >
        {/**Image And Main Header */}
        <div>
            {/**Main Header */}
            <div>
                {/**Headings */}
                <div>
                    <div>
                        <div>
                            <img alt='home page text' src={HomePageText}/>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolores ea quae ex, eum eveniet. Iusto aspernatur recusandae voluptas
                        exercitationem ad? Soluta voluptatibus voluptate libero,
                        suscipit ipsa obcaecati animi corporis?
                        </p>
                </div>
            {/** Action*/}
            <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
            </ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
            onClick={()=>setSelectedPage(SelectedPage.Home)}
            href={`#${SelectedPage.ContactUs}`}>
                <p>Learn More</p>
            </AnchorLink>
            </div>
            {/**Image */}
            <div>

            </div>
        </div>

    </section>
  )
}

export default Home