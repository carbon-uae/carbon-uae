import type { MetadataRoute } from "next";
import { site } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Carbon Printing Press",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ef",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
