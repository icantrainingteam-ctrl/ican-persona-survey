// src/data/surveyData.js

// Clinical Level Expansion: 24 Core Questions
export const questions = [
    // === PSYCHOLOGICAL (P) : Energy, Depression, Burnout, Hopelessness ===
    {
        id: 'p1',
        text: { kr: "[수면/식욕] 최근 들어 밤에 잠들기까지 시간이 얼마나 걸리나요?", en: "[Sleep] How long does it usually take you to fall asleep recently?" },
        options: [
            { text: { kr: "눕자마자 쉽게 잠들고 개운하게 일어난다", en: "I fall asleep quickly and wake up refreshed." }, score: { P: 0 } },
            { text: { kr: "조금 뒤척이지만 평범하게 잔다", en: "A little tossing, but normal." }, score: { P: 1 } },
            { text: { kr: "생각이 많아져서 1시간 이상 뒤척인다", en: "Too many thoughts keep me awake for over an hour." }, score: { P: 3 } },
            { text: { kr: "거의 뜬눈으로 밤을 새우거나 중간에 자꾸 깬다", en: "I almost stay up all night or frequently wake up." }, score: { P: 5, R: 1 } } // R: Red Flag (Clinical Somatic)
        ]
    },
    {
        id: 'p2',
        text: { kr: "[무기력/쾌감상실] 예전에 좋아했던 취미나 음식을 접할 때 요즘 어떤 기분이 드나요?", en: "[Anhedonia] How do you feel doing hobbies or eating foods you used to love?" },
        options: [
            { text: { kr: "여전히 즐겁고 나에게 활력을 준다", en: "Still highly enjoyable and energizing." }, score: { P: 0 } },
            { text: { kr: "그냥저냥 할 만하다", en: "It's okay, just average." }, score: { P: 1 } },
            { text: { kr: "예전만큼 재밌지 않고 금방 흥미가 식는다", en: "Not as fun as before; I lose interest fast." }, score: { P: 3 } },
            { text: { kr: "아무것도 느끼지 못하겠고 다 귀찮다", en: "I feel nothing and everything is bothersome." }, score: { P: 5, R: 1 } }
        ]
    },
    {
        id: 'p3',
        text: { kr: "[미래 투사] 1년 후의 내 모습을 상상한다면, 가장 가까운 느낌은 무엇인가요?", en: "[Future Projection] When imagining yourself 1 year from now, what feeling is closest?" },
        options: [
            { text: { kr: "기대: 지금보다 성장해 있을 것이다", en: "Hopeful: I'll be more grown than now." }, score: { P: 0 } },
            { text: { kr: "불안: 잘 해낼 수 있을지 걱정은 된다", en: "Anxious: I worry if I'll do well." }, score: { P: 2 } },
            { text: { kr: "막막: 뭐하고 살지 전혀 모르겠다", en: "Lost: I have no idea what I'll be doing." }, score: { P: 4 } },
            { text: { kr: "절망: 나아질 희망이 없고 상상하기도 싫다", en: "Despair: No hope for improvement; I hate imagining it." }, score: { P: 5, R: 2 } } // Higher Red Flag for Hopelessness
        ]
    },
    {
        id: 'p4',
        text: { kr: "[자기 가치감] 뚜렷한 이유 없이 나 자신이 쓸모없거나 부끄럽게 느껴질 때가 있나요?", en: "[Self-Worth] Do you ever feel useless or ashamed without a clear reason?" },
        options: [
            { text: { kr: "전혀 없다. 나는 가치 있는 사람이다", en: "Not at all. I am a valuable person." }, score: { P: 0 } },
            { text: { kr: "남과 비교될 때 가끔 위축된다", en: "I sometimes shrink when compared to others." }, score: { P: 2 } },
            { text: { kr: "자주 내 자신이 초라하게 느껴져 우울하다", en: "I frequently feel pathetic and depressed." }, score: { P: 4 } },
            { text: { kr: "항상 그렇다. 내가 사라지는 게 나을 것 같다", en: "Always. I feel it would be better if I disappeared." }, score: { P: 5, R: 3 } } // Critical Red Flag (Suicidal Ideation)
        ]
    },
    {
        id: 'p5',
        text: { kr: "[완벽주의 불안] 성적이나 평가에서 완벽하지 못할 것 같으면 주로 어떻게 하나요?", en: "[Perfectionism] When you think you can't be perfect on a test/evaluation, what happens?" },
        options: [
            { text: { kr: "결과에 상관없이 최선을 다해 부딪힌다", en: "I tackle it doing my best regardless of results." }, score: { P: 0 } },
            { text: { kr: "엄청난 스트레스를 받으며 억지로 잠을 줄인다", en: "I get extremely stressed and force myself to stay awake." }, score: { P: 3 } },
            { text: { kr: "불안해서 펜도 못 잡고 다른 일로 도피한다", en: "I'm too anxious to hold a pen and escape to other things." }, score: { P: 4 } },
            { text: { kr: "어차피 못할 거라며 시작조차 포기하고 자포자기한다", en: "I give up completely thinking I'll fail anyway." }, score: { P: 5, A: 2 } }
        ]
    },
    {
        id: 'p6',
        text: { kr: "[회피/도피] 엄청난 스트레스 상황에 직면했을 때, 당신의 본능적인 회피 수단은?", en: "[Escapism] Faced with immense stress, what is your instinctive escape?" },
        options: [
            { text: { kr: "산책, 운동, 대화 등 건강하게 푼다", en: "Healthy release like walking, exercise, chatting." }, score: { P: 0 } },
            { text: { kr: "맛있는 것을 먹고 잠을 잔다", en: "Eating good food and sleeping." }, score: { P: 1 } },
            { text: { kr: "하루 4시간 이상 숏폼, 게임 등 가상 현실에 빠진다", en: "Diving into short-forms/games for 4+ hours a day." }, score: { P: 4 } },
            { text: { kr: "아무것도 하지 않고 무기력하게 천장만 본다", en: "Doing nothing, lethargically staring at the ceiling." }, score: { P: 5, R: 1 } }
        ]
    },
    {
        id: 'p7',
        text: { kr: "[아침 기상] 눈을 떴을 때, 오늘 하루를 시작해야 한다는 사실을 떠올리면?", en: "[Morning Dread] When you wake up and realize you have to start the day?" },
        options: [
            { text: { kr: "개운하고 오늘 할 일들이 기대된다", en: "Refreshed and looking forward to tasks." }, score: { P: 0 } },
            { text: { kr: "피곤하지만 갈 곳이니 몸을 일으킨다", en: "Tired, but I get up because I have to go." }, score: { P: 1 } },
            { text: { kr: "가기 싫고 짜증이 밀려와 한참을 꾸물거린다", en: "I hate it, feel annoyed, and procrastinate getting up." }, score: { P: 3 } },
            { text: { kr: "눈 뜨는 것 자체가 고역이고, 내일이 안 왔으면 좋겠다", en: "Waking up is torture; I wish tomorrow wouldn't come." }, score: { P: 5, R: 2 } }
        ]
    },
    {
        id: 'p8',
        text: { kr: "[신체화 증상] 뚜렷한 병이나 이유 없이 자주 겪는 신체적 어려움이 있나요?", en: "[Somatic Symptoms] Do you often experience physical hardships without clear illness?" },
        options: [
            { text: { kr: "평균적으로 아주 건강한 편이다", en: "On average, very healthy." }, score: { P: 0 } },
            { text: { kr: "가끔 소화가 안 되거나 두통이 있다", en: "Occasional indigestion or headache." }, score: { P: 2 } },
            { text: { kr: "학원/학교에 갈 때쯤 되면 자주 배가 아프거나 숨이 갑갑하다", en: "I often get stomachaches/tight chest right before academy/school." }, score: { P: 4 } },
            { text: { kr: "만성적인 무기력, 두통, 심장 두근거림으로 일상이 벅차다", en: "Chronic lethargy, headaches, palpitations make life overwhelming." }, score: { P: 5, R: 1 } }
        ]
    },

    // === SOCIAL (S) : Belongingness, Isolation, Peer Pressure, Burdensomeness ===
    {
        id: 's1',
        text: { kr: "[학교 내 고립] 점심시간이나 쉬는 시간에 교실에서 당신은 주로 무엇을 하나요?", en: "[Isolation] What do you mostly do during lunch or breaks at school?" },
        options: [
            { text: { kr: "친구들과 적극적으로 어울리고 장난을 친다", en: "Actively hanging out and joking with friends." }, score: { S: 0 } }, // Extroverted, low isolation
            { text: { kr: "소수의 친한 친구 1~2명과만 조용히 보낸다", en: "Quiet time with 1-2 close friends." }, score: { S: 1 } },
            { text: { kr: "자는 척을 하거나 핸드폰만 보며 시간을 때운다", en: "I pretend to sleep or just scroll my phone to kill time." }, score: { S: 4, R: 1 } },
            { text: { kr: "아무도 나에게 말을 걸지 않아 투명인간이 된 기분이다", en: "Nobody talks to me; I feel like an invisible person." }, score: { S: 5, R: 2 } }
        ]
    },
    {
        id: 's2',
        text: { kr: "[대인관계 짐 인식] 내가 가족이나 주변 사람들에게 어떤 영향을 주는 존재라고 느끼나요?", en: "[Perceived Burdensomeness] How do you feel your existence affects your family/people around you?" },
        options: [
            { text: { kr: "자랑스럽고 사랑받는 활력소 같은 존재", en: "A proud, loved source of energy." }, score: { S: 0 } },
            { text: { kr: "평범한 자녀/친구로서 제 몫은 하고 있다", en: "Just a standard kid/friend doing my part." }, score: { S: 1 } },
            { text: { kr: "부모님의 기대를 채우지 못하는 실망스러운 존재", en: "A disappointment failing parents' expectations." }, score: { S: 4, P: 2 } },
            { text: { kr: "돈만 축내고 모두를 불행하게 만드는 '짐' 같은 존재", en: "A 'burden' wasting money and making everyone unhappy." }, score: { S: 5, P: 4, R: 3 } } // Joiner's Theory: High Risk
        ]
    },
    {
        id: 's3',
        text: { kr: "[또래 압력/의존성] 내 계획이 있어도 친구가 놀자고 간곡히 부탁하면?", en: "[Peer Dependency] If you have plans, but a friend begs to hang out?" },
        options: [
            { text: { kr: "내 계획이 우선이므로 단호히 거절한다", en: "My plans are the priority, so I firmly decline." }, score: { S: 0, A: 1 } },
            { text: { kr: "미안해서 타협하고 짧게 놀고 온다", en: "I feel sorry, so I compromise and hang out briefly." }, score: { S: 2 } },
            { text: { kr: "친구를 잃을까 두려워 무조건 계획을 포기하고 따른다", en: "Fear of losing them makes me abandon my plans completely." }, score: { S: 4 } },
            { text: { kr: "내가 원하지 않아도 무리에서 소외될까 봐 억지로 맞춰준다", en: "Even if I don't want to, I force myself to comply fearing exclusion." }, score: { S: 5, P: 1 } }
        ]
    },
    {
        id: 's4',
        text: { kr: "[갈등 회복력] 단짝 친구와 심하게 다투거나 오해가 생겼을 때의 반응은?", en: "[Conflict Resilience] Reaction when you naturally argue with a best friend?" },
        options: [
            { text: { kr: "먼저 대화를 시도해 원만하게 오해를 푼다", en: "I initiate talk to resolve it smoothly." }, score: { S: 0 } },
            { text: { kr: "시간이 지나 감정이 가라앉을 때까지 거리를 둔다", en: "I keep distance until emotions settle." }, score: { S: 1 } },
            { text: { kr: "배신감에 하루 종일 다른 일(공부 등)에 전혀 집중하지 못한다", en: "Felt betrayed, I can't focus on anything else all day." }, score: { S: 4 } },
            { text: { kr: "내 험담을 할까 봐 두렵고, SNS 등을 강박적으로 확인한다", en: "Terrified they'll gossip; I compulsively check SNS." }, score: { S: 5, P: 2 } }
        ]
    },
    {
        id: 's5',
        text: { kr: "[온라인 의존도] 오프라인 친구들과 온라인(게임, 디스코드, SNS) 친구들 중 어느 쪽이 편한가요?", en: "[Online Dependency] Are you more comfortable with offline friends or online friends?" },
        options: [
            { text: { kr: "당연히 직접 만나서 노는 오프라인 친구가 좋다", en: "Obviously hanging out offline face-to-face." }, score: { S: 0 } },
            { text: { kr: "둘 다 상황에 따라 비슷하게 편하다", en: "Both are equally comfortable depending on the situation." }, score: { S: 1 } },
            { text: { kr: "얼굴을 보지 않고 익명성이 보장되는 온라인이 훨씬 편하다", en: "Online is much more comfortable with anonymity and no faces." }, score: { S: 3, P: 1 } },
            { text: { kr: "현실엔 친구가 거의 없고, 내 모든 소속감은 온라인에 있다", en: "Almost no real friends; all my belonging is online." }, score: { S: 5, P: 2 } }
        ]
    },
    {
        id: 's6',
        text: { kr: "[사회적 위축] 주말이나 쉬는 날 외출해서 사람들을 만나는 것에 대해 어떻게 느끼나요?", en: "[Social Withdrawal] How do you feel about going out and meeting people on weekends?" },
        options: [
            { text: { kr: "에너지가 채워지고 기분 전환이 된다", en: "It recharges my energy and refreshes my mood." }, score: { S: 0 } },
            { text: { kr: "가끔 나가는 건 좋지만 혼자만의 시간도 꼭 필요하다", en: "Going out sometimes is nice, but alone time is a must." }, score: { S: 1 } },
            { text: { kr: "나가는 것 자체가 피곤하고 방 안에 있는 게 최고다", en: "Going out is just exhausting; staying in my room is best." }, score: { S: 3 } },
            { text: { kr: "사람들의 시선이 두렵거나 평가받는 것 같아 밖을 피하게 된다", en: "I fear people's gazes/judgments and actively avoid outside." }, score: { S: 5, R: 1 } }
        ]
    },
    {
        id: 's7',
        text: { kr: "[진정한 소통] 내가 정말 밑바닥까지 힘들 때, 포장 없이 눈물 흘리며 털어놓을 사람이 있나요?", en: "[True Confidant] When you hit rock bottom, do you have someone you can cry to without filtering?" },
        options: [
            { text: { kr: "언제든 연락할 수 있는 든든한 가족이나 친구가 있다", en: "I have supportive family/friends I can call anytime." }, score: { S: 0 } },
            { text: { kr: "완전히는 아니어도 어느 정도는 털어놓을 수 있다", en: "I can confide to some extent, if not entirely." }, score: { S: 2 } },
            { text: { kr: "내 약점을 보이면 무시당할까봐 꾹 참는다", en: "If I show weakness, they'll look down on me, so I hold it in." }, score: { S: 4, P: 2 } },
            { text: { kr: "세상에 나 혼자인 것 같고 아무도 내 상처를 이해 못 한다", en: "I feel completely alone; nobody understands my wounds." }, score: { S: 5, R: 2 } }
        ]
    },
    {
        id: 's8',
        text: { kr: "[소속감 꺾임] 소속된 그룹(반, 동아리, 학원)에서 나의 존재감은?", en: "[Thwarted Belongingness] Your presence in your affiliated groups?" },
        options: [
            { text: { kr: "사람들과 잘 어우러지며 인정받고 있다", en: "I mingle well and feel recognized." }, score: { S: 0 } },
            { text: { kr: "튀지는 않지만 평범하게 속해 있다", en: "Not standing out, but normally belonging." }, score: { S: 1 } },
            { text: { kr: "겉도는 느낌이 들고, 내가 빠져도 아무도 모를 것 같다", en: "I feel like an outsider; nobody would notice if I left." }, score: { S: 4, P: 1 } },
            { text: { kr: "명백히 배척당하거나 은근한 따돌림의 느낌을 받는다", en: "I clearly feel excluded or subtly bullied." }, score: { S: 5, R: 3 } } // Bullying flag
        ]
    },

    // === ACADEMIC (A) : Metacognition, Fake Studying, Trauma, Motivation ===
    {
        id: 'a1',
        text: { kr: "[학습 동기] 지금 당장 책상에 앉아 펜을 잡게 만드는 가장 큰 힘은 무엇인가요?", en: "[Motivation] What is the biggest force making you grab a pen at the desk right now?" },
        options: [
            { text: { kr: "나만의 뚜렷한 목표(꿈)와 알고자 하는 호기심", en: "My own clear goals (dreams) and curiosity to know." }, score: { A: 0 } }, // Low dysfunction score
            { text: { kr: "당장 앞에 닥친 시험에서 좋은 점수를 얻기 위해", en: "Just to get good scores on upcoming tests." }, score: { A: 1 } },
            { text: { kr: "안 하면 혼날 부모님이나 선생님의 압박과 눈치 때문에", en: "Pressure and fear of being scolded by parents/teachers." }, score: { A: 4 } },
            { text: { kr: "왜 하는지 모르겠고 그냥 남들이 하니까 불안해서 억지로 한다", en: "I don't know why. Im just forced out of anxiety because others do." }, score: { A: 5, P: 1 } }
        ]
    },
    {
        id: 'a2',
        text: { kr: "[메타인지/통제] 아무도 감시하지 않는 방에서 폰을 두고 1시간 이상 집중할 수 있나요?", en: "[Metacognition/Control] Can you focus for 1 hr without a phone in an unmonitored room?" },
        options: [
            { text: { kr: "스스로 짠 계획대로 무난하게 집중한다", en: "I can easily focus following my self-made plan." }, score: { A: 0 } },
            { text: { kr: "어느 정도 집중하지만 중간중간 딴생각을 한다", en: "I focus somewhat but get distracted occasionally." }, score: { A: 2 } },
            { text: { kr: "감시가 없으면 10분도 안 되어 폰을 집어든다", en: "Without monitoring, I grab my phone in under 10 mins." }, score: { A: 4 } },
            { text: { kr: "책상에 앉아있는 것 자체가 숨 막히고 고통스럽다", en: "Just sitting at the desk is agonizing and suffocating." }, score: { A: 5, P: 2 } }
        ]
    },
    {
        id: 'a3',
        text: { kr: "[가짜 공부 판별] 인강을 보거나 해설지를 읽을 때 당신의 패턴은?", en: "[Fake Studying] What's your pattern when watching lectures or reading answer keys?" },
        options: [
            { text: { kr: "모르는 부분을 정확히 찾아 정리하고 백지에 쓸 수 있다", en: "I pinpoint unknowns, organize, and can write them on a blank sheet." }, score: { A: 0 } },
            { text: { kr: "이해했다고 생각하고 넘어가지만, 막상 다시 풀면 틀린다", en: "I think I get it, but get it wrong when re-solving." }, score: { A: 3 } },
            { text: { kr: "그냥 보기만 하고 필기만 화려하게 하는 '노동'을 한다", en: "I just do the 'labor' of watching and making fancy highlights." }, score: { A: 4 } },
            { text: { kr: "무슨 소린지 안 들리고 그냥 시간만 때우다 끝난다", en: "I hear nothing, just killing time until it ends." }, score: { A: 5, P: 1 } }
        ]
    },
    {
        id: 'a4',
        text: { kr: "[성취/좌절 회복력] 엄청나게 노력한 시험을 완전히 망쳐버렸을 때의 반응은?", en: "[Resilience] Reaction when you bomb a test you worked extremely hard for?" },
        options: [
            { text: { kr: "분노를 원동력 삼아 철저히 오답 분석을 하고 다음을 기약한다", en: "I use anger as fuel, analyze mistakes, and prep for next time." }, score: { A: 0 } },
            { text: { kr: "며칠 앓아눕듯 우울해하지만 이내 털고 다시 시작한다", en: "I'm depressed for days but eventually brush it off and restart." }, score: { A: 2 } },
            { text: { kr: "노력해도 안 된다는 극심한 무력감에 빠져 당분간 책을 완전히 놓는다", en: "Overwhelmed by 'effort means nothing' helplessness, I drop books entirely." }, score: { A: 4, P: 2 } },
            { text: { kr: "역시 내 머리는 쓰레기라며 자학하고 자존감이 밑바닥을 친다", en: "I self-deprecate 'my brain is trash' and self-worth hits rock bottom." }, score: { A: 5, P: 3, R: 1 } }
        ]
    },
    {
        id: 'a5',
        text: { kr: "[비교 트라우마] 성적표가 나온 날 부모님이나 선생님의 반응이 어떨지 상상하면?", en: "[Comparison Trauma] Imagining parents'/teachers' reaction on report card day?" },
        options: [
            { text: { kr: "결과에 대한 내 피드백을 있는 그대로 수용해주실 것이다", en: "They'll accept my feedback on the results as it is." }, score: { A: 0 } },
            { text: { kr: "약간의 아쉬운 소리는 듣겠지만 큰 걱정은 안 한다", en: "Might hear slight disappointment, but no big worries." }, score: { A: 2 } },
            { text: { kr: "형제나 친구들과 비교당할 생각에 숨이 턱 막히고 집에 가기 싫다", en: "Suffocating at the thought of being compared to siblings/friends; hate going home." }, score: { A: 4, S: 2 } },
            { text: { kr: "극심한 폭언이나 체벌이 두려워 성적표를 조작하거나 찢고 싶다", en: "Terrified of verbal/physical abuse; I want to forge or tear it." }, score: { A: 5, P: 3, R: 2 } } // Abuse indicator
        ]
    },
    {
        id: 'a6',
        text: { kr: "[학습 무기력] 해야 할 숙제나 범위가 산더미처럼 쌓여있을 때, 당신의 행동은?", en: "[Learned Helplessness] When homework/materials pile up like a mountain?" },
        options: [
            { text: { kr: "당장 할 수 있는 작은 단위로 쪼개어 하나씩 시작한다", en: "I break it into small doable chunks and start one by one." }, score: { A: 0 } },
            { text: { kr: "미루고 미루다 마감 직전에 엄청난 스트레스를 받으며 해치운다", en: "Procrastinate until the last min, crushing it with extreme stress." }, score: { A: 2 } },
            { text: { kr: "어디서부터 손대야 할지 몰라 그냥 덮어버리고 아예 포기한다", en: "Don't know where to start, so I just close it and give up entirely." }, score: { A: 4 } },
            { text: { kr: "도망치고 싶은 마음에 병이 나거나 통증(복통/두통)이 온다", en: "Desire to escape literally causes somatic pain (stomach/headache)." }, score: { A: 5, P: 2 } }
        ]
    },
    {
        id: 'a7',
        text: { kr: "[객관화 부재] 학교나 학원 수업을 들을 때 칠판을 보는 내 상태는?", en: "[Lack of Objectification] State of staring at the board during classes?" },
        options: [
            { text: { kr: "선생님의 논리를 적극적으로 따라가며 내 것으로 소화한다", en: "Actively following logic and digesting it as mine." }, score: { A: 0 } },
            { text: { kr: "절반 정도는 이해하고 나머지는 따로 외우려 한다", en: "Understand about half, plan to memorize the rest." }, score: { A: 2 } },
            { text: { kr: "글씨가 둥둥 떠다니는 기분이고 한 귀로 듣고 한 귀로 흘린다", en: "Words float around; goes in one ear, out the other." }, score: { A: 4 } },
            { text: { kr: "분명 한글인데 외계어처럼 들리고 뇌가 정지된 느낌이다", en: "It's Korean but sounds alien; brain feels entirely frozen." }, score: { A: 5, P: 1 } }
        ]
    },
    {
        id: 'a8',
        text: { kr: "[부담감/책임감] 공부와 관련해서 내가 지고 있는 가장 무거운 짐은?", en: "[Burden/Responsibility] Heaviest burden you carry regarding studying?" },
        options: [
            { text: { kr: "내 스스로 설정한 높은 기준을 달성해야 한다는 압박감", en: "Pressure to hit my own high standards." }, score: { A: 0, P: 1 } },
            { text: { kr: "이 성적으로는 좋은 대학이나 직장을 갖지 못할 거란 현실적 두려움", en: "Realistic fear I won't get a good uni/job with these grades." }, score: { A: 2 } },
            { text: { kr: "가족들의 막대한 투자(간절함)를 배신할 수 없다는 엄청난 죄책감", en: "Massive guilt over betraying my family's desperate investment." }, score: { A: 4, P: 2 } },
            { text: { kr: "공부 외에는 내 존재를 증명할 길이 아무것도 없다는 강박", en: "Obsession that without studying, I have zero proof of existence." }, score: { A: 5, P: 3, R: 1 } }
        ]
    }
];

