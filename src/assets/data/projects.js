const projects = [
    {
        id: 5,
        title: 'GirlsPlanet999',
        period: `2021.05 ~ 2021.06`,
        team: `Frontend 3명 / Backend 2명`,
        description: [
            `NCSoft에서 진행한 글로벌 아이돌 발굴 오디션 프로그램 사이트입니다.`,
        ],
        whatIDid: [
            `Youtube 및 mp4 영상 플레이어`,
            `랭킹 차트 구현`,
            `카운트 다운`,
            `다국어 지원`,
        ],
        techStack: ['React', 'emotion', 'gsap'],
        links: {
            github: '',
            posting: '',
        },
    },
    {
        id: 4,
        title: `My Personal Website`,
        period: `2020.12 ~`,
        team: `Frontend 1명`,
        description: [
            `블로그와 이력서를 하나의 웹페이지에서 관리하기 위해 민든 개인 웹사이트 입니다.`,
            `21.06.24 일자로 Next.js로 변경되었습니다.`,
        ],
        whatIDid: [
            `기획, 디자인`,
            `프론트엔드 전반적인 작업`,
            `Gatsby.js를 이용한 마크다운 블로그 포스팅 구현`,
            `gsap을 활용한 애니메이션 효과`,
        ],
        techStack: [
            'React',
            'Next.js',
            'Gatsby.js',
            'styled-components',
            'gsap',
        ],
        links: {
            github: 'https://github.com/wontaezia/portfolio',
            posting: '',
        },
    },
    {
        id: 3,
        title: `책메이트 (Checkmate)`,
        period: `2020.10 ~`,
        team: `Full-Stack 4명`,
        description: [
            `독서 경험 관리 플랫폼의 서비스 기획부터 배포까지 풀스택
  개발자로 참여하였습니다.`,
            `현재 이 서비스는 계속해서 개발 중에 있고, 개인
  서재관리(구현완료), 모임기능, 도서 큐레이팅 기능을 추가로
  구현할 예정입니다.`,
        ],
        whatIDid: [
            `서비스 기획, 디자인 (25%)`,
            `메인 페이지 프론트 및 백엔드 API 구현`,
            `좋아요 기능 프론트 및 백엔드 API 구현`,
            `Google Books API를 활용한 도서 검색 기능`,
        ],
        techStack: [
            'React',
            'Next.js',
            'styled-components',
            'Node.js',
            'MySQL',
            'AWS (EC2, RDS, Lambda)',
        ],
        links: {
            github: '',
            posting: '/blog/checkmate',
        },
    },
    {
        id: 2,
        title: `Arket Clone`,
        period: `2020.10 (2주)`,
        team: `Frontend 4명 / Backend 2명`,
        description: [
            `에이치엔엠(H&M)의 서브 고급화 브랜드 아르켓 온라인스토어 클론
  프로젝트입니다.`,
        ],
        whatIDid: [
            `CRA를 활용한 프론트 엔드 작업 환경 구축`,
            `메인 페이지 프론트 엔드 작업`,
            `리뷰 페이지 기획 및 CRUD 기능 추가 구현`,
            `Redux를 활용한 전체 상태 관리`,
            `Git-rebase, squash를 사용한 git commit 관리`,
        ],
        techStack: ['React', 'styled-components', 'Redux'],
        links: {
            github: 'https://github.com/wontaezia/Arket-clone',
            posting: '/blog/arket-clone',
        },
    },
    {
        id: 1,
        title: `Line Friends Store Clone`,
        period: `2020.9 (2주)`,
        team: `Frontend 4명 / Backend 2명`,
        description: [
            `모바일 메신저 ‘라인’의 캐릭터 상품을 구매할 수 있는 라인
      프렌즈 온라인 스토어 클론 코딩 프로젝트 입니다.`,
        ],
        whatIDid: [
            `상세 페이지 프론트엔드 작업`,
            `배송 데이터 차트 구현`,
            `Price 데이터로 적립금, 옵션 선택 시 총합 계산`,
            `옵션 선택 기능 및 수량 추가에 따른 가격 계산 기능 구현`,
            `Rating 및 리뷰 기능`,
        ],
        techStack: ['React', 'SASS'],
        links: {
            github: 'https://github.com/wontaezia/BT21-clone',
            posting: '/blog/line-friends-clone',
        },
    },
];

export default projects;
