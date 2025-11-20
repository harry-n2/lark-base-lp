import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'leads.json');

export type Lead = {
    id: string;
    createdAt: string;
    organizationType: string;
    currentTool: string;
    challenges: string[];
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    status: string;
    score?: string;
    mainPainPoint?: string;
    notes?: string;
};

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure DB file exists
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
}

export async function getLeads(): Promise<Lead[]> {
    try {
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(data) as Lead[];
    } catch (error) {
        console.error('Error reading leads DB:', error);
        return [];
    }
}

export async function addLead(lead: Lead): Promise<void> {
    try {
        const leads = await getLeads();
        leads.push(lead);
        fs.writeFileSync(DB_FILE, JSON.stringify(leads, null, 2));
    } catch (error) {
        console.error('Error writing to leads DB:', error);
        throw new Error('Failed to save lead');
    }
}
