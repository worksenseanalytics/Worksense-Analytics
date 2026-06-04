import React, { useState, useEffect } from "react";
import { 
  Network, 
  BrainCircuit, 
  Eye, 
  MessageSquareText, 
  CheckCircle, 
  Zap,
  Activity,
  Layers,
  Server,
  TerminalSquare,
  Microchip,
  Play,
  Flame,
  LineChart
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function DeepLearningDetail() {
  const { t, language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [archType, setArchType] = useState<"transformer" | "cnn" | "mlp">("transformer");
  const [learningRate, setLearningRate] = useState<number>(0.012);
  const [trainProgress, setTrainProgress] = useState<number>(100);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const isId = language === "id";

  useEffect(() => {
    if (isTraining) {
      const interval = setInterval(() => {
        setTrainProgress((prev) => {
          if (prev >= 100) {
            setIsTraining(false);
            clearInterval(interval);
            return 100;
          }
          const stepSize = Math.max(2, Math.floor(learningRate * 400));
          return Math.min(100, prev + stepSize);
        });
      }, 70);
      return () => clearInterval(interval);
    }
  }, [isTraining, learningRate]);

  const handleStartTraining = () => {
    setIsTraining(true);
    setTrainProgress(0);
  };

  const workflowSteps = [
    {
      num: "01",
      title: t('dl.wf.step1_title'),
      desc: t('dl.wf.step1_desc')
    },
    {
      num: "02",
      title: t('dl.wf.step2_title'),
      desc: t('dl.wf.step2_desc')
    },
    {
      num: "03",
      title: t('dl.wf.step3_title'),
      desc: t('dl.wf.step3_desc')
    },
    {
      num: "04",
      title: t('dl.wf.step4_title'),
      desc: t('dl.wf.step4_desc')
    }
  ];

  return (
    <section id="jasa-deep-learning" className="bg-slate-900 py-16 md:py-24 pb-16 md:pb-20 relative border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col mb-16 relative">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-purple-400 border border-purple-500/20 self-start mb-5">
            <BrainCircuit className="h-3.5 w-3.5 text-purple-400 " /> {t('dl.badge')}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 text-left flex flex-col justify-center max-w-2xl">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] text-left">
                {t('dl.title1')}
                <span className="block mt-1 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent pb-1">
                  {t('dl.title2')}
                </span>
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-bold font-sans tracking-wide leading-relaxed text-left">
                {t('dl.subtitle1')}<span className="text-purple-400 font-extrabold">{t('dl.subtitle2')}</span>
              </p>

              <div className="mt-5 h-1 w-24 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.25)]" />
            </div>

            <div className="lg:col-span-3 lg:-ml-12 lg:mr-auto relative flex flex-col items-center justify-center self-center w-[360px] max-w-full">
              
              {/* ACCURACY/mAP INDICATOR */}
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                  <Activity className="h-3.5 w-3.5 text-fuchsia-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('dl.precision')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                    {isTraining ? `${(35 + (64.4 * (trainProgress / 100))).toFixed(1)}%` : archType === "transformer" ? "99.4% mAP" : archType === "cnn" ? "96.8% mAP" : "91.2% mAP"}
                  </div>
                </div>
              </div>

              {/* TFLOPS/LATENCY INDICATOR */}
              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Microchip className="h-3.5 w-3.5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none">{t('dl.latency')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                      {archType === "transformer" ? "420.5 TFLOPS" : archType === "cnn" ? "340.2 TFLOPS" : "190.8 TFLOPS"}
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN INTERACTIVE DEEP LEARNING GRADIENT TRAINER */}
              <div className="w-full bg-slate-950/65 rounded-2xl border border-purple-500/10 p-5 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[385px] hover:border-purple-500/20 transition-all select-none">
                
                {/* Simulated Glass Highlight Reflection */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-fuchsia-400/40 via-purple-500/50 to-fuchsia-300/30" />
                <div className="absolute -inset-y-12 w-12 bg-white/5 blur-xl -skew-x-12 translate-x-[-150px] animate-[shimmer_8s_infinite] pointer-events-none" />

                {/* Card Title & Platform Actions */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/45">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-gradient-to-br from-fuchsia-400 to-purple-500 flex items-center justify-center text-[9px] text-slate-950 font-sans font-black">
                        DL
                      </div>
                      <div>
                        <h4 className="text-[10px] font-extrabold text-slate-100 tracking-wider uppercase leading-none">Hyperparameter Lab</h4>
                        <p className="text-[8px] text-fuchsia-400 font-mono mt-0.5 uppercase tracking-widest flex items-center gap-1">
                          <span className="inline-block h-1 w-1 rounded-full bg-fuchsia-400 animate-ping"></span>
                          {isTraining ? (isId ? "Status: Pelatihan" : "Status: Training") : (isId ? "Status: Terkalibrasi" : "Status: Calibrated")}
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleStartTraining}
                      disabled={isTraining}
                      className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-fuchsia-500/40 active:scale-95 transition-all text-[9.5px] font-bold flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:pointer-events-none font-sans whitespace-nowrap"
                    >
                      <Play className="h-2.5 w-2.5 text-fuchsia-400" />
                      {isId ? "Latih Net" : "Train Net"}
                    </button>
                  </div>

                  {/* DEEP ARCHITECTURE SELECTOR TABS */}
                  <div className="mt-3.5 grid grid-cols-3 gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800/60 text-[9px] font-bold">
                    <button 
                      onClick={() => { setArchType("transformer"); handleStartTraining(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        archType === "transformer" 
                          ? "bg-slate-800 text-fuchsia-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Transformer
                    </button>
                    <button 
                      onClick={() => { setArchType("cnn"); handleStartTraining(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        archType === "cnn" 
                          ? "bg-slate-800 text-fuchsia-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      CNN (ResNet)
                    </button>
                    <button 
                      onClick={() => { setArchType("mlp"); handleStartTraining(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        archType === "mlp" 
                          ? "bg-slate-800 text-fuchsia-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      MLP (Dense)
                    </button>
                  </div>
                </div>

                {/* NEURAL PIPELINE DYNAMIC GRAPH LAYER */}
                <div className="relative h-28 bg-[rgba(1,5,15,0.92)] rounded-lg p-3 mt-3.5 border border-slate-850/70 overflow-hidden flex flex-col justify-center items-center">
                  {/* Digital scan line indicator */}
                  <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent top-0 animate-[scan_3s_linear_infinite] z-20 pointer-events-none" />
                  
                  {/* Grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.025)_1px,transparent_1px)] bg-[size:0.5rem_0.5rem] pointer-events-none" />

                  {/* Neural Graph Layer depending on Selected Tab */}
                  <svg className="w-full h-full relative z-10 opacity-90" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Render CNN-specific Convolution patterns */}
                    {archType === "cnn" && (
                      <>
                        {/* Convolutions (Square kernels representation) */}
                        <rect x="10" y="8" width="6" height="6" rx="1" fill="none" stroke="#d8b4fe" strokeWidth="0.8" className={isTraining ? "animate-pulse" : ""} />
                        <rect x="10" y="24" width="6" height="6" rx="1" fill="none" stroke="#d8b4fe" strokeWidth="0.8" className={isTraining ? "animate-pulse" : ""} />
                        
                        <rect x="28" y="12" width="5" height="5" rx="1" fill="none" stroke="#c084fc" strokeWidth="0.8" />
                        <rect x="28" y="28" width="5" height="5" rx="1" fill="none" stroke="#c084fc" strokeWidth="0.8" />
                        
                        {/* MaxPooling Layer blocks */}
                        <rect x="48" y="16" width="4" height="4" rx="0.5" fill="#a855f7" opacity="0.6" />
                        <rect x="65" y="16" width="3" height="3" rx="0.5" fill="#9333ea" />
                        
                        {/* Connected wires */}
                        <line x1="16" y1="11" x2="28" y2="14.5" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="1 1" />
                        <line x1="16" y1="27" x2="28" y2="30.5" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="1 1" />
                        <line x1="33" y1="14.5" x2="48" y2="18" stroke="#d8b4fe" strokeWidth="0.5" />
                        <line x1="33" y1="30.5" x2="48" y2="18" stroke="#d8b4fe" strokeWidth="0.5" />
                        <line x1="52" y1="18" x2="65" y2="17.5" stroke="#f472b6" strokeWidth="0.5" />
                        
                        {/* Output Nodes */}
                        <circle cx="88" cy="12" r="2.5" fill="#f472b6" />
                        <circle cx="88" cy="28" r="2.5" fill="#9333ea" />
                        
                        <line x1="68" y1="17.5" x2="88" y2="12" stroke="#f472b6" strokeWidth="0.5" />
                        <line x1="68" y1="17.5" x2="88" y2="28" stroke="#9333ea" strokeWidth="0.5" />
                      </>
                    )}

                    {/* Render Transformer attention block representation */}
                    {archType === "transformer" && (
                      <>
                        {/* Embedding Nodes */}
                        <circle cx="8" cy="10" r="1.5" fill="#c084fc" />
                        <circle cx="8" cy="20" r="1.5" fill="#c084fc" />
                        <circle cx="8" cy="30" r="1.5" fill="#c084fc" />

                        {/* Attention Matrices boxes */}
                        <rect x="22" y="5" width="10" height="10" rx="1.5" fill="none" stroke="#d8b4fe" strokeWidth="0.8" />
                        <rect x="22" y="25" width="10" height="10" rx="1.5" fill="none" stroke="#d8b4fe" strokeWidth="0.8" />
                        <text x="24" y="12" fill="#d8b4fe" fontSize="5" fontFamily="monospace" fontWeight="bold">Q</text>
                        <text x="24" y="32" fill="#d8b4fe" fontSize="5" fontFamily="monospace" fontWeight="bold">K</text>

                        {/* Scaled Dot-product Layer */}
                        <rect x="48" y="12" width="16" height="16" rx="2" fill="none" stroke="#a855f7" strokeWidth="1" />
                        <text x="50" y="22" fill="#f472b6" fontSize="5" fontFamily="monospace" fontWeight="black" className="animate-pulse">Softmax</text>

                        {/* Linear Head output */}
                        <circle cx="86" cy="20" r="3" fill="url(#purpleGlow)" className="animate-ping" style={{ animationDuration: '3s' }} />
                        <circle cx="86" cy="20" r="1.7" fill="#ffffff" />

                        {/* Connecting arrows */}
                        <path d="M 8 10 L 22 10 M 8 20 L 22 10 M 8 20 L 22 30 M 8 30 L 22 30" stroke="#a855f7" strokeWidth="0.5" />
                        <path d="M 32 10 L 48 20 M 32 30 L 48 20" stroke="#f472b6" strokeWidth="0.5" />
                        <path d="M 64 20 L 86 20" stroke="#ffffff" strokeWidth="0.6" strokeDasharray="2 1" />
                      </>
                    )}

                    {/* MLP / FeedForward standard node layers */}
                    {archType === "mlp" && (
                      <>
                        {/* Input Nodes */}
                        <circle cx="15" cy="10" r="1.5" fill="#d8b4fe" />
                        <circle cx="15" cy="20" r="1.5" fill="#d8b4fe" />
                        <circle cx="15" cy="30" r="1.5" fill="#d8b4fe" />
                        
                        {/* Hidden Layer 1 */}
                        <circle cx="42" cy="6" r="1.5" fill="#c084fc" />
                        <circle cx="42" cy="15" r="1.5" fill="#c084fc" />
                        <circle cx="42" cy="24" r="1.5" fill="#c084fc" />
                        <circle cx="42" cy="34" r="1.5" fill="#c084fc" />
                        
                        {/* Hidden Layer 2 */}
                        <circle cx="68" cy="11" r="1.5" fill="#a855f7" />
                        <circle cx="68" cy="20" r="1.5" fill="#a855f7" />
                        <circle cx="68" cy="29" r="1.5" fill="#a855f7" />

                        {/* Output Node */}
                        <circle cx="90" cy="20" r="2" fill="#f472b6" className={isTraining ? "animate-pulse" : ""} />

                        {/* Connections */}
                        <path d="M 15 10 L 42 6 M 15 10 L 42 15 M 15 10 L 42 24 M 15 10 L 42 34" stroke="#581c87" strokeWidth="0.4" />
                        <path d="M 15 20 L 42 6 M 15 20 L 42 15 M 15 20 L 42 24 M 15 20 L 42 34" stroke="#581c87" strokeWidth="0.4" />
                        <path d="M 15 30 L 42 6 M 15 30 L 42 15 M 15 30 L 42 24 M 15 30 L 42 34" stroke="#581c87" strokeWidth="0.4" />
                        
                        <path d="M 42 6 L 68 11 M 42 6 L 68 20 M 42 6 L 68 29" stroke="#7e22ce" strokeWidth="0.4" />
                        <path d="M 42 15 L 68 11 M 42 15 L 68 20 M 42 15 L 68 29" stroke="#7e22ce" strokeWidth="0.4" />
                        <path d="M 42 24 L 68 11 M 42 24 L 68 20 M 42 24 L 68 29" stroke="#7e22ce" strokeWidth="0.4" />
                        <path d="M 42 34 L 68 11 M 42 34 L 68 20 M 42 34 L 68 29" stroke="#7e22ce" strokeWidth="0.4" />

                        <path d="M 68 11 L 90 20 M 68 20 L 90 20 M 68 29 L 90 20" stroke="#a855f7" strokeWidth="0.5" />
                      </>
                    )}

                    <defs>
                      <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#d8b4fe" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>

                  {/* Micro-Console display output inside graph */}
                  <div className="absolute bottom-1 right-2 left-2 flex justify-between text-[7px] font-mono text-fuchsia-400 bg-slate-950/90 px-1.5 py-0.5 rounded-sm border border-purple-500/20 leading-none">
                    <span>Loss: {isTraining ? (0.95 - (0.93 * (trainProgress / 100))).toFixed(4) : archType === "transformer" ? "0.0075" : archType === "cnn" ? "0.0210" : "0.0640"}</span>
                    <span>Epochs: {isTraining ? `${Math.floor(trainProgress * 1.5)}/150` : "150/150"}</span>
                  </div>
                </div>

                {/* THE LEARNING RATE HYPERPARAMETER TUNER */}
                <div className="mt-3.5 bg-slate-900/60 rounded-lg p-2.5 border border-slate-850/60 text-left">
                  <div className="flex items-center justify-between text-[8px] font-bold font-mono">
                    <span className="text-slate-400 uppercase tracking-widest">
                      {isId ? "Tingkat Pembelajaran (Learning Rate)" : "Learning Rate Tuning"}
                    </span>
                    <span className="text-fuchsia-400">
                      {learningRate.toFixed(4)}
                    </span>
                  </div>
                  
                  <input 
                    type="range" 
                    min="0.001" 
                    max="0.05" 
                    step="0.001"
                    value={learningRate} 
                    onChange={(e) => setLearningRate(Number(e.target.value))}
                    className="w-full h-1 mt-2 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-fuchsia-500 [&::-webkit-slider-runnable-track]:bg-slate-850" 
                  />
                  
                  <div className="flex justify-between text-[7px] font-mono text-slate-500 mt-1">
                    <span>0.001 (Slow Conv)</span>
                    <span>0.012 (Optimum)</span>
                    <span>0.050 (High Momentum)</span>
                  </div>
                </div>

                {/* HARDWARE/ACCELERATOR TELEMETRY METRICS */}
                <div className="mt-3.5 space-y-2 text-left">
                  <div className="text-[8px] font-bold font-mono text-slate-500 tracking-wider uppercase">
                    {isId ? "Pemantauan Pelatihan Hardware" : "Accelerator Performance Metrics"}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-900/40 p-2 rounded border border-slate-850/40 text-left">
                      <span className="text-[7px] font-mono text-slate-500 leading-none block">TRAINING TIME</span>
                      <span className="text-[12px] font-mono font-bold text-slate-100 tracking-tight mt-0.5 block">
                        {isTraining ? `${(trainProgress / 1.5).toFixed(0)} mins` : archType === "transformer" ? "1h 45m" : archType === "cnn" ? "42m" : "12m"}
                      </span>
                    </div>
                    <div className="bg-slate-900/40 p-2 rounded border border-slate-850/40 text-left">
                      <span className="text-[7px] font-mono text-slate-500 leading-none block">ACCELERATION</span>
                      <span className="text-[12px] font-mono font-bold tracking-tight mt-0.5 text-fuchsia-400 block">
                        {archType === "transformer" ? "4x H100 Tensor" : archType === "cnn" ? "2x A100 Tensor" : "1x RTX 4090"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="mt-4 pt-2.5 border-t border-slate-800/40 flex justify-between text-[8px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-1 w-1 bg-fuchsia-400 rounded-full animate-pulse"></span>
                    {isId ? "Tensors Sukses Dimuat" : "Telemetry Pipeline Connected"}
                  </span>
                  <span className="text-fuchsia-400 font-semibold uppercase tracking-wider">
                    {archType === "transformer" ? "Attention Act" : archType === "cnn" ? "Convoluted" : "Dense FF"}
                  </span>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{t('dl.tools')}</span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-orange-400 border border-orange-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              PyTorch
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-yellow-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-yellow-400 border border-yellow-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              TensorFlow
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-green-400 border border-green-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" alt="OpenCV" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              OpenCV
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-blue-400 border border-blue-500/20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Hugging_Face_logo.svg" alt="HuggingFace" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              HuggingFace
            </span>
          </div>
        </div>

        {/* INTRO PROFILE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('dl.intro1_desc')}<strong>{t('dl.intro1_bold')}</strong>{t('dl.intro1_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-fuchsia-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-fuchsia-500 " />
              <span>{t('dl.intro1_tag')}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('dl.intro2_desc1')}<strong>{t('dl.intro2_bold1')}</strong>{t('dl.intro2_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-purple-400 font-mono font-bold">
              <CheckCircle className="h-4 w-4" />
              <span>{t('dl.intro2_tag')}</span>
            </div>
          </div>
        </div>

        {/* SEGMENT SOLUTIONS */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white font-sans">
              {t('dl.segment_title')}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
              {t('dl.segment_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* UC 1 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-fuchsia-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-400 border border-fuchsia-500/25">
                    {t('dl.usecase1.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <MessageSquareText className="h-3.5 w-3.5 text-fuchsia-400" /> {t('dl.usecase1.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('dl.usecase1.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('dl.usecase1.desc')}
                </p>
              </div>
            </div>

            {/* UC 2 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-purple-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400 border border-purple-500/25">
                    {t('dl.usecase2.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Eye className="h-3.5 w-3.5 text-purple-400" /> {t('dl.usecase2.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('dl.usecase2.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('dl.usecase2.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TOOLS */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-fuchsia-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center mb-4 group-hover:bg-fuchsia-500 group-hover:text-slate-950 transition-colors">
                <Network className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('dl.tools.title1')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('dl.tools.desc1')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-purple-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-slate-950 transition-colors">
                <Server className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('dl.tools.title2')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('dl.tools.desc2')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-purple-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-slate-950 transition-colors">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('dl.tools.title3')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('dl.tools.desc3')}</p>
            </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white font-sans">{t('dl.wf.title')}</h4>
            <p className="mt-2 text-xs text-fuchsia-400 font-mono tracking-widest uppercase">{t('dl.wf.badge')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? "bg-slate-800 border-fuchsia-500/40 shadow-lg shadow-fuchsia-500/5 translate-y-[-4px]" 
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-fuchsia-500/20 transition-colors">
                      {step.num}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${activeWorkflowStep === idx ? "bg-fuchsia-400" : "bg-slate-800"}`} />
                  </div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base font-sans group-hover:text-fuchsia-400 transition-colors">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  {t('dl.wf.verified')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES & METRICS BENTO IN-DEEP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-20 text-left">
          <div className="col-span-full rounded-3xl border border-slate-800/60 dark-glass-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-purple-400 uppercase font-bold px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                {isId ? "PRESTASI TEKNOLOGI DEEP LEARNING" : "DEEP LEARNING TECH STACK"}
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-sans text-slate-100">
                {isId ? "Ekosistem Tools Deep Learning Utama Kami:" : "Our Core Deep Learning Tools:"}
              </h3>
              
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: isId ? "Akurasi Klasifikasi & Pengenalan Visual Berdaya Tinggi" : "State-of-the-Art Visual Recognition Accuracy",
                    desc: isId ? "Memanfaatkan Convolutional Neural Network (CNN) dan Vision Transformers terbaru untuk ekstraksi fitur citra atau video berlatensi mikro." : "Utilizing the latest Convolutional Neural Networks (CNNs) and Vision Transformers for micro-latency image or video feature extraction."
                  },
                  {
                    title: isId ? "Pemrosesan Bahasa Alami Berbasis Transformator (NLP)" : "Transformer-powered Natural Language Processing (NLP)",
                    desc: isId ? "Implementasi arsitektur Model Bahasa Besar (LLM) terlokalisasi dan transformer untuk klasifikasi teks, analisis sentimen, serta ekstraksi entitas." : "Localized Large Language Models (LLMs) and transformer architecture implementations for text classification, sentiment analysis, and entity extraction."
                  }
                ].map((feat) => (
                  <div key={feat.title} className="flex gap-3 text-left">
                    <div className="mt-1 h-5 w-5 rounded-md bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-200">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools logos row with actual logos */}
            <div className="mt-8 pt-4 border-t border-slate-900 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-mono text-slate-500 justify-start">
              <span className="text-slate-350 font-bold">Standard Ecosystem:</span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                PyTorch
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                TensorFlow
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" alt="OpenCV" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                OpenCV
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Hugging_Face_logo.svg" alt="HuggingFace" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                HuggingFace
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" alt="Keras" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Keras
              </span>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => {
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya ingin berdiskusi mengenai prospek layanan Deep Learning, NLP atau Computer Vision untuk kebutuhan sistem kami. Boleh minta waktu konsultasi?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-purple-400 hover:shadow-purple-500/40 cursor-pointer"
          >
            {isId ? "Mulai Konsultasi Deep Learning" : "Start Free Deep Learning Consultation"}
          </button>
        </div>

      </div>
    </section>
  );
}
