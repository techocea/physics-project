import {CONTACT_DETAILS} from "@/lib/data";
import ContactForm from "../../components/ContactForm";

export const Contact = () => {
  return (
    <div className="wrapper">
        <ContactForm/>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {CONTACT_DETAILS.map((contact)=>(
            <div className="box-style max-w-md w-full lg:w-fit flex flex-col justify-start items-start" key={contact.id}>
            <h1 className="capitalize text-lg font-semibold">{contact.label}</h1>
            <div className="flex gap-2 items-center justify-center mt-2">
                <contact.icon size={24}/>
                <p className="text-lg">{contact.contact}</p>
            </div>
            </div>
            ))}
        </div>
    </div>
  );
};
