import Image from 'next/image'

var html = `
<style>
body {
  background-color: #141d50;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
   'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
   'Droid Sans', 'Helvetica Neue', 'Segoe UI Emoji',
   'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
}
.logo {
  filter: invert(1);
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<body>
  <h1 style="text-align:center">Next.js App</h1>
  <img class="logo" src="https://docs.nine.ch/img/theme/deploio.svg"></img>
</body>
`

export default function Home() {
  return (
        return (
      <body style={{ backgroundColor: '#141d50', color: '#ffffff', fontFamily: 'system-ui' }}>
        <h1 style={{ textAlign: 'center' }}>Next.js App</h1>
        <p style={{ textAlign: 'center' }}>Git Revision: {process.env.DEPLOIO_GIT_REVISION ??
  'unknown'}</p>
      </body>
    )
}
