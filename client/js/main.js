console.log("main.js loaded")

const go = new Go();
WebAssembly.instantiateStreaming(fetch("wasm/main.wasm"), go.importObject).then((result) => {
    go.run(result.instance);
    // const instance = result.instance;
    // const length = 1000;
    // console.log(instance.exports)
    // // let myArrayPtr = instance.exports.allocateArray(length);
    // let myArray = new Float32Array(instance.exports.memory.buffer, myArrayPtr, length);
    // instance.exports.processF32Array(myArrayPtr, length);
    // console.log(myArray)
});