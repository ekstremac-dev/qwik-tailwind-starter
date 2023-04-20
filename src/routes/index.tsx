import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/landing/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title:
    "TeamScape - The Ultimate Team Building Solution | Boost Team Productivity",
  meta: [
    {
      name: "description",
      content:
        "TeamScape is a comprehensive web application that helps businesses of all sizes to plan, organize, and manage team-building activities. Our customizable hero and easy-to-use management tools make it simple to create fun and engaging team-building experiences that will help boost productivity, enhance collaboration, and build strong, long-lasting relationships among your team members. Sign up for TeamScape today and take your team-building efforts to the next level.",
    },
  ],
};
