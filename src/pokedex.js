import Pokecard from "./pokecard.js";


/** Pokedex function shows a list of Pokecards */
function Pokedex({ pokecards }) {
  return (
    <div>
      <ul>
        {pokecards.map(
          c =>
            <li>
              <Pokecard
                name={c.name}
                type={c.type}
                id={c.id}
                base_experience={c.base_experience}
              />
            </li>
        )}
      </ul>
    </div>);
}

export default Pokedex;
