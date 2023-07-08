import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { useCallback, useMemo } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const isBrowser = typeof window !== "undefined"

export const ParticlesComponent = () => {
    const [dots, setDots] = useState(isBrowser ? Math.round(window.innerWidth / 15) : 100)

  useEffect((): any => {
    function handleResize() {
      setDots(isBrowser ? Math.round(window.innerWidth / 15) : 100)

    }

    isBrowser ? (window.addEventListener('resize', handleResize)) : null

    return () => {
      isBrowser ? (window.removeEventListener('resize', handleResize)) : null
    }
  })
    const options = useMemo(() => {
        return {
            fpsLimit: 60,
            particles: {
                number: {
                    value: dots,
                },
                color: {
                    value: "#fff",
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: {
                        min: 1,
                        max: 2,
                    },
                },
                links: {
                    enable: true,
                    distance: 250,
                    color: "#fff",
                    opacity: 0.6,
                    width: 1,
                    triangles: {
                        enable: false,
                    },
                },
                move: {
                    enable: true,
                    speed: 2,
                },
            },
            background: {
                color: "transparent",
            },
        }
    }, [])

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );
};