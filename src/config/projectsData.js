export const projectsData = [
  {
    id: 1,
    title: 'Project Name 1',
    description: '프로젝트에 대한 간단한 설명을 여기에 작성하세요. 어떤 기술을 사용했는지, 어떤 문제를 해결했는지 등을 적을 수 있습니다.',
    image: '/assets/project1.png',
    period: '2023.01 - 2023.03',
    members: '3명',
    github: 'https://github.com/your-username/project1',
    retrospective: 'https://your-blog.com/project1-retro',
    teamName: '팀 알파 (Team Alpha)',
    detailedDescription: '이 프로젝트는 사용자의 일상을 더욱 편리하게 만들기 위해 기획되었습니다. 주요 타겟은 2030 직장인이며, 일정 관리 및 알림 기능을 핵심으로 제공합니다. 프로젝트를 통해 프론트엔드 아키텍처 설계와 상태 관리의 중요성을 배웠습니다.',
    contribution: '프론트엔드 리드로서 UI/UX 디자인 시스템을 구축하고, React 기반의 컴포넌트 구조를 설계했습니다. 또한 메인 대시보드와 사용자 인증 로직을 전담하여 개발했습니다.',
    techStack: ['React', 'JavaScript', 'CSS Modules', 'Redux'],
    troubleshooting: [
      {
        issue: '데이터 로딩 시 화면 깜빡임 현상 발생',
        solution: 'Skeleton UI를 도입하고, React Query의 캐싱 기능을 활용하여 사용자 경험을 크게 개선했습니다.'
      },
      {
        issue: '복잡한 상태 구조로 인한 리렌더링 문제',
        solution: 'React.memo와 useCallback을 적절히 사용하여 불필요한 렌더링을 최적화하고 퍼포먼스를 30% 향상시켰습니다.'
      }
    ]
  },
  {
    id: 2,
    title: 'Project Name 2',
    description: '두 번째 프로젝트 설명입니다. 이 프로젝트의 핵심 기능과 본인의 역할에 대해 간단히 설명해주세요.',
    image: '/assets/project2.png',
    period: '2023.04 - 2023.06',
    members: '1명 (개인 프로젝트)',
    github: 'https://github.com/your-username/project2',
    retrospective: 'https://your-blog.com/project2-retro',
    teamName: '개인 프로젝트',
    detailedDescription: '백엔드 API와의 통신부터 프론트엔드 UI/UX까지 혼자서 기획하고 개발한 쇼핑몰 서비스입니다. 결제 시스템 연동과 상품 검색 필터링 기능에 중점을 두었습니다.',
    contribution: '기획, 디자인, 프론트엔드 개발, 배포까지 100% 단독 수행했습니다.',
    techStack: ['React', 'TypeScript', 'Styled-Components', 'Node.js'],
    troubleshooting: [
      {
        issue: '무한 스크롤 구현 중 메모리 누수 발생',
        solution: 'Intersection Observer API를 올바르게 클린업(cleanup) 처리하고, 리스트 가상화(Virtualization) 기술을 적용하여 해결했습니다.'
      }
    ]
  },
  {
    id: 3,
    title: 'Project Name 3',
    description: '세 번째 프로젝트 설명입니다. 사용자 인터페이스 개선 또는 성능 최적화 등 강조하고 싶은 부분을 작성하세요.',
    image: '/assets/project3.png',
    period: '2023.07 - 2023.09',
    members: '4명',
    github: 'https://github.com/your-username/project3',
    retrospective: 'https://your-blog.com/project3-retro',
    teamName: '태스크 마스터즈 (Task Masters)',
    detailedDescription: '팀 협업을 위한 칸반 보드 스타일의 태스크 관리 툴입니다. 드래그 앤 드롭 방식을 지원하며 실시간 업데이트 기능을 갖추고 있습니다.',
    contribution: '드래그 앤 드롭 기능(react-beautiful-dnd 사용) 구현 및 소켓을 활용한 실시간 데이터 동기화 파트를 담당했습니다.',
    techStack: ['React', 'Zustand', 'Socket.io', 'Tailwind CSS'],
    troubleshooting: [
      {
        issue: '여러 사용자가 동시 접속 시 드래그 위치 충돌',
        solution: '낙관적 업데이트(Optimistic Update)를 적용하고, 서버 상태와 클라이언트 상태 간의 싱크를 맞추는 로직을 개선했습니다.'
      }
    ]
  },
  {
    id: 4,
    title: 'Project Name 4',
    description: '네 번째 프로젝트 설명입니다. 이 프로젝트는 메인 페이지에는 보이지 않고 더보기 버튼을 눌러야 확인 가능합니다.',
    image: '/assets/project4.png',
    period: '2023.10 - 2023.12',
    members: '2명',
    github: 'https://github.com/your-username/project4',
    retrospective: 'https://your-blog.com/project4-retro',
    teamName: '데이터 인사이트',
    detailedDescription: '데이터 시각화를 주제로 한 대시보드 애플리케이션입니다. 다양한 차트 라이브러리를 활용하여 방대한 데이터를 직관적으로 보여줍니다.',
    contribution: 'D3.js 및 Chart.js를 활용한 다양한 그래프 렌더링 및 필터 컴포넌트 연동을 담당했습니다.',
    techStack: ['React', 'D3.js', 'Chart.js', 'Vite'],
    troubleshooting: [
      {
        issue: '대용량 데이터 차트 렌더링 시 브라우저 멈춤',
        solution: 'Web Worker를 활용하여 데이터 전처리를 백그라운드에서 처리하고 차트 렌더링 속도를 확보했습니다.'
      }
    ]
  }
];
