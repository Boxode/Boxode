'use client'

import * as React from 'react'
import Link from 'next/link'
import {
	ChevronDown,
	Code2,
	FileCode2,
	Globe2,
	GraduationCap,
	LayoutGrid,
	Lightbulb,
	LineChart,
	Network,
	Settings2,
	Shield,
	Terminal,
	Wand2
} from 'lucide-react'

import { Button } from '@/core/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/core/components/ui/navigation-menu'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger
} from '@/core/components/ui/sheet'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@/core/components/ui/collapsible'
import Image from '@/core/design-system/Image'

export function Header() {
	return (
		<div className='fixed top-0 z-30 w-full bg-black select-none'>
			<div className='flex h-[70px] items-center justify-between px-4 md:px-10'>
				<div className='flex items-center space-x-4'>
					<Link href='/' className='flex items-center space-x-2'>
						<Image src='/svg/WLWT.svg' alt='Vercel' width={120} height={26} />
					</Link>
					<NavigationMenu className='hidden lg:flex'>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className='text-white font-ASRegular font-semibold tracking-wide'>
									Products
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black'>
										{products.map((product) => (
											<ListItem
												key={product.title}
												title={product.title}
												href={product.href}
												icon={product.icon}
											>
												{product.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className='text-white font-ASRegular font-semibold tracking-wide'>
									Solutions
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black'>
										{solutions.map((solution) => (
											<ListItem
												key={solution.title}
												title={solution.title}
												href={solution.href}
												icon={solution.icon}
											>
												{solution.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className='text-white font-ASRegular font-semibold tracking-wide'>
									Resources
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black'>
										{resources.map((resource) => (
											<ListItem
												key={resource.title}
												title={resource.title}
												href={resource.href}
												icon={resource.icon}
											>
												{resource.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href='/enterprise'
									passHref
									className='inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white font-ASRegular font-semibold tracking-wide'
								>
									Enterprise
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className='flex items-center space-x-4'>
					<a
						href='/login'
						className='hidden text-white font-ASRegular font-semibold tracking-wide lg:inline-flex text-sm bg-transparent hover:bg-neutral-800 transition-colors px-3.5 py-1.5 rounded-lg'
					>
						Log In
					</a>
					<a
						href='/contact'
						className='hidden text-white font-ASRegular font-semibold tracking-wide lg:inline-flex text-sm bg-transparent hover:bg-neutral-800 transition-colors px-3.5 py-1.5 rounded-lg'
					>
						Contact
					</a>
					<Sheet>
						<SheetTitle className='text-white sr-only'>Menu</SheetTitle>
						<SheetTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='lg:hidden text-white'
							>
								<svg
									strokeWidth='1.5'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 text-white'
								>
									<path
										d='M3 5H21'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
									<path
										d='M3 12H21'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
									<path
										d='M3 19H21'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
								</svg>
								<span className='sr-only'>Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side='right'
							className='w-[300px] sm:w-[400px] bg-black'
						>
							<SheetDescription className='text-white font-ASRegular font-semibold tracking-wide sr-only'>
								Menu
							</SheetDescription>
							<MobileNav />
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	)
}

function ListItem({
	title,
	href,
	children,
	icon
}: {
	title: string
	href: string
	children: React.ReactNode
	icon: React.ReactNode
}) {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					href={href}
					className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10'
				>
					<div className='flex items-center gap-2 text-white'>
						{icon}
						<h3 className='text-sm font-GilroySemibold leading-snug'>
							{title}
						</h3>
					</div>
					<p className='line-clamp-2 text-sm font-ASRegular leading-snug text-white/70'>
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
}

function MobileNavItem({
	items,
	title,
	href
}: {
	items?: Array<{
		title: string
		href: string
		description: string
		icon: React.ReactNode
	}>
	title: string
	href?: string
}) {
	if (!items) {
		return (
			<Link
				href={href!}
				className='flex h-10 items-center justify-between px-4 font-semibold font-ASRegular tracking-wide text-white'
			>
				{title}
			</Link>
		)
	}

	return (
		<Collapsible>
			<CollapsibleTrigger className='flex h-10 w-full items-center justify-between px-4 font-medium text-white'>
				{title}
				<ChevronDown className='h-4 w-4' />
			</CollapsibleTrigger>
			<CollapsibleContent className='space-y-2 px-4 pb-4'>
				{items.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className='block space-y-1 rounded-md p-2 text-white hover:bg-white/10'
					>
						<div className='flex items-center gap-2'>
							{item.icon}
							<span className='text-sm font-medium'>{item.title}</span>
						</div>
						<p className='line-clamp-2 text-sm text-white/70'>
							{item.description}
						</p>
					</Link>
				))}
			</CollapsibleContent>
		</Collapsible>
	)
}

function MobileNav() {
	return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-between border-b border-white/10 px-4 py-4'>
				<Link href='/' className='flex items-center space-x-2'>
					<Image src='/svg/WLWT.svg' alt='Vercel' width={120} height={26} />
				</Link>
			</div>
			<div className='flex flex-col pb-4'>
				<MobileNavItem title='Products' items={products} />
				<MobileNavItem title='Solutions' items={solutions} />
				<MobileNavItem title='Resources' items={resources} />
				<MobileNavItem title='Enterprise' href='/enterprise' />
			</div>
			<div className='px-4 py-4 space-y-2 border-t border-white/10'>
				<a
					href='/login'
					className='w-full justify-start text-white font-ASRegular font-semibold tracking-wide'
				>
					Log In
				</a>
				<a
					href='/contact'
					className='w-full justify-start text-white font-ASRegular font-semibold tracking-wide'
				>
					Contact
				</a>
			</div>
		</div>
	)
}

const products = [
	{
		title: 'E-commerce',
		href: '/ecommerce',
		description: 'Sell your products online',
		icon: <Code2 className='h-4 w-4 text-white' />
	},
	{
		title: 'Sales Point',
		href: '/sales-point',
		description: 'Manage your sales with ease',
		icon: <Network className='h-4 w-4 text-white' />
	},
	{
		title: 'Administration',
		href: '/administration',
		description: 'Control your business from anywhere',
		icon: <Globe2 className='h-4 w-4 text-white' />
	},
	{
		title: 'AI',
		href: '/ai',
		description: 'AI-powered solutions',
		icon: <Settings2 className='h-4 w-4 text-white' />
	}
]

const solutions = [
	{
		title: 'UI/UX Design',
		href: '/design',
		description: 'Beautiful and intuitive interfaces',
		icon: <Wand2 className='h-4 w-4 text-white' />
	},
	{
		title: 'Brand Identity',
		href: '/branding',
		description: 'Find the perfect image for your project',
		icon: <Shield className='h-4 w-4 text-white' />
	},
	{
		title: 'Web Development',
		href: '/web-development',
		description: 'Modern and fast websites and apps',
		icon: <LineChart className='h-4 w-4 text-white' />
	},
	{
		title: 'Mobile Development',
		href: '/mobile-development',
		description: 'Engage your users with mobile apps',
		icon: <LayoutGrid className='h-4 w-4 text-white' />
	}
]

const resources = [
	{
		title: 'Documentation',
		href: '/docs',
		description: 'Learn how to use our platform',
		icon: <FileCode2 className='h-4 w-4 text-white' />
	},
	{
		title: 'Boxode Learn',
		href: '/learn',
		description: 'Interactive courses and projects',
		icon: <Terminal className='h-4 w-4 text-white' />
	},
	{
		title: 'Auruus Studios',
		href: '/studios',
		description: 'Our creative agency',
		icon: <Lightbulb className='h-4 w-4 text-white' />
	},
	{
		title: 'Blog',
		href: '/blog',
		description: 'Read the latest news and articles',
		icon: <GraduationCap className='h-4 w-4 text-white' />
	}
]
