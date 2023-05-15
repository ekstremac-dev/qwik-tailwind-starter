import { component$, Slot } from "@builder.io/qwik";

export interface ButtonProps {
  size?: "sm" | "xl" | "2xl";
}
export const Button = component$<ButtonProps>(({ size = "base" }) => {
  return (
    <button
      class={[
        "border-solid border-2 border-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-sm text-xl text-2xl",
        { [`text-${size}`]: true },
      ]}
    >
      <Slot></Slot>
    </button>
  );
});
