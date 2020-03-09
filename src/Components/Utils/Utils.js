import {BaseURL} from './Define';

export const GetLinkName = (pathname) => {
    const newpathname = pathname.replace(BaseURL, "");
    const arrLink = newpathname.substr(1).split(/[\/-]/);
    if(arrLink.length === 0) {
        return "Home";
    } else if(arrLink.length === 1) {
        return arrLink[0] === "" ? "Home" : arrLink[0];
    }

    return arrLink.join(' > ');
};