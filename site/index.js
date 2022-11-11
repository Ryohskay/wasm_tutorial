import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {  // Not a good practice
  js.greet("WebAssembly with npm");
});
