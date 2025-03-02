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
    <div className="fixed inset-0 bg-black-100 bg-opacity-10 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl max-w-2xl w-full relative max-h-[90vh] flex flex-col shadow-xl">
        <div className="p-5 border-gray-200 sticky top-0 bg-white bg-opacity-95">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                What this place offers
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <MdClose className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>


        <div className="overflow-y-auto flex-1 p-5 ">
          {amenitiesCategories.map((category, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center border-b text-gray-200 space-x-3 p-3 "
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
