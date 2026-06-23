const Expertise = () => {
  const areas = [
    'Technology & Innovation',
    'Finance & Economics',
    'Supply Chain Management',
    'Human Resources',
    'Marketing & Brand Strategy',
    'Operations Excellence',
    'Customer Experience',
    'Sustainability & ESG',
  ]

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Areas of Expertise</h2>
        <p className="section-subtitle text-center">Deep knowledge across multiple industries and disciplines</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="p-6 bg-primary text-white rounded-lg text-center hover:bg-secondary transition">
              <p className="font-semibold text-lg">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
