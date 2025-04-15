import FadeInSection from "./FadeInSection";

export default function Product() {
    return (
      <FadeInSection>
        <section className="bg-gray-50 py-20 px-6 pt-20">
          <h2 className="text-3xl font-bold text-center mb-8">How MemoTag Works</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <img src="/#" alt="Product UI" className="w-full md:w-1/2 rounded shadow" />
            <ul className="space-y-4 text-lg">
              <li>✅ AI voice and image reminders tailored to the user</li>
              <li>✅ Real-time updates for caregivers & doctors</li>
              <li>✅ Memory journaling + behavioral tracking</li>
            </ul>
            </div>
        </section>
      </FadeInSection>
    );
  }
  