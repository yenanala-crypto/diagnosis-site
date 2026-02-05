// app.js - 43문항: 현재수준 + 이상적수준(요구수준) 2중 체크 + Gap 분석
// Gap = 이상적(요구) - 현재(숙련). Gap이 클수록 교육 필요도가 큼

const questions = [
  { id: "01", domain: "공통", competency: "NCS 활용 역량", text: "직무와 관련된 NCS 및 NCS 기반자격에 대해 이해하고, 일학습병행 훈련과정 개발에 활용할 수 있다." },
  { id: "02", domain: "공통", competency: "공동훈련센터 운영규정 활용역량", text: "일학습병행 사업과 공동훈련센터 운영에 관련된 규정을 이해하고 사업에 활용할 수 있다." },
  { id: "03", domain: "공통", competency: "기획 역량", text: "현재 업무의 문제점을 분석하여 실현 가능한 목표를 설정하고, 세부적인 실행 전략과 효과적인 업무수행 계획을 수립할 수 있다." },
  { id: "04", domain: "공통", competency: "네트워킹 역량", text: "공동훈련센터의 원활한 운영을 위해서 필요한 사업관계자(고용노동부, 산업인력공단 등) 및 외부 전문가(강사 포함)를 파악하고 지속적으로 관계를 유지해나갈 수 있다." },
  { id: "05", domain: "공통", competency: "문서작성 역량", text: "다양한 프로그램을 활용하여 목적에 맞는 내용을 체계적으로 정리하여 문서를 작성할 수 있다." },
  { id: "06", domain: "공통", competency: "문제해결 역량", text: "업무에서 발생하는 문제와 현상을 파악하고 그 원인을 조사·분석하여 합리적인 해결방안을 선택할 수 있다." },
  { id: "07", domain: "공통", competency: "정보수집 및 관리역량", text: "다양한 방법으로 업무에 필요한 자료를 수집하고 가공하여 의미있는 정보를 만들고 지속적으로 유지관리할 수 있다." },
  { id: "08", domain: "공통", competency: "커뮤니케이션 역량", text: "학습근로자 및 주요 이해관계자들과의 상호작용에 있어서 자신을 분명하게 표현하고 경청할 수 있다." },
  { id: "09", domain: "공통", competency: "타인 존중 역량", text: "상대방의 다양한 견해를 인정하고 의견을 존중할 수 있다." },
  { id: "10", domain: "공통", competency: "프로젝트관리 역량", text: "프로젝트관리 과업의 성공적인 수행을 위하여 자원을 적절히 배분하고 일정대로 추진하고 관리할 수 있다." },
  { id: "11", domain: "공통", competency: "훈련규정 및 운영지침 활용역량", text: "현장훈련과 현장외훈련 운영을 위한 규정을 이해하고 훈련과정 개발 및 모니터링, 지원에 활용할 수 있다." },

  { id: "12", domain: "사업관리자", competency: "경영 및 인력현황 분석역량", text: "학습기업의 사업현황, 인력현황 등을 분석하여 인재육성을 위한 시사점을 찾아낼 수 있다." },
  { id: "13", domain: "사업관리자", competency: "성과관리역량", text: "공동훈련센터 성과관리에 필요한 전반적인 대응 전략을 수립하고, 성과를 관리할 수 있다." },
  { id: "14", domain: "사업관리자", competency: "인사관리역량", text: "공동훈련센터의 목표를 달성하기 위해서 적합한 인력을 채용하고 업무를 부여하며 효율적으로 근무할 수 있도록 지원 및 관리할 수 있다." },
  { id: "15", domain: "사업관리자", competency: "인재육성 역량", text: "공동훈련센터의 구성원이 지속적으로 성장할 수 있도록 성장욕구를 자극하고 체계적으로 교육훈련을 지원할 수 있다." },
  { id: "16", domain: "사업관리자", competency: "프리젠테이션 역량", text: "중요 보고 내용을 청중 앞에서 자신감 있게 논리적으로 표현할 수 있다." },
  { id: "17", domain: "사업관리자", competency: "회계정산 대응역량", text: "공동훈련센터 회계정산 기준과 절차를 이해하고 현장실사, 회계감사에 대응할 수 있다." },

  { id: "18", domain: "사업운영자", competency: "e나라도움 활용역량", text: "예산집행 행정업무 처리를 위해서 e나라도움의 기능 및 구성을 이해하고 활용할 수 있다." },
  { id: "19", domain: "사업운영자", competency: "HRD-Net(LMS) 활용역량", text: "원활한 교육훈련관리를 위해서 HRD-Net, LMS의 기능 및 구성을 이해하고 활용할 수 있다." },
  { id: "20", domain: "사업운영자", competency: "PDMS 활용역량", text: "원활한 교육훈련관리를 위해서 PDMS의 기능 및 구성을 이해하고 활용할 수 있다." },
  { id: "21", domain: "사업운영자", competency: "사업홍보 역량", text: "일학습병행 사업에 참여기업을 발굴하기 위해 다양한 홍보 및 마케팅 방법을 활용할 수 있다." },
  { id: "22", domain: "사업운영자", competency: "퍼실리테이션 역량", text: "미팅 또는 회의가 원활하게 운영되어 목표가 달성될 수 있도록 조직화하고 운영할 수 있다." },
  { id: "23", domain: "사업운영자", competency: "회계와 경리실무역량", text: "공동훈련센터 회계기준에 따라서 비용을 정산할 수 있다." },
  { id: "24", domain: "사업운영자", competency: "훈련비용 신청·관리 역량", text: "훈련 운영에 필요한 비용신청 항목과 절차별 서류를 파악하고 비용신청 기관이 적절하게 비용을 수취하도록 지원하고 관리할 수 있다." },
  { id: "25", domain: "사업운영자", competency: "협상역량", text: "목표하는 바를 달성하기 위하여 조직 내·외부 고객을 설득하여 쌍방이 만족할 수 있는 방향으로 거래를 성사시킬 수 있다." },

  { id: "26", domain: "HRD컨설턴트", competency: "HRD 전문지식 활용역량", text: "HRD에 대한 전반적인 지식과 정보를 이해하고 HRD활동에 적용할 수 있다." },
  { id: "27", domain: "HRD컨설턴트", competency: "인재육성전략수립역량", text: "학습기업의 인력을 체계적으로 육성하기 위한 전략과 계획을 수립할 수 있다." },
  { id: "28", domain: "HRD컨설턴트", competency: "직무분석 역량", text: "직무에서의 권한과 역할, 업무수행 범위 등 직무에 관한 정보를 체계적으로 수집하고 분석할 수 있다." },
  { id: "29", domain: "HRD컨설턴트", competency: "통계분석 역량", text: "업무에서 수집한 자료를 엑셀, SPSS 등 통계 프로그램을 활용하여 유용한 정보로 가공 및 분석할 수 있다." },

  { id: "30", domain: "경력개발상담가", competency: "경력개발 지원역량", text: "학습근로자가 조직에서 자신의 비전과 목표를 수립하고 이를 달성하기 위한 경력계획을 수립할 수 있도록 정보와 도움을 제공할 수 있다." },
  { id: "31", domain: "경력개발상담가", competency: "조직 적응 지원역량", text: "학습근로자가 조직문화를 이해하고 조기에 적응할 수 있도록 도움을 제공할 수 있다." },
  { id: "32", domain: "경력개발상담가", competency: "학습근로자 수료관리 역량", text: "학습근로자에게 상담 및 고충 처리 서비스를 제공하여, 훈련과정을 무사히 마칠 수 있도록 지원할 수 있다." },

  { id: "33", domain: "교육과정개발자", competency: "교육 요구 및 수요조사 역량", text: "설문, 인터뷰 등의 기법을 활용하여 학습기업과 학습근로자에게 필요한 교육내용을 선별하고 수요를 파악할 수 있다." },
  { id: "34", domain: "교육과정개발자", competency: "교육과정 개발역량", text: "교육훈련에 필요한 훈련 자료, 학습모듈, 유인물, 책, PPT, 동영상 등을 선정 또는 작성할 수 있다." },
  { id: "35", domain: "교육과정개발자", competency: "교육과정 설계역량", text: "NCS기반 훈련설계 프로세스를 적용하여 학습기업에게 필요한 훈련교과목을 편성하고 학습개요서를 작성할 수 있다." },

  { id: "36", domain: "교육과정운영자", competency: "강사 및 외부전문가 관리역량", text: "학습기업과 학습근로자에게 필요한 강사 및 외부전문가를 선별하고 원활하게 역할을 수행할 수 있도록 관리할 수 있다." },
  { id: "37", domain: "교육과정운영자", competency: "교육훈련 운영계획 수립 역량", text: "원활한 교육운영이 가능하도록 훈련과정 운영 일정표, 세부훈련일정 시간표 등을 작성할 수 있다." },
  { id: "38", domain: "교육과정운영자", competency: "모니터링 및 피드백 역량", text: "단계별 방문(초기, 진행, 종료)을 통해 학습기업에서 진행되는 교육훈련의 문제점을 진단 및 피드백하고 부정훈련을 방지할 수 있다." },
  { id: "39", domain: "교육과정운영자", competency: "평가 지원역량", text: "내·외부 평가 계획과 행정절차에 따라서 평가가 원활하게 진행될 수 있도록 학습기업과 학습근로자를 지원할 수 있다." },
  { id: "40", domain: "교육과정운영자", competency: "평가도구 설계·개발역량", text: "훈련과정에 포함된 능력단위에 대한 학습근로자의 학습목표 달성 여부를 측정할 수 있는 평가도구와 문항을 설계하고 개발할 수 있다." },
  { id: "41", domain: "교육과정운영자", competency: "학습 동기 촉진역량", text: "학습근로자들이 교육훈련에 적극적으로 참여할 수 있도록 지원할 수 있다." },
  { id: "42", domain: "교육과정운영자", competency: "훈련인프라 관리역량", text: "교육훈련에 필요한 시설, 장비, 도구 등을 파악하고 원활하게 활용할 수 있도록 관리할 수 있다." },
  { id: "43", domain: "교육과정운영자", competency: "훈련인프라 활용역량", text: "보유한 시설 장비를 적절하게 활용하고 시설장비를 목표시간 대비 활용할 수 있도록 관리할 수 있다." },
];

