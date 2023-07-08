export default function isValidCellphone(phone: string): boolean {
  const regexCellphone = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;
  return regexCellphone.test(phone);
}