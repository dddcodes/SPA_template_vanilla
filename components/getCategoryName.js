export default (category) => {
  switch (category) {
    case "estres":
      return "Estrés";
      break;

    case "ansiedad":
      return "Ansiedad";
      break;

    case "desarrollo":
      return "Desarrollo Personal";
      break;

    case "empatia":
      return "Empatía";
      break;

    case "autoestima":
      return "Autoestima";
      break;

    default:
      return "Categoría indefinida";
      break;
  }
};
