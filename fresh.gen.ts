// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $Buscador from "./islands/Buscador.tsx";
import * as $Grid from "./islands/Grid.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Buscador.tsx": $Buscador,
    "./islands/Grid.tsx": $Grid,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
