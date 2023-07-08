export default function isValidCPF(cpf: string): boolean {
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regexCPF.test(cpf);
}