import { MapPin, TrendingUp } from 'lucide-react';

export function Countries() {
  const countries = [
    {
      name: 'United States',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2NTAxNzk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Top Universities', 'OPT/CPT Work Options', 'Research Opportunities'],
      popular: 'Most Popular'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.unsplash.com/photo-1758610702484-b5126b2b50ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2NTExMDEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Quality Education', 'Post-Study Work Visa', 'Cultural Diversity'],
      popular: null
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      image: 'https://images.unsplash.com/photo-1645220127753-e9282320bb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjUxMTAxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['PR Opportunities', 'Affordable Education', 'Safe Environment'],
      popular: 'Trending'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      image: 'https://images.unsplash.com/photo-1640058909005-161a3a2db3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3MlMjBwZW9wbGV8ZW58MXx8fHwxNzY1MTAzNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Work While Study', 'High Living Standards', 'Immigration Friendly'],
      popular: null
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2NTAxNzk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Low/No Tuition Fees', 'Strong Economy', 'Technical Excellence'],
      popular: null
    },
    {
      name: 'Europe (Others)',
      flag: '🇪🇺',
      image: 'https://images.unsplash.com/photo-1758610702484-b5126b2b50ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2NTExMDEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Schengen Benefits', 'Diverse Programs', 'Cultural Experience'],
      popular: null
    }
  ];

  return (
    <section id="countries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
            Destinations We Serve
          </div>
          <h2 className="mb-4">
            Your Gateway to 25+ Countries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in placing students and workers in top destinations worldwide. Explore the opportunities waiting for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {country.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-orange-500 text-white rounded-full flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>{country.popular}</span>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className="text-4xl">{country.flag}</span>
                  <h3 className="text-white">{country.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {country.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  <a href="tel:919592923602">  Learn More</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Countries */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            We also provide services for New Zealand, Ireland, Singapore, UAE, and many more destinations
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
