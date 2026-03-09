// src/data/surveyData.js

export const questions = [
    // Psychological (P)
    {
        id: 'p1',
        text: {
            kr: "아침에 일어날 때 학교나 학원에 가기 싫고 무기력함을 느끼는 빈도는 어떠한가요?",
            en: "How often do you feel lethargic and absolutely dread going to school or an academy in the morning?"
        },
        options: [
            { text: { kr: "거의 매일 즐겁게 일어난다", en: "Almost every day I wake up feeling fine and ready." }, score: { P: 0 } },
            { text: { kr: "가끔 피곤하지만 갈 만하다", en: "Sometimes tired, but perfectly manageable." }, score: { P: 1 } },
            { text: { kr: "자주 가기 싫고 무기력하다", en: "I often feel sluggish and really don't want to go." }, score: { P: 3 } },
            { text: { kr: "매일 아침이 고역이고 아무것도 하기 싫다", en: "Every morning is pure torture. I don't want to do anything." }, score: { P: 5 } }
        ]
    },
    {
        id: 'p2',
        text: {
            kr: "시험이나 평가를 앞두고 나의 상태는?",
            en: "Right before an exam or evaluation, how would you describe your state?"
        },
        options: [
            { text: { kr: "약간의 긴장감은 있지만 금방 집중한다", en: "A bit nervous, but I can focus on studying quickly." }, score: { P: 0 } },
            { text: { kr: "긴장되지만 결과보단 최선을 다하려 한다", en: "Nervous, but I try to focus on doing my best rather than the result." }, score: { P: 1 } },
            { text: { kr: "실패할까 봐 극심하게 불안하고 잠을 못 잔다", en: "Extremely anxious about failing. I often lose sleep over it." }, score: { P: 4 } },
            { text: { kr: "어차피 못 볼 거라며 오히려 회피하고 포기한다", en: "I give up and avoid studying because I think I'll fail anyway." }, score: { P: 3, A: -2 } }
        ]
    },
    {
        id: 'p3',
        text: {
            kr: "평소 나 자신이 가치 없다고 느껴지거나 뚜렷한 이유 없이 우울해질 때가 있나요?",
            en: "Do you ever feel worthless or become depressed without a clear reason?"
        },
        options: [
            { text: { kr: "전혀 없다. 나는 꽤 괜찮은 사람이다", en: "Not at all. I think I'm a pretty okay person." }, score: { P: 0 } },
            { text: { kr: "가끔 기분이 다운될 때는 있다", en: "I feel a bit down from time to time." }, score: { P: 1 } },
            { text: { kr: "자주 우울하고 혼자 있고 싶다", en: "I frequently feel depressed and just want to be left alone." }, score: { P: 3 } },
            { text: { kr: "항상 우울하며 아무도 날 이해하지 못한다고 느낀다", en: "I feel depressed all the time and think nobody understands me." }, score: { P: 5 } }
        ]
    },
    {
        id: 'p4',
        text: {
            kr: "스트레스를 받을 때 주로 어떻게 해소하나요?",
            en: "How do you usually relieve stress?"
        },
        options: [
            { text: { kr: "운동, 산책, 재미있는 취미 활동", en: "Exercise, walking, or engaging hobbies." }, score: { P: 0 } },
            { text: { kr: "친구들과 수다떨기", en: "Chatting with my friends." }, score: { P: 0, S: 2 } },
            { text: { kr: "하루 종일 잠만 잔다", en: "I just sleep all day long." }, score: { P: 2 } },
            { text: { kr: "게임, 유튜브, 숏폼 등에서 벗어나지 못한다", en: "I can't escape from gaming, YouTube, or short-form media." }, score: { P: 4 } }
        ]
    },

    // Social (S)
    {
        id: 's1',
        text: {
            kr: "친구들 사이에서 나의 역할은 보통 어떤 편인가요?",
            en: "What is your usual role among your friends?"
        },
        options: [
            { text: { kr: "분위기 메이커나 리더 역할을 자주 맡는다", en: "I'm usually the mood-maker or the leader." }, score: { S: 4 } },
            { text: { kr: "의견을 내기보단 주로 친구들 의견에 잘 맞춰준다", en: "I tend to go along with my friends' opinions rather than voicing my own." }, score: { S: 2 } },
            { text: { kr: "소수의 친한 친구 1~2명하고만 깊게 지낸다", en: "I only hang out deeply with 1 or 2 close friends." }, score: { S: 1 } },
            { text: { kr: "혼자 있는 것을 가장 편안하게 느낀다", en: "I feel most comfortable when I am completely alone." }, score: { S: 0 } }
        ]
    },
    {
        id: 's2',
        text: {
            kr: "공부할 계획이 있었는데, 친한 친구가 간절히 놀자고 유혹하면?",
            en: "If you had plans to study, but a close friend begs you to hang out with them?"
        },
        options: [
            { text: { kr: "미안하지만 단호하게 거절하고 내 할 일을 한다", en: "I apologize, firmly decline, and stick to my studies." }, score: { S: 0, A: 2 } },
            { text: { kr: "고민하다가 타협해서 조금만 놀고 공부한다", en: "I hesitate, then compromise by hanging out briefly before studying." }, score: { S: 1 } },
            { text: { kr: "내 계획을 포기하고 친구와 무조건 놀러 간다", en: "I completely abandon my study plan and go out with them." }, score: { S: 4 } },
            { text: { kr: "거절하지 못해 끌려가고 내내 마음이 불편하다", en: "I get dragged along because I can't say no, but feel guilty the whole time." }, score: { S: 3, P: 1 } }
        ]
    },
    {
        id: 's3',
        text: {
            kr: "최근 한 달 내에 친구 관계 때문에 심하게 다투거나 스트레스 받은 적은?",
            en: "In the past month, have you had severe conflicts or stress due to friend relationships?"
        },
        options: [
            { text: { kr: "전혀 없다. 원만하게 잘 지낸다.", en: "None at all. Everything is smooth." }, score: { S: 1 } },
            { text: { kr: "사소한 의견 충돌은 있지만 금방 푼다.", en: "Minor disagreements, but we resolve them quickly." }, score: { S: 2 } },
            { text: { kr: "자주 오해가 생기거나 내 험담을 들은 적이 있다.", en: "Frequent misunderstandings, or I've heard them gossip about me." }, score: { S: 4, P: 1 } },
            { text: { kr: "관계 문제 때문에 학업이나 일상에 지장이 갈 정도다.", en: "It's so bad that it disrupts my studies and daily life." }, score: { S: 5, P: 3 } }
        ]
    },
    {
        id: 's4',
        text: {
            kr: "솔직히 털어놓을 수 있는 진짜 '내 편'이라고 생각하는 친구가 있나요?",
            en: "Do you have a true 'sidekick' friend you can honestly confide everything in?"
        },
        options: [
            { text: { kr: "여러 명 있다. 대인관계에 자신 있다.", en: "I have several. I'm very confident in my social life." }, score: { S: 3 } },
            { text: { kr: "1~2명 있다. 좁고 깊게 사귄다.", en: "Just 1 or 2. I keep my circle small and deep." }, score: { S: 1 } },
            { text: { kr: "오프라인엔 없고 게임/디스코드 등 온라인에만 있다.", en: "None in real life, only online (Games, Discord, etc.)." }, score: { S: 2, P: 1 } },
            { text: { kr: "한 명도 없다. 군중 속의 고독을 느낀다.", en: "Absolutely zero. I feel lonely even in a crowd." }, score: { S: 0, P: 2 } }
        ]
    },

    // Academic (A)
    {
        id: 'a1',
        text: {
            kr: "내가 공부를 하는 가장 큰 이유는 무엇인가요?",
            en: "What is the biggest reason you study?"
        },
        options: [
            { text: { kr: "나의 확실한 꿈과 미래의 목표를 이루기 위해", en: "To achieve my clear dreams and future goals." }, score: { A: 5 } },
            { text: { kr: "당장의 좋은 성적을 받고 싶거나 배우는게 재밌어서", en: "I just want good grades right now, or learning is fun." }, score: { A: 4 } },
            { text: { kr: "부모님, 선생님의 기대와 압박 때문에 억지로", en: "Only because I'm forced to by my parents or teachers' pressure." }, score: { A: 1, P: 1 } },
            { text: { kr: "남들도 다 하니까, 안 하면 불안해서", en: "Because everyone else is doing it; I'd feel anxious if I didn't." }, score: { A: 2 } }
        ]
    },
    {
        id: 'a2',
        text: {
            kr: "스스로 계획을 세우고 책상에 앉아 스마트폰 없이 1시간 이상 집중할 수 있나요?",
            en: "Can you sit at a desk and focus for over an hour without your smartphone based on your own plan?"
        },
        options: [
            { text: { kr: "언제든 마음만 먹으면 충분히 가능하다", en: "Absolutely, whenever I set my mind to it." }, score: { A: 4 } },
            { text: { kr: "보통은 가능하지만 가끔 폰을 본다", en: "Usually yes, but I occasionally check my phone." }, score: { A: 3 } },
            { text: { kr: "엄격한 관리(폰 제출 등)가 없으면 10분도 힘들다", en: "It's hard to last 10 minutes without someone enforcing a no-phone rule." }, score: { A: 1 } },
            { text: { kr: "거의 불가능하다. 앉아있어도 다른 생각만 한다", en: "Nearly impossible. Even when seated, my mind wanders entirely." }, score: { A: 0 } }
        ]
    },
    {
        id: 'a3',
        text: {
            kr: "자신의 진짜 실력과 성취 수준을 스스로 어떻게 평가하고 있나요?",
            en: "How do you evaluate your own actual academic abilities and achievement level?"
        },
        options: [
            { text: { kr: "내 약점이 뭔지 정확히 알고 보완하려 노력한다", en: "I precisely know my weaknesses and actively work to improve them." }, score: { A: 4 } },
            { text: { kr: "어느 정도 아는 것 같지만 가끔 점수 기복이 있다", en: "I think I know where I stand, but my scores fluctuate." }, score: { A: 3 } },
            { text: { kr: "열심히는 하는데 막상 시험을 보면 다 틀린다", en: "I try hard, but when I take the test, I get a lot wrong." }, score: { A: 2 } },
            { text: { kr: "내 성적에 관심 없고, 공부법도 전혀 모른다", en: "I don't care about my grades, and I have no idea how to study." }, score: { A: 0 } }
        ]
    },
    {
        id: 'a4',
        text: {
            kr: "시험이나 수행평가를 망쳤을 때 나의 반응은?",
            en: "How do you react when you completely bomb an exam or assignment?"
        },
        options: [
            { text: { kr: "분하여 원인을 철저히 분석하고 다음엔 실수하지 않으려 한다", en: "I get frustrated, thoroughly analyze the cause, and swear to not repeat the mistake." }, score: { A: 5 } },
            { text: { kr: "하루 정도 우울해하다가 금방 털고 일어난다", en: "I feel depressed for about a day, then quickly shake it off." }, score: { A: 3 } },
            { text: { kr: "역시 난 안 된다며 자책하고 당분간 책을 놓는다", en: "I blame myself, think 'I'm no good', and give up studying for a while." }, score: { A: 1, P: 2 } },
            { text: { kr: "선생님이 이상하게 냈다며 핑계를 대거나 남 탓을 한다", en: "I make excuses or blame the teacher for making it 'weird'." }, score: { A: 0, S: 1 } }
        ]
    }
];

