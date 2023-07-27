import { z } from "zod";

export const schema = z.object({
  email: z.string().nonempty("Digite o seu email").email("Deve ser um e-mail"),
  password: z.string().nonempty("A senha é obrigatória"),
});

export type TLoginData = z.infer<typeof schema>;
