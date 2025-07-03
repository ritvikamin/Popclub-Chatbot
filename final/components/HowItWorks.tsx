import { CreditCard, ShoppingBag, Gift } from 'lucide-react';

const steps = [
  {
    icon: <CreditCard className="w-10 h-10 text-popYellow mb-2" />,
    title: 'Get the Card',
    desc: 'Apply for the POPCLUB credit card in minutes with zero joining fee.'
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-popYellow mb-2" />,
    title: 'Shop & Earn',
    desc: 'Earn POPcoins on every transaction and enjoy exclusive partner offers.'
  },
  {
    icon: <Gift className="w-10 h-10 text-popYellow mb-2" />,
    title: 'Redeem Rewards',
    desc: 'Use POPcoins to unlock discounts and rewards across 500+ brands.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-darkBg via-[#18181c] to-popBlue/10 border-t border-white/10 mt-[-1px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-popYellow">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center p-6 rounded-xl shadow-md bg-darkCard">
              {step.icon}
              <h3 className="text-xl font-semibold mb-2 text-popBlue">{step.title}</h3>
              <p className="text-darkText/80">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 