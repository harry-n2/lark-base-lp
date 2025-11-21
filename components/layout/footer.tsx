import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Lark Base Construction</h3>
                        <p className="text-sm text-muted-foreground">
                            特定技能・外国人材管理の課題をLark Baseで解決します。
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">サービス</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#features" className="hover:text-primary">
                                    特徴
                                </Link>
                            </li>
                            <li>
                                <Link href="#templates" className="hover:text-primary">
                                    テンプレート一覧
                                </Link>
                            </li>
                            <li>
                                <Link href="/diagnosis" className="hover:text-primary">
                                    無料診断
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">会社情報</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    運営会社
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    プライバシーポリシー
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    特定商取引法に基づく表記
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">お問い合わせ</h4>
                        <p className="text-sm text-muted-foreground">
                            お気軽にご相談ください。
                        </p>
                        <Link href="/diagnosis" className="block">
                            <span className="text-primary hover:underline">
                                お問い合わせフォーム
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Lark Base Construction. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
