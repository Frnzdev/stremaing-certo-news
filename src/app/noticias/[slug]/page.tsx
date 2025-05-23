import { getNews } from "@/app/api/newsApi";
import NewsEsporte from "@/app/components/newsEsporte";

interface Props {
  params: {
    slug: string;
  };
}

export default async function NoticiaPage({ params }: Props) {
  const noticias = await getNews({ typeNews: params.slug });

  return <NewsEsporte news={noticias} />;
}
