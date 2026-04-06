import Herotext from '@/components/molecules/Herotext'
import Hero from '@/components/organisms/Hero'
import Layout from '@/components/molecules/Layout'
import Title from '@/components/atoms/Title'
import Feature from '@/components/molecules/Feature'
import FeaturesGroup from './components/organisms/FeaturesGroup'

export default function Home() {
  return <div className="">
      <Hero />
    <div>
      <Layout>
        <div className='flex flex-col items-center gap-5'>
          <FeaturesGroup
          firstWord='Project'
          secondWord='Management'
          text = 'Texto uno mijito 1'
          buttonText = 'Get started'
          orientation = {true}
          ></FeaturesGroup>

          <FeaturesGroup
          firstWord='Work'
          secondWord='Together'
          text='Texto largo explicativo en letra pequeña, osea, el dos'
          buttonText='Try now'
          orientation={false}
          ></FeaturesGroup>
        </div>
      </Layout>
    </div>
  </div>;
}
