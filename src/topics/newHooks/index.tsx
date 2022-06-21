import { useState, useId, useMemo, useEffect } from "react";

export default function TestHooks() {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    console.log("useEffect working now!");
  }, [trigger]);
  console.log("test");

  const id = useId();

  const expensiveOperation = (a: number, b: number) => {
    for (let i = 0; i < 100; i++) {
      a += a + b;
      b += a + b;
    }
    return [a, b];
  };
  let a: number = 1;
  let b: number = 1;
  const memoizedValue = useMemo(() => expensiveOperation(a, b), [a, b]);

  return (
    <>
      <p id={id}>testHooks</p>
      <hr />
      <span>{memoizedValue}</span>
      <hr />
      <button onClick={() => setTrigger(!trigger)}>run useEffect</button>
    </>
  );
}
