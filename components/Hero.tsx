const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your Business with Expert Guidance
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
          Premium information-based consulting for enterprises that demand excellence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent hover:bg-yellow-500 text-primary font-bold py-4 px-8 rounded-lg transition text-lg">
            Get Started
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-lg transition text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
