import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Loader2, RefreshCcw, BookOpen, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { questions, calculatePersona } from './data/surveyData';

function App() {
  const [lang, setLang] = useState('kr'); // 'kr' or 'en'
  const [step, setStep] = useState('welcome'); // 'welcome', 'survey', 'loading', 'result'
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState({ P: 0, S: 0, A: 0 });
  const [resultPersona, setResultPersona] = useState(null);

  const t = (textObj) => textObj[lang] || textObj['kr'];

  const toggleLanguage = () => {
    setLang(prev => prev === 'kr' ? 'en' : 'kr');
  };

  const handleStart = () => {
    setStep('survey');
    setCurrentQuestionIdx(0);
    setScores({ P: 0, S: 0, A: 0 });
  };

  const handleAnswer = (optionScore) => {
    // Update scores
    const newScores = { ...scores };
    if (optionScore.P) newScores.P += optionScore.P;
    if (optionScore.S) newScores.S += optionScore.S;
    if (optionScore.A) newScores.A += optionScore.A;
    setScores(newScores);

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(p => p + 1);
    } else {
      // Finished
      setStep('loading');
      setTimeout(() => {
        const persona = calculatePersona(newScores.P, newScores.S, newScores.A);
        setResultPersona(persona);
        setStep('result');
      }, 2000);
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
            <button
              onClick={handleStart}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-sans rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-900/20"
            >
              {lang === 'kr' ? '진단 시작하기' : 'Start the Survey'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-8 text-sm text-slate-400">
              ICAN Student Persona Diagnostic Engine v1.1 Multi-Lang
            </div>
          </div>
        )}

        {/* SURVEY SCREEN */}
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
                <p className="text-teal-800 leading-relaxed font-medium bg-teal-50 p-5 rounded-2xl border border-teal-100">
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
