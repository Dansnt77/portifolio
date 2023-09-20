import { useState } from "react";
import emailjs from "emailjs-com";
import sendEmail from "../../assets/icons8-enviar-100.png";
import Image from "next/image";
import chave from "../../assets/{.png";
import chaveInvert from "../../assets/{.svg";
import { ClipLoader } from "react-spinners";
import { EmailFormSchema } from "./formEmailSchema";
import { Input, TextArea } from "./Input";

interface FormData {
   name: string;
   email: string;
   subject: string;
   message: string;
}

export const Form = () => {
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      subject: "",
      message: "",
   });
   const [errors, setErrors] = useState<Partial<FormData>>({});
   const [successMessage, setSuccessMessage] = useState<string | null>(null);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);

   const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const validateForm = () => {
      try {
         EmailFormSchema.parse(formData);
         return {};
      } catch (error: any) {
         return error.formErrors.fieldErrors;
      }
   };

   const handleSubmit = async () => {
      setLoading(true);
      setSuccessMessage(null);
      setErrorMessage(null);

      const validationErrors = validateForm();
      setErrors(validationErrors);

      try {
         const serviceID = "service_xx694qd"; // Replace with your email service ID
         const templateID = "template_fmvxswo"; // Replace with your email template ID
         const userID = "QZWJ8eQLtbXSI4dHO";

         const emailParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
         };
         await emailjs.send(serviceID, templateID, emailParams, userID);
         setSuccessMessage("E-mail enviado com sucesso!");
      } catch (error) {
         setErrorMessage("Erro ao enviar o e-mail.");
         console.error("Erro ao enviar o e-mail:", error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <section className="mt-6 w-full flex flex-col">
         <h2 className="font-bold text-xl text-white">
            ME CONTATE<span className="font-bold text-xl text-[#8900F5]">;</span>
         </h2>
         <div className="mt-6 w-full h-full flex flex-col gap">
            <Image className="" src={chave} alt="chave" />
            <form id="email" className="flex w-full flex-col p-2">
               <Input
                  label="Nome:"
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
               />
               <Input
                  label="Email:"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
               />
               <Input
                  label="Assunto:"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={loading}
               />
               <TextArea
                  label="Mensagem:"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
               />
               {loading ? ( // If loading, show the loading spinner
                  <div className="flex justify-end mt-5">
                     <ClipLoader color="#8900F5" />
                  </div>
               ) : (
                  // If not loading, show the "Enviar" button
                  <button type="button" className="flex justify-end" onClick={handleSubmit}>
                     <Image src={sendEmail} className="w-14 h-14" alt="Enviar E-mail" />
                  </button>
               )}
               {successMessage && <div className="text-green-500">{successMessage}</div>}
               {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            </form>
            <div className="mt-3 mb-3 w-full flex justify-end">
               <Image src={chaveInvert} alt="chave" />
            </div>
         </div>
      </section>
   );
};
