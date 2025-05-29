/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "https://swapi-graphql.netlify.app/graphql",
    interval: 0, // limit the schema introspection to just on the start of the server
  },
  runtimeDir: ".houdini",
  plugins: {
    "houdini-svelte": {},
  },
  scalars: {
    AWSDateTime: {
      type: "string",
    },
  },
};

export default config;
