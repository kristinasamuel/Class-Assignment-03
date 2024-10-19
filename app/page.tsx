// Home page 
// import sections to create website
import HeaderSection from "../components/header";
import HeroSection from "../components/herosection";
import FeaturesSection from "../components/features";
import CardSection from "../components/card";
import FooterPage from "../components/footer";

// export default function HomePage
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeaderSection/>
      <HeroSection/>
      <FeaturesSection/>
      <CardSection/>
      <FooterPage/> 
    </div>
  )
}
