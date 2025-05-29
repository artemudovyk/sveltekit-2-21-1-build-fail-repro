Reproduction for the https://github.com/sveltejs/kit/issues/13804

Builds successfully with `houdini` and `houdini-svelte` removed from the dependency list:
```
❯ pnpm install && pnpm build
Lockfile is up to date, resolution step is skipped
Packages: -8
--------

devDependencies:
- houdini 1.5.6
- houdini-svelte 2.1.16

Done in 439ms

> coworking@0.0.1 build /home/artud/dev/tmp/sveltekit-2-21-build-fail-repro
> vite build

vite v5.4.18 building SSR bundle for production...
✓ 173 modules transformed.
vite v5.4.18 building for production...
✓ 138 modules transformed.
.svelte-kit/output/client/_app/version.json                        0.03 kB │ gzip:  0.05 kB
.svelte-kit/output/client/.vite/manifest.json                      3.33 kB │ gzip:  0.64 kB
.svelte-kit/output/client/_app/immutable/chunks/DBs8eK4L.js        0.03 kB │ gzip:  0.05 kB
.svelte-kit/output/client/_app/immutable/entry/start.CgxpT8Vl.js   0.08 kB │ gzip:  0.09 kB
.svelte-kit/output/client/_app/immutable/nodes/3.CaDOmOFE.js       0.17 kB │ gzip:  0.16 kB
.svelte-kit/output/client/_app/immutable/nodes/2.DBxNisQS.js       0.17 kB │ gzip:  0.16 kB
.svelte-kit/output/client/_app/immutable/chunks/DRWlvWKi.js        0.32 kB │ gzip:  0.25 kB
.svelte-kit/output/client/_app/immutable/nodes/0.CfB3Fo_x.js       0.33 kB │ gzip:  0.24 kB
.svelte-kit/output/client/_app/immutable/chunks/BlPRxCOD.js        1.03 kB │ gzip:  0.59 kB
.svelte-kit/output/client/_app/immutable/nodes/1.C4ozvzqr.js       1.05 kB │ gzip:  0.60 kB
.svelte-kit/output/client/_app/immutable/chunks/BHgkbucE.js        2.47 kB │ gzip:  1.36 kB
.svelte-kit/output/client/_app/immutable/entry/app.ME29bX0W.js     7.68 kB │ gzip:  3.63 kB
.svelte-kit/output/client/_app/immutable/chunks/ttgjw3Sz.js       14.61 kB │ gzip:  5.90 kB
.svelte-kit/output/client/_app/immutable/chunks/BRrZ-vA3.js       32.33 kB │ gzip: 12.60 kB
✓ built in 283ms
.svelte-kit/output/server/.vite/manifest.json                         2.31 kB
.svelte-kit/output/server/entries/pages/some-route/_page.svelte.js    0.10 kB
.svelte-kit/output/server/entries/pages/_page.svelte.js               0.11 kB
.svelte-kit/output/server/entries/pages/_layout.svelte.js             0.16 kB
.svelte-kit/output/server/internal.js                                 0.31 kB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js           1.86 kB
.svelte-kit/output/server/chunks/index.js                             4.05 kB
.svelte-kit/output/server/chunks/exports.js                           6.87 kB
.svelte-kit/output/server/chunks/internal.js                         49.97 kB
.svelte-kit/output/server/index.js                                  131.13 kB
✓ built in 1.23s

Run npm run preview to preview your production build locally.

> Using @sveltejs/adapter-auto
  Could not detect a supported production environment. See https://svelte.dev/docs/kit/adapters to learn how to configure your app to run on the platform of your choosing
  ✔ done
```
