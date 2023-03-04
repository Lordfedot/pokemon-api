import { Link } from "react-router-dom";
import { ListItem, Typography } from '@mui/material';

const PokemonItem = ({ name }) => {
  return (
    <ListItem sx = {{ height: 20}}>
      <Link to={`/${name}`}>
        <Typography sx={{textTransform: "capitalize"}}>{name}</Typography>
      </Link>
    </ListItem>
  );
};

export default PokemonItem;
