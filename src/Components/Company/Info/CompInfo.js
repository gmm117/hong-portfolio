import webhwp_main from '../../../../imgs/webhwp_main.png';

export const GetCompInfo = (name) => {
    let cpInfo;
    
    switch(name) {
        case "Company-Hancom":
            cpInfo = HancomInfo();
            break;
        case "Company-OsstemImplant":
            break;
        case "Company-Bluebird":
            break;
    }

    return cpInfo;
};

const HancomInfo = () => {
    return {
        title : "웹한글/웹한글기안기 UI개발",
        sublist : {
            date : "Date: 2017.03 - 2020.03", 
            type : "Type: Hangul Ctrl WebApp",
            role : "Role: Front-End Developer", 
            skills : "Skills : HTML, CSS, Javascript, Markdown, intellij(git)", 
            url : {
                href : "http://m.etnews.com/20190228000187",
                value : "http://m.etnews.com/20190228000187"
            }, 
            contents : {
                content1 : "웹한글/웹한글기안기 관련 본문/프레임기능 중 UI/액션 기능 개발", 
                content2 : "웹한글기안기 컨트롤 API 기능제공"
            }
        },
        desc : "웹한글/웹한글기안기 본문/프레임 구성/기능개발에 참여하였습니다.",
        image : {
            title : {
                src : webhwp_main, 
                alt : "웹한글 메인화면"
            },
            thumnail1 : {
                src : webhwp_main, 
                alt : "웹한글 메인화면"
            }
        }
    };
};


