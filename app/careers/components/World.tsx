import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

// https://github.com/shuding/cobe

export default function App() {
  const canvasRef = useRef()

  useEffect(() => {
    let phi = 0

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.01 },
        { location: [21.8858736, -102.3737016], size: 0.1 },
        { location: [-22.913158, -43.775642], size: 0.07 },
        { location: [4.6486206, -74.2726213], size: 0.04 },
        { location: [-33.4717788, -70.9594831], size: 0.05 },
        { location: [-34.6157513, -58.5157067], size: 0.06 },
        { location: [49.2578182, -123.2063048], size: 0.07 },
        { location: [49.8538852, 97.3176477], size: 0.07 },
        { location: [40.4380986, 3.8443468], size: 0.05 },
        { location: [52.5068042, 13.0950937], size: 0.09 },
        { location: [41.0053702, 28.6825296], size: 0.04 },
        { location: [-33.8472349, 150.6023232], size: 0.05 },
        { location: [28.5275544, 77.0441728], size: 0.07 },
        { location: [-33.9126408, 17.9966327], size: 0.08 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.01
      }
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          width: 600,
          height: 600,
          maxWidth: '100%',
          aspectRatio: 1,
          backgroundColor: 'transparent'
        }}
      />
    </div>
  )
}
