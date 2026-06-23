const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Their strategic guidance transformed our business model and increased revenue by 40%.',
      author: 'Sarah Johnson',
      title: 'CEO, Fortune 500 Company',
      rating: 5
    },
    {
      quote: 'Exceptional team with deep industry knowledge. A true partner in our growth journey.',
      author: 'Michael Chen',
      title: 'VP Strategy, Tech Startup',
      rating: 5
    },
    {
      quote: 'Professional, insightful, and results-driven. Highly recommend for enterprise-level consulting.',
      author: 'Emily Rodriguez',
      title: 'CFO, International Corporation',
      rating: 5
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Client Testimonials</h2>
        <p className="section-subtitle text-center">What our partners say about us</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <p className="font-bold text-primary">{testimonial.author}</p>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
