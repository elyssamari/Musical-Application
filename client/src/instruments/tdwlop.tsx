// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';


// project imports
import { Instrument2, InstrumentProps2 } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for PanFlute.
 ** ------------------------------------------------------------------------ */
//local
interface OProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.MonoSynth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the PanFlute key
}
//local
export function PanFluteKey({
  note,
  synth,
  minor,
  index,
}: OProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the PanFlute.
   * See `PanFluteKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'bg-black black h3': minor, // minor keys are black
        'black bg-white h4': !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 63,
        left: `${index*2}rem`,
        zIndex: minor ? 1 : 0,
        width: '1.5rem',
        marginLeft: '1rem',
        height: `${(1.5)}rem`,
        //backgroundColor: '#cc9900',
      }}
    ></div>
  );
}

// eslint-disable-next-line
/*function PanFluteKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: OProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PanFluteKey` for the React component with JSX (JavaScript XML).
   */
  /*return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames('ba pointer absolute dim', {
        'bg-black black h3': minor,
        'black bg-white h4': !minor,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      },
    },
    [],
  );
}*/
//local
function PanFluteType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function PanFlute({ synth, setSynth }: InstrumentProps2): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'D', idx: 1 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'G', idx: 4 },
    { note: 'A', idx: 5 },
    { note: 'B', idx: 6 },
  ]);

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.dispose();

      return new Tone.MonoSynth({
        oscillator: { type: 'square' } as Tone.OmniOscillatorOptions,
        envelope: {
          attack: 0.1
        }
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'square'
  ]) as List<OscillatorType>;

  return (
    <div className="pv4" id="bigi">
      <div className="relative  h4 " id="centerfp">
      <svg width="800" height="200" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke="black"  fill="#d9b38c" d="
        M-1200 200 L-1200 400 L2000 400 L2000 200  L-1200 200
        
  Z" />

      <path stroke="black" fill="black" d="
        M 100, 100
        m -700, 200
        a 30,30 0 1,0 105,0
        a 30,30 0 1,0 -105,0

        M 100, 100
        m 450, 200
        a 30,30 0 1,0 105,0
        a 30,30 0 1,0 -105,0

        M 100, 100
        m 620, 200
        a 30,30 0 1,0 105,0
        a 30,30 0 1,0 -105,0
        
        M 100, 100
        m 790, 200
        a 30,30 0 1,0 105,0
        a 30,30 0 1,0 -105,0
        
        M 100, 100
        m 950, 200
        a 30,30 0 1,0 105,0
        a 30,30 0 1,0 -105,0
        
        M 100, 100
        m 1120, 200
        a 30,30 0 1,0 105,0
        a 30,30 0 1,0 -105,0
        
        M 100, 100
        m 1400, 200
        a 30,30 0 1,0 105,0
        a 30,30 0 1,0 -105,0
      Z"/>
      <path stroke="black" fill="#bfbfbf" d="
          M-1100 400 L-1100 200 L-900 200 L-900 400 
      Z"/>
      <path stroke="black" fill="#bfbfbf" d="
        M-200 400 L-200 200 L-100 200 L-100 400 
      Z"/>
      <path stroke="black" fill="#bfbfbf" d="
         M1750 400 L1750 200 L1650 200 L1650 400 
      Z"/>
      <path stroke="black" fill="#bfbfbf" d="
          M1850 400 L1850 200 L1950 200 L1950 400 
      Z"/>


</svg>

        <div id="centerf">

        <div
      onMouseDown={() => synth?.triggerAttack(`A5`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        // CSS
        top: 63,
        left: `8.5rem`,
        width: '1.5rem',
        marginLeft: '1rem',
        height: `${(1.5)}rem`,
        //backgroundColor: '#cc9900',
      }}
    ></div>

<div
      onMouseDown={() => synth?.triggerAttack(`B5`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        // CSS
        top: 63,
        left: `26.5rem`,
        width: '1.5rem',
        marginLeft: '1rem',
        height: `${(1.5)}rem`,
        //backgroundColor: '#cc9900',
      }}
    ></div>
<div
      onMouseDown={() => synth?.triggerAttack(`C5`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        // CSS
        top: 63,
        left: `29rem`,
        width: '1.5rem',
        marginLeft: '1rem',
        height: `${(1.5)}rem`,
        //backgroundColor: '#cc9900',
      }}
    ></div>
          
          <div
      onMouseDown={() => synth?.triggerAttack(`D5`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        // CSS
        top: 63,
        left: `31.59rem`,
        width: '1.5rem',
        marginLeft: '1rem',
        height: `${(1.5)}rem`,
        //backgroundColor: '#cc9900',
      }}
    ></div>

<div
      onMouseDown={() => synth?.triggerAttack(`E5`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        // CSS
        top: 63,
        left: `34.2rem`,
        width: '1.5rem',
        marginLeft: '1rem',
        height: `${(1.5)}rem`,
        //backgroundColor: '#cc9900',
      }}
    ></div>
    
    <div
      onMouseDown={() => synth?.triggerAttack(`F5`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        // CSS
        top: 63,
        left: `37rem`,
        width: '1.5rem',
        marginLeft: '1rem',
        height: `${(1.5)}rem`,
        //backgroundColor: '#cc9900',
      }}
    ></div>

<div
      onMouseDown={() => synth?.triggerAttack(`G5`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames(' pointer absolute dim black h4'
      )}
      style={{
        // CSS
        top: 63,
        left: `41.2rem`,
        width: '1.5rem',
        marginLeft: '1rem',
        height: `${(1.5)}rem`,
        //backgroundColor: '#cc9900',
      }}
    ></div>

        </div>
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <PanFluteType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
  );
}

export const tdwlop = new Instrument2('tdwlop', PanFlute);


