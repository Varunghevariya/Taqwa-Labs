import React from 'react';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#2a2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
        <div className="flex overflow-x-auto space-x-8 p-4">
          {/* Testimonial Card 1 */}
          <div className="flex-none w-80 bg-[#373643] p-6 rounded-lg shadow-lg">
            <p className="text-white/80 mb-4">"This is an amazing product! Highly recommend it to everyone."</p>
            <p className="font-bold text-white">Client Name 1</p>
            <p className="text-sm text-white/70">Company 1</p>
          </div>
          {/* Testimonial Card 2 */}
          <div className="flex-none w-80 bg-[#373643] p-6 rounded-lg shadow-lg">
            <p className="text-white/80 mb-4">"The team was incredibly helpful and delivered beyond expectations."</p>
            <p className="font-bold text-white">Client Name 2</p>
            <p className="text-sm text-white/70">Company 2</p>
          </div>
          {/* Testimonial Card 3 */}
          <div className="flex-none w-80 bg-[#373643] p-6 rounded-lg shadow-lg">
            <p className="text-white/80 mb-4">"A truly transformative experience. Our business has grown significantly."</p>
            <p className="font-bold text-white">Client Name 3</p>
            <p className="text-sm text-white/70">Company 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}