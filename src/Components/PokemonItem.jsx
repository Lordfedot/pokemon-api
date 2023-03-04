import { Link } from "react-router-dom";
import { ListItem } from '@mui/material';
import toCapitalized from "../Helpers/ToCapitalizied";
const PokemonItem = ({ name }) => {
  return (
    <ListItem sx = {{ height: 20}}>
      <Link to={`/${name}`}>
        <p>{toCapitalized(name)}</p>
      </Link>
    </ListItem>
  );
};

export default PokemonItem;
