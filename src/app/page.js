// import CarouselElement
//  from "./components/carouselElement";
 import HomeLogin from './components/homeLogin'
import UtilityCards from './components/utilityCards'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <HomeLogin />
      <UtilityCards />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-black p-24">
          <h2>
            Docs
          </h2>
          <p>
            Find in-depth information about Next.js features and API.
          </p>    
      </div>
    </main>
  );
}
