'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [appName, setAppName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/app-name')
      .then((res) => res.json())
      .then((data) => {
        setAppName(data.name);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex h-full items-center justify-center bg-background text-foreground overflow-hidden min-h-screen">
      <main className="flex flex-col items-center justify-center">
        {loading ? (
          <p className="text-lg text-muted-foreground">加载中...</p>
        ) : (
          <h1 className="text-4xl font-bold">{appName}</h1>
        )}
      </main>
    </div>
  );
}
