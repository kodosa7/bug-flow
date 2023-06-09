export default function Counter({ counter }) {
  return (
    <div className="text-6xl font-bold w-32 h-32 p-6 ml-5 mt-5 bg-gray-900 text-gray-200 rounded-lg shadow-xl flex flex-col items-center">
      <div className="text-lg flex justify-center leading-none">step</div>
      {counter}
    </div>
  );
}