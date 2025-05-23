// src/api/newsApi.ts

export type Artigos = {
  title: string;
  description: string;
  url: string;
<<<<<<< HEAD
  image_url: string; // nome conforme retornado pela API
};

export async function getNews(): Promise<Artigos[]> {
  try {
    const response = await fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_7cb1233e86614bde8dfba325752b04f6&q=Futebol&country=br"
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const data = await response.json();
    console.log("Resposta da API:", data);

    if (!Array.isArray(data.results)) {
      throw new Error("Formato inesperado: 'results' não é um array");
    }

    return data.results as Artigos[];
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
=======
  image_url: string;
  pubDate: string;
  pubDateTZ: string;
};

export type PropsNews = {
  typeNews: string;
};

export async function getNews({ typeNews }: PropsNews): Promise<Artigos[]> {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_7cb1233e86614bde8dfba325752b04f6&q=${encodeURIComponent(
        typeNews
      )}&language=pt`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API.");
    }

    const data = await response.json();

    // Validação e retorno seguro dos artigos
    return Array.isArray(data.results) ? data.results : [];
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
>>>>>>> d149037a09bf009e31c7505af75cd8a5e7736512
    return [];
  }
}
