import { useAtom } from "jotai";
import { counterAtom } from "@/lib/store";

export default function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>

      <div className="flex gap-2">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          -
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
