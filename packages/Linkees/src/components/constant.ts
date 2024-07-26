import website from '../assets/website.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.jpg';
import youtube from '../assets/youtube.jpeg';
import dribbble from '../assets/dribbble.png';
import github from '../assets/github.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';
import portfolio from '../assets/portfolio.jpg';

import { CHANNEL_TYPES } from '../constants';

export const CHANNEL_TYPE_VS_COVER_IMAGE = {
  [CHANNEL_TYPES.WEBSITE]: portfolio,
  [CHANNEL_TYPES.INSTAGRAM]: instagram,
  [CHANNEL_TYPES.LINKEDIN]: linkedin,
  [CHANNEL_TYPES.YOUTUBE]: youtube,
  [CHANNEL_TYPES.DRIBBLE]: dribbble,
  [CHANNEL_TYPES.GITHUB]: github,
  [CHANNEL_TYPES.TELEGRAM]: telegram,
  [CHANNEL_TYPES.TWITTER]: twitter,
  [CHANNEL_TYPES.PORTFOLIO]: portfolio,
};
