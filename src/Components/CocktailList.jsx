import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

function CocktailList({ open }) {
  if (!open) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  const formattedDrinks = open.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((data) => {
        return <CocktailCard key={data.id} {...data} />;
      })}
    </Wrapper>
  );
}
export default CocktailList;
