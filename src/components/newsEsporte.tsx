import { fetchNews } from "@/app/api/newsApi"; // Adjust path if necessary
import NewsCard from "./NewsCard";
import Tema from "./Tema";
import { useState } from "react";

export default async function NewsEsporte() {
  const news = await fetchNews();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-4">
      <Tema titleTema="Futebol" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.length > 0 ? (
          news.map((artigo, index) => (
            <NewsCard
              key={index} // Using url as a unique key is ideal
              title={artigo.title}
              image_url={artigo.image_url}
              description={artigo.description}
              pubDate={artigo.pubDate}
              url={artigo.url}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            Nenhuma notícia de esporte encontrada.
          </p>
        )}
      </div>
    </div>
  );
}
