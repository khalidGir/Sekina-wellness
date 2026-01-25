import { useState, useEffect } from 'react';

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  [key: string]: string;
}

export const usePrayerTimes = () => {
  const [prayers, setPrayers] = useState<PrayerTimes | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string; timeLeft: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        const date = new Date();
        const response = await fetch(
            `https://api.aladhan.com/v1/timingsByCity/${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}?city=Addis+Ababa&country=Ethiopia&method=3`
        );
        const data = await response.json();
        setPrayers(data.data.timings);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch prayers", error);
        setLoading(false);
      }
    };

    fetchPrayers();
  }, []);

  // Calculate Next Prayer Logic (simplified for now)
  useEffect(() => {
    if (!prayers) return;

    const interval = setInterval(() => {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        const prayerList = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        let foundNext = false;

        for (const p of prayerList) {
            const [hours, minutes] = prayers[p].split(':').map(Number);
            const prayerTime = hours * 60 + minutes;

            if (prayerTime > currentTime) {
                const diff = prayerTime - currentTime;
                const h = Math.floor(diff / 60);
                const m = diff % 60;
                setNextPrayer({
                    name: p,
                    time: prayers[p],
                    timeLeft: `${h}h ${m}m`
                });
                foundNext = true;
                break;
            }
        }

        if (!foundNext) {
             // If passed Isha, next is Fajr (tomorrow) - logic simplified
             setNextPrayer({ name: 'Fajr', time: prayers['Fajr'], timeLeft: 'Tomorrow' });
        }

    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, [prayers]);

  return { prayers, nextPrayer, loading };
};
