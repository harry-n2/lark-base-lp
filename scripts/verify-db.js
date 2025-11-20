async function test() {
    console.log("Testing POST /api/leads...");
    try {
        const res = await fetch('http://localhost:3000/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                organizationType: "registration_support",
                currentTool: "excel",
                challenges: ["Challenge 1", "Challenge 2"],
                contactName: "Test User A",
                contactEmail: "testa@example.com",
                contactPhone: "090-0000-0000"
            })
        });

        if (!res.ok) {
            console.error("Request failed with status:", res.status);
            const text = await res.text();
            console.error("Response body:", text);
            return;
        }

        const data = await res.json();
        console.log('Response:', JSON.stringify(data, null, 2));

        if (data.success && data.lead.score === "A") {
            console.log("SUCCESS: Lead created with correct Score A");
        } else {
            console.log("FAILURE: Lead created but score might be wrong or success is false");
        }

    } catch (e) {
        console.error('Error:', e);
    }
}

test();
