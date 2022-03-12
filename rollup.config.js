import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

const root = process.platform === "win32" ? path.resolve("/") : "/";
const external = (id) => !id.startsWith(".") && !id.startsWith(root);
const extensions = [".js", ".jsx", ".ts", ".tsx", ".json"];

export default [
    {
        input: `./src/index.js`,
        output: { file: `build/index.js`, format: "esm" },
        external,
        plugins: [json(), resolve({ extensions }), terser(), filesize()],
    },
    {
        input: `./src/index.js`,
        output: { file: `build/index.cjs`, format: "cjs" },
        external,
        plugins: [json(), resolve({ extensions }), terser(), filesize()],
    },
];
