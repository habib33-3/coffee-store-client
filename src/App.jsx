import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

const App = () => {
  const coffees = useLoaderData();

  return (
    <div className="m-20">
      <h1 className="text-5xl text-center">Coffee</h1>

      <div className="md:grid grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
