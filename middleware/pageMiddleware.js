export default function (context) {
  if (process.server) {
    console.log(`SSR in pageMiddleware`)
  } else {
    console.log(`CSR in pageMiddleware`)
  }
}
