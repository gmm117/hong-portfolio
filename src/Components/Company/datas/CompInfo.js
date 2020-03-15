import webhwp_main from '../../../../imgs/webhwp_main.png';

export const GetCompInfo = (name) => {
    let cpInfo = DefaultCompInfos;
    
    switch(name) {
        case "Company-Hancom":
            cpInfo = HancomInfos;
            break;
        case "Company-OsstemImplant":
            break;
        case "Company-Bluebird":
            break;
    }

    return cpInfo;
};

const DefaultCompInfos = 
[
    {
        title : "준비중입니다.",
        sublist : {
            date : "", 
            type : "",
            role : "", 
            skills : "", 
            url : {
                href : "",
                value : ""
            }, 
            contents : {
                content1 : null, 
                content2 : null
            }
        },
        desc : "",
        image : {
            main : {
                main_src : null, 
                main_alt : ""
            },
            thumnail1 : {
                thumnail1_src : null, 
                thumnail1_alt : ""
            }
        }
    }
];

const HancomInfos = 
[
    {
        title : "웹한글/웹한글기안기 UI개발",
        sublist : {
            date : "2017.03 - 2020.03", 
            type : "Hangul Ctrl WebApp",
            role : "Front-End Developer", 
            skills : "HTML, CSS, Javascript, Markdown", 
            tools : "intellij, git",
            url : {
                href : "http://m.etnews.com/20190228000187",
                value : "웹한글/웹한글기안기"
            }, 
            contents : {
                content1 : "웹한글/웹한글기안기 관련 본문/프레임기능 중 UI/액션 기능 개발", 
                content2 : "웹한글기안기 컨트롤 API 기능제공"
            }
        },
        image : {
            main : {
                main_src : webhwp_main, 
                main_alt : "웹한글 메인화면"
            },
            thumnail1 : {
                thumnail1_src : webhwp_main, 
                thumnail1_alt : "웹한글 메인화면"
            }
        }
    }
];


