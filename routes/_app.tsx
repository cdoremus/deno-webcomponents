import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deno Fresh Web Components</title>
        <link rel="stylesheet" href="/styles.css" />
        <script src="/wc/wc.esm.js" type="module"></script>
        {
          /* <script src="/wc1/HelloWC.js" type="module"></script>
        <script src="/wc1/CounterWC.js" type="module"></script> */
        }
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
