Reproduction for the https://github.com/sveltejs/kit/issues/13804

If we remove `houdini` and `houdini-svelte` dependencies, the application builds successfully.

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
