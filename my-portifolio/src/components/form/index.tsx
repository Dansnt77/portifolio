import { useState } from "react";
import emailjs from "emailjs-com";
import sendEmail from "../../assets/icons8-enviar-100.png";
import Image from "next/image";
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

      const validationErrors = validateForm();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
         setLoading(false);
         return;
      }

      try {
         const serviceID = "service_xx694qd"; // Replace with your email service ID
         const templateID = "template_fmvxswo"; // Replace with your email template ID
         const userID = "QZWJ8eQLtbXSI4dHO"

         const emailParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
         };
         await emailjs.send(serviceID, templateID, emailParams, userID);
         console.log("E-mail enviado com sucesso!");
      } catch (error) {
         console.error("Erro ao enviar o e-mail:", error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <form id="email" className="flex w-full flex-col">
         <Input
            label="Nome"
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
         />
         <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
         />
         <Input
            label="Assunto"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={loading}
         />
         <TextArea
            label="Mensagem"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
         />
         <button type="button" className="flex justify-end" onClick={handleSubmit} disabled={loading}>
            <Image src={sendEmail} className="w-14 h-14" alt="Enviar E-mail" />
         </button>
      </form>
   );
};
