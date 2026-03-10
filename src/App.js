import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Loader2, RefreshCcw, BookOpen, Briefcase, GraduationCap, Globe, HeartPulse, HelpCircle } from 'lucide-react';
import { questions, chainQuestions, calculatePersona } from './data/surveyData';

function App() {
  const [lang, setLang] = useState('kr');
  const [step, setStep] = useState('welcome');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState({ P: 0, S: 0, A: 0 });
  const [resultPersona, setResultPersona] = useState(null);

  // New States for Hidden Chain Logic
  const [activeChain, setActiveChain] = useState(null);
  const [rootCause, setRootCause] = useState(null);

  const t = (textObj) => textObj[lang] || textObj['kr'];

  const toggleLanguage = () => setLang(prev => prev === 'kr' ? 'en' : 'kr');

  const handleStart = () => {
    setStep('survey');
    setCurrentQuestionIdx(0);
    setScores({ P: 0, S: 0, A: 0 });
    setActiveChain(null);
    setRootCause(null);
  };

  const finishSurvey = (finalScores, finalCause) => {
    setStep('loading');
    setTimeout(() => {
      const persona = calculatePersona(finalScores.P, finalScores.S, finalScores.A, finalCause);
      setResultPersona(persona);
      setStep('result');
    }, 2000);
  };

  const handleAnswer = (optionScore) => {
    const newScores = { ...scores };
    if (optionScore.P) newScores.P += optionScore.P;
    if (optionScore.S) newScores.S += optionScore.S;
    if (optionScore.A) newScores.A += optionScore.A;
    setScores(newScores);

    // TRIGGER CHECK for Hidden Chain Question
    if (!rootCause) {
      let chainToTrigger = null;
      if (currentQuestionIdx === 0 && optionScore.P >= 3) chainToTrigger = 'cq_family';
      else if (currentQuestionIdx === 1 && optionScore.P >= 3) chainToTrigger = 'cq_academic';
      else if (currentQuestionIdx === 2 && optionScore.P >= 3) chainToTrigger = 'cq_future';
      else if (currentQuestionIdx === 6 && optionScore.S >= 4) chainToTrigger = 'cq_peer';

      if (chainToTrigger) {
        const chainObj = chainQuestions.find(cq => cq.id === chainToTrigger);
        if (chainObj) {
          setActiveChain(chainObj);
          setStep('chain_survey');
          return;
        }
      }
    }

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(p => p + 1);
    } else {
      finishSurvey(newScores, rootCause);
    }
  };

  const handleChainAnswer = (cause) => {
    setRootCause(cause);
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(p => p + 1);
      setStep('survey'); // Return to normal survey flow
    } else {
      finishSurvey(scores, cause);
    }
  };

  return (
    <div className="min-h-screen mesh-bg flex flex-col items-center justify-center p-4 selection:bg-teal-200">

      {/* Language Toggle Navbar */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="glass flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-teal-800 hover:bg-white/50 transition-colors shadow-sm"
        >
          <Globe className="w-4 h-4" />
          {lang === 'kr' ? 'English' : '한국어'}
        </button>
      </div>

      <div className="w-full max-w-2xl mx-auto mt-10 relative">

        {/* WELCOME SCREEN */}
        {step === 'welcome' && (
          <div className="glass rounded-3xl p-8 md:p-12 text-center shadow-xl animate-fade-in border border-white/40">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6 shadow-inner">
              <BookOpen size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
              {lang === 'kr' ? '나의 진짜 ' : 'Discover Your True '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-accent-500">
                {lang === 'kr' ? '학습 자아' : 'Learning Persona'}
              </span>
              {lang === 'kr' ? '는 무엇일까?' : ''}
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto">
              {lang === 'kr'
                ? '12개의 간단한 질문으로 당신의 현재 심리 상태, 학업 유형을 분석하고 미래 정체성을 발견해 보세요.'
                : 'Analyze your psychological state and academic type with 12 simple questions to discover your future identity.'}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button
                onClick={handleStart}
                className="group relative w-full md:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-sans rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-900/20"
              >
                {lang === 'kr' ? '진단 시작하기' : 'Start the Survey'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setStep('question_types')}
                className="group relative w-full md:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-slate-700 transition-all duration-200 bg-white border-2 border-slate-200 font-sans rounded-full hover:bg-slate-50 hover:border-slate-300 hover:shadow hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                <HelpCircle className="mr-2 w-5 h-5 text-slate-400 group-hover:text-teal-500 transition-colors" />
                {lang === 'kr' ? '질문 유형 안내' : 'Question Types Guide'}
              </button>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              ICAN Student Persona Diagnostic Engine v1.1.1 (Deep Analysis)
            </div>
          </div>
        )}

        {/* QUESTION TYPES GUIDE SCREEN */}
        {step === 'question_types' && (
          <div className="glass rounded-3xl p-6 md:p-10 shadow-xl animate-fade-in border border-white/40 max-h-[85vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                {lang === 'kr' ? '질문 유형 및 진단 구조' : 'Question Types & Structure'}
              </h2>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              {lang === 'kr' 
                ? '본 진단은 표면적인 성적 너머의 내면적 에너지를 파악하기 위해 3가지 핵심 축(P, S, A)과 1가지 심층 축(Root Cause)으로 정교하게 설계되었습니다. 학생의 행동 이면에 숨은 진짜 상처를 찾아 치유를 돕는 것을 목표로 합니다.'
                : 'This survey is delicately designed with 3 core axes (P, S, A) and 1 deep axis (Root Cause) to understand the internal energy beyond superficial grades. Our goal is to find the hidden wounds behind a student\'s behavior and help them heal.'}
            </p>

            <div className="space-y-6">
              {/* Psychological */}
              <div className="bg-white/70 p-6 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-teal-400 group-hover:bg-teal-500 transition-colors"></div>
                <h3 className="text-xl font-bold text-teal-800 mb-2 flex items-center">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded text-sm mr-3 font-black">P</span>
                  {lang === 'kr' ? '심리적 요인 (Psychological)' : 'Psychological Factors'}
                </h3>
                <p className="text-slate-700 mb-3 font-medium">
                  {lang === 'kr' ? '"내면의 에너지가 고갈되었는가?"' : '"Is the internal energy depleted?"'}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {lang === 'kr' 
                    ? '단순히 "공부를 안 한다"가 아니라, 공부할 정신적 에너지 자체가 바닥난 번아웃 또는 우울 상태인지 감지합니다. 무기력, 완벽주의로 인한 극심한 불안, 회피성 도피(스마트폰/수면) 성향을 파악합니다.'
                    : 'We detect whether the student is simply "not studying" or if they are in a state of burnout/depression where their mental energy is completely depleted. It assesses lethargy, severe anxiety from perfectionism, and escapist tendencies.'}
                </p>
              </div>

              {/* Social */}
              <div className="bg-white/70 p-6 rounded-2xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-sky-400 group-hover:bg-sky-500 transition-colors"></div>
                <h3 className="text-xl font-bold text-sky-800 mb-2 flex items-center">
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded text-sm mr-3 font-black">S</span>
                  {lang === 'kr' ? '사회적 요인 (Social)' : 'Social Factors'}
                </h3>
                <p className="text-slate-700 mb-3 font-medium">
                  {lang === 'kr' ? '"관계가 학업의 발목을 잡고 있는가?"' : '"Are relationships hindering academics?"'}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {lang === 'kr' 
                    ? '친구가 없어서 생기는 "고립형 우울"인지, 반대로 또래 압력과 친구에게 너무 의존해서 생기는 "타인 의존형" 장애인지 진단합니다. 교우 갈등 조짐이나 은둔 지수를 함께 판단합니다.'
                    : 'It diagnoses whether the issue is "isolated depression" due to lack of friends, or a "peer-dependent" tendency resulting from peer pressure. It also evaluates signs of peer conflict or social withdrawal indices.'}
                </p>
              </div>

              {/* Academic */}
              <div className="bg-white/70 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400 group-hover:bg-indigo-500 transition-colors"></div>
                <h3 className="text-xl font-bold text-indigo-800 mb-2 flex items-center">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-sm mr-3 font-black">A</span>
                  {lang === 'kr' ? '학업적 요인 (Academic)' : 'Academic Factors'}
                </h3>
                <p className="text-slate-700 mb-3 font-medium">
                  {lang === 'kr' ? '"정확한 방향과 동기를 가지고 있는가?"' : '"Do they have clear direction and motivation?"'}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {lang === 'kr' 
                    ? '책상에 앉아있는 물리적 "양"이 아니라, 주도적인 학습 능력과 메타인지(자기 객관화) 수준인 "질"을 평가합니다. 실패에 대처하는 회복탄력성과 외적/내적 파워 동기를 분별합니다.'
                    : 'It evaluates the "quality" of study—proactive learning ability and metacognition—rather than just the physical "quantity" of time at a desk. It separates resilience against failure from external/internal motivations.'}
                </p>
              </div>

              {/* Root Cause (Deep Dive) */}
              <div className="bg-slate-900 border border-indigo-500/30 p-6 rounded-2xl shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-xl font-bold text-fuchsia-300 mb-2 flex items-center relative z-10">
                  <HeartPulse className="w-6 h-6 mr-3 text-fuchsia-400 animate-pulse" />
                  {lang === 'kr' ? '심층 꼬리 질문 (Root Cause Diagnostic)' : 'Deep Chain Diagnostic (Root Cause)'}
                </h3>
                <p className="text-indigo-200 mb-3 font-medium relative z-10">
                  {lang === 'kr' ? '"표면적 증상 아래, 진짜 상처는 무엇인가?"' : '"Beneath surface symptoms, what is the true wound?"'}
                </p>
                <p className="text-indigo-100/80 text-sm leading-relaxed relative z-10">
                  {lang === 'kr' 
                    ? 'P, S, A 문항에서 특정 위험 징후가 감지되면 숨겨진 심층 질문 시스템이 트리거(Trigger)됩니다. 가정 내 압박, 학교 폭력, 학습 트라우마(끝없는 비교), 미래에 대한 짙은 절망감 등 진짜 원인을 찾아내어 부모님과 상담가가 아이를 깊이 이해하고 실질적 치유로 인도하도록 돕습니다.'
                    : 'When specific risk signs are detected in P,S,A questions, hidden deep-dive questions are triggered. By identifying the real cause—such as family pressure, bullying, academic trauma, or deep despair—we help guardians and paths lead to actual healing.'}
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setStep('welcome')}
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 hover:bg-slate-50 font-sans rounded-full hover:shadow"
              >
                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform text-slate-400 group-hover:text-slate-600" />
                {lang === 'kr' ? '메인으로 돌아가기' : 'Back to Home'}
              </button>
            </div>
          </div>
        )}

        {/* NORMAL SURVEY SCREEN */}
        {step === 'survey' && (
          <div className="glass rounded-3xl p-6 md:p-10 shadow-xl animate-slide-up border border-white/40">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                <span>{lang === 'kr' ? '진단 진행률' : 'Survey Progress'}</span>
                <span>{currentQuestionIdx + 1} / {questions.length}</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-400 to-accent-500 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
                {t(questions[currentQuestionIdx].text)}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestionIdx].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-left p-4 md:p-5 rounded-2xl border-2 border-slate-100 bg-white/60 hover:bg-teal-50 hover:border-teal-300 transition-all duration-200 group flex items-center justify-between"
                >
                  <span className="text-lg text-slate-700 font-medium group-hover:text-teal-800 transition-colors">
                    {t(option.text)}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-teal-100 transition-colors shrink-0 ml-4">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* HIDDEN CHAIN QUESTION SCREEN (DEEP-DIVE) */}
        {step === 'chain_survey' && activeChain && (
          <div className="bg-indigo-900/90 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl animate-fade-in border border-indigo-400/30 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 text-fuchsia-300">
                <HeartPulse className="w-6 h-6 animate-pulse" />
                <span className="font-semibold tracking-wide text-sm">{lang === 'kr' ? '심층 치유 여정' : 'Deep Healing Journey'}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-2">
                {lang === 'kr' ? '네 마음을 깊이 이해하고 싶어.' : 'I want to deeply understand your heart.'}
              </h2>
              <p className="text-indigo-200 mb-8 text-lg">
                {t(activeChain.text)}
              </p>

              <div className="space-y-4 text-slate-900">
                {activeChain.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChainAnswer(option.cause)}
                    className="w-full text-left p-5 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-fuchsia-300 transition-all duration-300 group flex items-center justify-between backdrop-blur-md"
                  >
                    <span className="text-lg text-indigo-50 font-medium group-hover:text-white transition-colors leading-relaxed">
                      {t(option.text)}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-indigo-800/50 flex items-center justify-center group-hover:bg-fuchsia-500/50 transition-colors shrink-0 ml-4 border border-indigo-500">
                      <ChevronRight className="w-5 h-5 text-indigo-200 group-hover:text-white transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LOADING SCREEN */}
        {step === 'loading' && (
          <div className="glass rounded-3xl p-12 text-center shadow-xl animate-fade-in border border-white/40 flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-16 h-16 text-teal-500 animate-spin mb-6" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {lang === 'kr' ? '당신의 학습 자아를 분석 중입니다...' : 'Analyzing your learning persona...'}
            </h2>
            <p className="text-slate-500">
              {lang === 'kr' ? '답변을 기반으로 30가지 유형 중 가장 적합한 자아를 찾고 있어요.' : 'Matching your answers with the closest of 30 distinct personas.'}
            </p>
          </div>
        )}

        {/* RESULT SCREEN */}
        {step === 'result' && resultPersona && (
          <div className="glass rounded-3xl overflow-hidden shadow-2xl animate-fade-in border border-white/40">
            {/* Header Area */}
            <div className="bg-slate-900 text-white p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400 via-slate-900 to-slate-900"></div>
              <div className="relative z-10">
                <p className="text-teal-400 font-semibold tracking-wider text-sm uppercase mb-3">
                  {lang === 'kr' ? '당신의 진짜 모습은' : 'YOUR TRUE SELF IS'}
                </p>
                <h2 className="text-4xl md:text-5xl font-black mb-2">{t(resultPersona.name)}</h2>
                <p className="text-xl text-slate-300 italic">"{t(resultPersona.subtitle)}"</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-10 bg-white/60">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-accent-500" />
                  {lang === 'kr' ? '유형 특징' : 'Persona Characteristics'}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  {t(resultPersona.description)}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-teal-700 mb-3 flex items-center">
                  <RefreshCcw className="w-5 h-5 mr-2 text-teal-500" />
                  {lang === 'kr' ? '맞춤형 어드바이스' : 'Personalized Advice'}
                </h3>
                <p className="text-teal-800 leading-relaxed font-medium bg-teal-50 p-5 rounded-2xl border border-teal-100 whitespace-pre-line">
                  {t(resultPersona.advice)}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
                  <h4 className="text-indigo-800 font-bold mb-3 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    {lang === 'kr' ? '추천 미래 직업군' : 'Recommended Careers'}
                  </h4>
                  <ul className="space-y-2">
                    {t(resultPersona.careers).map((career, i) => (
                      <li key={i} className="flex items-center text-indigo-700 font-medium whitespace-break-spaces">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></div> {career}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100">
                  <h4 className="text-sky-800 font-bold mb-3 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    {lang === 'kr' ? '추천 대학 전공' : 'Recommended Majors'}
                  </h4>
                  <ul className="space-y-2">
                    {t(resultPersona.majors).map((major, i) => (
                      <li key={i} className="flex items-center text-sky-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2"></div> {major}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={handleStart}
                className="w-full p-4 rounded-xl flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <RefreshCcw className="w-5 h-5 mr-2" />
                {lang === 'kr' ? '다시 진단하기' : 'Retake the Survey'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
