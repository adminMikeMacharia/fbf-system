# Founders Kitchen

Founders Kitchen — where ideas become ventures. The FBH Holdings brand vision, communications, and partnerships hub.

## Architecture

**Stack:** React + Vite + TypeScript + Tailwind CSS + Wouter

**Preview path:** `/founders-kitchen/`

---

## PWA Architecture

Founders Kitchen is a fully installable Progressive Web App.

### Manifest (`public/manifest.json`)
- `name`: Founders Kitchen
- `short_name`: FK
- `start_url`: `/founders-kitchen/`
- `scope`: `/founders-kitchen/`
- `display`: standalone
- `theme_color`: `#E8394A`
- `background_color`: `#faf9f7`
- Icons: 192x192 and 512x512 PNG (maskable)

### Service Worker (`public/sw.js`)
- **Strategy:** Stale-while-revalidate (cache-first, background network refresh)
- **API routes excluded:** Any request to `/api/*` is passed through without caching
- **Cross-origin excluded:** Only same-origin requests are cached
- **Offline:** Cached pages are served offline; network failures fall back to cache
- **Cache name:** `founders-kitchen-v1` — increment on breaking changes

### iOS Support
- `apple-mobile-web-app-capable` meta tag enables fullscreen on iOS
- `apple-touch-icon` set to `icon-192.png`
- `apple-mobile-web-app-status-bar-style`: black-translucent
- `apple-mobile-web-app-title`: FK

### Install Prompt
`src/components/InstallPrompt.tsx` listens for `beforeinstallprompt` and shows a branded banner. Dismissal is persisted in `localStorage`.

---

## Mobile-First Design Standard

All layouts use **Tailwind CSS mobile-first breakpoints**:
- Base styles target mobile (320px+)
- `sm:` — tablet (640px+)
- `md:` — small desktop (768px+)
- `lg:` — large desktop (1024px+)

Navigation uses an icon-only mobile layout, expanding to full labels on `sm:`. Content grids use `grid-cols-1` base with `md:grid-cols-2` and `lg:grid-cols-3` scale-up.

---

## Icon Generation

Icons were generated using ImageMagick from the brand color (`#E8394A`):

```bash
magick -size 192x192 xc:'#E8394A' \
  -fill white -draw "roundrectangle 0,0 191,191 38,38" \
  public/icon-192.png

magick -size 512x512 xc:'#E8394A' \
  -fill white -draw "roundrectangle 0,0 511,511 102,102" \
  public/icon-512.png
```

To regenerate from SVG when `favicon.svg` is more detailed, use:
```bash
magick public/favicon.svg -resize 192x192 public/icon-192.png
magick public/favicon.svg -resize 512x512 public/icon-512.png
```

---

## Testing PWA in Chrome DevTools

1. Open the site in Chrome
2. Open DevTools → **Application** tab
3. Check **Manifest** — verify name, icons, start_url, display mode
4. Check **Service Workers** — confirm registration and status
5. Check **Cache Storage** — confirm assets are cached after first load
6. Use **Lighthouse** → PWA audit for a full score report
7. To test offline: DevTools → Network tab → throttle to "Offline", reload

---

## Caching Strategy

| Request type | Strategy |
|---|---|
| Static assets (JS, CSS, images) | Cache-first, network fallback |
| Navigation (HTML pages) | Cache-first, network fallback |
| API calls (`/api/*`) | Network-only (no caching) |
| Cross-origin requests | Pass-through (not cached) |
