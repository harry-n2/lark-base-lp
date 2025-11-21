"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BookingPage() {
    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-muted/10">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-10 md:py-20 max-w-4xl">
                <Card className="glass shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl md:text-3xl">無料相談の予約</CardTitle>
                        <CardDescription>
                            ご希望の日時を選択してください。担当者よりZoomリンクをお送りします。
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/antigravity-demo/30min"
                            style={{ minWidth: "320px", height: "700px" }}
                        />
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
