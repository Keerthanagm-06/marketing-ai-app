import React, { useState } from 'react';
import { 
  Sparkles, 
  Megaphone, 
  FileText, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Zap,
  PenTool,
  Hash,
  Search,
  Tag,
  Mic,
  Image as ImageIcon,
  Type,
  Layout,
  MessageSquare,
  List,
  Target
} from 'lucide-react';

export default function LandingPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    setIsGenerating(true);
    setGeneratedResult('');
    
    try {
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      setGeneratedResult(data.result);
    } catch (error) {
      console.error('Error:', error);
      setGeneratedResult(
        "❌ Oops! Something went wrong.\n\n" +
        "Make sure the backend server is running and your OpenAI API key is configured correctly in the backend .env file."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const featureCategories = [
    {
      title: "Social & Ads",
      icon: <Megaphone className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/20",
      features: [
        { name: "Ad Copy", icon: <PenTool className="w-4 h-4 text-blue-400" /> },
        { name: "Headlines", icon: <Type className="w-4 h-4 text-blue-400" /> },
        { name: "Captions", icon: <MessageSquare className="w-4 h-4 text-blue-400" /> },
        { name: "Hashtags", icon: <Hash className="w-4 h-4 text-blue-400" /> },
        { name: "Tweet Threads", icon: <List className="w-4 h-4 text-blue-400" /> }
      ]
    },
    {
      title: "Content & SEO",
      icon: <Search className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/20",
      features: [
        { name: "Blog Intros", icon: <FileText className="w-4 h-4 text-purple-400" /> },
        { name: "SEO Meta Descriptions", icon: <Search className="w-4 h-4 text-purple-400" /> },
        { name: "Taglines", icon: <Tag className="w-4 h-4 text-purple-400" /> },
        { name: "Blog Outlines", icon: <Layout className="w-4 h-4 text-purple-400" /> },
        { name: "Keyword Strategy", icon: <Target className="w-4 h-4 text-purple-400" /> }
      ]
    },
    {
      title: "Video & Creative",
      icon: <Video className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500/20 to-pink-600/5",
      borderColor: "border-pink-500/20",
      features: [
        { name: "Video Scripts", icon: <Video className="w-4 h-4 text-pink-400" /> },
        { name: "Voice-overs", icon: <Mic className="w-4 h-4 text-pink-400" /> },
        { name: "Thumbnail Text", icon: <ImageIcon className="w-4 h-4 text-pink-400" /> },
        { name: "TikTok Ideas", icon: <Zap className="w-4 h-4 text-pink-400" /> },
        { name: "Storyboards", icon: <Layout className="w-4 h-4 text-pink-400" /> }
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect to test the waters.",
      features: ["5 AI generations/month", "Basic templates", "Standard support"],
      buttonText: "Start for Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For creators & marketers.",
      features: ["Unlimited generations", "All 15+ marketing tools", "Priority support", "Custom brand tone"],
      buttonText: "Get Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For agencies & large teams.",
      features: ["Everything in Pro", "API Access", "Team collaboration", "Dedicated account manager"],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Sparkles className="w-6 h-6 text-blue-500" />
            <span>Markety<span className="text-blue-500">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#demo" className="hover:text-white transition-colors">Demo</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium hover:text-white transition-colors">Login</button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-300 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>OpenAI Powered Engine Update 2.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
            Your All-in-One AI <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Marketing Powerhouse.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate highly converting ad copy, engaging blog intros, and viral video scripts in seconds. Built for modern marketers who want to scale fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-0.5">
              Get Started for Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-md">
              <Play className="w-5 h-5" /> View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview / Mock UI Section */}
      <section id="demo" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-slate-400">Generate marketing assets instantly with our intelligent prompt engine.</p>
          </div>
          
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden p-1">
            <div className="bg-slate-950 rounded-xl border border-white/5 overflow-hidden">
              {/* Fake Window Header */}
              <div className="h-12 bg-slate-900/80 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="mx-auto text-xs text-slate-500 font-medium">MarketyAI Dashboard</div>
              </div>
              
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                {/* Input Area */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-slate-300">What do you want to promote?</label>
                  <form onSubmit={handleGenerate}>
                    <textarea 
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., A new eco-friendly water bottle for hikers..."
                      className="w-full h-32 bg-slate-900 border border-white/10 rounded-xl p-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                    />
                    <div className="mt-4 flex gap-3">
                      <button 
                        type="submit"
                        disabled={isGenerating || !prompt}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isGenerating ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <><Zap className="w-4 h-4" /> Generate Magic</>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
                
                {/* Output Area */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-slate-300">Generated Asset</label>
                  <div className={`w-full h-64 bg-slate-900 border border-white/10 rounded-xl p-5 text-slate-300 relative overflow-y-auto transition-all ${!generatedResult && !isGenerating ? 'flex items-center justify-center' : ''}`}>
                    {isGenerating ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm space-y-3">
                        <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                        <p className="text-xs tracking-widest text-blue-400 uppercase font-medium animate-pulse">Contacting OpenAI...</p>
                      </div>
                    ) : generatedResult ? (
                      <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{generatedResult}</div>
                    ) : (
                      <div className="text-center text-slate-600 flex flex-col items-center gap-3">
                        <Sparkles className="w-8 h-8 opacity-20" />
                        <p className="text-sm">Your generated content will appear here.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section id="features" className="py-24 px-6 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">15+ AI Marketing Assets</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Replace a dozen point solutions with one unified platform. Everything you need to scale your content output.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureCategories.map((cat, i) => (
              <div key={i} className={`relative group rounded-3xl bg-white/5 border ${cat.borderColor} p-8 backdrop-blur-md hover:bg-white/[0.07] transition-all`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white">{cat.title}</h3>
                  <ul className="space-y-4">
                    {cat.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-300 font-medium">
                        <div className="w-8 h-8 rounded-full bg-slate-950/50 flex items-center justify-center border border-white/5">
                          {feat.icon}
                        </div>
                        {feat.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Start for free, upgrade when you need more power. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <div key={i} className={`relative rounded-3xl p-8 ${tier.popular ? 'bg-gradient-to-b from-blue-900/40 to-slate-900 border border-blue-500/30 shadow-[0_0_40px_rgba(37,99,235,0.15)]' : 'bg-white/5 border border-white/10'} backdrop-blur-md flex flex-col`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold">{tier.price}</span>
                    {tier.period && <span className="text-slate-400 font-medium">{tier.period}</span>}
                  </div>
                  <p className="text-slate-400 text-sm">{tier.description}</p>
                </div>
                
                <ul className="mb-8 space-y-4 flex-1">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                  tier.popular 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}>
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-slate-500 text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-slate-600" />
          <span className="font-semibold text-slate-400">MarketyAI</span>
        </div>
        <p>© 2026 MarketyAI. All rights reserved.</p>
      </footer>
    </div>
  );
}
