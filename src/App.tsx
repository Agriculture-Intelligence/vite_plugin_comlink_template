import "./App.css";

function App() {
  async function workerCall() {
    try {
      const instance = new ComlinkWorker(new URL("./worker", import.meta.url));
      const data = await instance.workerWithStorageCall();
      console.log(data);
    } catch (error) {
      console.log("Error");
      console.log(error);
    }
  }

  return (
    <>
      <h1>Vite + TSX + Comlink Web Worker</h1>
      <div className="card">
        <button onClick={() => workerCall()}>
          Click here and check console
        </button>
      </div>
    </>
  );
}

export default App;
