export type Artigos = {
  title: string;
  description: string;
  url: string;
  ImageUrl: string;
};

export async function getNews() {
  const reponse = await fetch(
    "https://newsdata.io/api/1/archive?apikey=pub_7cb1233e86614bde8dfba325752b04f6"
  );
  try {
    if (!reponse.ok) {
      throw new Error("erro ao buscar dados");
    }
  } catch (error) {
    console.error("erros ao buscar dados", error);
  }
  return reponse.json();
}
