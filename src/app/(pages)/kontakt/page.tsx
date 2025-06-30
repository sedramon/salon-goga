import ContactInfoSection from "@/app/components/ContactInfoSection/ContactInfoSection";
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import MapSection from "@/app/components/MapSection/MapSection";


export default function KontaktPage() {
    return <main>
        <Hero
                title="KONTAKT"
                subtitle="Imate pitanje za nas? Pitajte."
                bg="/salon-goga-kontakt.jpg"
              />
        <ContactInfoSection />
        <MapSection />
        <Footer/>
      </main>;
}