export const calculatePersona = (pScore, sScore, aScore, rScore = 0) => {
    // Determine Alert Level based on R (Red Flag) score and absolute thresholds
    let alertLevel = 'Green';
    let clinicalReport = {
        title: "정상 범위 (Green)",
        description: "일상적인 스트레스 범위 내에 있습니다. 건강한 회복탄력성을 유지하고 있습니다.",
        references: "일반적 학습 동기 이론",
        color: "bg-emerald-50 border-emerald-500 text-emerald-800"
    };

    if (rScore >= 5 || pScore >= 25 || sScore >= 25 || aScore >= 25) {
        alertLevel = 'Red';
        clinicalReport = {
            title: "🔴 긴급 개입 요망 (Red Alert)",
            description: "심각한 수준의 절망감, 고립감, 또는 무가치감이 관찰됩니다. 우울증, 불안장애 혹은 자살 사고의 위험이 농후하므로 번아웃을 넘어선 임상적 개입(정신건강의학과 전문의/심리상담)이 즉각적으로 필요합니다. 학업 압박을 즉시 멈추고 안전망을 확보하세요.",
            references: "[임상 근거] Aaron T. Beck의 절망감 척도(Hopelessness Scale, 1974) 및 Thomas Joiner의 대인관계-심리적 자살 이론(Thwarted Belongingness & Perceived Burdensomeness).",
            color: "bg-red-50 border-red-600 text-red-900"
        };
    } else if (rScore >= 2 || pScore >= 18 || sScore >= 18 || aScore >= 18) {
        alertLevel = 'Orange';
        clinicalReport = {
            title: "🟠 잠재적 위기 (Orange Warning)",
            description: "학습 무기력을 넘어서 만성적인 우울, 불안, 극심한 또래 고립이 지속되고 있습니다. 학업 성취보다 아이의 정서 방역이 우선시 되어야 합니다. 부모의 세밀한 관찰과 학원의 멘토링적 개입이 강력히 요구됩니다.",
            references: "[임상 근거] Martin Seligman의 학습된 무기력(Learned Helplessness) 및 청소년기 주요 우울장애(MDD) 전조 증상 행동 분석.",
            color: "bg-orange-50 border-orange-500 text-orange-900"
        };
    } else if (rScore >= 1 || pScore >= 12 || sScore >= 12 || aScore >= 12) {
        alertLevel = 'Yellow';
        clinicalReport = {
            title: "🟡 주의 집중 (Yellow Care)",
            description: "가벼운 번아웃이나 스트레스 누적 상태입니다. 학업 효율이 떨어지기 시작하는 단계이며, 충분한 휴식과 격려가 주어지면 원상복구가 가능합니다.",
            references: "[교육 심리] 정서-인지 필터 이론(Affective Filter Hypothesis) - 높은 스트레스가 인지 능력을 저해함.",
            color: "bg-yellow-50 border-yellow-400 text-yellow-800"
        };
    }

    // Persona mapping logic (Student-facing friendly result)
    let matchedPersona;

    if (pScore >= 18 && aScore <= 15) {
        matchedPersona = {
            id: 1,
            name: { kr: "소진된 모범생", en: "The Burned-Out Achiever" },
            subtitle: { kr: "방전된 영웅을 위한 휴식", en: "Resting the Drained Hero" },
            description: {
                kr: "과거에는 뛰어난 집중력을 보였으나 현재 극히 심리적 방전(Burnout) 상태입니다. 무거운 짐을 내려놓을 휴식이 필요합니다.",
                en: "You used to show phenomenal focus but are now completely burned out. You need rest to put down the heavy burden."
            },
            advice: {
                kr: "지금 당장 앞만 보고 달리면 영원히 멈출 수도 있습니다. 자신을 자책하지 말고 '아무것도 안 해도 되는 완벽한 휴식'을 당신에게 선물하세요.",
                en: "Running blindly now might stop you forever. Don't blame yourself; gift yourself 'a perfect rest where nothing is required'."
            },
            careers: {
                kr: ["수면 및 휴식 요망", "잠시 쉬어가기", "심리 상담가"],
                en: ["Sleep and rest required", "Taking a break", "Psychological Counselor"]
            },
            majors: {
                kr: ["결정 유보 (휴식 필요)", "예술치료학과", "심리학과"],
                en: ["Undecided (Rest needed)", "Art Therapy", "Psychology"]
            }
        };
    } else if (sScore >= 18) {
        matchedPersona = {
            id: 2,
            name: { kr: "상처 입은 방랑자", en: "The Wounded Wanderer" },
            subtitle: { kr: "관계 속에서 길을 잃은", en: "Lost in Relationships" },
            description: {
                kr: "관계에 대한 두려움 혹은 타인을 향한 지나친 의존 속에서 자신의 진짜 목소리를 잃어버렸습니다.",
                en: "Lost your true voice amidst fear of relationships or excessive dependency on others."
            },
            advice: {
                kr: "당신의 가치는 남들의 평가나 시선으로 결정되지 않습니다. 스스로를 가장 먼저 챙기는 이기적인 용기가 지금 당신을 살릴 수 있습니다.",
                en: "Your value isn't decided by others' evaluation. Selfish courage to prioritize yourself will save you right now."
            },
            careers: {
                kr: ["나만의 공간 창작자", "도서관 사서", "프리랜서 디자이너", "동물 매개 치료사"],
                en: ["Independent Creator", "Librarian", "Freelance Designer", "Animal Therapist"]
            },
            majors: {
                kr: ["문예창작학과", "철학과", "수의학과", "컴퓨터공학과"],
                en: ["Creative Writing", "Philosophy", "Veterinary Medicine", "Computer Science"]
            }
        };
    } else if (aScore >= 20) {
        matchedPersona = {
            id: 3,
            name: { kr: "방향 잃은 항해사", en: "The Aimless Navigator" },
            subtitle: { kr: "나침반이 부서진 채 노를 젓는", en: "Rowing with a Broken Compass" },
            description: {
                kr: "공부를 해야 한다는 압박감은 심하지만 진짜 이유를 찾지 못해 학습 무기력과 가짜 공부의 늪에 빠져있습니다.",
                en: "The pressure to study is severe, but unable to find the real reason, stuck in learned helplessness and fake studying."
            },
            advice: {
                kr: "책상에 억지로 앉아있는 시간을 과감히 반으로 줄이세요. 그리고 '내가 진짜로 좋아하는 아주 작은 일' 하나를 먼저 찾아야 엔진이 다시 돌아갑니다.",
                en: "Drastically cut your forced desk time in half. Find 'one tiny thing I truly like' first to restart your engine."
            },
            careers: {
                kr: ["여행가", "스타트업 창업가", "유튜브 크리에이터", "마케터"],
                en: ["Traveler", "Startup Founder", "Content Creator", "Marketer"]
            },
            majors: {
                kr: ["자유전공학부", "경영학과", "미디어커뮤니케이션학과", "문화인류학과"],
                en: ["Undecided/Liberal Arts", "Business Administration", "Media & Communications", "Anthropology"]
            }
        };
    } else if (pScore <= 8 && sScore <= 8 && aScore <= 8) {
        matchedPersona = {
            id: 4,
            name: { kr: "단단한 뿌리형", en: "The Deep-Rooted Oak" },
            subtitle: { kr: "폭풍에도 흔들리지 않는", en: "Unshaken by the Storm" },
            description: {
                kr: "매우 안정적이며 자신에 대한 믿음이 확고합니다. 실패해도 훌훌 털어버릴 수 있는 강인한 멘탈의 소유자입니다.",
                en: "Very stable with firm self-belief. A resilient mentality capable of brushing off failures effortlessly."
            },
            advice: {
                kr: "지금의 빛나는 여유를 잃지 마세요. 당신 자체가 이미 강력한 무기를 가지고 있으니, 목표를 향해 정진하면 됩니다.",
                en: "Never lose your brilliant composure. You already have absolute weapons; just march toward your goals."
            },
            careers: {
                kr: ["CEO/경영자", "정책 연구원", "의료인", "글로벌 비즈니스 리더"],
                en: ["CEO/Executive", "Policy Researcher", "Medical Professional", "Global Business Leader"]
            },
            majors: {
                kr: ["의예과", "법학과", "경제학과", "공공정책학"],
                en: ["Pre-Med", "Law", "Economics", "Public Policy"]
            }
        };
    } else {
         matchedPersona = {
            id: 5,
            name: { kr: "무한한 가능성 (균형 탐색형)", en: "The Potential Explorer" },
            subtitle: { kr: "정해지지 않아 무엇이든 될 수 있는", en: "Undefined, Thus Can Be Anything" },
            description: {
                kr: "아직 어느 한 쪽의 특정한 문제에 깊이 빠지지 않았으며, 평범한 피로 속에서 자신의 정체성을 탐색해 나가는 중입니다.",
                en: "You aren't extremely skewed into a specific problem yet; exploring identity amidst ordinary fatigue."
            },
            advice: {
                kr: "다양한 가능성이 열려있습니다. 지금은 내가 무엇을 좋아하고 어떤 방법이 어울리는지 긍정적으로 자극을 줘볼 타이밍입니다.",
                en: "Various possibilities are open. Time to positively stimulate yourself to see what you like and fits."
            },
            careers: {
                kr: ["UX/UI 디자이너", "콘텐츠 기획자", "데이터 분석가", "융합 엔지니어"],
                en: ["UX/UI Designer", "Content Planner", "Data Analyst", "Convergence Engineer"]
            },
            majors: {
                kr: ["산업디자인과", "사회학과", "응용통계학과", "융합소프트웨어학부"],
                en: ["Industrial Design", "Sociology", "Applied Statistics", "Software Engineering"]
            }
        };
    }

    return {
        ...matchedPersona,
        rawScores: { pScore, sScore, aScore, rScore },
        alertLevel: alertLevel,
        clinicalReport: clinicalReport
    };
};
