# Rust WASM quick tutorial
See: [MDN Web Documentation](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)

## Tools
- Rust (cargo/wasm)
- Firefox 106.0.3 Linux 64bit

### Server
- [Miniserve](https://github.com/svenstaro/miniserve), a light http server written in Rust

### Node project
- Node: v19.0.1
- npm: 9.1.1


*package.json*

```json
{
  "scripts": {
    "serve": "webpack-dev-server"
  },
  "dependencies": {
    "hello-wasm": "^0.1.0"
  },
  "devDependencies": {
    "webpack": "^5.x.x",
    "webpack-cli": "^4.x.x",
    "webpack-dev-server": "^4.11.1"
  }
}
```
