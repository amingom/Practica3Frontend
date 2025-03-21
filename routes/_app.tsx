import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Buscador de Películas</title>
        <link rel="stylesheet" href="/styles.css" />
        <script src="https://kit.fontawesome.com/5e014df006.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
