import { useState } from "react";
import Button from "./components/Button/";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

/**
 * truthy
 * falsy
 * @returns
 */

function App() {
  const [data, setData] = useState(["Goku", "Tanjiro", "Chanchito Feliz"]);
  /* const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);
  const list: string[] = ["Goku", "Tanjiro", "Chanchito Feliz"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  ); */
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={delMinion}>
        Eliminar
      </Button>
      <List data={data} />
    </Card>
  );
}

export default App;
