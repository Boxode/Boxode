import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='shortcut icon'
          href='/Favicon/favicon.ico'
          type='image/x-icon'
        />
        <title>Boxode</title>
        <meta
          name='description'
          content='Creando soluciones informáticas personalizadas y productos comerciales a pequeñas, medianas y grandes empresas.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/Favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='canonical' href='https://www.boxode.org/' />
        <meta name='apple-mobile-web-app-title' content='Boxode' />
        <meta name='application-name' content='Boxode' />
        <meta property='og:url' content='https://www.boxode.org/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Boxode' />
        <meta
          property='og:description'
          content='Creando soluciones informáticas personalizadas y productos comerciales a pequeñas, medianas y grandes empresas.'
        />
        <meta property='og:locate' content='es_MX' />
        <meta property='og:site_name' content='Boxode' />
      </head>
      <body>{children}</body>
    </html>
  )
}
