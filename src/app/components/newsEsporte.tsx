// components/NewsEsporte.tsx

import { CalendarDays } from "lucide-react";
import { Artigos } from "../api/newsApi";

type Props = {
  news: Artigos[];
};

export default function NewsEsporte({ news }: Props) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((artigo, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            {artigo.image_url ? (
              <img
                src={artigo.image_url}
                alt={artigo.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-2" />
            )}
            <h2 className="text-md font-semibold text-gray-800 mb-1">
              {artigo.title}
            </h2>
            <p className="text-sm text-gray-600 flex-grow truncate">
              {artigo.description}
            </p>
            <p className="text-xs text-gray-500 mt-2 flex items-center">
              <CalendarDays className="m-2" width={16} height={16} />{" "}
              {artigo.pubDate}
            </p>
            <a
              href={artigo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 text-sm"
            >
              Ler mais
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
