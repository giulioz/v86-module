import { V86Starter } from "../src";
import v86Wasm from "../build/v86.wasm";
import bios from "../bios/seabios.bin?url";
import vgabios from "../bios/vgabios.bin?url";
import cdrom from "../images/linux.iso?url";
import hda from "../images/kolibri.img?url";
import fda from "../images/windows101.img?url";

const emu = new V86Starter({
    wasm_fn: v86Wasm,
    memory_size: 32 * 1024 * 1024,
    vga_memory_size: 2 * 1024 * 1024,
    screen_container: document.getElementById("screen_container"),
    bios: { url: bios },
    vga_bios: { url: vgabios },
    fda: { url: fda },
    // hda: { url: hda },
    // cdrom: { url: cdrom },
    autostart: true,
});
console.log(emu);
