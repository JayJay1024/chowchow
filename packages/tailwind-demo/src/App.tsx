import { ThemeModeSelect } from "./components/ThemeModeSelect";
import { ColorSelect } from "./components/ColorSelect";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <div className="mb-6">
        <p className="text-primary">Lol LOL</p>
      </div>

      <ColorSelect />
      <ThemeModeSelect />
    </div>
  );
}

export default App;
