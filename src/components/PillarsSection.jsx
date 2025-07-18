// src/components/PillarsSection.jsx
import { LightBulbIcon, UsersIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const pillars = [
  {
    title: 'Empowerment',
    description: 'Giving every citizen a voice through direct, meaningful civic engagement.',
    icon: LightBulbIcon,
  },
  {
    title: 'Community',
    description: 'Bridging the gap between people, leaders, and institutions to foster trust.',
    icon: UsersIcon,
  },
  {
    title: 'Transparency',
    description: 'Enabling open, visible discourse that drives real change and accountability.',
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function PillarsSection() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">The 3 Pillars of Dcharcha</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At the heart of Dcharcha lie three foundational principles that guide everything we build.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition-all">
              <pillar.icon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
