// src/components/PillarsSection.jsx
import {
  MegaphoneIcon,
  HandRaisedIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const pillars = [
  {
    title: 'Express',
    subheading: 'Upload a photo and describe your dream',
    description:
      'Speak your mind freely. Share dreams, opinions, and thoughts in a safe space where your voice matters.',
    icon: MegaphoneIcon,
  },
  {
    title: 'Engage',
    subheading: 'Discuss with your community and leaders',
    description:
      'React to others’ posts, join discussions, and explore local stories. Build authentic conversations.',
    icon: HandRaisedIcon,
  },
  {
    title: 'Empower',
    subheading: 'Get resources to act and transform spaces',
    description:
      'Turn dialogue into action. Spark change by inspiring your community through shared ideas and solutions.',
    icon: SparklesIcon,
  },
];

export default function PillarsSection() {
  const handleScroll = () => {
    const target = document.getElementById('share-dream');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">How it works?</h2>
        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
          3E — Express, Engage, Empower
        </h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Dcharcha brings your community together through a simple 3-step journey. Share ideas, connect with others, and drive collective change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition-all"
            >
              <pillar.icon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{pillar.title}</h3>
              <p className="text-sm text-indigo-500 mb-3">{pillar.subheading}</p>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleScroll}
          className="bg-green-600 text-white font-medium px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Explore your role
        </button>
      </div>
    </section>
  );
}
