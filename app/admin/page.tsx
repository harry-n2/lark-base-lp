"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

type Lead = {
    id: string;
    organizationType: string;
    currentTool: string;
    challenges: string[];
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    status: string;
    createdAt: string;
    score?: string;
    mainPainPoint?: string;
};

export default function AdminPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await fetch("/api/leads");
                const data = await response.json();
                setLeads(data.leads || []);
            } catch (error) {
                console.error("Failed to fetch leads:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeads();
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-muted/10">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-10">
                <Card>
                    <CardHeader>
                        <CardTitle>リード管理画面 (Admin)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <div className="flex justify-center py-10">
                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>日時</TableHead>
                                        <TableHead>ステータス</TableHead>
                                        <TableHead>氏名</TableHead>
                                        <TableHead>組織タイプ</TableHead>
                                        <TableHead>課題</TableHead>
                                        <TableHead>連絡先</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {leads.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                                                まだリードはありません。
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        leads.map((lead) => (
                                            <TableRow key={lead.id}>
                                                <TableCell>{new Date(lead.createdAt).toLocaleString("ja-JP")}</TableCell>
                                                <TableCell>
                                                    <Badge variant={lead.status === "new" ? "default" : "secondary"}>
                                                        {lead.status === "new" ? "新規" : lead.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{lead.contactName}</TableCell>
                                                <TableCell>{lead.organizationType}</TableCell>
                                                <TableCell>
                                                    <div className="flex flex-wrap gap-1">
                                                        {lead.challenges && lead.challenges.map((c, i) => (
                                                            <span key={i} className="text-xs bg-muted px-1 rounded">
                                                                {c}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="text-sm">{lead.contactEmail}</div>
                                                    <div className="text-xs text-muted-foreground">{lead.contactPhone}</div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
