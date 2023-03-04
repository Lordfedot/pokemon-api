const toCapitalized = (word) => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
};

export default toCapitalized;
