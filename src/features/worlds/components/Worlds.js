import { useCallback } from 'react'
import WorldCard from './WorldCard'
import { useGetWorldsQuery } from '../worldsAPI'
import styles from "../worlds.module.css"
import CircularProgress from '@mui/material/CircularProgress'
import Particles from 'react-particles'
import { loadFull } from "tsparticles"; 

function Worlds() {
  const { data, isLoading, isError} = useGetWorldsQuery()

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  if(isLoading) return <div className='mainContent'><CircularProgress /></div>
  if(isError) return <div>Error</div>
  return (
    <div className='mainContent'>
      <div className={styles.worldsContainer}>
        <Particles
        id="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "#A3A0A0",
              },
              links: {
                  color: "#A3A0A0",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              collisions: {
                  enable: true,
              },
              move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 80,
              },
              opacity: {
                  value: 0.1,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
        }} />
            <h1>Worlds</h1>
            <div className="horizontalCardsContainer">
            {data.map(world => 
            <div key={world._id} style={{marginTop: '1rem'}}>
                <WorldCard imageUrl={world.cover_art[0].file.asset.url} title={world.title} id={world._id} key={world._id}/>
            </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Worlds