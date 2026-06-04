import React, { useState } from "react";
import { 
  Server, 
  GitBranch, 
  Cpu, 
  Activity, 
  Layers, 
  Database,
  ArrowRight,
  Terminal,
  Clock,
  Container,
  Cloud,
  CheckCircle,
  Play
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function MlOpsDetail() {
  const { language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const isId = language === "id";

  const content = {
    badge: isId ? "SIKLUS MODEL AI MODERN" : "MODERN AI LIFECYCLE",
    title1: isId ? "Layanan MLOps Profesional & " : "Professional MLOps & ",
    title2: isId ? "Automated AI Model Deployment" : "Automated AI Model Deployment",
    subtitle: isId 
      ? "Kami membantu mendistribusikan model Machine Learning dari notebook riset ke server produksi berskala enterprise dengan keandalan tinggi, API latensi rendah, serta otomatisasi monitoring bergaransi."
      : "We help transition your Machine Learning models from research notebooks into high-availability production environments with ultra-dense microsecond endpoints and full SLA monitoring.",
    
    colTitle1: isId ? "Automated ML Pipeline (CI/CD)" : "Automated ML Pipeline (CI/CD)",
    colDesc1: isId
      ? "Penyusunan pipeline otomatis untuk pelatihan model ulang (re-training), pengetesan akurasi berkala, pengujian bias, serta versioning model terintegrasi MLflow."
      : "Automating train, evaluation, and build loops. Secure model registry with comprehensive metadata, artifact mapping, and automatic bias-testing checkpoints.",
    
    colTitle2: isId ? "API Serving & Containerization" : "API Serving & Containerization",
    colDesc2: isId
      ? "Deployment model menggunakan Docker container ke serverless microservices (Google Cloud Run / Kubernetes) dengan API FastAPI ber-latensi mikro-detik."
      : "Shatter performance bottlenecks with Docker containers deployed on Google Cloud Run and Kubernetes, optimized for high throughput and sub-millisecond response.",
    
    colTitle3: isId ? "Monitoring & Drift Analytics" : "Monitoring & Drift Analytics",
    colDesc3: isId
      ? "Pelacakan langsung pergeseran kualitas data (data drift), penurunan akurasi (accuracy decay) model, konsumsi CPU/Memori, serta sistem notifikasi otomatis."
      : "Continuous observability. Track input data drift, concept drift, latency degradation, and host system health with instant automated Slack/Email paging.",

    specTech: isId ? "Spesifikasi Teknologi Infrastruktur" : "Infrastructure Technology Specs",
    toolsHeader: isId ? "Ekosistem Tools MLOps Utama Kami:" : "Our Core MLOps Tools:",
    
    perfMetric: isId ? "Metrik Kinerja Rata-Rata" : "Average Performance Metrics",
    latencyLabel: isId ? "Konsistensi Latensi API" : "API Serving Latency",
    uptimeLabel: isId ? "Skalabilitas & Uptime" : "Uptime SLA",
    pipelineLabel: isId ? "Kecepatan Delivery" : "Time To Production",

    wfTitle: isId ? "Continuous Delivery MLOps Pipeline" : "Our Continuous Delivery MLOps Pipeline",
  };

  const introCards = [
    {
      desc: isId 
        ? "Layanan MLOps kami menjembatani kesenjangan antara riset sains data dan infrastruktur produksi. Kami mensistematisasikan kode model mentah dari Jupyter Notebook menjadi "
        : "Our MLOps service bridges the gap between data science research and production-grade infrastructure. We refactor raw model code from Jupyter Notebooks into ",
      bold: isId
        ? "pipeline modular, terstandar, dan berkinerja tinggi "
        : "modular, highly standardized, high-performance pipelines ",
      desc2: isId
        ? "yang siap didistribusikan ke server cloud kapan pun dibutuhkan tanpa refaktor manual."
        : "that are ready to be packaged and shipped to any cloud platform instantly.",
      tag: isId ? "Otomatisasi Pipeline End-to-End" : "Continuous Integration Pipeline"
    },
    {
      desc: isId
        ? "Kami menjamin reliabilitas penuh atas deployment model AI Anda di server produksi. Setiap endpoint API dirancang menggunakan "
        : "We offer production-grade hosting guarantees for your trained intelligence. Endpoints are wrapped into ",
      bold: isId
        ? "arsitektur microservices dengan penanganan auto-scaling "
        : "lightweight auto-scaling microservices ",
      desc2: isId
        ? "yang adaptif terhadap lonjakan beban pengguna, lengkap dengan pemantauan pergeseran data (data drift) secara realtime."
        : "capable of handling extreme burst traffic, shielded by instant health monitoring.",
      tag: isId ? "SLA Garansi Uptime & Latensi Mikro" : "Production SLA & Drift Protection"
    }
  ];

  const useCases = [
    {
      badge1: isId ? "Sektor Retail & E-commerce" : "Retail & E-commerce Sector",
      badge2: isId ? "Sensor Pergeseran Data" : "Drift Detection Active",
      title: isId 
        ? "Auto-Retraining Pipeline Akibat Pergeseran Karakter Data (Data Drift)"
        : "Automated Retraining Pipeline Powered by Drift Detection Sensors",
      desc: isId
        ? "Ketika preferensi belanja pelanggan berubah, performa model rekomendasi Anda berisiko menurun (decay). Kami mengotomatiskan pipeline pendeteksi pergeseran data masukan. Begitu performa melorot di bawah batas aman, retraining otomatis terpicu secara mandiri, melatih ulang model dengan data transaksi terbaru, menguji keakuratan baru, lalu memperbarui API tanpa mengganggu transaksi berjalan (zero downtime)."
        : "As consumer purchasing patterns evolve, model prediction quality degrades. We engineer automated monitoring sensors that track input data drift. If accuracy falls below thresholds, a retraining loop is instantiated, feeding the model with the latest data, executing tests, and safely redeploying endpoints without interrupting user sessions."
    },
    {
      badge1: isId ? "Fintech, Logistik & IoT Sektor" : "Fintech, Logistics & IoT Sector",
      badge2: isId ? "API Latensi Mikro" : "Microsecond Serving Latency",
      title: isId 
        ? "Servis Kontainerisasi API Model Berlatensi Tinggi & Skalabilitas Fleksibel"
        : "High-density Container Isolation for Sub-millisecond Inference",
      desc: isId
        ? "Bagi startup fintech yang memproses skor kredit atau perusahaan logistik dengan rute armada padat, kecepatan inferensi adalah kunci. Kami mendesain deployment model terisolasi di dalam Docker Container yang berjalan di platform serverless Google Cloud Run atau Kubernetes. Sistem otomatis melakukan penskalaan (auto-scale) hingga puluhan ribu permintaan per detik saat jam sibuk dan turun kembali ke nol biaya saat sepi."
        : "For credit underwriting or logistics fleet routing, microsecond decisioning is vital. We build container-isolated deployments bundled into ultra-fast REST/gRPC wrappers running on autoscaling serverless compute. Your models scale to thousands of queries per second instantly, and scale down to zero to prevent unneeded cloud infrastructure expenses."
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      title: isId ? "Audit Model & Sinkronisasi" : "Model Audit & Sync",
      desc: isId 
        ? "Menganalisis arsitektur model internal Anda serta memetakan format input-output data masukan."
        : "Auditing model files, training telemetry, input schemas, and expected production payloads."
    },
    {
      num: "02",
      title: isId ? "Containerization & FastAPI" : "Containerization & FastAPI",
      desc: isId 
        ? "Membungkus model dengan REST/gRPC API (FastAPI) dan mengemasnya dalam Docker Container terstandardisasi."
        : "Building low-latency Python endpoints and packaging into lightweight, hardened OCI containers."
    },
    {
      num: "03",
      title: isId ? "CICD & Cloud Orchestration" : "Continuous Deployment",
      desc: isId 
        ? "Otomatisasi pengiriman model menggunakan GitHub Actions/GitLab ke Cloud Run/Kubernetes dengan zero-downtime."
        : "Configuring rolling/canary updates with fully managed serverless scaling and zero-downtime boots."
    },
    {
      num: "04",
      title: isId ? "Observability & Drift Tracker" : "Observability & Drift Tracker",
      desc: isId 
        ? "Menyiapkan dashboard analitik pemantauan model drift, latensi, dan trigger retrain otomatis."
        : "Spawning monitoring jobs, capturing live data anomalies, and engineering automatic retraining triggers."
    }
  ];

  const features = [
    {
      title: isId ? "CI/CD & GitOps Integration" : "CI/CD & GitOps Integration",
      desc: isId ? "Setiap pushing kode atau model baru memicu build otomatis dan testing mandiri." : "Automated code tests, schema validations, and image builds triggered by standard git pushes."
    },
    {
      title: isId ? "Serverless Auto-scaling" : "Serverless Auto-scaling",
      desc: isId ? "Infrastruktur cloud naik otomatis dari 0 hingga ribuan request per detik tanpa lag." : "Instantly scales containers to handle traffic spikes, shutting down to zero cost when idle."
    },
    {
      title: isId ? "Model Registry & Versioning" : "Model Registry & Versioning",
      desc: isId ? "Kemudahan rollback ke versi model sebelumnya secara instant jika terjadi penurunan akurasi." : "One-click model rollback capability and history auditing via MLflow or Vertex AI."
    }
  ];

  return (
    <section id="jasa-mlops" className="bg-slate-900 py-16 md:py-24 pb-16 md:pb-20 relative border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col mb-16 relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-teal-400 border border-teal-500/20 self-start mb-5">
            <Server className="h-3.5 w-3.5 text-teal-400" /> {content.badge}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7 text-left flex flex-col justify-center max-w-2xl">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] text-left">
                {content.title1}
                <span className="block mt-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent pb-1">
                  {content.title2}
                </span>
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-bold font-sans tracking-wide leading-relaxed text-left">
                {content.subtitle}
              </p>

              <div className="mt-5 h-1 w-24 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.25)]" />
            </div>

            <div className="lg:col-span-3 lg:-ml-12 lg:mr-auto relative flex items-center justify-center self-center w-[360px] max-w-full text-left">
              {/* Telemetry Indicator */}
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <Activity className="h-3.5 w-3.5 text-teal-400" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">API LATENCY</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">&lt; 15ms p99</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Container className="h-3.5 w-3.5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-450 uppercase leading-none">RE-TRAINING LOOP</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">Automated</div>
                  </div>
                </div>
              </div>

              {/* Service Illustration Card */}
              <div className="w-full bg-slate-950/80 rounded-2xl p-5 border border-slate-800/80 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 w-full" />
                
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider">POD INSTANCE STATE</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="space-y-3 font-mono text-[10px] text-slate-400">
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span>Cluster Host</span>
                    <span className="text-slate-200">GCP Cloud Run</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span>Concurrent Capacity</span>
                    <span className="text-slate-200">2,500 req/sec</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span>Base Framework</span>
                    <span className="text-slate-200">FastAPI & Docker</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span>Active Gateway</span>
                    <span className="text-teal-400 font-bold">API Healthy v2.1</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex justify-center">
                  <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest animate-pulse">Running</span>
                </div>
              </div>
            </div>
          </div>

          {/* BRAND TOOLS LOGO BAR (Under Subtitle, matching other packages) */}
          <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{isId ? "Keahlian & Tools MLOps:" : "MLOps Skills & Ecosystem:"}</span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-teal-400 border border-teal-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Docker
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-teal-400 border border-teal-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Kubernetes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-teal-400 border border-teal-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              FastAPI
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-teal-400 border border-teal-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Google Cloud (GCP)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-teal-400 border border-teal-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              GitOps CI/CD
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-teal-400 border border-teal-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Python Systems
            </span>
          </div>

        </div>

        {/* INTRO PROFILE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {introCards.map((card, index) => (
            <div key={index} className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all text-left">
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                {card.desc}<strong>{card.bold}</strong>{card.desc2}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-teal-400 font-mono font-semibold">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                <span>{card.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* SEGMENT SOLUTIONS (Solusi Kasus) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white font-sans">
              {isId ? "Solusi Kasus & Segmentasi MLOps" : "Solutions & Segmented Case Studies"}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
              {isId ? "Implementasi Terapan pada Sektor Industri" : "Practical Implementation Across Verticals"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {useCases.map((uc, i) => (
              <div key={i} className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group cursor-pointer">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-teal-500 blur-xl rounded-full" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="inline-flex rounded-lg bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400 border border-teal-500/25">
                      {uc.badge1}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Activity className="h-3.5 w-3.5 text-teal-400" /> {uc.badge2}
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-xl font-bold text-white leading-snug">
                    {uc.title}
                  </h4>
                  
                  <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative text-left">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-teal-500/35 transition-all">
            <div>
              <div className="h-10 w-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/10">
                <GitBranch className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-extrabold text-slate-100">{content.colTitle1}</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">{content.colDesc1}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-teal-500/35 transition-all">
            <div>
              <div className="h-10 w-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/10">
                <Container className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-extrabold text-slate-100">{content.colTitle2}</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">{content.colDesc2}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-teal-500/35 transition-all">
            <div>
              <div className="h-10 w-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/10">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-extrabold text-slate-100">{content.colTitle3}</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">{content.colDesc3}</p>
            </div>
          </div>
        </div>

        {/* WORKFLOW PIPELINE INTERACTIVE DIAGRAM */}
        <div className="mb-24 text-left">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white font-sans">
              {isId ? "Alur Kerja Continuous Delivery MLOps Kami" : "Our Continuous Delivery MLOps Pipeline"}
            </h4>
            <p className="mt-2 text-xs text-teal-400 font-mono tracking-widest uppercase">
              {isId ? "PROSES DEPLOYMENT OTOMATIS BERKELANJUTAN" : "CONTINUOUS AUTOMATED PIPELINE PROCESS"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? "bg-slate-800 border-teal-500/40 shadow-lg shadow-teal-500/5 translate-y-[-4px]" 
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-teal-500/20 transition-colors">
                      {step.num}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${activeWorkflowStep === idx ? "bg-teal-400" : "bg-slate-800"}`} />
                  </div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base font-sans group-hover:text-teal-400 transition-colors">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  {isId ? "Pipeline Terverifikasi ✓" : "SLA Pipeline Verified ✓"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES & METRICS BENTO IN-DEEP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-20 text-left">
          
          <div className="col-span-full rounded-3xl border border-slate-800/60 dark-glass-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-teal-400 uppercase font-bold px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20">{content.specTech}</span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-sans text-slate-100">{content.toolsHeader}</h3>
              
              <div className="mt-6 space-y-4">
                {features.map((feat) => (
                  <div key={feat.title} className="flex gap-3 text-left">
                    <div className="mt-1 h-5 w-5 rounded-md bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0">
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Docker
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Kubernetes
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                GitHub Actions
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                FastAPI
              </span>
            </div>
          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 flex justify-center col-span-full">
          <button
            onClick={() => {
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya ingin konsultasi mengenai implementasi layanan MLOps, CI/CD Pipeline, & Auto-Retraining Model AI. Boleh diskusi lebih lanjut?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition-all hover:bg-teal-400 hover:shadow-teal-500/40 cursor-pointer"
          >
            {isId ? "Mulai Konsultasi Otomatisasi MLOps" : "Start Free MLOps Consultation"}
          </button>
        </div>

      </div>
    </section>
  );
}
