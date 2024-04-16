import Navigation from '../components/Navigation';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  const apiKey = process.env.API_KEY
    
  return (
    <>
      <Navigation />
      <Header />
      <MainSection apiKey={apiKey}/>
      <CTASection />
      <Footer />
    </> 
  )
}

export async function getStaticProps() {
 
  return {
    props: {},
  }
}