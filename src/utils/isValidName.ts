export default function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z]{3,}.*$/;
  return nameRegex.test(name);
}
