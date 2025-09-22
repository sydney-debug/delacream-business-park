import { motion } from 'framer-motion'
import { Utensils, Clock, Star, Award, ChefHat, Wine } from 'lucide-react'

const RestaurantPage = () => {
  const menuHighlights = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Truffle Arancini', description: 'Crispy risotto balls with black truffle and parmesan', price: 'KES 1,200' },
        { name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower purée and pancetta', price: 'KES 1,800' },
        { name: 'Beef Carpaccio', description: 'Thinly sliced beef tenderloin with rocket and aged parmesan', price: 'KES 1,500' }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Wagyu Beef Tenderloin', description: 'Grilled wagyu with roasted vegetables and red wine jus', price: 'KES 4,500' },
        { name: 'Pan-Seared Salmon', description: 'Atlantic salmon with quinoa salad and lemon herb sauce', price: 'KES 2,800' },
        { name: 'Lobster Thermidor', description: 'Fresh lobster in creamy cognac sauce with gruyère cheese', price: 'KES 3,800' }
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Chocolate Soufflé', description: 'Dark chocolate soufflé with vanilla bean ice cream', price: 'KES 900' },
        { name: 'Crème Brûlée', description: 'Classic vanilla custard with caramelized sugar', price: 'KES 750' },
        { name: 'Tiramisu', description: 'Traditional Italian dessert with espresso and mascarpone', price: 'KES 850' }
      ]
    }
  ]

  const features = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'International culinary team with Michelin-star experience'
    },
    {
      icon: Wine,
      title: 'Premium Wine Selection',
      description: 'Curated collection of fine wines from around the world'
    },
    {
      icon: Award,
      title: 'Award-Winning Cuisine',
      description: 'Recognized for excellence in fine dining and service'
    },
    {
      icon: Utensils,
      title: 'Fresh Ingredients',
      description: 'Locally sourced, organic ingredients prepared daily'
    }
  ]

  const ambiance = [
    {
      title: 'Main Dining Room',
      description: 'Elegant atmosphere with panoramic city views',
      capacity: '80 guests',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Private Dining',
      description: 'Intimate setting for special occasions and business meetings',
      capacity: '12-20 guests',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Outdoor Terrace',
      description: 'Al fresco dining with garden views and fresh air',
      capacity: '40 guests',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Restaurant Interior"
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
              Fine Dining Restaurant
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Exquisite cuisine meets elegant ambiance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Culinary Journey Awaits
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At De La Cream Restaurant, we believe dining is an art form. Our award-winning 
                chefs craft each dish with passion, using only the finest ingredients to create 
                unforgettable culinary experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Star className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">5-Star Rating</div>
                  <div className="text-sm text-gray-600">Customer Reviews</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Award className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Award Winner</div>
                  <div className="text-sm text-gray-600">Best Restaurant 2024</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Open Daily: 6:00 AM - 11:00 PM</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Gourmet dish"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Menu Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our signature dishes crafted by world-class chefs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuHighlights.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <span className="text-primary-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that attention to detail and passion for excellence makes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dining Spaces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect setting for your dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ambiance.map((space, index) => (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{space.title}</h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Capacity: {space.capacity}</span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Make a Reservation
              </h2>
              <p className="text-xl mb-6 text-primary-100">
                Secure your table at De La Cream Restaurant and prepare for an 
                unforgettable dining experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary-200" />
                  <span>Open daily from 6:00 AM to 11:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="h-6 w-6 text-primary-200" />
                  <span>Breakfast, lunch, and dinner service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-primary-200" />
                  <span>Special occasion packages available</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Reservation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white"
                  />
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white"
                  />
                </div>
                <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white">
                  <option value="">Number of Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
                <textarea
                  placeholder="Special Requests (Optional)"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white resize-none"
                ></textarea>
                <button type="submit" className="w-full bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Make Reservation
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
              Experience Culinary Excellence
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Join us for an extraordinary dining experience that will delight your senses 
              and create lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Make Reservation
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

export default RestaurantPage
