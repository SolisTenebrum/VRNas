import PageTitle from '../../Components/PageTitle/PageTitle';
import Subscribe from '../../Components/Subscribe/Subscribe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Contacts from '../../Components/Contacts/Contacts';
import Map from '../../Components/Map/Map';

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
