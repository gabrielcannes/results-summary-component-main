import Result from "./components/result";
import Summary from "./components/summary";

export default function App() {
  return (
    <div className="w-screen h-screen font-hankenGrotesk lg:flex lg:w-screen lg:h-screen lg:bg-gray-100 lg:pt-40">
      <div className="flex md:flex-col mx-auto"/>
      <Result />
      <Summary />
    </div>
  )
}