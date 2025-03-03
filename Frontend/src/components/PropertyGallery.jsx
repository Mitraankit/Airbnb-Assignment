import { FiShare2, FiHeart } from "react-icons/fi";

export default function PropertyGallery() {
  return (
    <div className="mt-2 font-semibold text-xl max-w-7xl mx-auto border-t border-gray-300 pt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[180px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <div className="text-lg sm:text-xl font-medium">
          Family Room: Nirvana Homes | Wooden House | Farm Stay
        </div>

        <div className="flex text-sm items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FiShare2 className="text-base sm:text-lg" /> Share
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FiHeart className="text-base sm:text-lg" /> Save
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 py-3 md:grid-cols-4 md:grid-rows-2 md:h-[450px]">
  {/* Main Image - Always on top */}
  <div className="rounded-xl overflow-hidden h-[300px] md:col-span-2 md:row-span-2 md:h-full">
    <img
      src="https://a0.muscache.com/im/pictures/miso/Hosting-48554731/original/a79e82dc-85a0-463a-b769-ff90eb2b9d17.jpeg?im_w=960&im_format=avif"
      className="w-full h-full object-cover"
      alt="Main"
    />
  </div>

  {/* Mobile/Tablet Grid (2x2) */}
  <div className="grid grid-cols-2 gap-4 md:hidden">
    {[2, 3, 4, 5].map((num) => (
      <div key={num} className="rounded-xl overflow-hidden h-[200px]">
        <img
          src={`https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg?cs=srgb&dl=pexels-simon73-751546.jpg&fm=jpg-${num}.jpg`}
          className="w-full h-full object-cover"
          alt={`Property ${num}`}
        />
      </div>
    ))}
  </div>

  {/* Desktop Grid Items */}
  {[2, 3, 4, 5].map((num) => (
    <div key={`desktop-${num}`} className="hidden md:block rounded-xl overflow-hidden">
      <img
        src={`https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg?cs=srgb&dl=pexels-simon73-751546.jpg&fm=jpg-${num}.jpg`}
        className="w-full h-full object-cover"
        alt={`Property ${num}`}
      />
    </div>
  ))}
</div>
    </div>
  );
}
