// 3rd party library imports
import * as Tone from 'tone';
import Sketch from 'react-p5';
import P5 from 'p5';
import React, { useEffect, useMemo, useCallback } from 'react';
import Particles from "react-tsparticles";

//sources
//https://www.npmjs.com/package/react-tsparticles
let bg;
let height1;
let width1;
type VisualizerDrawer = (p5: P5, analyzer: Tone.Analyser) => void;
//type VisualizerFrawer2 = (p6:P5, p7:P5, analyzer:Tone.Analyser)=>void;
interface VisualizerContainerProps {
  visualizer: Visualizer;
}

export class Visualizer {
  public readonly name: string;
  public readonly draw: VisualizerDrawer;

  constructor(name: string, draw: VisualizerDrawer) {
    this.name = name;
    this.draw = draw;
  }
}

export function VisualizerContainer({ visualizer }: VisualizerContainerProps) {
  const { name, draw } = visualizer;

  const analyzer: Tone.Analyser = useMemo(
    () => new Tone.Analyser('waveform', 256),
    [],
  );

  const onResize = useCallback((p5: P5) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    p5.resizeCanvas(width, height, false);
  }, []);

  useEffect(() => {
    Tone.getDestination().volume.value = -5;
    Tone.getDestination().connect(analyzer);
    return () => {
      Tone.getDestination().disconnect(analyzer);
    };
  }, [analyzer]);

  const setup = (p5: P5, canvasParentRef: Element) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    
    /*bg = p5.loadImage('../src/img/homepage_bg.jpg');
    bg.resize(width,height);*/
    p5.createCanvas(width, height).parent(canvasParentRef);
    //p5.background(bg);
  };
  const setup1 = (p5: P5, canvasParentRef: Element)=>{
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    //p5.angleMode(p5.DEGREES);
   
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const particlesInit = (main: any) => {
    
    console.log(main);
    
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    /*<div id="duckie"><Particles id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      ></Particles></div>*/
  };

  const particlesLoaded = (container: any) => {
    
    console.log(container);
  };

  if(name === 'tdwlop'){
    console.log("INSIDE THE IF FOR TDWLOP RETURN");
    return (
      <div className={'bg-black absolute bottom-0 right-0 left-0 h-50'} id="bigvdiv">
        <div className={'z-1 absolute left-0 top-0 pa4 white f5'}>{name}</div>
     
        <Sketch
          setup={setup}
          draw={p5 => draw(p5, analyzer)}
          windowResized={onResize}
        />
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded} 
      width ='200px'
       height='200px'
      
      options={{
      
        fpsLimit: 60,
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
            resize: false,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
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
            value: "#ffff00",
          },
          links: {
            color: "#231161",
            distance: 150,
            enable: true,
            opacity: 0.05,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "bottom",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      </div>
    );
  }
  return (
    <div className={'bg-black absolute bottom-0 right-0 left-0 h-50'}>
      <div className={'z-1 absolute left-0 top-0 pa4 white f5'}>{name}</div>
      <Sketch
        setup={setup}
        draw={p5 => draw(p5, analyzer)}
        windowResized={onResize}
      />
    </div>
  );
}
