// src/components/CallToAction.jsx
export default function CallToAction() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="text-gray-300 mb-6">
          Be a part of Dcharcha — where civic dreams become reality. Follow us for updates, and get ready to build the future.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#"
            className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
          >
            Follow on Instagram
          </a>
          <a
            href="#"
            className="bg-transparent border border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </footer>
  );
}
