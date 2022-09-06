import { ThemeModeSelect } from "./components/ThemeModeSelect";
import { ColorSelect } from "./components/ColorSelect";
import { useCallback } from "react";

function App() {
  const handleColorChange = useCallback((color: string) => {
    const rgb = color.slice(1).match(/.{1,2}/g) as string[];
    document.documentElement.style.setProperty(
      "--color-primary",
      `${parseInt(rgb[0], 16)} ${parseInt(rgb[1], 16)} ${parseInt(rgb[2], 16)}`
    );
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <div className="mb-6">
        <p className="text-primary">Lol LOL</p>
      </div>

      <ColorSelect onChange={handleColorChange} />
      <ThemeModeSelect />
    </div>
  );
}

export default App;
