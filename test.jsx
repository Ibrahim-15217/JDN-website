 {/* Featured Event */}
      {featuredEvent && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white text-gray-900 text-sm font-bold rounded-full">
                    <Star size={12} fill="currentColor" />
                    Featured Event
                  </div>
                  <StatusBadge status={featuredEvent.status} />
                </div>
                
                <h2 className="text-xl md:text-4xl font-black text-white mb-4">
                  {featuredEvent.title}
                </h2>
                
                <p className="text-gray-200 text-sm md:text-xl mb-6 line-clamp-2">
                  {featuredEvent.description}
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4 md:gap-6 text-gray-200">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={20} />
                      <span className="text-xs md:text-xl font-medium">{featuredEvent.date} {featuredEvent.month}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={20} />
                      <span className="text-xs md:text-xl font-medium">{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={20} />
                      <span className="text-xs md:text-xl font-medium">{featuredEvent.location}</span>
                    </div>
                  </div>
                  
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-900 rounded-xl font-bold text-sm hover:bg-emerald-500 hover:text-white transition-colors">
                        Register Now
                        <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}