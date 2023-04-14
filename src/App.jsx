import { Card } from "./components/Card";
import { Header } from "./components/Header";
import data from "./data";

function App() {
  const cards = data.map((item) => (
    <>
      <Card key={item.id} item={item} />
      <hr className="card__line" />
    </>
  ));

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;
