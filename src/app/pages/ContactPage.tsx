import { ContactHero } from '../components/ContactHero';
import { ContactInfo } from '../components/ContactInfo';
import { ContactForm } from '../components/ContactForm';
import { ContactMap } from '../components/ContactMap';
import { ContactFAQ } from '../components/ContactFAQ';

export function ContactPage() {
  return (
    <div className="pt-20">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactFAQ />
    </div>
  );
}
