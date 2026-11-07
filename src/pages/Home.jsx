import Hero from '../sections/Hero'

import Industries from '../sections/Industries'

import Services from '../sections/Services'
import WhyUs from '../sections/WhyUs'
import Delivered from '../sections/Delivered'
import Steps from '../sections/Steps'
import Tools from '../sections/Tools'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
    
      <Industries />
     <Delivered />
      <Services />
      <WhyUs />
     
      <Steps />
      <Tools />
      <FAQ />
      <FinalCTA />
    </>
  )
}
