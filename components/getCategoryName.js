export default (category) => {
  switch (category) {
    case "estres":
      return "Estrés";
      break;

    case "ansiedad":
      return "Ansiedad";
      break;

    default:
      return "Categoría indefinida";
      break;
  }
};
