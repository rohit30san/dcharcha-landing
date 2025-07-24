// src/components/LocalVisions.jsx
import { MapPinIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function LocalVisions() {
  const visions = [
    {
      id: 1,
      title: "Clean Yamuna by 2030",
      location: "Delhi",
      image: "https://source.unsplash.com/featured/?river,india",
    },
    {
      id: 2,
      title: "Green Rooftops Everywhere",
      location: "Bangalore",
      image: "https://source.unsplash.com/featured/?green,roof",
    },
    {
      id: 3,
      title: "Public Art Corners",
      location: "Kolkata",
      image: "https://source.unsplash.com/featured/?graffiti,art",
    },
    {
      id: 4,
      title: "Solar Street Lights",
      location: "Lucknow",
      image: "https://source.unsplash.com/featured/?solar,street",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16" id="visions">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Explore Local Visions
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        Get inspired by what people from across India dream for their communities.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {visions.map((vision) => (
          <div key={vision.id} className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <img src={vision.image} alt={vision.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{vision.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPinIcon className="w-4 h-4 mr-1" />
                {vision.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
