const validPalindrome = (s: string) => {
  const normalizedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalizedString === normalizedString.split("").reverse().join("");
};

export default validPalindrome;
