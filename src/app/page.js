import Banner from "@/components/Header/Banner/Banner";
import MyProject from "@/components/MyProject/MyProject";
import Services from "@/components/Services/Services";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <MyProject></MyProject>
    </div>
  );
}
