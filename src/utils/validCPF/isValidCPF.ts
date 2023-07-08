export default function isValidCPF(cpf: string): boolean {
  const regexCPF = /^\d{11}$/; 
  return regexCPF.test(cpf);
}