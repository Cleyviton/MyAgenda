import { z } from "zod";

const isValidPhoneNumber = (value: string) => {
  // Verifica se o valor é uma string
  if (typeof value !== "string") return false;

  // Remove qualquer espaço ou caracteres especiais do número de telefone
  const cleanedPhoneNumber = value.replace(/\s|\(|\)|\-/g, "");

  // Verifica se o número de telefone consiste apenas de dígitos e tem no máximo 20 caracteres
  return /^\d{1,20}$/.test(cleanedPhoneNumber);
};

export const schema = z.object({
  name: z.string().max(55).nonempty("Informe o seu nome para o cadastro"),
  email: z
    .string()
    .nonempty("Cadastre o seu email")
    .email("Deve ser um e-mail"),
  phone: z
    .string()
    .max(20)
    .nonempty("Digite o seu número de telefone")
    .refine(isValidPhoneNumber, {
      message: "Número de telefone inválido",
    }),
});
