# Law firm website

Static marketing site built with React, Vite and Tailwind CSS, prerendered with
[vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) so every page ships as its
own HTML file (good for SEO and link previews). Deployed to Vercel.

## Develop

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:5173
npm run build                # prerenders every route into dist/
npm run preview              # serve dist/ locally
```

## Where things live

- `src/content/*.json`: all editable text (see `CONTENT-GUIDE.md`, added later).
- `src/components/`: layout, UI primitives, page sections, forms, SEO helpers.
- `src/pages/`: one component per page type.
- `src/routes.jsx`: route table; dynamic pages are generated from the content files.
- `vercel.json`: clean URLs, caching and security headers.
