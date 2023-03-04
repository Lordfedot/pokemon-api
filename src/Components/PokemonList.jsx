import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { List, Container, Box, Pagination } from "@mui/material";

import { fetchPokemons } from "../Services/Pokemons";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  useEffect(() => {
    const asyncFunction = async () => {
      const { results, count } = await fetchPokemons(page);
      setPokemons(results);
      const totalPage = count / 12;
      setPageQty(parseInt(totalPage.toFixed()) - 1);
      return results;
    };
    asyncFunction();
  }, [page]);

  return (
    <Container>
      <h1>Pokemon List</h1>
      <Box display="flex" gap="10%">
        <Box display="flex" alignItems="center" height="25%" width="50%" flexDirection="column">
          <List
            sx={{
              height: "25%",
              display: "grid",
              gap: 2,
              gridTemplateRows: "repeat(4, 1fr)",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {pokemons.map(({ name }) => (
              <PokemonItem key={name} name={name} />
            ))}
          </List>
          <Pagination size="large" count={pageQty} onChange={(_,num)=> setPage(num)} />
        </Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default PokemonList;
