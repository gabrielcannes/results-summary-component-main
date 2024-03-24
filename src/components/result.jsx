export default function Result() {
  return (
    <div className="bg-gradient-to-b  from-indigo-600 to-indigo-800 h-fit w-screen lg:w-1/3 lg:mt-8 rounded-3xl flex flex-col p-8">
      <h1 className="text-lg font-semibold text-purple-200 mx-auto">
        Your Result
      </h1>
      <div className="flex flex-col bg-gradient-to-b from-indigo-800 to-indigo-700 w-fit mx-auto my-4 rounded-full px-10 py-8">
        <span className="text-5xl font-bold mx-auto text-white">76</span>
        <span className="mx-auto text-purple-200">of 100</span>
      </div>
      <div className="flex flex-col ">
        <span className="text-white text-2xl font-semibold mx-auto">Great</span>
        <p className="text-purple-200 mx-10 mt-4 text-center lg:pb-24">You scored higher then 65% of the people who have taken these tests.</p>
      </div>
    </div>
  );
}
