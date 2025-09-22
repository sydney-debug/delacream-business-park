import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Building2, Utensils, Bed } from 'lucide-react'

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['0111717542', 'Available 24/7'],
      color: 'text-primary-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@delacream.co.ke', 'reservations@delacream.co.ke'],
      color: 'text-secondary-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['De La Cream Business Park', 'Busia, Kenya'],
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sun: 24/7', 'Reception Always Open'],
      color: 'text-purple-600'
    }
  ]

  const departments = [
    {
      icon: Building2,
      title: 'Business Park Leasing',
      description: 'Office space inquiries and leasing information',
      email: 'leasing@delacream.co.ke',
      phone: '0111717542 Ext. 1'
    },
    {
      icon: Utensils,
      title: 'Restaurant Reservations',
      description: 'Dining reservations and event bookings',
      email: 'restaurant@delacream.co.ke',
      phone: '0111717542 Ext. 2'
    },
    {
      icon: Bed,
      title: 'Hotel Bookings',
      description: 'Room reservations and accommodation services',
      email: 'hotel@delacream.co.ke',
      phone: '0111717542 Ext. 3'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Get in touch with our team for any inquiries or assistance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you with all your business, dining, and accommodation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="business-park">Business Park Inquiry</option>
                    <option value="restaurant">Restaurant Reservation</option>
                    <option value="hotel">Hotel Booking</option>
                    <option value="events">Event Planning</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map and Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Google Maps Embed */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for Google Maps - Replace with actual Google Maps embed */}
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Google Maps integration will be added here</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h4>
                  <p className="text-gray-600 mb-4">
                    De La Cream Business Park is conveniently located in the heart of Nairobi's 
                    central business district, easily accessible by public and private transport.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">Nairobi Central Business District</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">5 minutes from City Center</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary-600 text-white rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h4>
                <p className="text-primary-100 mb-6">
                  Our team is available 24/7 to help you with any urgent inquiries or bookings.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+254720206142"
                    className="flex items-center space-x-3 text-white hover:text-primary-200 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">+254 720 206 142</span>
                  </a>
                  <a
                    href="mailto:info@delacream.co.ke"
                    className="flex items-center space-x-3 text-white hover:text-primary-200 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="font-medium">info@delacream.co.ke</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to the right department for faster and more specialized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <dept.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{dept.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{dept.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{dept.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{dept.email}</span>
                  </div>
                </div>
                <button className="w-full mt-4 btn-outline text-sm">
                  Contact Department
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">What are your business hours?</h4>
                <p className="text-gray-600">Our reception is open 24/7. Business park offices are accessible anytime, restaurant operates 6 AM - 11 PM, and hotel services are available round the clock.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer parking facilities?</h4>
                <p className="text-gray-600">Yes, we provide secure parking for all tenants, hotel guests, and restaurant visitors. Valet parking is available for hotel guests and restaurant patrons.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Can I schedule a tour of the facilities?</h4>
                <p className="text-gray-600">Absolutely! We offer guided tours of our business park, restaurant, and hotel facilities. Contact us to schedule your personalized tour.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
                <p className="text-gray-600">We accept cash, all major credit cards, mobile money (M-Pesa), and bank transfers. Corporate accounts and payment plans are also available.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Do you cater to events and conferences?</h4>
                <p className="text-gray-600">Yes, we have dedicated event spaces and can accommodate conferences, meetings, weddings, and corporate events of various sizes.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Is WiFi available throughout the facility?</h4>
                <p className="text-gray-600">High-speed WiFi is complimentary throughout all areas of De La Cream Business Park, including offices, restaurant, hotel rooms, and common areas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
