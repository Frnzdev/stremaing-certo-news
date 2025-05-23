export type Artigos = {
  title: string;
  description: string;
  url: string;
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
    return [];
  }
}