export const personas = [
    // Group 1: Psychological Risk (High P, Low/Med S, Var A)
    {
        id: 1,
        name: { kr: "조용한 우울형", en: "The Silent Sufferer" },
        subtitle: { kr: "감춰진 천재성, 그러나 고립된 마음", en: "Hidden Genius, Isolated Mind" },
        condition: (p, s, a) => p >= 12 && a >= 8 && s <= 5,
        description: {
            kr: "겉보기에는 성적도 유지하고 조용하지만, 내면에 심각한 우울감과 고립감을 숨기고 있습니다. 완벽주의 성향이 강해 감정을 잘 드러내지 않습니다.",
            en: "On the outside, you maintain your grades and stay quiet, but you hide severe depression and isolation inside. Strong perfectionism stops you from showing emotion."
        },
        advice: {
            kr: "결과나 성적에 대한 압박을 내려놓아야 합니다. 무엇을 성취하지 않아도 당신 존재 자체로 충분히 가치 있다는 것을 꼭 기억하세요.",
            en: "You need to let go of the pressure for perfect results. Remember that you are valuable just for existing, even without achieving anything."
        },
        careers: { kr: ["데이터 분석가", "도서관 사서", "아카이브 연구원", "UI/UX 디자이너"], en: ["Data Analyst", "Librarian", "Archive Researcher", "UI/UX Designer"] },
        majors: { kr: ["문헌정보학과", "통계학과", "심리학과", "디자인학과"], en: ["Library and Information Science", "Statistics", "Psychology", "Design"] }
    },
    {
        id: 2,
        name: { kr: "소진된 모범생", en: "The Burned-Out Achiever" },
        subtitle: { kr: "방전된 영웅을 위한 휴식", en: "Resting the Drained Hero" },
        condition: (p, s, a) => p >= 10 && a >= 12,
        description: {
            kr: "과거에는 뛰어난 에이스였으나 현재 심리적 방전(Burnout) 상태입니다. 책상에 오래 앉아있지만 진도가 나가지 않고 극심한 피로를 호소합니다.",
            en: "You used to be an outstanding ace, but you are currently experiencing severe psychological burnout. You sit for hours, but make no progress and feel extreme fatigue."
        },
        advice: {
            kr: "지금 가장 필요한 것은 '적극적인 휴식'입니다. 죄책감 없이 하루 정도는 완전히 머리를 비우는 역처방이 필요합니다.",
            en: "What you need most right now is 'active rest'. You need a paradoxical prescription: take a full day off to clear your head without any guilt."
        },
        careers: { kr: ["연구소 연구원", "전문직(회계사/평가사)", "대학교수"], en: ["Lab Researcher", "Professional (CPA/Appraiser)", "University Professor"] },
        majors: { kr: ["자율전공학부", "경영학과", "교육학과"], en: ["Undeclared/Liberal Arts", "Business Administration", "Education"] }
    },
    {
        id: 3,
        name: { kr: "도피성 권태형", en: "The Escapist" },
        subtitle: { kr: "가상에서 현실로의 귀환", en: "Returning from Virtual to Reality" },
        condition: (p, s, a) => p >= 12 && a <= 5,
        description: {
            kr: "현실의 스트레스를 게임이나 유튜브, 숏폼 등 가상 현실로 강하게 도피하는 유형입니다. 현실 세계에 대한 의욕(Apathy)이 매우 떨어져 있습니다.",
            en: "You strongly escape from real-world stress into virtual realities like games, YouTube, or short-form media. You have very low apathy toward the real world."
        },
        advice: {
            kr: "중독을 한 번에 끊기보다 현실에서 '아주 작은 성공'을 맛보는 것이 중요합니다. 하루 10분 운동이나 책 2페이지 읽기부터 시작하세요.",
            en: "Rather than quitting your addiction cold turkey, it's crucial to taste 'tiny successes' in reality. Start with just 10 minutes of exercise or reading 2 pages a day."
        },
        careers: { kr: ["게임 테스터", "영상 편집자", "메타버스 기획자"], en: ["Game Tester", "Video Editor", "Metaverse Planner"] },
        majors: { kr: ["미디어영상학과", "컴퓨터공학과", "콘텐츠창작과"], en: ["Media & Broadcasting", "Computer Engineering", "Content Creation"] }
    },
    {
        id: 4,
        name: { kr: "불안형 완벽주의자", en: "The Anxious Perfectionist" },
        subtitle: { kr: "흠결 없는 성을 쌓는 수호자", en: "Guardian Building a Flawless Castle" },
        condition: (p, s, a) => p >= 8 && p < 12 && a >= 10,
        description: {
            kr: "시험 성적 1점에 일희일비하며 높은 스트레스를 유지합니다. 실패에 대한 극도의 두려움 때문에 항상 긴장 상태를 유지하고 있습니다.",
            en: "You live in high stress, agonizing over a single point on a test. The extreme fear of failure keeps you in a constant state of tension."
        },
        advice: {
            kr: "결과보다 과정을 칭찬해 주는 멘토가 필요합니다. '틀려도 괜찮고, 실패해도 다시 일어설 수 있다'는 안전망을 가슴에 새기세요.",
            en: "You need a mentor who praises your process over your results. Etch the safety net into your heart: 'It's okay to be wrong, and you can stand up again if you fail'."
        },
        careers: { kr: ["감정평가사", "품질관리(QA) 엔지니어", "의료 종사자"], en: ["Appraiser", "QA Engineer", "Medical Professional"] },
        majors: { kr: ["의/약학계열", "공학계열", "행정학과"], en: ["Pre-Med/Pharmacy", "Engineering", "Public Administration"] }
    },

    // Group 2: Socially Disrupted (High S(Negative), High P, Low A)
    {
        id: 7,
        name: { kr: "친구 의존형", en: "The Peer-Dependent" },
        subtitle: { kr: "함께여야 비로소 존재하는", en: "Existing Only Together" },
        condition: (p, s, a) => s >= 12 && a < 10,
        description: {
            kr: "자신의 계획보다 친구의 결정을 훨씬 중요하게 생각합니다. 친구가 없으면 학원도 오기 힘들어하며 관계 소외에 대한 불안감이 높습니다.",
            en: "You consider your friends' decisions far more important than your own plans. You struggle to attend academy without friends and have high anxiety about social exclusion."
        },
        advice: {
            kr: "혼자만의 시간을 견디는 '단독 미션' 훈련이 필요합니다. 하루 1시간이라도 친구 없이 혼자 집중하는 루틴을 만들어 보세요.",
            en: "You need 'solo mission' training to endure time alone. Try building a routine where you focus entirely alone, without friends, for just one hour a day."
        },
        careers: { kr: ["이벤트 기획자", "CS 매니저", "유치원 교사"], en: ["Event Planner", "CS Manager", "Kindergarten Teacher"] },
        majors: { kr: ["관광경영학과", "유아교육과", "사회복지학과"], en: ["Tourism Management", "Early Childhood Education", "Social Welfare"] }
    },
    {
        id: 11,
        name: { kr: "온라인 몰입형", en: "The Cyber-Focused" },
        subtitle: { kr: "모니터 너머의 진정한 연결", en: "True Connection Beyond the Monitor" },
        condition: (p, s, a) => p >= 6 && s >= 6 && s <= 10 && a <= 8,
        description: {
            kr: "교실이나 학원의 눈앞에 있는 친구들보다 디스코드, SNS 등에 있는 온라인 친구들을 훨씬 소중하게 여깁니다.",
            en: "You cherish your online friends on Discord or SNS far more than the physical friends right in front of you in the classroom or academy."
        },
        advice: {
            kr: "온라인의 소속감도 좋지만, 오프라인에서의 동아리 활동이나 소그룹 스터디에 참여해 현실 감각을 튜닝할 필요가 있습니다.",
            en: "Online belonging is fine, but you need to tune your sense of reality by participating in offline clubs or small study groups."
        },
        careers: { kr: ["커뮤니티 매니저", "버추얼 크리에이터", "디지털 마케터"], en: ["Community Manager", "Virtual Creator", "Digital Marketer"] },
        majors: { kr: ["커뮤니케이션학과", "디지털미디어학과", "정보사회학과"], en: ["Communications", "Digital Media", "Information Sociology"] }
    },

    // Group 3: Academic Struggle, Stable Emotion (Low P, Low/Med A, Med S)
    {
        id: 13,
        name: { kr: "해맑은 기초부족형", en: "The Cheerful Underachiever" },
        subtitle: { kr: "행복한 멘탈, 아쉬운 성과", en: "Happy Mental, Lacking Performance" },
        condition: (p, s, a) => p <= 7 && a <= 6 && s >= 6,
        description: {
            kr: "성격도 밝고 친구들과도 잘 지내지만, 책상에 앉아 있는 시간에 비해 성적이 낮고 공부법을 전혀 모르는 백지 상태입니다.",
            en: "You have a bright personality and get along well with friends, but your grades are low compared to the time spent at the desk, and you have zero knowledge of actual study methods."
        },
        advice: {
            kr: "어려운 학원 수업을 버티지 말고 눈높이에 맞는 1:1 기초 학습이나 백지 복습법부터 시작하여 '성취감'을 맛보세요.",
            en: "Don't just endure difficult academy classes. Start with 1:1 basics tailored to your level or the 'blank sheet review' method to taste the feeling of 'accomplishment'."
        },
        careers: { kr: ["레크리에이션 강사", "세일즈 매니저", "유튜버/크리에이터"], en: ["Recreation Instructor", "Sales Manager", "YouTuber/Creator"] },
        majors: { kr: ["체육교육과", "경영/경제학과", "실용음악/연기과"], en: ["Physical Education", "Business/Economics", "Practical Music/Acting"] }
    },
    {
        id: 14,
        name: { kr: "방향 잃은 노력파", en: "The Misguided Hard Worker" },
        subtitle: { kr: "멈추지 않는 톱니바퀴", en: "The Unstoppable Gear" },
        condition: (p, s, a) => p <= 8 && a > 6 && a <= 12,
        description: {
            kr: "공부 시간은 전교 1등 수준이지만 효율과 성적은 낮습니다. 올바른 피드백 없이 소위 '가짜 공부(인강만 보기, 형광펜 칠하기)'에 빠져있을 수 있습니다.",
            en: "Your study hours are top of the school, but your efficiency and grades are low. You might be trapped in 'fake studying' (just watching lectures, highlighting) without proper feedback."
        },
        advice: {
            kr: "공부량을 늘리기보다는, 내가 아는 것과 모르는 것을 명확히 구분하는 '메타인지' 훈련과 꼼꼼한 오답 노트 정리가 시급합니다.",
            en: "Rather than increasing study volume, it's urgent to train your 'meta-cognition'—distinguishing what you actually know from what you don't—and maintaining a meticulous mistake journal."
        },
        careers: { kr: ["공무원", "데이터 입력/관리자", "회계실무자"], en: ["Civil Servant", "Data Manager", "Accountant"] },
        majors: { kr: ["행정학과", "세무회계학과", "사서교육과"], en: ["Public Administration", "Tax Accounting", "Library Education"] }
    },

    // Group 4: High Functioning / Adapters (Low P, High A)
    {
        id: 19,
        name: { kr: "자기주도 리더형", en: "The Self-Directed Leader" },
        subtitle: { kr: "폭풍 속에서도 길을 잃지 않는", en: "Never Lost, Even in a Storm" },
        condition: (p, s, a) => p <= 5 && a >= 15 && s >= 8,
        description: {
            kr: "감정적으로 안정되어 있으며, 뚜렷한 목표 의식을 가지고 주도적으로 학습을 이끌어갑니다. 교우 관계에서도 좋은 리더십을 보입니다.",
            en: "You are emotionally stable, highly proactive with a clear sense of purpose, and display excellent leadership in your peer relationships."
        },
        advice: {
            kr: "현재의 훌륭한 밸런스를 유지하세요. 지칠 때는 주변에 페이스를 늦추고 베풀줄 아는 겸손함을 갖춘다면 최고의 인재가 될 것입니다.",
            en: "Maintain your current excellent balance. If you learn to pace yourself when tired and show humility by giving back to others, you will become a top-tier talent."
        },
        careers: { kr: ["CEO/창업자", "국제 컨설턴트", "외교관", "기획총괄 디렉터"], en: ["CEO/Founder", "International Consultant", "Diplomat", "Executive Director"] },
        majors: { kr: ["정치외교학과", "경영학과", "경제학과", "공공인재학부"], en: ["Political Science", "Business Administration", "Economics", "Public Policy"] }
    },
    {
        id: 20,
        name: { kr: "독고다이 학자형", en: "The Quiet Scholar" },
        subtitle: { kr: "진리를 탐구하는 고독한 항해자", en: "Lone Voyager Seeking Truth" },
        condition: (p, s, a) => p <= 6 && a >= 15 && s <= 5,
        description: {
            kr: "무리한 친목이나 타인의 시선에 신경 쓰지 않고 오직 자신의 학업과 탐구에만 엄청난 몰입도를 보여줍니다.",
            en: "You ignore forced socializing or the gaze of others, showing an incredible level of immersion solely in your own academics and exploration."
        },
        advice: {
            kr: "뛰어난 집중력과 지적 호기심은 최고의 무기입니다. 다만 세상은 타인과의 협업으로 굴러가므로 최소한의 소통 능력을 기르기를 권장합니다.",
            en: "Your intense focus and intellectual curiosity are your greatest weapons. However, the world runs on collaboration, so it's recommended to build at least minimal communication skills."
        },
        careers: { kr: ["인공지능 연구원", "물리학/수학계 석학", "소프트웨어 아키텍트"], en: ["AI Researcher", "Physics/Math Scholar", "Software Architect"] },
        majors: { kr: ["컴퓨터공학과", "순수과학계열(수리/물리)", "철학과"], en: ["Computer Engineering", "Pure Sciences", "Philosophy"] }
    },
    {
        id: 24,
        name: { kr: "강철 멘탈 (회복탄력성 우수형)", en: "The Resilient Boundary Setter" },
        subtitle: { kr: "어떤 시련에도 구부러지지 않는", en: "Unbending in the Face of Trials" },
        condition: (p, s, a) => p <= 6 && a >= 10 && a < 15,
        description: {
            kr: "시험을 망치거나 친구와 갈등이 있어도 훌훌 털고 다시 책상에 앉을 수 있는 탁월한 회복탄력성을 지니고 있습니다.",
            en: "You possess excellent resilience, able to brush off a ruined exam or a conflict with a friend and easily sit right back down at your desk."
        },
        advice: {
            kr: "실패를 두려워하지 않는 엄청난 장점을 가졌습니다. 남들이 피하는 도전적인 킬러 문제나 어려운 목표에 주저없이 도전하세요.",
            en: "You have the massive advantage of not fearing failure. Do not hesitate to challenge yourself with difficult goals or 'killer' problems that others avoid."
        },
        careers: { kr: ["응급의학과 의사", "소방/경찰 간부", "스타트업 전략가"], en: ["ER Doctor", "Fire/Police Officer", "Startup Strategist"] },
        majors: { kr: ["의/약학계열", "경찰행정학과", "자율전공"], en: ["Pre-Med/Pharmacy", "Police Administration", "Undeclared"] }
    },

    // Fallback (Average/Mixed)
    {
        id: 30,
        name: { kr: "무한한 가능성 (균형 탐색형)", en: "The Potential Explorer" },
        subtitle: { kr: "정해지지 않아 무엇이든 될 수 있는", en: "Undefined, Thus Can Be Anything" },
        condition: (p, s, a) => true, // Default catch-all
        description: {
            kr: "아직 어느 한 쪽으로 극단적으로 치우치지 않고 자신의 정체성과 학습 스타일을 탐색해 나가는 중입니다.",
            en: "You aren't extremely skewed toward any one side yet, and are currently exploring your own identity and learning style."
        },
        advice: {
            kr: "다양한 가능성이 열려있습니다. 지금은 내가 무엇을 좋아하고 어떤 공부법이 맞는지 긍정적으로 시도해볼 타이밍입니다.",
            en: "Various possibilities are wide open for you. Now is the perfect time to positively experiment to see what you like and what study methods suit you best."
        },
        careers: { kr: ["자유전공, 적성에 맞는 모든 분야"], en: ["Any field suited to your future aptitudes"] },
        majors: { kr: ["자율전공학부", "선택 대기중"], en: ["Undeclared", "Pending Choice"] }
    }
];

export const calculatePersona = (pScore, sScore, aScore) => {
    const matched = personas.find(persona => persona.condition(pScore, sScore, aScore));
    return matched || personas[personas.length - 1];
};
