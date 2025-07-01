import Footer from '@/app/components/Footer/Footer';
import Hero from '@/app/components/Hero/Hero';
import PriceListSection from '@/app/components/PriceListSection/PriceListSection';
import { miniSalonCategories } from '@/data/services';

export default function MaliSalonCenovnik() {
  return <main>
          <Hero
                  title="CENOVNIK MALI SALON"
                  subtitle="Naše cene srazmerne su kvalitetu"
                  bg="/salon-goga-cenovnik.jpg"
                />
          <PriceListSection categories={miniSalonCategories} />
          <Footer/>
        </main>;
}