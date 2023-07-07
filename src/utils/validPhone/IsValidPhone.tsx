export default function isValidPhone(phone: string): boolean {
  const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
  return regexTelefone.test(phone);
}
