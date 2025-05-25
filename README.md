
# FavMusicList

A responsive Vue.js app for managing your favorite music albums — with sorting, view switching, and localization support.

---

## Demo

[Live demo](https://fav-music-list.netlify.app/)  

---

## Features

- Add new albums via responsive form (modal on desktop, inline on mobile)
- Mark albums as “best of the best”
- Remove albums from the list
- Sort albums by:
  - Name (A–Z)
  - Date added
  - ID
- Toggle between grid and list views
- Persistent data using `localStorage`
- Language switcher (English / Polish) using `vue-i18n`
- Clean UI with responsive layout and animations

---

## Tech stack

- [Vue.js 2](https://vuejs.org/) + Vue CLI
- TypeScript
- SCSS modules with variables/mixins
- Vue I18n
- CSS Grid / Flexbox
- LocalStorage

---

## Getting started

```bash
npm install
npm run serve


Project structure
src/
  components/        # AlbumForm, AlbumItem, AlbumList, Header, AlbumControls...
  styles/            # Global SCSS (variables, mixins, base, animations)
  locales/           # Language files (pl.ts, en.ts)
  mixins/            # viewportMixin.ts
  lib/               # i18n.ts, config.ts
  App.vue
  main.ts


Notes
Mockup was provided as static PNG — layout and styling were interpreted accordingly

Fonts and colors matched visually using tools like Figma / color pickers

State is fully local (no backend), managed with Vue reactivity + localStorage

Project demonstrates componentization, responsive UI, scoped SCSS and reusability

Author


[Mateusz Łubianka] — [https://m-lubianka.netlify.app/ / https://github.com/mateuszlubianka1993]