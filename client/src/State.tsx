// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
//import {} from './instruments/tdwlop'
import { WaveformVisualizer } from './visualizers/Waveform';
import { WaveformVisualizer2 } from './visualizers/tdwlop';
import { anliao2Visualizer } from './visualizers/anliao2';
import { tdwlop } from './instruments/tdwlop';
import { anliao2Instrument } from './instruments/anliao2';
//import { tdwlop2 } from './instruments/tdwlop2';
//import {} from '../../server/src/Database';
/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument, tdwlop, anliao2Instrument]);
const visualizers = List([WaveformVisualizer, WaveformVisualizer2, anliao2Visualizer]);

export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,

});
