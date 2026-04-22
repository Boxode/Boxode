import dynamic from 'next/dynamic'
import ClientVisible from '@/core/components/ClientVisible'
import { ComponentType } from 'react'

// Definimos los tipos para que TypeScript no se queje
interface LazyOptions {
	placeholder?: React.ReactNode
}

export function createLazyComponent<T>(
	importFunc: () => Promise<{ default: ComponentType<T> }>,
	options: LazyOptions = {}
) {
	// 1. Creamos el componente dinámico de Next.js
	// Forzamos ssr: false porque si depende del scroll, es código cliente
	const DynamicComponent = dynamic(importFunc, {
		ssr: false,
		loading: () => <>{options.placeholder || <p>Cargando...</p>}</>
	})

	// 2. Devolvemos un componente funcional que ya incluye el Wrapper
	return function LazyWrapper(props: T & React.JSX.IntrinsicAttributes) {
		return (
			<ClientVisible placeholder={options.placeholder}>
				<DynamicComponent {...props} />
			</ClientVisible>
		)
	}
}
