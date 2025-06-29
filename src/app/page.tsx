import ServicesSection from "./components/ServicesSection/ServicesSection";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import HighlightsSection, { FeatureProps } from "./components/HighlightsSection/HighlightsSection";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ReviewsSection from "./components/ReviewSection/ReviewsSection";

const features: FeatureProps[] = [
  {
    title: 'Velika transformacija kose!',
    text: `Ono po čemu smo prepoznatljivi jeste da debijujemo u svetu kolora sa Mounirovim proizvodima, savršene transformacije su moguće iz tamne u svetlu nijansu kose bez žutih tonova i oštećenosti vlasi. Kosa ostaje meka izuzetnog sjaja i klijenti odlaze oduševljeni i vrlo zadovoljni. Arhitekt je Mounirov proizvod koji služi kao visoka zaštita dlake prilikom hemijskog procesa bojenja. Kod nas je stvarno sve moguće!`,
    image: '/salon-goga-info-slika-1.jpeg',
    alt: 'Velika transformacija kose',
  },
  {
    title: 'Preparati za kosu',
    text: `U našem salonu možete kupiti sve kozmetičke preparate za negu kose, lica i tela kao i razne četke za vašu kućnu negu i lakše stilizovanje kose. Od različitih brendova imamo boje za kosu koje takođe možete kupiti kod nas. Uz stručni savet i edukaciju.`,
    image: '/salon-goga-info-slika-2.jpg',
    alt: 'Preparati za kosu',
  },
  {
    title: 'Još jedna velika transformacija!',
    text: `Ono po čemu smo takođe vrlo poznati jeste da za Vaše bitne trenutke kao što je venčanje, gostovanje u nekim emisijama ili bilo koja prilika u kojoj želite da potpuno iznenadite sa svojom transformacijom i izgledom. Mi, uz pomoć scenske šminke i raznih umetaka kose (klipsi), možemo da od Vas napravimo totalno drugu osobu i da, čak i ukoliko imate kratku kosu, dobijete podignutu svečanu frizuru i duge talase. Uz pomoć šminke prekrivamo sve nedostatke i kreiramo besprekoran izgled.`,
    image: '/salon-goga-info-slika-3.jpeg',
    alt: 'Još jedna velika transformacija',
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        title="SALON GOGA"
        subtitle="Salon koji Vas svakodnevno čini lepšim"
        bg="/salon-goga-home.jpg"
      />
      <ServicesSection />
      <ImageSlider />
      <HighlightsSection features={features} />
      <ReviewsSection />
      <Footer />
    </main>
  );
}

