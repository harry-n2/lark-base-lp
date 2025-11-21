
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CheckCircle2, ArrowRight, FileSpreadsheet, Database, Users, Calendar, ShieldCheck, FileText, HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm font-medium bg-background/50 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                登録支援機関／日本語学校／人材紹介会社向け
              </div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm font-medium bg-background/50 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Excel・紙・メールのバラバラ管理をそのまま移行
              </div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm font-medium bg-background/50 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                IT担当がいなくても、ヒアリングだけで導入完了
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
              在留管理も支援記録も、<br className="hidden md:block" />
              全部まとめてLark Baseに丸投げ。
            </h1>
            <p className="mx-auto max-w-[800px] text-lg md:text-xl text-muted-foreground mb-10">
              無料版Larkだけで動く『在留・出欠・支援記録』Baseを、<br className="hidden sm:block" />
              最短3営業日で構築する代行サービスです。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/diagnosis">
                <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8 shadow-lg shadow-primary/20">
                  3営業日で構築。まずは無料オンライン相談を予約する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#templates">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                  導入パターンを見る
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Benefits Section (Before/After) */}
        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                こんなお悩み、ありませんか？
              </h2>
              <p className="text-lg text-muted-foreground">
                ミス・抜け漏れ・属人化... その悩み、Lark Baseで解決できます。
              </p>
            </div>

            <div className="space-y-12">
              {/* Before: Problems Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">在留期限が『人任せ』になっている</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      在留カードの期限管理が担当者の頭の中だけ。
                      Excelも最新か分からず、更新漏れが常に不安。
                    </p>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">Excel・紙・メールがバラバラに散らばっている</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      在留情報はExcel、出欠は紙、支援記録はメール…。
                      欲しい情報がどこにあるか毎回探すところから始まる。
                    </p>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">支援記録が追えず、指摘があると説明しづらい</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      いつ・誰が・どんな支援をしたかが一覧で見えない。
                      行政や監査に聞かれても、すぐに提示できない。
                    </p>
                  </CardContent>
                </Card>

                {/* Card 4 */}
                <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">担当者が辞めると、業務がゼロからやり直し</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      フォーマットやルールが人ごとにバラバラで属人化。
                      引き継ぎに時間がかかり、ミスも増える。
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* After: Lark Base Solution (Preserved) */}
              <div className="max-w-2xl mx-auto">
                <Card className="border-primary/20 bg-primary/5 relative overflow-hidden shadow-lg ring-1 ring-primary/10 h-full">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
                    After
                  </div>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Lark Baseで一元管理</CardTitle>
                    <CardDescription>在留・支援・請求まで、業務フローを自動化</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>在留期限アラートで更新漏れをゼロに</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>出欠・成績・支援記録をスマホで完結</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>契約・請求まで連携し、事務作業を自動化</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Template List Section */}
        <section id="templates" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                業種別にすぐ使える、4つのBaseテンプレート
              </h2>
              <p className="text-lg text-muted-foreground">
                業界特有の業務フローを網羅した、実用的なテンプレートをご用意しています。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Template 1 */}
              <Card className="glass hover:shadow-xl transition-all duration-300 flex flex-col">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle className="text-lg">在留期限アラートBase（登録支援機関向け）</CardTitle>
                  <CardDescription>在留カード・在留資格の期限管理に特化したテンプレ。</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li>在留者一覧と在留情報を一元管理</li>
                    <li>60日／30日／7日前のアラートビュー</li>
                    <li>支援記録Baseとの連携を前提に設計</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Template 2 */}
              <Card className="glass hover:shadow-xl transition-all duration-300 flex flex-col">
                <CardHeader>
                  <Calendar className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle className="text-lg">学生管理＋支援記録Base（日本語学校向け）</CardTitle>
                  <CardDescription>出欠・成績・在留・支援記録をセットで管理。</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li>クラス／コース単位の出欠管理</li>
                    <li>成績・評価・進路情報をまとめて記録</li>
                    <li>在留期限アラートBaseと連携可能</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Template 3 */}
              <Card className="glass hover:shadow-xl transition-all duration-300 flex flex-col">
                <CardHeader>
                  <ShieldCheck className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle className="text-lg">技人国・特定技能管理Base（企業／紹介会社向け）</CardTitle>
                  <CardDescription>求人ポジションと候補者を結びつける案件管理テンプレ。</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li>求人ポジション・選考ステータス管理</li>
                    <li>在留資格・在留期限・入社予定日を一括管理</li>
                    <li>紹介会社・送り出し機関との情報共有用ビュー</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Template 4 */}
              <Card className="glass hover:shadow-xl transition-all duration-300 flex flex-col">
                <CardHeader>
                  <FileText className="h-8 w-8 text-purple-500 mb-2" />
                  <CardTitle className="text-lg">契約書・請求管理Base（士業／コンサル向け）</CardTitle>
                  <CardDescription>契約から請求・入金までをLark上で見える化。</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li>契約書のステータス管理（ドラフト／締結済みなど）</li>
                    <li>請求書発行・入金予定日の管理</li>
                    <li>顧客ごとの売上・更新時期を可視化</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnosis CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              30秒で、あなたの業務にとっての<br />
              『Lark Base適正度』を診断。
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-[600px] mx-auto">
              たった30秒の質問に答えるだけで、あなたの組織に最適なLark Base活用法をご提案します。
            </p>
            <Link href="/diagnosis">
              <Button size="lg" variant="secondary" className="text-lg h-14 px-10 shadow-xl">
                無料で診断をスタートする
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Flow Section */}
        <section id="flow" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                導入までの流れ
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <Card className="glass">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">オンラインヒアリング（60分）</CardTitle>
                        <CardDescription className="text-base">
                          現在のExcelや紙の帳票をもとに、管理したい項目・運用ルールをヒアリングします。
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Step 2 */}
                <Card className="glass">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">Base設計・サンプル画面の共有（3営業日以内）</CardTitle>
                        <CardDescription className="text-base">
                          あなたの業務に合わせたBase構成とビューを設計し、テスト環境で実際の画面をお見せします。
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Step 3 */}
                <Card className="glass">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">データ移行・テスト運用（1〜2週間）</CardTitle>
                        <CardDescription className="text-base">
                          既存のExcelからデータを取り込み、少人数チームで試験運用し、項目やビューを微調整します。
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Step 4 */}
                <Card className="glass">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">本番運用スタート・オンラインレクチャー</CardTitle>
                        <CardDescription className="text-base">
                          本番運用開始後、オンラインで操作レクチャーを実施し、無料版Larkでの権限設定や簡易自動化も支援します。
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                よくある質問
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>費用はいくらからですか？</AccordionTrigger>
                <AccordionContent>
                  ヒアリング〜Base設計〜初期構築までで◯◯万円〜を想定しています。
                  在留者数や管理したいテーブル数、自動化の有無によってお見積りが変わります。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>無料版Larkだけでどこまでできますか？</AccordionTrigger>
                <AccordionContent>
                  在留期限アラート、出欠・成績管理、支援記録、契約・請求管理は、
                  すべて無料版LarkのBaseとオートメーションのみで構築可能です。
                  外部システム連携が必要な場合のみ、有料プランをご案内します。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>既存のExcelやスプレッドシートはそのまま使えますか？</AccordionTrigger>
                <AccordionContent>
                  既存のExcelをそのまま取り込み、列構成を合わせてBaseに移行できます。
                  今のフォーマットを崩したくないというご要望にも可能な限り合わせます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>セキュリティや権限管理が心配です。</AccordionTrigger>
                <AccordionContent>
                  無料版でも、閲覧専用・編集権限・管理者権限を分けた運用が可能です。
                  社内のロールに合わせて、権限設計もセットでご提案します。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>ITに詳しくなくても導入できますか？</AccordionTrigger>
                <AccordionContent>
                  はい。ヒアリングシートの記入とオンラインミーティングだけで導入可能です。
                  画面操作マニュアルもテンプレートでご提供します。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                お問い合わせ・ご相談
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                導入のご相談やサービス内容の詳細は、LINE公式アカウントからお気軽にご連絡ください。初回ヒアリング・概算お見積りまで、すべて無料です。
              </p>
              <ul className="text-left space-y-3 mb-10 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>登録支援機関／日本語学校／紹介会社向けに個別アドバイス</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>現在のExcel・紙ベースの運用をヒアリングして最適なBase構成を提案</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>ヒアリング後に無理な営業は一切ありません</span>
                </li>
              </ul>
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://lin.ee/WdYf2tq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LINEで無料相談を開始する"
                >
                  <Button size="lg" className="text-lg h-14 px-10 shadow-xl">
                    LINEで無料相談する
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground">
                  ※ LINEチャットでのご相談後、必要に応じてZoomやお電話での打ち合わせも承ります。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
