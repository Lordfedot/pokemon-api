import { Card, CardContent, Typography, CardMedia,} from "@mui/material";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPokemonByName } from "../Services/Pokemons";

const PokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState();
  const { pokemon } = useParams();

  useEffect(() => {
    const asyncFunction = async () => {
      const info = await fetchPokemonByName(pokemon);
      setPokemonInfo(info);
      return info;
    };
    asyncFunction();
  }, [pokemon]);

  if (!pokemonInfo) {
    return;
  }
  const {
    sprites: { back_default },
    name,
    abilities,
    types,
  } = pokemonInfo;
  return (
    <Card variant="outlined" sx={{ height: "100%", width: "50%"}}>
      <CardContent>
        <Typography sx={{textTransform: "capitalize"}} align="center" variant="h2">{name}</Typography>
        <CardMedia sx={{objectFit: "contain"}} component="img" height="194" src={back_default} alt={name}></CardMedia>
        <Typography  align="center" variant="h5">Ability list</Typography>
        <ul>
          {abilities.map(({ ability: { name } }) => (
            <li key={name}>
              <Typography sx={{textTransform: "capitalize"}} variant="body1">{name}</Typography>
            </li>
          ))}
        </ul>
        <Typography align="center" variant="h5">Types</Typography>
        <ul>
          {types.map(({ type: { name } }) => (
            <li key={name}>
              <Typography sx={{textTransform: "capitalize"}} variant="body1">{name}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PokemonInfo;
