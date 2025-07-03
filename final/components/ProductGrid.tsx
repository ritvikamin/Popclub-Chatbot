import { Card } from "@/components/ui/card";

const products = Array.from({ length: 6 }).map((_, i) => ({
  name: `Product ${i + 1}`,
  desc: 'A new-age D2C brand product. Pay with POPcoins for exclusive benefits.',
}));

export default function ProductGrid() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-darkBg via-[#18181c] to-popBlue/10 border-t border-white/10 mt-[-1px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-popYellow text-center">Explore POPshop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Card key={i} className="flex flex-col items-center p-6 rounded-xl shadow-md border border-popYellow/10 bg-gradient-to-br from-[#23232a] via-[#18181c] to-popBlue/10">
              <div className="w-24 h-24 bg-popYellow/10 border-2 border-popYellow text-popYellow rounded-full flex items-center justify-center mb-4 text-xl font-bold">IMG</div>
              <h3 className="text-lg font-semibold mb-2 text-popBlue">{p.name}</h3>
              <p className="text-darkText/80 text-center">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 