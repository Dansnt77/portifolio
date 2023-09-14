import { z } from "zod";

export const EmailFormSchema = z.object({
    name: z.string().min(3, "O nome é obrigatório!"),
    email: z.string().nonempty("O email é obrigatório!"),
    subject: z.string().min(3, "O assunto é obrigatório!"),
    message: z.string().min(10, "Sua mensagem é obrigatória!")
   
});

export type TEmailFormData = z.infer<typeof EmailFormSchema>;