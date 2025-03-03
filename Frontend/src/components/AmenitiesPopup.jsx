import React from "react";
import {
  MdClose,
  MdWifi,
  MdLocalParking,
  MdPool,
  MdAcUnit,
  MdRestaurant,
  MdSecurity,
  MdPets,
  MdLocalLaundryService,
} from "react-icons/md";
import { GiGymBag, GiHotMeal } from "react-icons/gi";

const AmenitiesPopup = ({ isOpen, onClose }) => {
  const amenitiesCategories = [
    {
      category: "Essentials",
      items: [
        { name: "Wi-Fi", icon: <MdWifi className="w-5 h-5" /> },
        { name: "Air Conditioning", icon: <MdAcUnit className="w-5 h-5" /> },
        { name: "Heating", icon: <MdAcUnit className="w-5 h-5" /> },
      ],
    },
    {
      category: "Facilities",
      items: [
        { name: "Free Parking", icon: <MdLocalParking className="w-5 h-5" /> },
        { name: "Swimming Pool", icon: <MdPool className="w-5 h-5" /> },
        { name: "Gym", icon: <GiGymBag className="w-5 h-5" /> },
      ],
    },
    {
      category: "Services",
      items: [
        { name: "Restaurant", icon: <MdRestaurant className="w-5 h-5" /> },
        { name: "Room Service", icon: <GiHotMeal className="w-5 h-5" /> },
        {
          name: "Laundry Service",
          icon: <MdLocalLaundryService className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Safety & Security",
      items: [
        { name: "Security System", icon: <MdSecurity className="w-5 h-5" /> },
        {
          name: "Fire Extinguishers",
          icon: <MdSecurity className="w-5 h-5" />,
        },
        { name: "Pet Friendly", icon: <MdPets className="w-5 h-5" /> },
      ],
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl 
        w-full max-w-2xl md:w-[90%] md:max-w-2xl 
        h-full md:h-auto md:max-h-[90vh] 
        p-0 md:p-4 lg:p-0 shadow-xl
        relative flex flex-col"
      >
        {/* Header with Close Button */}
        <div className="p-3 md:p-5 border-b rounded-xl border-gray-200 sticky top-0 bg-white bg-opacity-95 z-10 flex justify-between items-center">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">
            What this place offers
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <MdClose className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Amenities List */}
        <div className="overflow-y-auto flex-1 p-3 md:p-5 max-h-[80vh] md:max-h-[90vh]">
          {amenitiesCategories.map((category, index) => (
            <div key={index} className="mb-6 md:mb-8 last:mb-0">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center border-b border-gray-300 space-x-3 p-3"
                  >
                    <span className="text-gray-700">{item.icon}</span>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesPopup;
