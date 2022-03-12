import { V86Starter } from "../src";

const emu = new V86Starter({
    wasm_path: "v86.wasm",
});
console.log(emu);
