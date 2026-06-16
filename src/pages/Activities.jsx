import React from 'react';
import { Award, Compass, Edit } from 'lucide-react';

const Activities = () => {
  const activitiesList = [
    {
      title: 'LG유플러스 유레카 SW 교육과정',
      date: '2024.10 - 2025.01',
      icon: <Award size={20} />,
      description: '실무 연계형 풀스택 소프트웨어 개발자 교육 과정에 참여하여 최신 아키텍처 및 웹 표준 기술을 습득했습니다. 최종 융합 프로젝트 경진대회에서 영화 리뷰 솔루션 ‘PopFlix’ 팀의 메인 개발로 기여하여 최우수작으로 선정되었습니다.'
    },
    {
      title: '대학교 소프트웨어학과 경진대회',
      date: '2022.09 - 2022.12',
      icon: <Award size={20} />,
      description: '학습 효율 극대화 자격증 학습 플랫폼인 ‘대기만성’을 기획 및 개발하여 본선에서 입상하는 성과를 거두었습니다. 크롤링과 OCR을 접목해 데이터 확보 자동화를 수행했습니다.'
    },
    {
      title: '기술 블로그 운영 및 지식 공유',
      date: '2021.11 - 현재',
      icon: <Edit size={20} />,
      description: '티스토리(Tistory)와 벨로그(Velog)를 활용해 웹 개발 기술 지식과 트러블슈팅 사례를 활발히 공유하고 있습니다. 특히 페이지네이션 구현, 무한 스크롤, React 상태 관리 등 누군가에게 도움이 될 수 있는 글을 연재하고 있습니다.'
    },
    {
      title: '알고리즘 및 백엔드 스터디',
      date: '2022.01 - 현재',
      icon: <Compass size={20} />,
      description: '안정적인 비즈니스 로직 설계를 위해 지속적으로 자료구조 및 알고리즘 풀이 공부를 수행하고 있습니다. 문제 해결 능력을 기르고, Spring Boot 및 DB 최적화에 대한 주간 정기 스터디를 주도했습니다.'
    }
  ];

  return (
    <div className="content-wrapper">
      <section className="activities-section">
        <h1 className="page-title">Activities</h1>
        <p className="page-subtitle">도전하고 성장하며 지식을 공유해 온 활동들입니다.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {activitiesList.map((activity, idx) => (
            <div key={idx} className="card" style={{ padding: '2rem', flexDirection: 'row', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ 
                backgroundColor: 'var(--primary-light)', 
                color: 'var(--primary-color)', 
                padding: '0.85rem', 
                borderRadius: 'var(--radius)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {activity.icon}
              </div>
              <div style={{ flexGrow: 1 }}>
                <span className="card-date" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.25rem' }}>
                  {activity.date}
                </span>
                <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.75rem 0', color: 'var(--text-color)' }}>
                  {activity.title}
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.65' }}>
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;
