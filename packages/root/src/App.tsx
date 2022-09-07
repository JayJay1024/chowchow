function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-2">
        <a target="_self" href="/">
          Home
        </a>
        <a target="_self" href="./block-sync">
          Block Sync
        </a>
        <a target="_self" href="./tailwind-demo">
          Tailwind Demo
        </a>
      </div>
    </div>
  );
}

export default App;
