/** Pokecard function takes in name, id, type and base_experience
 * Returns html elements to display name, image type and base_experience
*/

function Pokecard({ name, id, type, base_experience }) {

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (<div>
    <h1>{name}</h1>
    <img src={imgUrl} alt={name} />
    <h3>Type:{type} Exp:{base_experience}</h3>
  </div>);
}

export default Pokecard;
