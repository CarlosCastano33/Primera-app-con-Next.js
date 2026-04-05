import Herotext from '@/components/molecules/Herotext'
import Hero from '@/components/organisms/Hero'
import Layout from '@/components/molecules/Layout'
import Title from '@/components/atoms/Title'

export default function Home() {
  return <div className="">
      <Hero />
    <div>
      <Layout>
        <Title />
      </Layout>
    </div>
  </div>;
}
