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

      {/* NEW: World Trade AI Method Section (Premium Gold/Dark) */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Ambient Glow */}
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: -1 }}></div>

        <div className="container">
          <div className="grid-12" style={{ alignItems: 'flex-start' }}>
            <div style={{ gridColumn: 'span 4', position: 'sticky', top: '120px' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '100px', color: '#fbbf24', fontSize: '0.875rem', fontWeight: '700', marginBottom: '24px', boxShadow: '0 0 20px rgba(234, 179, 8, 0.2)' }}>
                  <Zap size={14} fill="#fbbf24" /> New Method
                </div>
                <h2 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                  World Trade<br />
                  <span className="text-glow-gold" style={{ color: '#fbbf24' }}>AI Method</span>
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.8 }}>
                  「AIビジネス × 電子書籍出版」<br />
                  労働集約型のビジネスから脱却し、<br />
                  <strong style={{ color: 'white' }}>資産型収益</strong>を構築する独自メソッド。
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    '日本を襲う「三重苦」からの脱却',
                    'AI時代に適応するための「学び直し」',
                    '成功への3つのステップを完全公開'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontSize: '1rem' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #fbbf24, #b45309)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(251, 191, 36, 0.3)' }}>✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div style={{ gridColumn: 'span 1' }}></div>

            <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { step: '01', title: 'AIスキルの習得', desc: '最新のAIツールを使いこなし、業務効率を劇的に向上させる基盤を作ります。', icon: <Terminal size={24} /> },
                { step: '02', title: 'コンテンツ資産の構築', desc: '電子書籍として出版可能な質の高いコンテンツを、AIと協力して短期間で作成します。', icon: <Layout size={24} /> },
                { step: '03', title: '自動収益化システムの確立', desc: 'Amazon Kindle等のプラットフォームを活用し、継続的な収益を生む仕組みを完成させます。', icon: <Globe size={24} /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="card-premium"
                  style={{ padding: '32px', display: 'flex', gap: '24px', alignItems: 'flex-start', borderLeft: '4px solid #fbbf24' }}
                >
                  <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'rgba(251, 191, 36, 0.1)', lineHeight: 0.8, letterSpacing: '-0.05em' }}>{item.step}</div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Lead Magnet Creation Section (Cyberpunk/Matrix Style) */}
      <section className="section bg-grid-pattern" style={{ position: 'relative', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05), transparent 60%)', pointerEvents: 'none' }}></div>

        <div className="container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ display: 'inline-block', padding: '8px 24px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '100px', color: '#34d399', fontSize: '0.9rem', fontWeight: '700', marginBottom: '24px', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              Marketing Solution
            </motion.div>
            <h2 style={{ fontSize: '3rem', marginBottom: '16px', textShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}>
              無料レポート<span style={{ color: '#34d399' }}>代理作成事業</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              「1日30分」で毎月50件の質の高いリードを獲得。<br />
              見込み客を逃さない、<span style={{ color: '#34d399', fontWeight: 'bold' }}>最強のリードマグネット</span>制作メソッド。
            </p>
          </div>

          <div className="grid-12" style={{ gap: '24px' }}>
            {[
              { label: 'Problem', title: '見込み客の流出', desc: 'Webサイト訪問者の90%以上が、何もせずに離脱しています。', color: '#ef4444' },
              { label: 'Solution', title: 'リードマグネット', desc: '「無料レポート」を提供し、見込み客情報を自然に獲得します。', color: '#34d399' },
              { label: 'Benefit', title: '自動集客の実現', desc: '24時間365日、あなたの代わりに営業し続ける資産となります。', color: '#3b82f6' }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="card-premium"
                style={{ gridColumn: 'span 4', position: 'relative', overflow: 'hidden', padding: '40px 32px', textAlign: 'center', borderTop: `4px solid ${card.color}` }}
              >
                <div style={{
                  position: 'absolute', top: '-50px', right: '-50px', width: '100px', height: '100px',
                  background: card.color, filter: 'blur(60px)', opacity: 0.2
                }}></div>

                <div style={{ fontSize: '0.875rem', fontWeight: '800', color: card.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                  {card.label}
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', fontWeight: '700' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{card.desc}</p>
              </motion.div>
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
