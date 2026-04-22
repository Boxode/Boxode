'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface ClientVisibleProps {
	children: React.ReactNode
	placeholder?: React.ReactNode // Lo que se ve antes de cargar (skeleton)
}

export default function ClientVisible({
	children,
	placeholder
}: ClientVisibleProps) {
	const [hasBeenVisible, setHasBeenVisible] = useState(false)

	const { ref, inView } = useInView({
		triggerOnce: true, // Importante: Solo queremos que se active una vez
		threshold: 0.3 // Se activa cuando el 30% del componente es visible
	})

	useEffect(() => {
		if (inView && !hasBeenVisible) {
			setHasBeenVisible(true)
		}
	}, [inView, hasBeenVisible])

	// El div actúa como el "sensor" en el DOM
	return (
		<div ref={ref} style={{ minHeight: '100px' }}>
			{hasBeenVisible ? children : placeholder || <p>Cargando...</p>}
		</div>
	)
}
