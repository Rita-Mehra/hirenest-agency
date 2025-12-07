import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'MS Student, USA',
      image: 'https://images.unsplash.com/photo-1758610702484-b5126b2b50ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2NTExMDEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'HireNest made my dream of studying in the USA a reality. Their team guided me through every step, from university selection to visa approval. I couldn\'t have done it without them!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer, Canada',
      image: 'https://images.unsplash.com/photo-1640058909005-161a3a2db3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3MlMjBwZW9wbGV8ZW58MXx8fHwxNzY1MTAzNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'The best consultancy for work visa processing! They helped me secure a job in Canada and handled all the paperwork professionally. Now I\'m on my PR pathway.',
      rating: 5
    },
    {
      name: 'Anita Patel',
      role: 'MBA Graduate, UK',
      image: 'https://images.unsplash.com/photo-1758610702484-b5126b2b50ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2NTExMDEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Excellent service and genuine support throughout my MBA application process. The counselors are very knowledgeable and always available to help.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Construction Worker, Australia',
      image: 'https://images.unsplash.com/photo-1645220127753-e9282320bb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjUxMTAxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'As a skilled worker, I was worried about the visa process, but HireNest took care of everything. I\'m now working in Australia with great opportunities.',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      role: 'PhD Student, Germany',
      image: 'https://images.unsplash.com/photo-1758610702484-b5126b2b50ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2NTExMDEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Professional, transparent, and reliable. They helped me get admission to a top German university with full funding. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mohammad Ali',
      role: 'Healthcare Professional, UAE',
      image: 'https://images.unsplash.com/photo-1640058909005-161a3a2db3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3MlMjBwZW9wbGV8ZW58MXx8fHwxNzY1MTAzNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'HireNest helped me relocate to Dubai for a healthcare position. Their expertise in work permits and relocation made the transition smooth.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white text-blue-600 rounded-full mb-4">
            Success Stories
          </div>
          <h2 className="mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied students and professionals who achieved their international dreams with HireNest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <Quote className="w-10 h-10 text-blue-200 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 mb-6">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-blue-600 mb-2">15,000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Visa Success</div>
          </div>
          <div>
            <div className="text-blue-600 mb-2">12+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
