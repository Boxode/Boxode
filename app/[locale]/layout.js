import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    // { locale: 'de' },
    // { locale: 'fr' },
    { locale: 'pt' }
  ]
}

export default async function RootLayout({ children, params: { locale } }) {
  let language
  try {
    language = (await import(`../../languages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={locale}>
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
        <meta name='robots' content='index, follow' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='canonical' href='https://boxode.org/' />
        <link rel='alternate' href='https://boxode.org/es' hrefLang='es-MX' />
        <link rel='alternate' href='https://boxode.org/pt' hrefLang='pt-BR' />
        <link rel='alternate' href='https://boxode.org/de' hrefLang='de-DE' />
        <link rel='alternate' href='https://boxode.org/fr' hrefLang='fr-FR' />
        <link rel='alternate' href='https://boxode.org' hrefLang='x-default' />
        <meta name='apple-mobile-web-app-title' content='Boxode' />
        <meta name='application-name' content='Boxode' />
        <meta property='og:url' content='https://boxode.org/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Boxode' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dvjzjasfg/image/upload/v1691027399/Boxode_twitter_card_nxe9iu.png'
        />
        <meta
          property='og:description'
          content='Creating customized IT solutions and commercial products for small, medium and large companies.'
        />
        <meta property='og:locate' content='es_MX' />
        <meta property='og:site_name' content='Boxode' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@BoxodeHQ' />
        <meta property='twitter:domain' content='boxode.org' />
        <meta property='twitter:url' content='https://boxode.org' />
        <meta name='twitter:title' content='Boxode' />
        <meta
          name='twitter:description'
          content='A better way to build software.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dvjzjasfg/image/upload/v1691027399/Boxode_twitter_card_nxe9iu.png'
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={language}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
