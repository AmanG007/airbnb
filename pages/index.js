import Banner from '@/components/Banner';
import Header from '@/components/Header';
import LargeCard from '@/components/LargeCard';
import MediumCard from '@/components/MediumCard';
import SmallCard from '@/components/SmallCard';
import Footer from '@/components/footer';
import Head from 'next/head'
import Image from 'next/image';
import { render } from 'react-dom';

export const getServerSideProps = async () => {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").
  then(
    (res) => res.json() 
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").
  then(
    (res) => res.json() 
  );

    return {
    props: {
      exploreData,
      cardsData
    }
  }
}

export default function Home({exploreData, cardsData}) {

  return (
    
    <div className="">
      <Head> 
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

        {/* pull some data from a server - API endpoints */}
        <div className='grid grid-cols-1 ms:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData.map(({img, distance, location }) => (
          
          (
        <div>
        <section className='flex items-center m-2 mt-5 space-x-4 
        rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 
        transition transform duration-200 ease-out'>
            {/* Left */}
            <div className='relative h-16 w-16'>
              <Image src={img} layout="fill" className='rounded-lg'/>
            </div>
            
            {/* Right */}
            <div>
                <h2>{location}</h2>
                <h4 className='text-gray-500'>{distance}</h4>
            </div>
        </section>

        </div>
      )

              // <SmallCard
              //   key={img}
              //   img={img}
              //   distance={distance}
              //   location={location} 
              // />

        ))}
        </div>
        </section>

        <section>
            <h2 className='text-4xl font-semibold py-8'>
              Live Anywhere
            </h2>

            <div className='flex spce-x-3 overflow-scroll 
            scrollbar-hide '>
              {cardsData.map(item =>(
                <MediumCard key={item.img} img={item.img} title={item.title} />
              ))}
            </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />        

      </main>
      <Footer/>
    </div>
  );
}

// export async function getServerSideProps() {
//   const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").
//   then(
//   (res) => res.json()
//   );

//   return {
//     props: {
//       exploreData
//     }
//   }

// }

// export const getServerSideProps = async () => {
//   const query = await fetch("https://www.jsonkeeper.com/b/4G1G")
//   // const response = await query.json();
  
//   return {
//     props: {
//       response
//     }
//   }
// }

