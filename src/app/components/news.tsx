// src/app/News.tsx ou src/components/News.tsx

"use client";

import { useEffect, useState } from "react";
import { getNews, Artigos } from "../api/newsApi";

export default function News() {
  const [news, setNews] = useState<Artigos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const artigos = await getNews();
      setNews(artigos);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-500 text-lg">Carregando...</p>
        </div>
      ) : (
        news.map((artigo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{artigo.title}</h2>
            <p className="text-gray-700">{artigo.description}</p>

            {artigo.image_url && (
              <div className="mt-3">
                <img
                  src={artigo.image_url}
                  alt={artigo.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            <a
              href={artigo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-3 block"
            >
              Ler mais
            </a>
          </div>
        ))
      )}
    </div>
  );
}
