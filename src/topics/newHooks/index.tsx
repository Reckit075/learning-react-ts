import { useId } from "react";

export default function TestHooks() {
  const id = useId();
  return <p id={id}>testHooks</p>;
}
