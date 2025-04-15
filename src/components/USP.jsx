import FadeInSection from "./FadeInSection";

export default function USP() {
    const features = [
      { title: "AI-Personalized", desc: "Learns user behavior and adapts memory prompts." },
      { title: "Secure & Private", desc: "Built with HIPAA-compliant cloud and encryption." },
      { title: "Care Team Sync", desc: "Share progress with doctors and family in real time." },
    ];
  
    return (
      <FadeInSection>
        <section className="py-20 bg-white px-6 pt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why MemoTag is Different</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((f, i) => (
            <div key={i} className="max-w-sm bg-indigo-50 p-6 rounded-lg shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>
      
    );
  }



  