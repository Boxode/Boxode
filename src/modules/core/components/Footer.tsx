import Link from '@/core/design-system/Link'
import { Paragraph } from '@/core/design-system/Text'

export default function Footer() {
	return (
		<footer>
			<div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<div className=''>
						<picture>
							<source
								media='(prefers-color-scheme: light)'
								srcSet='/svg/BLWT.svg'
							/>
							<source
								media='(prefers-color-scheme: dark)'
								srcSet='/svg/WLWT.svg'
							/>
							<img
								alt='Boxode Logo'
								src='/svg/WLWT.svg'
								width='150'
								height='80'
								loading='lazy'
								decoding='async'
							/>
						</picture>
					</div>

					<ul className='mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end'>
						<li>
							<Link
								href='https://x.com/BoxodeHQ'
								isExternal
								className='text-white transition hover:opacity-75'
								aria-label='Visit our Twitter page where you can find our latest news'
							>
								<span className='sr-only'>Twitter</span>

								<svg
									className='size-6'
									fill='currentColor'
									viewBox='0 0 24 24'
									aria-hidden='true'
								>
									<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
								</svg>
							</Link>
						</li>

						<li>
							<Link
								href='https://github.com/Boxode'
								isExternal
								className='text-white transition hover:opacity-75'
								aria-label='Visit our GitHub page where you can find our open-source projects'
							>
								<span className='sr-only'>GitHub</span>

								<svg
									className='size-6'
									fill='currentColor'
									viewBox='0 0 24 24'
									aria-hidden='true'
								>
									<path
										fillRule='evenodd'
										d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>
						</li>

						<li>
							<Link
								href='https://www.linkedin.com/company/boxodehq'
								isExternal
								className='text-white transition hover:opacity-75'
								aria-label='Visit our LinkedIn page'
							>
								<span className='sr-only'>LinkedIn</span>

								<svg
									className='size-9'
									fill='currentColor'
									viewBox='0 0 24 24'
									aria-hidden='true'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M3.5 2C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2H3.5ZM4.74556 5.5C5.21057 5.5 5.5 5.16665 5.5 4.75006C5.49133 4.3241 5.21057 4 4.75438 4C4.29824 4 4 4.3241 4 4.75006C4 5.16665 4.28937 5.5 4.73687 5.5H4.74556ZM5.5 6.5V12H4V6.5H5.5ZM7 12H8.5V8.89479C8.5 8.89479 8.60415 7.78962 9.55208 7.78962C10.5 7.78962 10.5 9.02275 10.5 9.02275V12H12V8.8133C12 7.13837 11.25 6.5025 10.125 6.5025C9 6.5025 8.5 7.27778 8.5 7.27778V6.5025H7.00005C7.02383 7.01418 7 12 7 12Z'
									/>
								</svg>
							</Link>
						</li>
					</ul>
				</div>

				<div className='grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-4'>
					<div>
						<Paragraph className='font-semibold text-white tracking-wide'>
							Solutions
						</Paragraph>

						<ul className='mt-6 space-y-4 text-sm'>
							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									{' '}
									UI/UX Design{' '}
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									{' '}
									Brand Identity{' '}
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									{' '}
									Web Development{' '}
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									{' '}
									Mobile Development{' '}
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									{' '}
									SEO & Performance Optimisation{' '}
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<Paragraph className='font-semibold text-white tracking-wide'>
							Resources
						</Paragraph>

						<ul className='mt-6 space-y-4 text-sm'>
							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Community
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Help
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Resources
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Boxode Learn
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<Paragraph className='font-semibold text-white tracking-wide'>
							Company
						</Paragraph>

						<ul className='mt-6 space-y-4 text-sm'>
							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									About
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Blog
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Careers
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Contact Us
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Customers
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Partners
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Privacy Policy
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									More
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<Paragraph className='font-semibold text-white tracking-wide'>
							Develop and IT
						</Paragraph>

						<ul className='mt-6 space-y-4 text-sm'>
							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Boxode Developers
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Documentation
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Boxode Tech Community
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Open Source
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Code of Conduct
								</Link>
							</li>

							<li>
								<Link
									href='#'
									className='text-neutral-400 transition hover:opacity-75 font-ASRegular'
								>
									Contribution
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<Paragraph className='text-xs text-gray-500'>
					&copy; 2026. Boxode, LLC.
				</Paragraph>
			</div>
		</footer>
	)
}
