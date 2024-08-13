import PageTitle from '../AboutUs/PageTitle/PageTitle';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Map from './Map/Map';

const ContactUsPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant="contact-us-page" />
      <Contacts />
      <ContactForm />
      <Map />
      <Subscribe />
    </>
  );
};

export default ContactUsPage;
