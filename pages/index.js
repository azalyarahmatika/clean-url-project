import Navigation from '../components/Navigation';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <MainSection />
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