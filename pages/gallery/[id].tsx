import PageTemplate from "./../../components/page-template/page-template";
import Image from "next/image";
type GalleryType = {
  cats: Cat[];
};

type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export default function Gallery(props: any) {
  return (
    <PageTemplate heading={`Static cat ${props.cat.id}`} urlPrefix="../">
      <div className="">
        <Image
          src={props.cat.url}
          alt={props.cat.id}
          width={props.cat.width}
          height={props.cat.height}
        />
      </div>
    </PageTemplate>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps(context: any) {
  console.log(context);
  // Fetch data from external API
  const catsRes = await fetch(
    `https://api.thecatapi.com/v1/images/${context.params.id}`
  );
  const catsData = await catsRes.json();

  // Pass data to the page via props
  return { props: { cat: catsData } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1n1" } },
      { params: { id: "6j5" } },
      { params: { id: "a34" } },
      { params: { id: "c26" } },
      { params: { id: "cve" } },
      { params: { id: "dhp" } },
      { params: { id: "MTUwMTUwNQ" } },
      { params: { id: "MTc4OTc0MA" } },
      { params: { id: "xNuSF5YWY" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
