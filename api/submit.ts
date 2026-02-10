import { put } from '@vercel/blob';

export const config = {
    runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { answers, userDetails } = req.body;

        // Generate a simple unique ID prefix without needing crypto module
        const idPrefix = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        // Save to Vercel Blob
        // Vercel Blob will add a random suffix naturally for safety
        const blob = await put(`results/${idPrefix}.json`, JSON.stringify({
            answers,
            userDetails,
            createdAt: new Date().toISOString()
        }), {
            access: 'public',
            contentType: 'application/json',
            // @ts-ignore
            token: process.env.BLOB_READ_WRITE_TOKEN
        });

        // Extract the actual filename created by Vercel (which includes the random suffix)
        // Create URL object from blob URL
        const url = new URL(blob.url);
        const shareId = url.pathname.split('/').pop()?.replace('.json', '') || '';
        // Use request host for share URL, fallback to known domain
        const host = req.headers.host || 'deambitiebar.nl';
        const protocol = req.headers['x-forwarded-proto'] || 'https';
        const shareUrl = `${protocol}://${host}/?id=${shareId}`;

        // Send Webhook to n8n
        try {
            // Updated webhook endpoint for Ambitiebar if needed, otherwise keep existing
            await fetch('https://n8n.clickwave.nl/webhook/ambitiebar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: shareId,
                    shareUrl,
                    userDetails,
                    // Phone is not in userDetails interface in frontend, checking if it exists
                    phone: userDetails.phone || '',
                    answers,
                    submittedAt: new Date().toISOString()
                })
            });
        } catch (webhookError) {
            console.error('Webhook failed:', webhookError);
            // Don't block the user if webhook fails
        }

        return res.status(200).json({
            id: shareId,
            url: blob.url
        });
    } catch (err: any) {
        console.error('Error submitting results:', err);
        return res.status(500).json({
            error: 'Failed to submit results',
            message: err.message
        });
    }
}
