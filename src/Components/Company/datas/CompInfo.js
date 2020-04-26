import webhwp_main from '../../../../imgs/webhwp_main.png';
import webhwpctrl_main from '../../../../imgs/webhwpctrl_main.png';
import elecchart_1 from '../../../../imgs/elecchart_1.png';
import insurechart_1 from '../../../../imgs/insurechart_1.png';
import oldinsurechart_1 from '../../../../imgs/oldinsurechart_1.png';
import oldinsurepay_1 from '../../../../imgs/oldinsurepay_1.png';
import modemdevelop_1 from '../../../../imgs/modemdevelop_1.png';
import modemdevelop_2 from '../../../../imgs/modemdevelop_2.png';
import windowsce_device_1 from '../../../../imgs/windowsce_device_1.png';
import windowsmobile_device_1 from '../../../../imgs/windowsmobile_device_1.png';

export const GetCompInfo = (name) => {
    let cpInfo = DefaultCompInfos;
    
    switch(name) {
        case "Company-Hancom":
            cpInfo = HancomInfos;
            break;
        case "Company-OsstemImplant":
            cpInfo = OsstemImplantInfos;
            break;
        case "Company-Bluebird":
            cpInfo = BluebirdSoftInfos;
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
        title : "웹한글기안기 개발",
        sublist : {
            date : "Mar 2017 - Present", 
            type : "Hangul Ctrl WebApp",
            role : "Front-End Developer", 
            skills : "HTML, CSS, Javascript, Markdown", 
            tools : "intellij, git",
            url : {
                href : "https://m.etnews.com/20200214000099?obj=Tzo4OiJzdGRDbGFzcyI6Mjp7czo3OiJyZWZlcmVyIjtOO3M6NzoiZm9yd2FyZCI7czoxMzoid2ViIHRvIG1vYmlsZSI7fQ%3D%3D",
                value : "웹한글기안기"
            }, 
            contents : {
                content1 : "웹한글기안기 엔진모델/렌더링 관련 액션/기능개발, 프레임 관련 툴바/컨텍스트메뉴/다이얼로그/단축키 엔진연동 및 UI기능개발", 
                content2 : "웹한글기안기 고객지원 컨트롤 OpenAPI 제공기능 개발"
            }
        },
        image : {
            main : {
                main_src : webhwpctrl_main, 
                main_alt : "웹한글기안기 메인화면"
            },
            thumnail1 : {
                thumnail1_src : webhwpctrl_main, 
                thumnail1_alt : "웹한글기안기 메인화면"
            }
        }
    },
    {
        title : "웹한글 개발",
        sublist : {
            date : "Mar 2017 - Present", 
            type : "Hangul WebApp",
            role : "Front-End Developer", 
            skills : "HTML, CSS, Javascript", 
            tools : "intellij, git",
            url : {
                href : "http://it.chosun.com/site/data/html_dir/2019/03/06/2019030601116.html",
                value : "웹한글"
            }, 
            contents : {
                content1 : "웹한글 엔진모델/렌더링 관련 액션/기능개발, 프레임 관련 툴바/컨텍스트메뉴/다이얼로그/단축키 엔진연동 및 UI기능개발", 
                content2 : "웹한글 동시편집 액션,UI 업무지원 및 웹서비스 필요한 상태표시 기능추가"
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

const OsstemImplantInfos = 
[
    {
        title : "글로벌 치과용 프로그램 개발",
        sublist : {
            date : "Sep 2015 - Dec 2016", 
            type : "Medical Windows App",
            role : "Medical Insurance & Charge App Developer", 
            skills : "C#, WPF, NHibernate, WCF, Spring", 
            tools : "VS2013, GIT",
            url : {
                href : "http://www.dentalarirang.com/news/articleView.html?idxno=25815",
                value : "OneClick"
            }, 
            contents : {
                content1 : "치과에서 진료를 한 후 프로그램 중 전자차트/보험차트에 진료입력, 입력된 내역 수정,삭제 기능을 제공하는 모듈개발", 
                content2 : "치과진료 입력내용을 바탕으로 심사평가원에 보험청구하는 모듈개발(보험청구,EDI)"
            }
        },
        image : {
            main : {
                main_src : elecchart_1, 
                main_alt : "글로벌 치과용 프로그램 OneClick 전자차트 메인화면"
            },
            thumnail1 : {
                thumnail1_src : insurechart_1, 
                thumnail1_alt : "글로벌 치과용 프로그램 OnePMS 보험차트 메인화면"
            }
        }
    },
    {
        title : "국내 치과용 프로그램 개발",
        sublist : {
            date : "Apr 2013 - Dec 2016", 
            type : "Medical Windows App",
            role : "Medical Insurance & Charge App Developer", 
            skills : "COM, WTL7.0/9.0, ATL, C/C++", 
            tools : "VS2013/6.0, GIT, Sourcesafe",
            url : {
                href : "http://www.dentalnews.or.kr/news/article.html?no=23828",
                value : "하나로/두번에"
            }, 
            contents : {
                content1 : "심사평가원 국가기관에서 보험제도 변경될 때마다 자사에서 제공하는 프로그램에 진료/청구 기능개발", 
                content2 : "심사평가원 국가기관에서 수신 받을 수 있는 전자문서(EDI)를 수신받아서 사용자에 보여주는 기능개발"
            }
        },
        image : {
            main : {
                main_src : oldinsurechart_1, 
                main_alt : "국내 치과용 프로그램 하나로/두번에 보험차트 메인화면"
            },
            thumnail1 : {
                thumnail1_src : oldinsurepay_1, 
                thumnail1_alt : "국내 치과용 프로그램 하나로/두번에 보험청구 메인화면"
            }
        }
    }
];

const BluebirdSoftInfos = 
[
    {
        title : "단말기 모뎀 디바이스 개발/이동통신사 품질보증",
        sublist : {
            date : "Aug 2010 - Apr 2012", 
            type : "Wince/WindowsMobile System App",
            role : "Embedded System Developer", 
            skills : "C, C++, API, MFC", 
            tools : "VS2015, PlatformBuilder, CVS",
            url : {
                href : "http://www.digitaltoday.co.kr/news/articleView.html?idxno=23131",
                value : "BPL-10"
            }, 
            contents : {
                content1 : "WindowsCE 5.0 단말기(BPL-10)에 내장된 모뎀디바이스 개발 및 품질보증 업무 담당(SKT,KT)", 
                content2 : "WindowsCE 5.0, Windows Mobile 6.5 단말기(BIP-7000lite, BM-170) 모뎀디바이스 개발"
            }
        },
        image : {
            main : {
                main_src : modemdevelop_1, 
                main_alt : "BPL-10 모뎀디바이스 개발 및 품질보증 단말기 메인화면"
            },
            thumnail1 : {
                thumnail1_src : modemdevelop_2, 
                thumnail1_alt : "WinCE, WindowsMobile 모뎀디바이스 개발 단말기 메인화면"
            }
        }
    },
    {
        title : "Wince, WindowsMobile 단말기 개발",
        sublist : {
            date : "Jun 2010 - Apr 2012", 
            type : "Wince/WindowsMobile System App",
            role : "Embedded System Developer", 
            skills : "C, C++, API, MFC", 
            tools : "VS2015, PlatformBuilder, CVS",
            url : {
                href : "http://bluebirdcorp.com/products/Mobile-Computers/Handheld-Computers/BIP7000",
                value : "BPL-10"
            }, 
            contents : {
                content1 : "WindowsCE 5.0 단말기(BPL-10)를 이용한 현장 결제 기능 개발 및 단말기 유지보수", 
                content2 : "Windows Mobile 5.1/6.1/65060/6530 버전의 단말기 개발"
            }
        },
        image : {
            main : {
                main_src : windowsce_device_1, 
                main_alt : "WinCE 5.0 단말기 메인화면"
            },
            thumnail1 : {
                thumnail1_src : windowsmobile_device_1, 
                thumnail1_alt : "Windows Mobile 5.1/6.1/65060/6530 단말기 메인화면"
            }
        }
    }
];

