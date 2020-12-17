import { RacingCarGameViewModel } from './viewModels';

import { RacingCarGameView } from './views';

const gameViewModel = new RacingCarGameViewModel();

const gameView = new RacingCarGameView(gameViewModel);
