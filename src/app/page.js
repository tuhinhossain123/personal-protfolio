import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Header/Banner/Banner";
import MyProject from "@/components/MyProject/MyProject";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Together from "@/components/Together/Together";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Services></Services>
      <MyProject></MyProject>
      <Testimonial></Testimonial>
      <Together></Together>
    </div>
  );
}
