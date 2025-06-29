import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HighlightsSection, { FeatureProps } from "../components/HighlightsSection/HighlightsSection";
import PictureHighlightsSection from "../components/HighlightsSection/PictureHighlightsSection/PictureHighlightsSection";
import PriceListSection from "../components/PriceListSection/PriceListSection";
import TeamSection from "../components/TeamSection/TeamSection";


const features: FeatureProps[] = [
  {
    title: 'Kako je nastala "GOGA"',
    text: `Još iz osnovne škole moja želja i strast je bila da svojom kreativnošću i vedrim duhom pomognem ženama, ljudima da budu lepši, privlačniji i srećniji. Kao odličan đak upisujem "školu za negu lepote" u Beogradu u kojoj dobijam široko znanje u oblasti zanatstva prvenstveno za kosu a zatim za šminku, kozmetiku. Uz puno prakse po salonima za vreme školovanja izučila sam osnove zanata i već po završetku škole otvaram salon 2001. godine. Moja karijera je napredovala i kroz vreme sam završavala mnoge edukacije iz sveta lepote, a samim tim napredovala u biznisu i gradila se kao preduzetnik tako sto sam imala više salona u isto vreme gde sam stekla mnogo iskustva kao vođa i izgradila se kao ličnost i preduzetnik. Mnoge nagrade svedoče o tome.`,
    image: '/salon-goga-about-slika-1.jpeg',
    alt: 'Velika transformacija kose',
  },
  {
    title: 'Moja porodica',
    text: 'Još jedan od velikih uspeha jeste moja porodica to jest, nešto što me ističe je to što sam majka četiri prekrasne devojčice. Svih devet meseci trudnoće sam radila i već posle tri nedelje sam se vraćala ponovo na svoj posao, to govori o mojoj upornosti i ljubavi prema svom poslu. U tome mi je pomogao moj partner i moja porodica. Moj moto jeste da žena preduzetnik mora biti jednako uspešna u poslu i u porodici da bi bila ispunjena i srećna kao žena. Tako sam dobila nagradu žena preduzetnik 2021. godine.',
    image: '/salon-goga-about-slika-3.jpg',
    alt: 'Preparati za kosu',
  },
  {
    title: 'Vizija mog posla',
    text: `Moja želja i moja vizija je da otvorim privatnu skolu za negu lepote i da svoje znanje i iskustvo dupliciram na jedan nov, moderan a u isto vreme kvalitetan pristup i da novim mladim generacijama prenesem ljubav prema zanatu. Danas smo svedoci da mladi u Srbiji ne vole mnogo da rade ove poslove, ja želim da im promenim mišljenje i pokažem kako sa našim poslom osim svakodnevne kreativnosti i raznolikosti samog izvođenja posla može i jako lepo da se finansijski prosperira. Kao mentor u ženskom preduzetništvu bih pokazala mladim ženama kako da u Srbiji budu uspešne u biznisu a u isto vreme i majke i supruge.`,
    image: '/salon-goga-about-slika-2.jpeg',
    alt: 'Još jedna velika transformacija',
  },
];

// app/about/page.tsx
export default function AboutPage() {
  return <main>
    <Hero
            title="O NAMA"
            subtitle="Lepota je naša zabava!"
            bg="/salon-goga-o-nama.jpg"
          />
    <HighlightsSection features={features} />
    <PictureHighlightsSection />
    <TeamSection />
    <PriceListSection />
    <Footer/>
  </main>;
}
