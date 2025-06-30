import ContactCtaSection from "@/app/components/ContactSection/ContactSection";
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import PackagesSection from "@/app/components/PackagesSection/PackagesSection";
import PriceListSection from "@/app/components/PriceListSection/PriceListSection";


export default function CenovnikPage() {
    return <main>
        <Hero
                title="CENOVNIK"
                subtitle="Naše cene srazmerne su kvalitetu"
                bg="/salon-goga-cenovnik.jpg"
              />
        <PackagesSection />
        <ContactCtaSection />
        <PriceListSection />
        <Footer/>
      </main>;
}