// 2026 커리큘럼 기반 과정 목록 + 키워드(초안)
const COURSES = [
  { code:"1-1", category:"사업운영 및 조직관리", name:"일학습병행 첫걸음", hours:"1일(7H)", level:["신규"],
    keywords:["일학습병행","사업개요","역할","규정","운영지침","프로세스","기초","행정"] },
  { code:"1-2", category:"사업운영 및 조직관리", name:"[법인별] 사업회계실무", hours:"1일(7H)", level:["신규","실무"],
    keywords:["회계","정산","집행","증빙","예산","감사","지출","회계감사","정산기준"] },
  { code:"1-3", category:"사업운영 및 조직관리", name:"AI를 활용한 문서 작성 실무", hours:"1일(7H)", level:["실무"],
    keywords:["AI","문서","보고서","기획서","회의록","공문","요약","작성","업무자동화","프롬프트"] },
  { code:"1-4", category:"사업운영 및 조직관리", name:"일학습병행 성과관리 리더십", hours:"1일(7H)", level:["숙련"],
    keywords:["성과관리","지표","KPI","성과분석","리더십","성과개선","목표설정","성과보고"] },
  { code:"1-5", category:"사업운영 및 조직관리", name:"일학습병행 전략적 조직 운영", hours:"1일(7H)", level:["책임"],
    keywords:["전략","조직운영","거버넌스","의사결정","중장기계획","성과체계","조직관리"] },

  { code:"2-1", category:"학습기업 및 학습근로자 관리", name:"학습기업 발굴 및 관리", hours:"1일(7H)", level:["신규","실무"],
    keywords:["학습기업","기업발굴","홍보","모집","파트너십","관리","네트워킹","영업","설명회"] },
  { code:"2-2", category:"학습기업 및 학습근로자 관리", name:"학습근로자 면담 스킬", hours:"1일(7H)", level:["숙련"],
    keywords:["학습근로자","면담","상담","코칭","의사소통","갈등","고충","동기부여","피드백"] },
  { code:"2-3", category:"학습기업 및 학습근로자 관리", name:"일학습병행 비즈니스 협상 전략", hours:"1일(7H)", level:["책임"],
    keywords:["협상","설득","조정","이해관계자","대외협력","합의","커뮤니케이션","계약"] },

  { code:"3-1", category:"훈련과정 운영 및 지원", name:"일학습병행 HRD-Net 기초실습", hours:"2일(12H)", level:["신규"],
    keywords:["HRD-Net","LMS","시스템","등록","출결","수료","훈련관리","운영실습","전산"] },
  { code:"3-2", category:"훈련과정 운영 및 지원", name:"일학습병행과정개발(PDMS) 이해", hours:"1일(7H)", level:["신규"],
    keywords:["PDMS","과정개발","훈련과정","모듈","NCS","능력단위","편성","개발절차","학습자료"] },
  { code:"3-3A", category:"훈련과정 운영 및 지원", name:"[유형별] 일학습병행 훈련품질 관리(재직/재학)", hours:"2일(12H)", level:["실무"],
    keywords:["훈련품질","품질관리","모니터링","점검","부정훈련","평가","피드백","운영관리","재직","재학"] },
  { code:"3-3B", category:"훈련과정 운영 및 지원", name:"[유형별] 일학습병행 훈련품질 관리(도제)", hours:"2일(12H)", level:["실무"],
    keywords:["훈련품질","품질관리","모니터링","점검","부정훈련","평가","피드백","운영관리","도제"] },
  { code:"3-4", category:"훈련과정 운영 및 지원", name:"사례로 풀어보는 일학습병행 인사노무", hours:"1일(7H)", level:["숙련"],
    keywords:["인사노무","근로","노무","노동법","사례","분쟁","규정","리스크","인사"] },
  { code:"3-5", category:"훈련과정 운영 및 지원", name:"일학습병행 산업안전 및 위험성 관리", hours:"1일(7H)", level:["책임"],
    keywords:["산업안전","위험성","안전관리","리스크","점검","사고예방","법규","안전"] },

  { code:"4-1", category:"공통 업무역량", name:"일학습병행 현장에서 활용하는 AI 스마트 워킹", hours:"1일(7H)", level:["전체"],
    keywords:["AI","스마트워킹","업무자동화","문서","요약","기획","생성형AI","업무개선"] },
  { code:"4-2", category:"공통 업무역량", name:"AI 활용 홍보 콘텐츠 기획 및 제작", hours:"1일(7H)", level:["전체"],
    keywords:["AI","홍보","콘텐츠","기획","제작","카피","이미지","SNS","마케팅"] },
  { code:"4-3", category:"공통 업무역량", name:"일학습병행 데이터관리 A to Z", hours:"2일(12H)", level:["전체"],
    keywords:["데이터","데이터관리","엑셀","정리","분석","대시보드","리포트","통계","지표"] },
];

