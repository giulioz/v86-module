import v86WASMB64 from "../build/v86.wasm";
import seabiosB64 from "../bios/seabios.bin";
import vgabiosB64 from "../bios/vgabios.bin";

async function base64ToBufferAsync(base64) {
    const req = await fetch("data:application/octet-binary;base64," + base64);
    return req.arrayBuffer();
}

export const v86WASM = base64ToBufferAsync(v86WASMB64);
export const seabios = base64ToBufferAsync(seabiosB64);
export const vgabios = base64ToBufferAsync(vgabiosB64);
