import React from 'react';
import { MessageCircle, Globe, ArrowRight, Zap, Layout, Users, Shield, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from './assets/hero_bg_1.jpg'; // Keeping hero bg as texture if needed, or can use CSS gradient

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-subtle)', zIndex: 1000
      }}>
        <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--accent-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={20} color="white" />
            </div>
            <span>World Trade Next</span>
          </div>
          <a href="https://lin.ee/7qGC2YD" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
            <MessageCircle size={16} />
            無料相談
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
        {/* Background Effects */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
          <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        </div>

        <div className="container grid-12" style={{ alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 7' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '100px', color: '#60a5fa', fontSize: '0.875rem', fontWeight: '600', marginBottom: '24px' }}>
                Lark Partner Ecosystem
              </div>
              <h1 style={{ fontSize: '4.5rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Lark構築の<br />
                <span className="text-gradient">プロフェッショナル</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.8 }}>
                エクセル & FAX から Lark へ。<br />
                オールインワンで企業のDXを加速させる、導入・定着化のエキスパート。
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://lin.ee/7qGC2YD" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  今すぐ無料特典を受け取る <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Abstract Visual / Code Card */}
          <div style={{ gridColumn: 'span 5', position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                background: 'rgba(20,20,25,0.8)',
                border: '1px solid var(--border-highlight)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* CSS-based Business Card Representation */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
                </div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-dim)', fontSize: '0.8rem' }}>Business_Card.yaml</div>
              </div>

              <div style={{ fontFamily: 'monospace', fontSize: '1rem', lineHeight: 1.8 }}>
                <div style={{ display: 'flex' }}>
                  <span style={{ color: 'var(--text-dim)', width: '24px' }}>1</span>
                  <span style={{ color: '#f472b6' }}>name:</span> <span style={{ color: '#fcd34d' }}>@Naoya 'Harry' Nishino</span>
                </div>
                <div style={{ display: 'flex' }}>
                  <span style={{ color: 'var(--text-dim)', width: '24px' }}>2</span>
                  <span style={{ color: '#f472b6' }}>X:</span> <span style={{ color: '#60a5fa' }}>@Sekaikun_office</span>
                </div>
                <div style={{ display: 'flex' }}>
                  <span style={{ color: 'var(--text-dim)', width: '24px' }}>3</span>
                  <span style={{ color: '#f472b6' }}>line:</span> <span style={{ color: '#4ade80' }}>https://lin.ee/dZY4jsC</span>
                </div>
                <div style={{ display: 'flex' }}>
                  <span style={{ color: 'var(--text-dim)', width: '24px' }}>4</span>
                  <span style={{ color: '#94a3b8' }}>- Writing</span>
                </div>
                <div style={{ display: 'flex' }}>
                  <span style={{ color: 'var(--text-dim)', width: '24px' }}>5</span>
                  <span style={{ color: '#94a3b8' }}>- Visual Explanation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Services Section - Bento Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Lark Construction Business</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>企業のDXを加速させる、包括的なソリューション</p>
          </div>

          <div className="grid-12">
            {[
              { icon: <Layout size={32} />, title: '戦略策定・要件定義', desc: 'ビジネスの現状を分析し、最適なLark導入プランを策定します。', col: 'span 6' },
              { icon: <Zap size={32} />, title: '設計・構築・移行支援', desc: 'スムーズな移行と、業務フローに合わせたカスタマイズ構築を行います。', col: 'span 6' },
              { icon: <Users size={32} />, title: 'トレーニング・定着化', desc: '社内への浸透をサポートし、Larkを使いこなせる組織を作ります。', col: 'span 4' },
              { icon: <Shield size={32} />, title: '運用保守・伴走支援', desc: '導入後も継続的にサポートし、ビジネスの成長に合わせて最適化します。', col: 'span 4' },
              { icon: <Terminal size={32} />, title: '自動化・AI活用', desc: 'Lark BaseとAIを組み合わせた高度な業務自動化を実現します。', col: 'span 4' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ gridColumn: item.col, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(59,130,246,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINE Promotion - High Impact */}
      <section className="section">
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
            borderRadius: '32px',
            padding: '64px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid #065f46'
          }}>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>LINE公式アカウント登録特典</h2>
              <p style={{ fontSize: '1.25rem', color: '#a7f3d0', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                今すぐ登録して、<strong style={{ color: '#fff' }}>限定特典GPTs</strong>を無料で受け取りましょう。<br />
                使い方が分からない方も、無料相談でサポートします。
              </p>
              <a href="https://lin.ee/7qGC2YD" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#10b981', color: 'white', padding: '16px 48px', fontSize: '1.2rem', boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}>
                <MessageCircle size={24} style={{ marginRight: '8px' }} />
                LINEで友だち追加 & 特典GET
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Payment</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>各種サービスのお支払いはPayPalにて安全に決済いただけます。</p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '24px',
            padding: '32px',
            background: 'var(--bg-card)',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', fontStyle: 'italic', color: '#003087' }}>PayPal</div>
            <button className="btn btn-primary" style={{ background: '#003087', boxShadow: 'none' }}>
              Pay with PayPal
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}>
        <div className="container grid-12">
          <div style={{ gridColumn: 'span 4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', fontSize: '1.5rem', marginBottom: '24px' }}>
              <Globe size={24} color="var(--accent-primary)" />
              <span>World Trade Next</span>
            </div>
            <p style={{ color: 'var(--text-muted)' }}>
              Lark構築とAI自動化で、<br />
              あなたのビジネスを次のステージへ。
            </p>
          </div>
          <div style={{ gridColumn: 'span 8', textAlign: 'right', color: 'var(--text-dim)' }}>
            <p>&copy; {new Date().getFullYear()} World Trade Next. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
