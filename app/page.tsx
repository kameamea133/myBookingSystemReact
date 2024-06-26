import Image from "next/image";
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        {/* searchForm */}
        <div>hello</div>
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">most popular choices for travellers from around the world</p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll"></div>
      </section>
    </main>
  );
}
