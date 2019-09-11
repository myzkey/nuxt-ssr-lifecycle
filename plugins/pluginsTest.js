export default function (context) {
  if (process.server) {
    console.log(`SSR in plugin`)
  } else {
    console.log(`CSR in plugin`)
  }
}