const DOMAIN_TO_CATEGORY = {
  "공통": ["공통 업무역량", "사업운영 및 조직관리"],
  "사업관리자": ["사업운영 및 조직관리"],
  "사업운영자": ["사업운영 및 조직관리", "학습기업 및 학습근로자 관리", "훈련과정 운영 및 지원"],
  "HRD컨설턴트": ["훈련과정 운영 및 지원", "사업운영 및 조직관리"],
  "경력개발상담가": ["학습기업 및 학습근로자 관리"],
  "교육과정개발자": ["훈련과정 운영 및 지원"],
  "교육과정운영자": ["훈련과정 운영 및 지원"],
};

function likert(name, checkedValue = null) {
  return `
    <div style="display:flex; gap:10px; flex-wrap:wrap; margin:6px 0 10px 0;">
      ${[1,2,3,4,5].map(v => `
        <label style="margin-right:6px;">
          <input type="radio" name="${name}" value="${v}" ${checkedValue===v ? "checked": ""}/> ${v}
        </label>
      `).join("")}
    </div>
  `;
}

function renderQuestions() {
  const container = document.getElementById("questionList");
  container.innerHTML = `
    <div style="font-size:13px; opacity:.85; margin-bottom:12px;">
      <b>현재수준</b>은 현재 본인의 역량 수준, <b>이상적수준</b>은 업무 수행을 위해 필요하다고 생각하는 수준(요구수준)입니다.<br/>
      각 문항에 대해 <b>현재수준 + 이상적수준</b>을 모두 선택해주세요. (1~5점)
    </div>
  `;

  const byDomain = {};
  for (const q of questions) {
    if (!byDomain[q.domain]) byDomain[q.domain] = [];
    byDomain[q.domain].push(q);
  }

  Object.keys(byDomain).forEach(domain => {
    const h = document.createElement("h3");
    h.textContent = `✅ ${domain}`;
    container.appendChild(h);

    byDomain[domain].forEach(q => {
      const div = document.createElement("div");
      div.className = "q";
      div.style.padding = "10px 0";
      div.style.borderBottom = "1px solid #eee";

      div.innerHTML = `
        <div style="font-weight:700; margin-bottom:6px;">${q.id}. ${q.competency}</div>
        <div style="margin-bottom:10px;">${q.text}</div>

        <div style="background:#f3f5f7; padding:10px; border-radius:10px;">
          <div style="font-weight:600;">현재수준</div>
          ${likert(`q${q.id}_cur`)}
          <div style="font-weight:600;">이상적수준(요구수준)</div>
          ${likert(`q${q.id}_ideal`)}
        </div>
      `;

      container.appendChild(div);
    });
  });
}

function getValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? parseInt(el.value, 10) : null;
}

function norm(s){
  return (s || "").toString().toLowerCase().replace(/\s+/g,"");
}

function recommendCourses(topDomains, topItems) {
  const targetCats = [...new Set(topDomains.flatMap(d => DOMAIN_TO_CATEGORY[d] || []))];
  const corpus = norm(topItems.map(x => `${x.domain} ${x.competency}`).join(" "));

  const scored = COURSES.map(c => {
    let score = 0;
    if (targetCats.includes(c.category)) score += 2;
    if (c.category === "공통 업무역량") score += 1;

    let hit = 0;
    for (const kw of (c.keywords || [])) {
      if (corpus.includes(norm(kw))) hit += 1;
    }
    score += Math.min(hit, 6);

    return { ...c, score, hit };
  })
  .filter(x => x.score > 0)
  .sort((a,b) => b.score - a.score);

  return scored.slice(0, 6);
}

function submitTest() {
  const missing = [];
  for (const q of questions) {
    const cur = getValue(`q${q.id}_cur`);
    const ideal = getValue(`q${q.id}_ideal`);
    if (cur == null || ideal == null) missing.push(q.id);
  }
  if (missing.length) {
    alert(`미응답 문항이 있어요: ${missing.join(", ")}\n(각 문항의 '현재수준'과 '이상적수준' 모두 선택 필요)`);
    return;
  }

  const domainStats = {};
  const itemGaps = [];

  questions.forEach(q => {
    const cur = getValue(`q${q.id}_cur`);
    const ideal = getValue(`q${q.id}_ideal`);
    const gap = ideal - cur;

    if (!domainStats[q.domain]) domainStats[q.domain] = { cur: [], ideal: [], gap: [] };
    domainStats[q.domain].cur.push(cur);
    domainStats[q.domain].ideal.push(ideal);
    domainStats[q.domain].gap.push(gap);

    itemGaps.push({
      id: q.id,
      domain: q.domain,
      competency: q.competency,
      cur,
      ideal,
      gap
    });
  });

  const avg = (arr) => arr.reduce((a,b)=>a+b,0) / arr.length;

  const domains = Object.keys(domainStats);
  const domainGap = domains.map(d => avg(domainStats[d].gap));

  const overallCur = avg(itemGaps.map(x => x.cur));
  const overallIdeal = avg(itemGaps.map(x => x.ideal));
  const overallGap = avg(itemGaps.map(x => x.gap));

  document.getElementById("result").style.display = "block";
  document.getElementById("summary").textContent =
    `전체 평균(현재): ${overallCur.toFixed(2)} / 5.00 · 전체 평균(이상): ${overallIdeal.toFixed(2)} / 5.00 · 전체 평균(Gap): ${overallGap.toFixed(2)}`;

  if (window._chart) window._chart.destroy();
  const ctx = document.getElementById("chart").getContext("2d");
  window._chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: domains,
      datasets: [
        { label: "Gap 평균(이상-현재)", data: domainGap.map(x => Number(x.toFixed(2))) }
      ]
    },
    options: { scales: { y: { min: -4, max: 4 } } }
  });

  itemGaps.sort((a,b) => b.gap - a.gap);
  const top = itemGaps.slice(0, 10);

  const domainRank = domains
    .map((d, i) => ({ domain: d, gap: domainGap[i] }))
    .sort((a,b) => b.gap - a.gap);

  // ✅ 여기서 추천 과정 계산
  const topDomains = domainRank.slice(0, 2).map(x => x.domain);
  const courseReco = recommendCourses(topDomains, top);

  // ✅ 추천 과정 HTML 생성
  const courseHtml = `
    <h3>추천 교육과정(2026 커리큘럼 기반 · Gap+키워드 매칭)</h3>
    <ol>
      ${courseReco.map(c => `
        <li style="margin-bottom:10px;">
          <b>${c.name}</b> <span style="opacity:.75;">(${c.code} · ${c.hours})</span><br/>
          <span style="opacity:.85;">영역: ${c.category} · 키워드매칭: ${c.hit} · 권장수준(참고): ${c.level.join(", ")}</span><br/>
          <span style="font-size:13px; opacity:.8;">키워드: ${(c.keywords || []).slice(0,6).join(", ")}${(c.keywords||[]).length>6 ? "…" : ""}</span>
        </li>
      `).join("")}
    </ol>
    <div style="font-size:13px; opacity:.85;">
      * 경력과 무관하게 “역량 격차(Gap) 큰 영역” + “TOP10 역량 키워드” 매칭으로 추천합니다.
    </div>
  `;

  const recommend = document.getElementById("recommend");
  recommend.innerHTML = `
    <h3>교육 필요도(격차) 기반 추천</h3>
    <div style="margin-bottom:10px;">
      <b>우선 개선 도메인</b>: 
      1) ${domainRank[0].domain} (Gap ${domainRank[0].gap.toFixed(2)}) · 
      2) ${domainRank[1].domain} (Gap ${domainRank[1].gap.toFixed(2)})
    </div>

    <b>교육 필요 역량 TOP 10 (Gap 큰 순)</b>
    <ol>
      ${top.map(x => `
        <li>
          [${x.domain}] ${x.competency} — 현재 ${x.cur}, 이상 ${x.ideal}, Gap <b>${x.gap}</b>
        </li>
      `).join("")}
    </ol>

    <div style="font-size:13px; opacity:.85;">
      * Gap(이상-현재)이 클수록 “교육/훈련 필요도”가 큰 것으로 해석합니다.
    </div>
  ` + courseHtml;

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

// 로딩 시 문항 렌더
renderQuestions();
