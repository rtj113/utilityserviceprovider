// import CarouselElement
//  from "./components/carouselElement";
 import HomeLogin from './components/homeLogin'
import UtilityCards from './components/utilityCards'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <HomeLogin />
      <UtilityCards />
      <section className="mb-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-black p-24">
          <h2 className="mb-2 text-2xl font-bold propstracking-tight text-primary">
          Explore CPA's service area
          </h2>
          <p>
          Learn how CPA’s 32 cities and the unincorporated areas of Los Angeles and Ventura Counties lead the way to a clean energy future. Click on an icon below to discover how much Greenhouse Gas Emissions have been avoided in the communities we serve and more.
          </p>    
      </section>
    </main>
  );
}