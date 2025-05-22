"use client";

import { useEffect, useState } from "react";
import { Artigos } from "../api/newsApi";
import Image from "next/image";

export default function News() {
  const [news, setNews] = useState<Artigos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://newsdata.io/api/1/archive?apikey=pub_7cb1233e86614bde8dfba325752b04f6"
      );
      const data = await response.json();
      setNews(data.results);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : (
        news.map((artigo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold">{artigo.title}</h2>
            <p className="text-gray-700">{artigo.description}</p>
            <Image
              src={artigo.ImageUrl}
              alt={artigo.title}
              className="w-full h-auto mt-2 rounded-lg"
            />
            <a
              href={artigo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
}
