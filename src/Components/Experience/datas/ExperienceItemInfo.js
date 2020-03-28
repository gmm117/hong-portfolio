import portfolio from '../../../../imgs/portfolio.png';
import more from '../../../../imgs/more.svg';
import github from '../../../../imgs/github.svg';
import link from '../../../../imgs/link.svg';
import patents from '../../../../imgs/patents.svg';

import blog from '../../../../imgs/blog.png';
import lightmarkdown_electron from '../../../../imgs/lightmarkdown_electron.png';

import typescriptImg from '../../../../imgs/typescript.png';
import webpackImg from '../../../../imgs/webpack.png';
import reactImg from '../../../../imgs/react.png';
import react_typescriptImg from '../../../../imgs/react_typescript.png';
import reduxImg from '../../../../imgs/redux.png';

import patentsTopImg from '../../../../imgs/patents.jpg';

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
            cpInfo = WorksInfos;
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
            bottitle : "React study",
            revealtitle : "React study"
        },
        itemDesc : "React study",
        itemContents : {
            date : "Jun 2019 - Sep 2019",
            role : "Front-End Developer",
            style : "Handlebars, CSS", 
            skills : "React, CRA",
            bundle : "Webpack", 
            others : "GIT, VSCode"
        },
        itemFooters : {
            source : {
                source_url : 'https://github.com/supreme-developer/react2/',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : reactImg,
                top_alt : "React study"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    },
    {
        itemTitles : {
            bottitle : "Typescript study",
            revealtitle : "Typescript study"
        },
        itemDesc : "Typescript study",
        itemContents : {
            date : "Nov 2019 - Nov 2019",
            role : "Front-End Developer",
            style : "HTML", 
            skills : "Typescript",
            bundle : "Parcel", 
            others : "GIT, VSCode"
        },
        itemFooters : {
            source : {
                source_url : 'https://github.com/gmm117/typescript',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : typescriptImg,
                top_alt : "Typescript study"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    },
    {
        itemTitles : {
            bottitle : "TSX study",
            revealtitle : "TSX study"
        },
        itemDesc : "React & Typescript study",
        itemContents : {
            date : "Feb 2020 - Feb 2020",
            role : "Front-End Developer",
            style : "HTML, CSS, SCSS", 
            skills : "TSX",
            bundle : "Webpack, Babel", 
            others : "GIT, VSCode, eslint"
        },
        itemFooters : {
            source : {
                source_url : 'https://github.com/gmm117/react-typescript',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : react_typescriptImg,
                top_alt : "Typescript study"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    },
    {
        itemTitles : {
            bottitle : "Webpack study",
            revealtitle : "Webpack study"
        },
        itemDesc : "Webpack study",
        itemContents : {
            date : "Nov 2019 - Nov 2019",
            role : "Front-End Developer",
            style : "Handlebars, CSS", 
            skills : "Javascript",
            bundle : "Webpack", 
            others : "GIT, VSCode"
        },
        itemFooters : {
            source : {
                source_url : 'https://github.com/gmm117/webpack-exp',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : webpackImg,
                top_alt : "Webpack study"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    },
    {
        itemTitles : {
            bottitle : "Redux study",
            revealtitle : "Redux study"
        },
        itemDesc : "Redux study",
        itemContents : {
            date : "Jun 2019 - Jun 2019",
            role : "Front-End Developer",
            style : "HTML", 
            skills : "Redux",
            others : "GIT, VSCode"
        },
        itemFooters : {
            source : {
                source_url : 'https://github.com/supreme-developer/redux',
                source_tooltip : 'View Source'
            }
        },
        itemImages : {
            top : {
                top_src : reduxImg,
                top_alt : "Redux study"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            sourceimg : {
                sourceimg_src : github,
                sourceimg_alt : 'View Source'
            }
        }
    }
];

const WorksInfos = 
[
    {
        itemTitles : {
            bottitle : "웹 전자 문서 편집 동작 방법",
            revealtitle : "웹 전자 문서 편집 동작 방법"
        },
        itemDesc : "(특허)크로스 브라우징을 지원하는 웹 전자 문서 편집 장치 및 이의 동작 방법",
        itemContents : {
            date : "Jun 2018 - Jan 2020",
            role : "Front-End Developer",
            type : "특허",
            program : "웹한글 / 웹한글기안기",
            desc : "브라우저 widget(컨트롤) 상태/업데이트 로직으로 특허등록"
        },
        itemFooters : {
            patents : {
                patents_url : 'http://kportal.kipris.or.kr/kportal/search/total_search.do',
                patents_tooltip : 'Patents View'
            }
        },
        itemImages : {
            top : {
                top_src : patentsTopImg,
                top_alt : "React study"
            },
            titlemore : {
                titlemore_src : more, 
                titlemore_alt : "상세보기"
            },
            patentsimg : {
                patentsimg_src : patents,
                patentsimg_alt : 'Patents View'
            }
        }
    }
];