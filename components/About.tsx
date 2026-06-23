const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg mb-6">
              With over two decades of industry experience, we've helped hundreds of enterprises achieve their strategic objectives.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-4">✓</span>
                <span className="text-gray-700">Expert team with diverse industry backgrounds</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-4">✓</span>
                <span className="text-gray-700">Proven track record of success</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-4">✓</span>
                <span className="text-gray-700">Customized solutions for each client</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-4">✓</span>
                <span className="text-gray-700">Dedicated support throughout engagement</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl h-96 flex items-center justify-center text-white text-center p-8">
            <div>
              <h3 className="text-5xl font-bold mb-4">20+</h3>
              <p className="text-xl">Years of Industry Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
