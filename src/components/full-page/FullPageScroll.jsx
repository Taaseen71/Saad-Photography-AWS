import React from 'react'
import Fullpage,{FullPageSections, FullpageSection, FullpageNavigation}  from '@ap.cx/react-fullpage';
import bird from '../../img/bird.jpeg'

const FullPageScroll = () => {
    const SectionStyle={
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <Fullpage>
        <FullpageNavigation/>
        <FullPageSections>
            <FullpageSection style={{...SectionStyle, backgroundImage: `url(${bird})`, backgroundSize: 'cover'}}>
                Section1
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundImage: `url(${bird})`, backgroundSize: 'cover'}}>
                Section2
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundImage: `url(${bird})`, backgroundSize: 'cover'}}>
                Section3
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll