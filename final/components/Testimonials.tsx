import { Card } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amit S.',
    text: 'POPCLUB made my shopping so much more rewarding! Love the POPcoins.',
  },
  {
    name: 'Priya K.',
    text: 'The credit card is a game changer. Zero joining fee and great rewards!',
  },
  {
    name: 'Rahul D.',
    text: 'I use POPcoins at all my favorite brands. Super easy and fun.',
  },
  {
    name: 'Sneha M.',
    text: 'The app is smooth and the offers are amazing. Highly recommend!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-darkBg via-[#18181c] to-popBlue/10 border-t border-white/10 mt-[-1px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-popYellow">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex-1 p-6 flex flex-col items-center bg-darkCard rounded-xl shadow-md">
              <Quote className="w-8 h-8 text-popYellow mb-2" />
              <p className="text-lg mb-4 text-darkText/90">“{t.text}”</p>
              <span className="font-semibold text-popBlue">{t.name}</span>
            </Card>
          ))}
        </div>
        {/* Carousel controls can be added here if needed */}
      </div>
    </section>
  );
} 