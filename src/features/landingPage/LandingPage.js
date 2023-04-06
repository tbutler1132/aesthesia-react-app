import Particles from 'react-particles'
import { loadFull } from "tsparticles"; 
import { useCallback } from 'react';

function LandingPage() {
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
  return (
    <div style={{position: 'relative', top: '4rem', minHeight: '100vh', textAlign: 'left', padding: '1rem'}}>
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
      <div id='landingPage'>
        <div id='welcome'>
            <h1 style={{textAlign: 'center'}}>Aesthesia</h1>
        </div>
        <div id='whatIsSanctaVasa'>
            <h2>The purpose of this project is to create a “sonic universe”. Aesthesia is composed of many “worlds”, each of which consists of a “core” song in addition to other elements such as artwork and videos.</h2>
        </div>
        <div id='whatIsACore'>
            <h3>Cores</h3>
            <p>The core is the central component of each world. It consists of a single track representing the primary concept of the world. The core can be iterated upon, especially as the rest of the world develops, until it becomes a complete and commercially viable song.</p>
        </div>
        <div id='thesues'>
            <p>The Ship of Theseus is a thought experiment about whether an object which has had all of its original components replaced remains the same object. According to legend, Theseus, the mythical Greek founder-king of Athens, rescued the children of Athens from King Minos after slaying the minotaur and then escaped onto a ship going to Delos. Each year, the Athenians commemorated this by taking the ship on a pilgrimage to Delos to honor Apollo. A question was raised by ancient philosophers: After several centuries of maintenance, if each individual part of the Ship of Theseus was replaced, one at a time, was it still the same ship?

This thought experiment highlights the relationship between a world and it’s core. The world is the essence of the song, what it wants the listener to think and feel. The core is the sum of components that create the experience. That is why the core can evolve, shift, and reshape.</p>
        </div>
        <div id='whatAreBranches'>
            <h3>Branches</h3>
            <p>A “core” can have many branches. A branch is an audio track that can consist small ideas that will eventually be integrated into the core, new ideas that completely replace the core, or something that branches off of the core and stands on its own.</p>
        </div>
        <div id='whatAreOtherElements'>
            <h3>Elements</h3>
            <p>In addition to the core and its branches, a world is made up of other elements such as videos and artwork.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage