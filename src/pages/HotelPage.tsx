import { motion } from 'framer-motion'
import { Bed, Wifi, Car, Coffee, Dumbbell, Waves, Star, Calendar } from 'lucide-react'

const HotelPage = () => {
  const roomTypes = [
    {
      title: 'Standard Room',
      size: '25 sqm',
      occupancy: '1-2 guests',
      price: 'From KES 8,500/night',
      features: ['Queen bed', 'City view', 'Free WiFi', 'Mini bar', 'Work desk', 'En-suite bathroom'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Deluxe Room',
      size: '35 sqm',
      occupancy: '1-3 guests',
      price: 'From KES 12,000/night',
      features: ['King bed', 'Garden view', 'Premium amenities', 'Seating area', 'Coffee machine', 'Marble bathroom'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Executive Suite',
      size: '55 sqm',
      occupancy: '1-4 guests',
      price: 'From KES 18,000/night',
      features: ['Separate living room', 'Panoramic views', 'Kitchenette', 'Dining area', 'Premium linens', 'Jacuzzi tub'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Presidential Suite',
      size: '85 sqm',
      occupancy: '1-6 guests',
      price: 'From KES 35,000/night',
      features: ['Master bedroom', 'Private terrace', 'Butler service', 'Full kitchen', 'Meeting room', 'Private elevator'],
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const amenities = [
    {
      icon: Wifi,
      title: 'Free High-Speed WiFi',
      description: 'Complimentary internet access throughout the hotel'
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Secure parking with professional valet service'
    },
    {
      icon: Coffee,
      title: '24/7 Room Service',
      description: 'Round-the-clock dining and refreshment service'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with personal training available'
    },
    {
      icon: Waves,
      title: 'Spa & Wellness',
      description: 'Full-service spa with massage and beauty treatments'
    },
    {
      icon: Star,
      title: 'Concierge Service',
      description: 'Personalized assistance for all your needs'
    }
  ]

  const services = [
    {
      title: 'Business Center',
      description: 'Fully equipped business facilities with meeting rooms and conference spaces',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Spa & Wellness',
      description: 'Rejuvenate with our comprehensive spa treatments and wellness programs',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Event Spaces',
      description: 'Elegant venues for weddings, conferences, and special celebrations',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Hotel Room"
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
              Luxury Hotel Rooms
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Experience comfort and elegance in the heart of Nairobi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hotel Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Home Away From Home
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                De La Cream Hotel offers an oasis of luxury and comfort in the bustling heart 
                of Nairobi. Our elegantly appointed rooms and suites provide the perfect retreat 
                for business travelers and leisure guests alike.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Star className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">5-Star Service</div>
                  <div className="text-sm text-gray-600">Luxury Experience</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Bed className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">50+ Rooms</div>
                  <div className="text-sm text-gray-600">Various Categories</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Prime location in business district</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">24/7 concierge and room service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">World-class amenities and facilities</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hotel lobby"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Accommodation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of beautifully designed rooms and suites
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {room.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Size: {room.size}</span>
                    <span>Occupancy: {room.occupancy}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 btn-primary">
                      Book Now
                    </button>
                    <button className="flex-1 btn-outline">
                      View Details
                    </button>
                  </div>
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
              Hotel Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy world-class facilities and services during your stay
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

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your stay with our premium services and facilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Book Your Stay
              </h2>
              <p className="text-xl mb-6 text-primary-100">
                Experience luxury and comfort at De La Cream Hotel. Book your room today 
                and enjoy our world-class hospitality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-primary-200" />
                  <span>Flexible booking and cancellation policies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-primary-200" />
                  <span>Best rate guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bed className="h-6 w-6 text-primary-200" />
                  <span>Complimentary room upgrades (subject to availability)</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Booking</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Check-in Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Check-out Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Adults</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white">
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Children</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white">
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Room Type</label>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white">
                    <option value="">Select Room Type</option>
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="executive">Executive Suite</option>
                    <option value="presidential">Presidential Suite</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Check Availability
                </button>
              </form>
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
              Experience Luxury Hospitality
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Discover the perfect blend of comfort, elegance, and exceptional service 
              at De La Cream Hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                Call +254 720 206 142
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HotelPage
