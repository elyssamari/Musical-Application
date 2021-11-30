// 3rd party library imports
import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

// project imports
import { DispatchAction } from './Reducer';
import { AppState } from './State';

/** ------------------------------------------------------------------------ **
 * Contains implementation of an Instruments.
 ** ------------------------------------------------------------------------ */

// export interface InstrumentProps5 {
//   state: AppState;
//   dispatch: React.Dispatch<DispatchAction>;
//   name: string;
//   synth: Tone.PluckSynth;
//   setSynth: (f: (oldSynth: Tone.PluckSynth) => Tone.PluckSynth) => void;
// }

// export class Instrument5 {
//   public readonly name: string;
//   public readonly component: React.FC<InstrumentProps5>;

//   constructor(name: string, component: React.FC<InstrumentProps5>) {
//     this.name = name;
//     this.component = component;
//   }
// }

export interface InstrumentProps5 {
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
  name: string;
  synth: Tone.FMSynth;
  setSynth: (f: (oldSynth: Tone.FMSynth) => Tone.FMSynth) => void;
}

export class Instrument5 {
  public readonly name: string;
  public readonly component: React.FC<InstrumentProps5>;

  constructor(name: string, component: React.FC<InstrumentProps5>) {
    this.name = name;
    this.component = component;
  }
}

 export interface InstrumentProps3{
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
  name: string;
  synth: Tone.MembraneSynth;
  setSynth: (f: (oldSynth: Tone.MembraneSynth) => Tone.MembraneSynth) => void;
}

export class Instrument3 {
  public readonly name: string;
  public readonly component: React.FC<InstrumentProps3>;

  constructor(name: string, component: React.FC<InstrumentProps3>) {
    this.name = name;
    this.component = component;
  }
}

export interface InstrumentProps2{
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
  name: string;
  synth: Tone.MonoSynth;
  setSynth: (f: (oldSynth: Tone.MonoSynth) => Tone.MonoSynth) => void;
}

export class Instrument2 {
  public readonly name: string;
  public readonly component: React.FC<InstrumentProps2>;

  constructor(name: string, component: React.FC<InstrumentProps2>) {
    this.name = name;
    this.component = component;
  }
}

export interface InstrumentProps {
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
  name: string;
  synth: Tone.Synth;
  setSynth: (f: (oldSynth: Tone.Synth) => Tone.Synth) => void;
}

export class Instrument {
  public readonly name: string;
  public readonly component: React.FC<InstrumentProps>;

  constructor(name: string, component: React.FC<InstrumentProps>) {
    this.name = name;
    this.component = component;
  }
}

function TopNav({ name }: { name: string }) {
  // console.log("inside the instruments function topnav");
  return (
    <div
      className={
        'w-100 h3 bb bg-blue b--light-gray flex justify-between items-center ph4'
      }
    >
      <div>{name}</div>
    </div>
  );
}

interface InstrumentContainerProps {
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
  instrument: Instrument;
}

export const InstrumentContainer: React.FC<InstrumentContainerProps> = ({
  instrument,
  state,
  dispatch,
}: InstrumentContainerProps) => {
  // console.log("inside the instruments function instrumentcontainer");
  const InstrumentComponent = instrument.component;
  const [synth, setSynth] = useState(
    new Tone.Synth({
      oscillator: { type: 'sine' } as Tone.OmniOscillatorOptions,
    }).toDestination(),
  );

  const notes = state.get('notes');

  useEffect(() => {
    let timing = 0;
    // console.log("inside the instruments function instrumentcontainer useeffect");
    if (notes && synth) {
      let eachNote = notes.split(' ');

      let noteObjs = eachNote.map((note: string, idx: number) => 
      {let splitnote = note.split(',');
      let nnote = splitnote[0];
      let ttime = splitnote[1];
      let rtime = timing;
      let mtime = 2/(+ttime);
      timing = timing + (mtime);
      if(idx+1 === eachNote.length){
        return({
          idx,
          time: `+${rtime}`,
          tlen: ttime,
          note: nnote,
          velocity: 1,
          endit: 0
        });
      }
      return({
        idx,
        time: `+${rtime}`,
        tlen: ttime,
        note: nnote,
        velocity: 1,
        endit: 1
      });
      }
      /*(
        {       
        idx,
        time: `+${idx / 4}`,
        note,
        velocity: 1,
      }
      )*/
      );

      new Tone.Part((time, value) => {
        // console.log("inside the instruments function instrumentcontainer newtone.part");
        console.log(time);
        console.log(value);
        // the value is an object which contains both the note and the velocity
        if(value.note !== 'r'){
           synth.triggerAttackRelease(value.note, `${value.tlen}n`, time, value.velocity);
        }
       
        if (value.endit === 0) {
          dispatch(new DispatchAction('STOP_SONG'));
        }
      }, noteObjs).start(0);

      Tone.Transport.start();

      return () => {
        // console.log("inside the instruments function instrumentcontainer return tone.transport");
        Tone.Transport.cancel();
      };
    }

    return () => {};
  }, [notes, synth, dispatch]);

  return (
    <div>
      <TopNav name={instrument.name} />
      <div
        className={'bg-white absolute right-0 left-0'}
        style={{ top: '4rem' }}
      >
        <InstrumentComponent
          name={instrument.name}
          state={state}
          dispatch={dispatch}
          synth={synth}
          setSynth={setSynth}
        />
      </div>
    </div>
  );
};
