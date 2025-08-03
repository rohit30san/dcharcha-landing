import { SparklesIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'AI-powered visual storytelling',
    icon: SparklesIcon,
    desc: 'Transform ideas into compelling civic visuals using cutting-edge AI tools.',
  },
  {
    title: 'Community-first planning',
    icon: UsersIcon,
    desc: 'Empower residents to co-create solutions and drive participatory development.',
  },
  {
    title: 'Local impact with national relevance',
    icon: GlobeAltIcon,
    desc: 'Bridge hyperlocal dreams with broader movements to shape policy and dialogue.',
  },
];

export default function WhyDcharcha() {
  return (
    <section className="py-16 px-6 text-center" id="why-dcharcha">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Dcharcha?</h2>
      <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-600">
        Dcharcha isn’t just another app. It’s a civic canvas, a movement, and your public voice.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <Icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
