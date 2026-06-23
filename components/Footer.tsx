const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Premium Agency</h3>
            <p className="text-gray-300">Transforming businesses through expert consulting and strategic guidance.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-accent transition">Consulting</a></li>
              <li><a href="#services" className="hover:text-accent transition">Coaching</a></li>
              <li><a href="#services" className="hover:text-accent transition">Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-accent transition">About</a></li>
              <li><a href="#" className="hover:text-accent transition">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@agency.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>LinkedIn | Twitter | Facebook</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Premium Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
