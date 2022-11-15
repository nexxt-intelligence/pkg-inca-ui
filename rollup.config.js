import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json";

const extensions = [".js", ".jsx", ".css"];

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ["./lib"],
    }),
    peerDepsExternal(),
    resolve({ extensions }),
    postcss({
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    commonjs(),
    babel({
      presets: ["@babel/env", "@babel/preset-react"],
      babelHelpers: "bundled",
      exclude: "**/node_modules/**",
      extensions,
    }),
  ],
};
