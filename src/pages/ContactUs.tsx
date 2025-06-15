import ContactForm from "../components/Form";
import PageTitle from "../components/PageTitle";

const ContactUs = () => {
  return (
    <>
    <PageTitle
      topbutton="Contact Us"
      title1="Let’s Chat,"
      highlight1="Reach"
      title2="Out to Us"
    />

    <ContactForm/>
    </>
  )
};

export default ContactUs;