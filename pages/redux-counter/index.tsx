import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/lib/redux/store";

export default function ReduxCounter() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl text-blue-500">Client Count: {count}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </main>
  );
}
