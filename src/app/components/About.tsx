import React from 'react'
import LargeWrapper from './wrapper/LargeWrapper'
import GreenLink from './Link'

const About = () => {
    return (
        <LargeWrapper>
            <p className='text-xs font-serif text-black m-0'>Currently studying (Ma) Integrated Design Research, at KISD, Th Köln.
                Finished my Bachelor studies at Code & Context, Th Köln. Currently working on <GreenLink href='https://garments.digital/'>Garments.Digital</GreenLink> an online platform allowing for the creation of digital fashion items. My thesis explored the topic of digital fashion, using text-to-image models and deep-learning, in a participatory design approach. Currently exploring dark ecologies in a model based research approach. </p>
        </LargeWrapper>
    )
}

export default About