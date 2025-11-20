# Lark Base LP - 特定技能・外国人材管理サービス

在留管理・支援記録・学生管理をLark Baseで一元化する代行サービスのランディングページです。

## 🚀 Features

- **Hero Section**: 3営業日構築の訴求とCTA
- **Benefits Section**: 4つの課題カードで現状の痛みを可視化
- **Template Section**: 業種別の4つのBaseテンプレート紹介
- **Flow Section**: 導入までの4ステップ
- **FAQ Section**: よくある質問5項目
- **Diagnosis Form**: 多段階フォームでリード獲得
- **Admin Dashboard**: リード管理画面（in-memory storage）

## 🛠 Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Language**: TypeScript

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 🏗 Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Landing page
│   ├── diagnosis/page.tsx    # Multi-step diagnosis form
│   ├── booking/page.tsx      # Calendly booking page
│   ├── admin/page.tsx        # Admin dashboard
│   └── api/leads/route.ts    # API endpoint (in-memory)
├── components/
│   ├── layout/               # Header, Footer
│   └── ui/                   # Reusable UI components
└── lib/
    └── utils.ts              # Utility functions

```

## 🔑 Environment Variables

Currently no environment variables are required for local development.

For production deployment with Lark webhook integration:
```
LARK_WEBHOOK_URL=your_webhook_url_here
```

## 📝 Notes

- Lead data is stored **in-memory** and will be lost on server restart
- For production, integrate with a persistent database or Lark webhook
- The diagnosis form currently redirects to `/booking` after submission

## 🚢 Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harry-n2/YOUR_REPO_NAME)

## 📄 License

MIT
