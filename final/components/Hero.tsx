import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center bg-gradient-to-br from-darkBg via-[#18181c] to-popBlue/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-64 h-64 bg-popYellow/10 rounded-full blur-3xl absolute -top-20 -left-20" />
        <div className="w-40 h-40 bg-popBlue/10 rounded-full blur-2xl absolute bottom-0 right-0" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-popYellow">
          Say hello to the <span className="text-white">G.O.A.T.</span> of all credit cards
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Get ₹5k worth joining benefits, 10% on every ₹100 spent online, and zero joining fee.
        </p>
        <Button size="lg" className="bg-popYellow text-darkBg hover:bg-popBlue hover:text-popYellow transition font-bold shadow-lg">Apply Now</Button>
        <div className="mt-12 flex justify-center">
          <img src="/coin.png" alt="POPcoin" className="max-w-xs w-56 h-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
} 