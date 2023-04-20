import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container mx-auto">
      <h1 class="text-5xl font-bold">
        Welcome to <span class="text-cyan-700">Qwik Starter</span>!
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Starter!",
  meta: [
    {
      name: "description",
      content: "Qwik starter app with Tailwind CSS.",
    },
  ],
};
