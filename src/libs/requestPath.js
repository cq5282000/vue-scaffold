import * as env from '../configs/env';
import envConst from '../configs/envConst';

export default (url) => {
    switch(envConst) {
        case env.DEVELOPMENT:
            return `.${url}.json`;
        default:
            return url;
    }
}