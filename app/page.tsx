import Herotext from '@/components/molecules/Herotext'
import Hero from '@/components/organisms/Hero'
import Layout from '@/components/molecules/Layout'
import Title from '@/components/atoms/Title'
import Feature from '@/components/molecules/Feature'
import FeaturesGroup from './components/organisms/FeaturesGroup'
import Price from './components/organisms/Price'

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
      <div className='mt-20 mb-20 flex flex justify-center items-center'>
        <Price
          planTitle='Basic'
          price='$9.99'
          message='Perfect for individuals getting started with our platform.'
        />
      </div>

    </div>
  </div>;
}
