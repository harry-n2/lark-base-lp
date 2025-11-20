"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

type FormData = {
    organizationType: string;
    currentTool: string;
    challenges: string[];
    contactName: string;
    contactEmail: string;
    contactPhone: string;
};

export default function DiagnosisPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        organizationType: "",
        currentTool: "",
        challenges: [],
        contactName: "",
        contactEmail: "",
        contactPhone: "",
    });

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push("/booking");
            } else {
                // Handle error
                console.error("Submission failed");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setIsSubmitting(false);
        }
    };

    const updateFormData = (key: keyof FormData, value: any) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <div className="flex min-h-screen flex-col bg-muted/10">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-10 md:py-20 max-w-3xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">無料診断フォーム</h1>
                    <p className="text-muted-foreground">
                        3つのステップで、あなたの組織に最適なLark Base活用法をご提案します。
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8 h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-in-out"
                        style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                </div>

                <Card className="glass shadow-xl border-primary/10">
                    <CardHeader>
                        <CardTitle>Step {step} / 3</CardTitle>
                        <CardDescription>
                            {step === 1 && "組織について教えてください"}
                            {step === 2 && "現在の課題を教えてください"}
                            {step === 3 && "診断結果をお送りします"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-3">
                                        <Label>組織の種類</Label>
                                        <RadioGroup
                                            value={formData.organizationType}
                                            onValueChange={(val) => updateFormData("organizationType", val)}
                                        >
                                            <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent cursor-pointer">
                                                <RadioGroupItem value="registration_support" id="r1" />
                                                <Label htmlFor="r1" className="cursor-pointer flex-1">登録支援機関</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent cursor-pointer">
                                                <RadioGroupItem value="japanese_school" id="r2" />
                                                <Label htmlFor="r2" className="cursor-pointer flex-1">日本語学校・専門学校</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent cursor-pointer">
                                                <RadioGroupItem value="recruitment_agency" id="r3" />
                                                <Label htmlFor="r3" className="cursor-pointer flex-1">人材紹介会社・受入企業</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent cursor-pointer">
                                                <RadioGroupItem value="professional" id="r4" />
                                                <Label htmlFor="r4" className="cursor-pointer flex-1">行政書士・社労士・コンサル</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent cursor-pointer">
                                                <RadioGroupItem value="other" id="r5" />
                                                <Label htmlFor="r5" className="cursor-pointer flex-1">その他</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <div className="space-y-3">
                                        <Label>現在の管理ツール</Label>
                                        <Select
                                            value={formData.currentTool}
                                            onValueChange={(val) => updateFormData("currentTool", val)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="選択してください" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="excel">Excel / スプレッドシートのみ</SelectItem>
                                                <SelectItem value="kintone">kintone</SelectItem>
                                                <SelectItem value="salesforce">Salesforce</SelectItem>
                                                <SelectItem value="paper">紙・ホワイトボード</SelectItem>
                                                <SelectItem value="other">その他</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-3">
                                        <Label>最も解決したい課題（複数選択可）</Label>
                                        <div className="grid gap-3">
                                            {[
                                                { id: "c1", label: "在留期限管理のミス・漏れ" },
                                                { id: "c2", label: "支援記録・面談記録の属人化" },
                                                { id: "c3", label: "Excel・紙・FAXでの情報散在" },
                                                { id: "c4", label: "担当者変更時の引き継ぎ困難" },
                                                { id: "c5", label: "求人マッチング・請求業務の繁雑さ" },
                                            ].map((item) => (
                                                <div key={item.id} className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        id={item.id}
                                                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                        checked={formData.challenges.includes(item.label)}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                updateFormData("challenges", [...formData.challenges, item.label]);
                                                            } else {
                                                                updateFormData("challenges", formData.challenges.filter(c => c !== item.label));
                                                            }
                                                        }}
                                                    />
                                                    <Label htmlFor={item.id} className="font-normal">{item.label}</Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">お名前</Label>
                                            <Input
                                                id="name"
                                                placeholder="山田 太郎"
                                                value={formData.contactName}
                                                onChange={(e) => updateFormData("contactName", e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">メールアドレス</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="taro@example.com"
                                                value={formData.contactEmail}
                                                onChange={(e) => updateFormData("contactEmail", e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">電話番号</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="090-1234-5678"
                                                value={formData.contactPhone}
                                                onChange={(e) => updateFormData("contactPhone", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        {step > 1 ? (
                            <Button variant="outline" onClick={handleBack} disabled={isSubmitting}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                戻る
                            </Button>
                        ) : (
                            <div></div>
                        )}

                        {step < 3 ? (
                            <Button onClick={handleNext} disabled={step === 1 && !formData.organizationType}>
                                次へ
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} disabled={isSubmitting || !formData.contactEmail}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        送信中...
                                    </>
                                ) : (
                                    <>
                                        診断結果を受け取る
                                        <CheckCircle2 className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
