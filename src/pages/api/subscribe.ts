import { database } from '@/firebase/config';
import { ref, push } from 'firebase/database';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;
  console.log('Subscribing email:', email);

  try {
    const subscribersRef = ref(database, 'subscribers');
    await push(subscribersRef, {
      email,
      subscribedAt: new Date().toISOString()
    });

    return res.status(200).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Error saving subscription' });
  }
}
