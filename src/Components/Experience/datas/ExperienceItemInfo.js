import portfolio from '../../../../imgs/portfolio.png';
import more from '../../../../imgs/more.svg';
import github from '../../../../imgs/github.svg';
import link from '../../../../imgs/link.svg';

import blog from '../../../../imgs/blog.png';
import lightmarkdown_electron from '../../../../imgs/lightmarkdown_electron.png';

import typescriptImg from '../../../../imgs/typescript.png';

export const GetExpInfo = (name) => {
    let cpInfo = DefaultInfos;
    
    switch(name) {
        case "Experience-Apps":
            cpInfo = AppsInfos;
            break;
        case "Experience-Study":
            cpInfo = StudyInfos;
            break;
        case "Experience-Work":
            // cpInfo = WorkInfos;
            break;
    }

    return cpInfo;
};

const DefaultInfos = 
[
    {
        itemTitles : {
            bottitle : "준비중입니다.",
            revealtitle : "준비중입니다."
        },
        itemDesc : "",
        itemContents : {
            date : "",
            role : "",
            style : "", 
            skills : "",
            bundle : "", 
            others : ""
        },
        itemFooters : {
            online : {
                url : '',
                tooltip : ''
            },
            source : {
                url : '',
                tooltip : ''
            }
        },
        itemImages : {
            top : {
                top_src : null, 
                top_alt : ""
            },
            titlemore : {
                titlemore_src : null, 
                titlemore_alt : ""
            },
            onlineimg : {
                onlineimg_src : null,
                onlineimg_alt : ''
            },
            sourceimg : {
                sourceimg_src : null,
                sourceimg_alt : ''
            }
        }
    }
];

const AppsInfos = 
[
    {
        itemTitles : {
            bottitle : "Hong's Portfolio",
            revealtitle : "Hong's Portfolio"
        },
        itemDesc : "Front-End 개발을 하면서 알게된 기술을 바탕으로 PortFolio 개발",
        itemContents : {
            date : "Dec 2019 - Present",
            role : "Front-End Developer",
            style : "HTML, CSS, SCSS, Styled-Components", 
            skills : "Javascript, React, React Hooks",
            bundle : "Webpack, Babel", 
            others : "Eslint, GIT, VSCode"
        },
        itemFooters : {
            online : {
                online_url : 'https://gmm117.github.io/hong-portfolio/',
                online_tooltip : 'View Online'
            },
            source : {
                source_url : 'https://github.com/gmm117/hong-portfolio',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : portfolio, 
                top_alt : "Hong's Portfolio"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            onlineimg : {
                onlineimg_src : link,
                onlineimg_alt : 'View Online'
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    },
    {
        itemTitles : {
            bottitle : "Light MarkDown",
            revealtitle : "Light MarkDown"
        },
        itemDesc : "Electron과 웹브라우저에서 동작하는 Markdown Editor 개발",
        itemContents : {
            date : "Dec 2019 - Present",
            role : "Front-End Developer",
            style : "HTML, CSS", 
            skills : "Javascript",
            bundle : "Webpack, Babel", 
            others : "GIT, VSCode, Electron"
        },
        itemFooters : {
            online : {
                online_url : 'https://gmm117.github.io/light-mkeditor/',
                online_tooltip : 'View Online'
            },
            source : {
                source_url : 'https://github.com/gmm117/light-mkeditor',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : lightmarkdown_electron, 
                top_alt : "Light MarkDown"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            onlineimg : {
                onlineimg_src : link,
                onlineimg_alt : 'View Online'
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    },
    {
        itemTitles : {
            bottitle : "Hong's Blog",
            revealtitle : "Hong's Blog"
        },
        itemDesc : "jekyll을 통해 만든 개발 블로그",
        itemContents : {
            date : "Feb 2020 - Present",
            role : "Front-End Developer",
            style : "HTML, CSS", 
            skills : "Javascript",
            bundle : "gulp", 
            others : "GIT, VSCode, jekyll"
        },
        itemFooters : {
            online : {
                online_url : 'https://gmm117.github.io/',
                online_tooltip : 'View Online'
            },
            source : {
                source_url : 'https://github.com/gmm117/gmm117.github.io',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : blog, 
                top_alt : "Hong's Blog"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            onlineimg : {
                onlineimg_src : link,
                onlineimg_alt : 'View Online'
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    }
];

const StudyInfos = 
[
    {
        itemTitles : {
            bottitle : "typescript study",
            revealtitle : "typescript study"
        },
        itemDesc : "typescript study",
        itemContents : {
            date : "Nov 2019 - Present",
            role : "Front-End Developer",
            style : "HTML", 
            skills : "typescript",
            bundle : "parcel", 
            others : "GIT, VSCode"
        },
        itemFooters : {
            online : {
                online_url : null,
                online_tooltip : 'View Online'
            },
            source : {
                source_url : 'https://github.com/gmm117/typescript',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : typescriptImg,
                top_alt : "typescript study"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            onlineimg : {
                onlineimg_src : null,
                onlineimg_alt : 'View Online'
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    }
];