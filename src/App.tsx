/* eslint-disable @typescript-eslint/no-explicit-any */
function App() {

  const handleChangeDarkMode = () => {
    const e = document.getElementsByTagName("html");
    (e.item(0) as any).classList.toggle('dark');
  }
  return (
    <>
      <div className="grid grid-cols-6 my-4 md:grid-cols-3">
        <button className="bg-red-300 py-1 px-6 rounded-md text-white visited:text-black">Hover</button>
      </div>
      <div className="grid grid-cols-6 my-4 lg:grid-cols-1">
        <button className="bg-red-300 py-1 px-6 rounded-md text-white visited:text-black">Hover</button>
      </div>
      <div className="grid grid-cols-6 my-4">
        <button className="bg-red-300 py-1 px-6 rounded-md text-white visited:text-black">Hover</button>
      </div>
      <p className="text-left sm:text-center dark:text-red-400">AAAA</p>


      <button className="bg-red-300 text-red-950 dark:text-yellow-100 p-2 rounded-3xl" onClick={handleChangeDarkMode}>Dark Mode</button>

      <div className="container bg-gray-700"><p>aaa</p></div>
      <div className="columns-3 text-center mt-4">
        <p className="bg-red-300 w-full h-20 content-center rounded-lg">AAAA</p>
        <p className="bg-red-300 w-full h-20 content-center rounded-lg">BBBB</p>
        <p className="bg-red-300 w-full h-20 content-center rounded-lg">BBBB</p>
      </div>

      <div className="flex place-content-center bg-slate-600">
        <p className="bg-red-200 self-center p-2 m-2">AAAA</p>
        <div>
          <p className="bg-yellow-100 p-2 m-2">BBBB</p>
          <p className="bg-yellow-100 p-2 m-2">BBBB</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="bg-slate-400 h-20 text-center content-center m-2 p-2">AAA</div>
        <div className="bg-slate-400 h-20 text-center content-center m-2 p-2">BBB</div>
        <div className="bg-slate-400 h-20 text-center content-center m-2 p-2">CCC</div>
        <div className="bg-slate-400 h-20 text-center content-center m-2 p-2">DDD</div>
        <div className="bg-slate-400 h-20 text-center content-center m-2 p-2">EEE</div>
        <div className="bg-slate-400 h-20 text-center content-center m-2 p-2">FFF</div>
      </div>

      <div className="flex flex-row h-20">
        <div className="bg-black basis-1/2 hover:basis-1/4">aa</div>
        <div className="bg-red-200 basis-1/4 hover:basis-1/2">a</div>
        <div className="bg-yellow-100 basis-1/4">a</div>
      </div>
      
      <div className="flex h-40 flex-wrap">
        <div className="bg-black w-40">aa</div>
        <div className="bg-red-200 w-40">a</div>
        <div className="bg-yellow-100 w-40">a</div>
        <div className="bg-yellow-100 w-40">a</div>
        <div className="bg-yellow-100 w-40">a</div>
        <div className="bg-yellow-100 w-40">a</div>
        <div className="bg-yellow-100 w-40">a</div>
        <div className="bg-yellow-100 w-40">a</div>
      </div>

      <div className="bg-slate-200 p-4">
        <div className="bg-slate-600 shadow-red-700 w-40 shadow-2xl h-40 rounded-3xl m-4 p-4"></div>

      </div>


    </>

  )
}

export default App
