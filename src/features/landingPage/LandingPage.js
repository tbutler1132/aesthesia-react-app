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
            <h1 style={{textAlign: 'center'}}>Welcone to Sancta Vasa</h1>
        </div>
        <div id='whatIsSanctaVasa'>
            <h2>Sancta Vasa is a sonic universe. It is composed of many “worlds”, each of which consists of a “core” song as well as other elements such as artwork and videos.</h2>
        </div>
        <div id='whatIsACore'>
            <h3>Cores</h3>
            <p>The core is the central component of each world. The core consists of a single track which represents the primary concept of the world. A key concept behind the “core” is that it does not always represent a finished track. The core can be iterated upon, especially as the rest of the world develops, until it becomes a complete and commercially viable track.</p>
        </div>
        <div id='thesues'>
            <p>“The Ship of Theseus” is a well know thought experiment that may further clarify how the world, core, and song are related. This thought experiment presents a scenario where a ship has all of it’s parts replaced in small increments over a long period of time. The question it poses is once every single part original part has been replaced, is it the same ship? One could argue yes, as the ship as a whole is a concept. In Sancta Vas, every world is a just a concept. What do we want to make the listener think and feel? </p>
        </div>
        <div id='whatAreBranches'>
            <h3>Branches</h3>
            <p>The next key concept in Sancta Vasa are known as “branches.” Branches are tracks that are offshoots of the core. They can small ideas that will eventually be integrated into the core, new ideas that completely replace the core, or something that just stands on its own. </p>
        </div>
        <div id='whatAreOtherElements'>
            <h3>Elements</h3>
            <p>Outside of the core and it’s branches, there are many other media types that make a world. At the moment those consist of images and videos that build upon the world’s concept and titilate the senses. </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage