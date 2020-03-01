export const GetLinkName = (pathname) => {
    const arrLink = pathname.substr(1).split('/');
    if(arrLink.length === 0) {
        return "Home";
    } else if(arrLink.length === 1) {
        return arrLink[0] === "" ? "Home" : arrLink[0];
    }

    return arrLink.join(' > ');
};