import typescript from "rollup-plugin-typescript2";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    input: "src/index.tsx",
    output: [
      {
        dir: "dist",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [typescript()],
    external: ["react", "react/jsx-runtime"],
  },
];

export default config;
