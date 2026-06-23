const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how our expertise can drive your organization forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-6 py-3 rounded-lg text-primary font-semibold flex-1 max-w-xs"
          />
          <button className="bg-accent hover:bg-yellow-500 text-primary font-bold py-3 px-8 rounded-lg transition">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
