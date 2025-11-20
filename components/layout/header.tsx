import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter text-primary">
                        Lark Base Construction
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="#features" className="hover:text-primary transition-colors">
                        特徴
                    </Link>
                    <Link href="#templates" className="hover:text-primary transition-colors">
                        テンプレート
                    </Link>
                    <Link href="#faq" className="hover:text-primary transition-colors">
                        よくある質問
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/diagnosis">
                        <Button variant="default" size="sm" className="hidden md:flex">
                            30秒で無料診断
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">メニューを開く</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
