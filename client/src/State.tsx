// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { KalimbaInstrument } from './instruments/jwong1009';
import { jWongVisualizer } from './visualizers/jwong1009';
//import {} from './instruments/tdwlop'
import { WaveformVisualizer } from './visualizers/Waveform';
import { WaveformVisualizer2 } from './visualizers/tdwlop';
import { anliao2Visualizer } from './visualizers/anliao2';
import { tdwlop } from './instruments/tdwlop';
import { anliao2Instrument } from './instruments/anliao2';
import { elyssamariVisualizer } from './visualizers/elyssamari';
import {elyssamari} from './instruments/elyssamari';
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

const instruments = List([PianoInstrument, tdwlop, anliao2Instrument, elyssamari, KalimbaInstrument]);
const visualizers = List([WaveformVisualizer, WaveformVisualizer2, anliao2Visualizer, elyssamariVisualizer, jWongVisualizer]);

export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,

});
