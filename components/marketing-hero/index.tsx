
import Image from 'next/image';

const MarketingHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Title Here</h1>
        <p className="text-lg text-gray-600 mb-8">Description Here</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          CTA Button
        </button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/path/to/image.jpg"
          alt="Image Description"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default MarketingHero;
