import { SparklesIcon, UsersIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "AI-Powered Civic Imagination",
    icon: SparklesIcon,
    desc: "Turn raw ideas into stunning visual realities. With AI as your creative ally, watch your civic dreams come alive — pixel by pixel, story by story.",
  },
  {
    title: "People at the Heart of Every Plan",
    icon: UsersIcon,
    desc: "Dcharcha brings citizens together to co-design their neighborhoods — because real change begins when every voice is heard, valued, and visualized.",
  },
  {
    title: "From Local Sparks to National Movements",
    icon: GlobeAltIcon,
    desc: "Transform small acts into large-scale inspiration. What starts as a local dream on Dcharcha can ripple into national policy, awareness, and action.",
  },
];

export default function WhyDcharcha() {
  return (
    <section
      className="py-16 px-6 text-center"
      id="why-dcharcha"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        Why <span className="text-[#005555]">Dcharcha?</span>
      </h2>

      <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-700 leading-relaxed">
        Dcharcha isn’t just an app — it’s a <span className="font-semibold text-[#005555]">living civic movement</span>.  
        A digital stage where creativity meets responsibility, and imagination sparks real-world transformation.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <Icon className="h-12 w-12 text-[#005555] mx-auto mb-5" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
