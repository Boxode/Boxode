import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='boxode, boxode.org, boxode open source software, boxode oss, boxode open source, boxode software, software, software development, software development company, software development services, software development company in mexico, web development, web development company, uiux development, uiux development company, uiux development company in mexico, uiux development services, uiux development services in mexico'
        />
        <link
          rel='shortcut icon'
          href='/favicon/favicon.ico'
          type='image/x-icon'
        />
        <title>Boxode</title>
        <meta
          name='description'
          content='Creating customized IT solutions and commercial products for small, medium and large companies.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='canonical' href='https://boxode.org/' />
        <meta name='apple-mobile-web-app-title' content='Boxode' />
        <meta name='application-name' content='Boxode' />
        <meta property='og:url' content='https://boxode.org/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Boxode' />
        <meta
          property='og:description'
          content='Creating customized IT solutions and commercial products for small, medium and large companies.'
        />
        <meta property='og:locate' content='es_MX' />
        <meta property='og:site_name' content='Boxode' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@BoxodeHQ' />
        <meta name='twitter:title' content='Boxode' />
        <meta
          name='twitter:description'
          content='A better way to build software.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dvjzjasfg/image/upload/v1683098548/twitter_large_image_principal_tidcmp.png'
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
