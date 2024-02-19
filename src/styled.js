import { createGlobalStyle } from 'styled-components';

import CygreBlack from '/src/assets/fonts/Cygre-Black.ttf';
import CygreExtraBold from '/src/assets/fonts/Cygre-ExtraBoldIt.ttf';
import Gilroy from '/src/assets/fonts/Gilroy-Medium.ttf';

export default createGlobalStyle`

    @font-face {
    font-family: 'Cygre-Black';
    src: url(${CygreBlack});
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'CygreExtraBold';
    src: url(${CygreExtraBold});
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'Gilroy';
    src: url(${Gilroy});
    font-weight: normal;
    font-style: normal;
    }
`