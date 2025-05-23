// src/api/newsApi.ts

export type Artigos = {
  title: string;
  description: string;
  url: string;
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
    return [];
  }
}
