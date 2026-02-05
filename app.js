const questions = [
  { id:1, domain:"공통", text:"업무 관련 정보를 명확하게 전달할 수 있다." },
  { id:2, domain:"사업운영", text:"사업 운영 절차를 이해하고 있다." },
  { id:3, domain:"교육운영", text:"연수 운영 시 발생하는 문제를 해결할 수 있다." }
];

const CAREER_RECO = {
  lt1:["행정·시스템 이해","기초 운영 실무"],
  "1to2":["운영 고도화","이슈 관리"],
  "2to4":["성과관리","과정 개선"],
  gte4:["전략 기획","품질 관리"]
};

function submitTest(){
  const scores = {};
  let total = 0;

  questions.forEach(q=>{
    const v = Number(document.querySelector(`input[name=q${q.id}]:checked`).value);
    total += v;
    scores[q.domain] = (scores[q.domain]||[]).concat(v);
  });

  document.getElementById("summary").innerText =
    `전체 평균: ${(total/questions.length).toFixed(2)}점`;

  const labels = Object.keys(scores);
  const data = labels.map(d=> scores[d].reduce((a,b)=>a+b)/scores[d].length);

  new Chart(document.getElementById("chart"),{
    type:"bar",
    data:{ labels, datasets:[{ label:"역량 평균", data }]},
    options:{ scales:{ y:{ min:1, max:5 }}}
  });

  const career = document.getElementById("career").value;
  document.getElementById("recommend").innerHTML =
    "<b>추천:</b><ul>"+CAREER_RECO[career].map(r=>`<li>${r}</li>`).join("")+"</ul>";
}

const list = document.getElementById("questionList");
questions.forEach(q=>{
  list.innerHTML += `<div class="q">${q.text}<br>
    ${[1,2,3,4,5].map(v=>`<label><input type=radio name=q${q.id} value=${v} ${v===3?"checked":""}>${v}</label>`).join("")}
  </div>`;
});
