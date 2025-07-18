export default function ShareDream() {
  return (
    <section id="share-dream" className="py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Dream</h2>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        The Dcharcha app is your space to express your vision for your street, neighborhood, or city.
        From murals to better public spaces, your dream matters.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="w-40 md:w-48 hover:scale-105 transition-transform"
          />
          <span className="text-sm text-gray-600">Coming Soon</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="w-40 md:w-48 hover:scale-105 transition-transform"
          />
          <span className="text-sm text-gray-600">Coming Soon</span>
        </div>
      </div>
    </section>
  );
}
