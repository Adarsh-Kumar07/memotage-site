import FadeInSection from "./FadeInSection";
import ButtonMotion from "./ButtonMotion";

export default function CTA() {
    return (
      <FadeInSection>
        <section className="bg-white py-20 px-6 text-center pt-20">
          <h2 className="text-3xl font-bold mb-4">Let’s Build a More Mindful Future</h2>
          <p className="mb-8 max-w-xl mx-auto">Whether you’re caring for someone or investing in the future of memory care, we want to hear from you.</p>
          <div className="space-x-4">
            <ButtonMotion>
              Join as Caregiver
            </ButtonMotion>
            <ButtonMotion>
              Doctor Demo
            </ButtonMotion>
            <ButtonMotion>
              Investor Access
            </ButtonMotion>
          </div>
        </section>
      </FadeInSection>
    );
  }
  