export default function (context) {
  if (process.server) {
    console.log(`SSR in globalMiddleware`)
  } else {
    console.log(`CSR in globalMiddleware`)
  }
}
