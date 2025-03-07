import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaTimes,
  FaRegUser,
  FaGamepad,
  FaKey,
  FaCoffee,
  FaStar,
  FaWifi,
  FaBriefcase,
  FaPaw,
  FaCar,
  FaTv,
  FaTshirt,
  FaFire,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import GuestDropdown from "./GuestDropdown";
import { GiCook, GiWashingMachine } from "react-icons/gi";
import { MdWarning } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import AmenitiesPopup from "./AmenitiesPopup";

export default function PropertyDetails() {
  const [checkInDate, setCheckInDate] = useState(() => {
    const saved = localStorage.getItem("checkInDate");
    return saved ? new Date(JSON.parse(saved)) : null;
  });

  const [checkOutDate, setCheckOutDate] = useState(() => {
    const saved = localStorage.getItem("checkOutDate");
    return saved ? new Date(JSON.parse(saved)) : null;
  });

  const [guests, setGuests] = useState(() => {
    const saved = localStorage.getItem("guests");
    return saved
      ? JSON.parse(saved)
      : { adults: 1, children: 0, infants: 0, pets: 0 };
  });

  useEffect(() => {
    if (checkInDate) {
      localStorage.setItem(
        "checkInDate",
        JSON.stringify(checkInDate.getTime())
      );
    }
  }, [checkInDate]);

  useEffect(() => {
    if (checkOutDate) {
      localStorage.setItem(
        "checkOutDate",
        JSON.stringify(checkOutDate.getTime())
      );
    }
  }, [checkOutDate]);

  useEffect(() => {
    localStorage.setItem("guests", JSON.stringify(guests));
  }, [guests]);

  const [showAmenities, setShowAmenities] = useState(false);

  const handleReservation = async () => {
    if (!checkInDate || !checkOutDate) {
      alert("Please select check-in and check-out dates");
      return;
    }

    if (guests.adults < 1) {
      alert("At least one adult is required");
      return;
    }
    try {
      const reservationData = {
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests: {
          adults: guests.adults,
          children: guests.children,
          infants: guests.infants,
          pets: guests.pets,
        },
        totalGuests: guests.adults + guests.children,
      };

      const response = await axios.post(
        "https://airbnb-assignment.onrender.com/api/reservations",
        reservationData
      );
      alert("Reservation successful!");
      console.log("Reservation created:", response.data);

      // setCheckInDate(null);
      // setCheckOutDate(null);
      // setGuests({
      //   adults: 1,
      //   children: 0,
      //   infants: 0,
      //   pets: 0,
      // });
    } catch (error) {
      alert(
        "Reservation failed: " + (error.response?.data?.error || error.message)
      );
      console.error("Reservation error:", error);
    }
  };

  return (
    <div className="relative">
      <div className="mt-2 max-w-7xl mx-auto border-t border-gray-300 pt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[180px]">
        {/* <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-50">
            <div className="max-w-7xl mx-auto p-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-lg font-semibold">
                    ₹3,600 <span className="text-gray-600 text-sm">night</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    {checkInDate?.toLocaleDateString() || "Check-in"} -
                    {checkOutDate?.toLocaleDateString() || "Check-out"}
                  </div>
                </div>
                <button
                  onClick={handleReservation}
                  className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div> */}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-xl font-semibold">
              Private room in bed and breakfast in Pharog, India
            </h1>
            <div className="flex items-center gap-4 mt-4 text-black-400">
              <span>4 guests · 2 bedrooms · 3 beds · 2 baths</span>
            </div>
            <div className="text-black text-sm underline flex items-center gap-1">
              <FaStar className="text-black-500" /> 1 review
            </div>

            <div className="mt-8 border-t border-gray-300 pt-8">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://a0.muscache.com/im/pictures/user/2c0dc3eb-3671-479b-a3c5-725ede36f6d8.jpg?im_w=240&im_format=avif"
                  alt="Host Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">Hosted by Tarana</h3>
                  <p className=" text-sm text-gray-600">4 years hosting</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-8">
              <div className="py-1">
                {[
                  {
                    icon: <FaGamepad className="text-xl text-gray-600" />,
                    title: "Fun and games for kids",
                    description:
                      "The playroom, playground and books help keep kids entertained.",
                  },
                  {
                    icon: <FaKey className="text-xl text-gray-600" />,
                    title: "Self check-in",
                    description: "Check yourself in with the lockbox.",
                  },
                  {
                    icon: <FaCoffee className="text-xl text-gray-600" />,
                    title: "Wake up to breakfast and coffee",
                    description:
                      "Included essentials make mornings extra easy.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 pb-3 last:border-0">
                    <div className="mt-1 text-gray-600">{feature.icon}</div>
                    <div>
                      <h3 className="text-l font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className=" text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-8">
              <h1 className="text-3xl font-semibold mb-6">
                Full Property Details
              </h1>
              <p>
                Nirvana Homes uses a 19th-Century wooden house built using “Kath
                Kuni” Architecture, an indigenous construction technique.
                Providing a panoramic view of the Himalayas, amidst apple
                orchards we're located 80km from Shimla. With 2 king-size beds &
                seating space, this room is for groups that want to stay
                together without giving up on comfort. The room has wooden
                floors & walls complimented with colorful décor. All our rooms
                have access to the lawn, kitchen, living area & our apple
                orchards The space Nirvana Homes is a 19th-Century wooden house
                built using “Kath Kuni” Architecture, an indigenous construction
                technique. Providing a panoramic view of the Himalayas, amidst
                apple orchards, we're located in Village Rarta, away from the
                hustle & bustle, 80 km from Shimla. The property features:
              </p>
              <ul className="list-disc pl-6">
                <li>2 king-size beds</li>
                <li>Spacious seating area</li>
                <li>Wooden floors & walls</li>
                <li>Colorful traditional décor</li>
                <li>Shared access to lawn and kitchen</li>
              </ul>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-8">
              <h2 className="text-2xl font-semibold mb-6">
                Where you'll sleep
              </h2>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bedroom Card */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src="https://media.designcafe.com/wp-content/uploads/2024/01/24175330/essence-of-modern-luxury-bedroom-design.jpg" // Replace with your actual image path
                    alt="Bedroom"
                    className="w-full h-44 object-cover rounded-t-lg"
                  />
                  <div className="p-2">
                    <h3 className="text-xl font-semibold mb-2">Bedroom</h3>
                    <p className="text-gray-600">2 double beds</p>
                  </div>
                </div>

                {/* Living Room Card */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src="https://media.designcafe.com/wp-content/uploads/2019/12/17055334/minimalistic-living-room-interior.jpg" // Replace with your actual image path
                    alt="Living Room"
                    className="w-full h-44 object-cover rounded-t-lg"
                  />
                  <div className="p-2">
                    <h3 className="text-xl font-semibold mb-2">Living Room</h3>
                    <p className="text-gray-600">
                      2 sofa beds, 2 floor mattresses, 1 hammock
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-8">
              <h2 className="text-2xl font-semibold mb-6">
                What this place offers
              </h2>

              <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                {[
                  { name: "Kitchen", icon: <GiCook /> },
                  { name: "Wifi", icon: <FaWifi /> },
                  { name: "Dedicated workspace", icon: <FaBriefcase /> },
                  { name: "Free parking on premises", icon: <FaCar /> },
                  { name: "Pets allowed", icon: <FaPaw /> },
                  { name: "TV", icon: <FaTv /> },
                  { name: "Dryer", icon: <FaTshirt /> },
                  { name: "Washing Machine", icon: <GiWashingMachine /> },
                  {
                    name: "Carbon monoxide alarm",
                    icon: <MdWarning />,
                    unavailable: true,
                  },
                  {
                    name: "Smoke alarm",
                    icon: <FaFire />,
                    unavailable: true,
                  },
                ].map((amenity) => (
                  <div
                    key={amenity.name}
                    className={`flex items-center gap-3 py-1 ${
                      amenity.unavailable
                        ? "line-through text-gray-400 "
                        : "text-gray-700"
                    }`}
                  >
                    <span className="text-xl">{amenity.icon}</span>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowAmenities(true)}
                className="mt-4 mb-4 text-black border rounded-xl p-2 font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Show all amenities
              </button>

              <AmenitiesPopup
                isOpen={showAmenities}
                onClose={() => setShowAmenities(false)}
              />
            </div>
          </div>

          {/* Right Section */}

          <div className="md:sticky md:top-10 md:h-[calc(100vh-100px)] flex justify-center">
            <div className="w-full md:w-74 lg:w-90 max-w-md md:rounded-xl p-4">
              <div className="flex flex-col gap-4 overflow-y-auto pb-4">
                {/* Card 1 */}
                <div className="w-full border border-gray-200 rounded-xl p-6 shadow-lg bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-semibold">
                        <span className="line-through text-gray-500">
                          ₹5,000
                        </span>{" "}
                        ₹3,600
                      </span>
                      <span className="text-gray-600"> night</span>
                    </div>
                  </div>

                  <div className="border border-gray-600 rounded-lg">
                    <div className="flex border-b border-gray-600">
                      <div className="flex-1 p-3 border-r">
                        <label className="text-xs font-semibold">
                          CHECK-IN
                        </label>
                        <DatePicker
                          selected={checkInDate}
                          onChange={(date) => setCheckInDate(date)}
                          className="w-full outline-none"
                          placeholderText="Add date"
                          selectsStart
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={new Date()}
                        />
                      </div>
                      <div className="flex-1 p-3">
                        <label className="text-xs font-semibold">
                          CHECKOUT
                        </label>
                        <DatePicker
                          selected={checkOutDate}
                          onChange={(date) => setCheckOutDate(date)}
                          className="w-full outline-none"
                          placeholderText="Add date"
                          selectsEnd
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={checkInDate}
                        />
                      </div>
                    </div>
                    <GuestDropdown guests={guests} setGuests={setGuests} />
                  </div>

                  <button
                    onClick={handleReservation}
                    className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-800 transition-all"
                  >
                    Reserve
                  </button>

                  <div className="text-center text-xs mt-2 text-gray-600">
                    You won't be charged yet
                  </div>

                  <div className="text-sm pt-2 text-gray-800">
                    <div className="flex justify-between items-center">
                      <span className="underline">₹4,500 X 5 nights</span>
                      <span>₹22,500</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="underline">Special offer</span>
                      <span className="text-green-600">-₹4,500</span>
                    </div>
                    <div className="flex justify-between items-center mt-5 border-t border-gray-800 pt-2 text-l font-bold text-gray-800">
                      <span>Total before taxes</span>
                      <span>₹18,000</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full border rounded-xl p-4 shadow-lg bg-white relative">
                  <div className="absolute top-5 left-3">
                    <FiClock className="text-2xl text-black" />
                  </div>

                  <div className="pl-8">
                    <div className="text-lg font-semibold text-black">
                      Special offer: Save ₹3,600
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      This Host is offering a deal on their first 3 bookings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
