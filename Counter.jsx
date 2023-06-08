export default function Counter({ counter }) {
  return (
    <div className="text-6xl font-bold w-36 py-12 pt-5 pb-7 ml-5 mb-5 mt-5  bg-gray-900 text-gray-200 rounded-lg shadow-xl flex flex-col items-center">
      <div className="text-lg flex justify-center">step</div>
      {counter}
    </div>
  );
}