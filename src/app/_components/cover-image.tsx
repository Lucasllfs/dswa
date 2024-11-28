import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  isTiny?: boolean;
};

const CoverImage = ({ title, src, slug, isTiny }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      //cortar imagem sem distorcer
      style={{
        maxHeight: isTiny ? '360px' : '720px', // Limita a altura da imagem a 200px
        objectFit: 'cover', // Corta a imagem para preencher o contêiner
        width: '100%', // Garante que a imagem ocupe toda a largura do contêiner
      }}
      
      layout="responsive"

      height={630}
      
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
