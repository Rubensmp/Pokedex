export default function formatStats(type: string | undefined){
  switch (type) {
    case "hp":
        return 'HP';
    case "attack":
        return 'ATK';
    case "defense":
        return 'DEF';
    case "special-attack":
        return 'SATK';
    case "special-defense":
      return 'SDEF';
    case "speed":
      return 'SPD';
    default:
        return 'TBD';
  }
}
