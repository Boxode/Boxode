import { Header } from '@/core/components/Header'
import './globals.css'
import Footer from '@/core/components/Footer'

export default async function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
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
				<title>
					Boxode | Elevate your business with cutting-edge technology solutions.
				</title>
				<meta
					name='description'
					content='Empowering businesses with cutting-edge technology solutions.'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/favicon/favicon-96x96.png'
					sizes='96x96'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<meta name='apple-mobile-web-app-title' content='Boxode' />
				<link rel='manifest' href='/favicon/site.webmanifest' />

				<meta name='msapplication-TileColor' content='#000' />
				<meta name='robots' content='index, follow' />
				<meta name='theme-color' content='#000' />
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
					content='Empowering businesses with cutting-edge technology solutions.'
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
			<body className='flex h-full flex-col'>
				<Header />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
