import { motion } from 'framer-motion'
import { Building2, Wifi, Car, Coffee, Users, Shield, Clock, MapPin } from 'lucide-react'

const BusinessParkPage = () => {
  const amenities = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Fiber optic internet with 99.9% uptime guarantee'
    },
    {
      icon: Car,
      title: 'Parking',
      description: 'Secure parking spaces for all tenants and visitors'
    },
    {
      icon: Coffee,
      title: 'Business Lounge',
      description: 'Comfortable spaces for informal meetings and networking'
    },
    {
      icon: Users,
      title: 'Meeting Rooms',
      description: 'Fully equipped conference rooms with AV technology'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV monitoring'
    },
    {
      icon: Clock,
      title: 'Flexible Access',
      description: '24/7 access to your office space'
    }
  ]

  const officeTypes = [
    {
      title: 'Private Offices',
      size: '150-500 sq ft',
      capacity: '1-8 people',
      price: 'From KES 25,000/month',
      features: ['Fully furnished', 'Natural lighting', 'Climate control', 'Phone system'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Executive Suites',
      size: '500-1000 sq ft',
      capacity: '8-15 people',
      price: 'From KES 75,000/month',
      features: ['Premium furnishing', 'Reception area', 'Private bathroom', 'Kitchenette'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Open Workspaces',
      size: '50-100 sq ft per desk',
      capacity: '1-2 people per desk',
      price: 'From KES 8,000/month',
      features: ['Flexible seating', 'Shared amenities', 'Networking opportunities', 'Hot desking'],
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Business Park"
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
              Business Park
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Premium office spaces designed for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Business Deserves the Best
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                De La Cream Business Park offers a prestigious address in the heart of Nairobi's 
                business district. Our modern facilities are designed to enhance productivity 
                and provide the perfect environment for your business to thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700">Prime location in Nairobi CBD</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700">50+ office spaces available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700">Flexible lease terms</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office interior"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Types Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Office Space Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our variety of office solutions designed to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeTypes.map((office, index) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={office.image}
                    alt={office.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.title}</h3>
                  <div className="text-primary-600 font-semibold text-lg mb-4">{office.price}</div>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Size:</span> {office.size}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Capacity:</span> {office.capacity}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {office.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full btn-primary">
                    Schedule Viewing
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your business efficiently and professionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Take a Virtual Tour
              </h2>
              <p className="text-xl mb-6 text-primary-100">
                Explore our facilities from the comfort of your current office. 
                See why businesses choose De La Cream Business Park.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                  <span>Interactive 360° views</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                  <span>Detailed floor plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                  <span>Amenity showcases</span>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                  Start Virtual Tour
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Building2 className="h-24 w-24 mx-auto mb-6 text-primary-200" />
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-primary-100 mb-6">
                  Contact our leasing team to schedule a personal tour and discuss your requirements.
                </p>
                <button className="btn-secondary">
                  Contact Leasing Team
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Join the community of successful businesses at De La Cream Business Park. 
              Contact us today to find your perfect office space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule a Tour
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BusinessParkPage
