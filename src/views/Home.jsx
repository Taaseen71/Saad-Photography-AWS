import React from 'react'
import GetImage from '../components/get-images/GetImage'; //! Carousel
import Fullpage,{FullPageSections, FullpageSection, FullpageNavigation}  from '@ap.cx/react-fullpage';
import bird from '../img/bird.jpeg'
import backgroundWallpaper from '../img/background-wallpaper.png'
import waterfall from '../img/waterfall.jpeg'
import HeaderDetails from '../components/header-details/HeaderDetails';
import ContactMe from '../components/contact-me/ContactMe';

function Home() {
    const SectionStyle={
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    // Disable Right Click on website
    document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <Fullpage>
        <FullpageNavigation/>
        <FullPageSections>
            <FullpageSection style={{...SectionStyle, backgroundImage: `url(${bird})`, backgroundSize: 'cover'}}>
                <HeaderDetails/>
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundImage: `url(${backgroundWallpaper})`, backgroundSize: 'cover'}}>
              <GetImage bucketName="saad-photography" />
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundImage: `url(${waterfall})`, backgroundSize: 'cover'}}>
              {/* <GetImage bucketName={"saad-trackday"}/> */}
              <ContactMe/>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default Home