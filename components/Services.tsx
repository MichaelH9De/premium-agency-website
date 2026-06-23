const Services = () => {
  const services = [
    {
      title: 'Strategic Consulting',
      description: 'In-depth analysis and strategic planning for business growth and market expansion',
      icon: '📊'
    },
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through digital evolution with expert insights',
      icon: '🚀'
    },
    {
      title: 'Executive Coaching',
      description: 'One-on-one coaching for C-suite executives and leaders',
      icon: '👔'
    },
    {
      title: 'Market Research',
      description: 'Comprehensive market analysis and competitive intelligence',
      icon: '🔍'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate enterprise risks with proven strategies',
      icon: '🛡️'
    },
    {
      title: 'Change Management',
      description: 'Successfully navigate organizational change and transformation',
      icon: '⚡'
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">Comprehensive solutions tailored to your enterprise needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition border border-gray-100">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
