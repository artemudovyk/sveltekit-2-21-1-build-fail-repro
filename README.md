Reproduction for the https://github.com/sveltejs/kit/issues/13804

If we remove `houdini` and `houdini-svelte` dependencies, the application builds successfully. Check the [houdini-removed](https://github.com/artemudovyk/sveltekit-2-21-1-build-fail-repro/tree/houdini-removed) branch.

Terminal output:

```
❯ pnpm install && pnpm build
Lockfile is up to date, resolution step is skipped
Already up to date
Done in 474ms

> coworking@0.0.1 build /home/artud/dev/tmp/sveltekit-2-21-build-fail-repro
> vite build

vite v5.4.18 building SSR bundle for production...
🎩 Generating runtime...
📃 Unchanged: 1
✓ 180 modules transformed.
Generated an empty chunk: "entries/pages/_page".
Generated an empty chunk: "entries/pages/some-route/_page".

node:internal/event_target:1090
  process.nextTick(() => { throw err; });
                           ^
Error: ENOENT: no such file or directory, open 'src/routes/+layout.js'
    at Object.readFileSync (node:fs:441:20)
    at read (file:///home/artud/dev/tmp/sveltekit-2-21-build-fail-repro/node_modules/.pnpm/@sveltejs+kit@2.21.1_@sveltejs+vite-plugin-svelte@4.0.4_svelte@5.33.0_vite@5.4.18_@types+node_75wsvqahzuajzrfyhis2yilnki/node_modules/@sveltejs/kit/src/utils/filesystem.js:199:12)
    at get_page_options (file:///home/artud/dev/tmp/sveltekit-2-21-build-fail-repro/node_modules/.pnpm/@sveltejs+kit@2.21.1_@sveltejs+vite-plugin-svelte@4.0.4_svelte@5.33.0_vite@5.4.18_@types+node_75wsvqahzuajzrfyhis2yilnki/node_modules/@sveltejs/kit/src/exports/vite/static_analysis/index.js:217:19)
    at async build_server_nodes (file:///home/artud/dev/tmp/sveltekit-2-21-build-fail-repro/node_modules/.pnpm/@sveltejs+kit@2.21.1_@sveltejs+vite-plugin-svelte@4.0.4_svelte@5.33.0_vite@5.4.18_@types+node_75wsvqahzuajzrfyhis2yilnki/node_modules/@sveltejs/kit/src/exports/vite/build/build_server.js:117:25)
    at async analyse (file:///home/artud/dev/tmp/sveltekit-2-21-build-fail-repro/node_modules/.pnpm/@sveltejs+kit@2.21.1_@sveltejs+vite-plugin-svelte@4.0.4_svelte@5.33.0_vite@5.4.18_@types+node_75wsvqahzuajzrfyhis2yilnki/node_modules/@sveltejs/kit/src/core/postbuild/analyse.js:69:2)
    at async MessagePort.<anonymous> (file:///home/artud/dev/tmp/sveltekit-2-21-build-fail-repro/node_modules/.pnpm/@sveltejs+kit@2.21.1_@sveltejs+vite-plugin-svelte@4.0.4_svelte@5.33.0_vite@5.4.18_@types+node_75wsvqahzuajzrfyhis2yilnki/node_modules/@sveltejs/kit/src/utils/fork.js:23:16) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'src/routes/+layout.js'
}

Node.js v22.8.0
 ELIFECYCLE  Command failed with exit code 1.
```

Builds successfully with `@sveltejs/kit==2.21.0`

```
❯ pnpm install && pnpm build
 WARN  3 deprecated subdependencies found: glob@8.1.0, inflight@1.0.6, node-domexception@1.0.0
Packages: +4
++++
Progress: resolved 255, reused 214, downloaded 0, added 0, done

devDependencies:
- @sveltejs/kit 2.21.1
+ @sveltejs/kit 2.21.0 (2.21.1 is available)

Done in 899ms

> coworking@0.0.1 build /home/artud/dev/tmp/sveltekit-2-21-build-fail-repro
> vite build

vite v5.4.18 building SSR bundle for production...
🎩 Generating runtime...
📃 Unchanged: 1
✓ 180 modules transformed.
Generated an empty chunk: "entries/pages/_page".
Generated an empty chunk: "entries/pages/some-route/_page".
vite v5.4.18 building for production...
🎩 Generating runtime...
📃 Unchanged: 1
✓ 146 modules transformed.
.svelte-kit/output/client/_app/version.json                        0.03 kB │ gzip:  0.05 kB
.svelte-kit/output/client/.vite/manifest.json                      3.38 kB │ gzip:  0.64 kB
.svelte-kit/output/client/_app/immutable/chunks/BxPxCzdd.js        0.03 kB │ gzip:  0.05 kB
.svelte-kit/output/client/_app/immutable/entry/start.gLO-ZyJK.js   0.08 kB │ gzip:  0.09 kB
.svelte-kit/output/client/_app/immutable/nodes/3.BoQ2lVr6.js       0.28 kB │ gzip:  0.24 kB
.svelte-kit/output/client/_app/immutable/nodes/2.VwUHGkD5.js       0.28 kB │ gzip:  0.24 kB
.svelte-kit/output/client/_app/immutable/chunks/CZ1GlEbF.js        0.32 kB │ gzip:  0.25 kB
.svelte-kit/output/client/_app/immutable/nodes/0.DpVxBZFm.js       0.89 kB │ gzip:  0.53 kB
.svelte-kit/output/client/_app/immutable/chunks/CL3loag7.js        1.03 kB │ gzip:  0.59 kB
.svelte-kit/output/client/_app/immutable/nodes/1.Bh4VpJLG.js       1.05 kB │ gzip:  0.60 kB
.svelte-kit/output/client/_app/immutable/chunks/Ch94tTdF.js        2.47 kB │ gzip:  1.35 kB
.svelte-kit/output/client/_app/immutable/entry/app.YdTdaKlz.js     7.68 kB │ gzip:  3.64 kB
.svelte-kit/output/client/_app/immutable/chunks/ovZBRgaG.js       14.61 kB │ gzip:  5.90 kB
.svelte-kit/output/client/_app/immutable/chunks/DFdFGiI_.js       32.33 kB │ gzip: 12.60 kB
✓ built in 391ms
.svelte-kit/output/server/.vite/manifest.json                         3.54 kB
.svelte-kit/output/server/entries/pages/_page.js                      0.00 kB
.svelte-kit/output/server/entries/pages/some-route/_page.js           0.00 kB
.svelte-kit/output/server/entries/pages/_layout.js                    0.10 kB
.svelte-kit/output/server/entries/pages/some-route/_page.svelte.js    0.10 kB
.svelte-kit/output/server/entries/pages/_page.svelte.js               0.11 kB
.svelte-kit/output/server/entries/pages/_layout.server.js             0.18 kB
.svelte-kit/output/server/internal.js                                 0.31 kB
.svelte-kit/output/server/chunks/session.js                           0.38 kB
.svelte-kit/output/server/chunks/index.js                             0.83 kB
.svelte-kit/output/server/chunks/client.js                            0.93 kB
.svelte-kit/output/server/entries/pages/_layout.svelte.js             0.95 kB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js           1.02 kB
.svelte-kit/output/server/chunks/index2.js                            4.05 kB
.svelte-kit/output/server/chunks/exports.js                           6.87 kB
.svelte-kit/output/server/chunks/internal.js                         49.97 kB
.svelte-kit/output/server/index.js                                  130.34 kB
✓ built in 1.58s

Run npm run preview to preview your production build locally.

> Using @sveltejs/adapter-auto
  Could not detect a supported production environment. See https://svelte.dev/docs/kit/adapters to learn how to configure your app to run on the platform of your choosing
  ✔ done
```