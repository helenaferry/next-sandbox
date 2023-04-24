import PageTemplate from "./../components/page-template/page-template";
import Link from "next/link";
type GalleryType = {
  cats: Cat[];
};

type Cat = {
  id: string;
  url: string;
};

export default function Gallery(props: GalleryType) {
  return (
    <PageTemplate heading="Static cat gallery">
      <div className="grid grid-cols-2 gap-3">
        {props.cats.map((cat) => (
          <Link href={`gallery/${cat.id}`} key={cat.id}>
            <img src={cat.url} alt={cat.id} />
          </Link>
        ))}
      </div>
    </PageTemplate>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const catsData: Cat[] = [];

  const catIds = [
    { params: { id: "1n1" } },
    { params: { id: "6j5" } },
    { params: { id: "a34" } },
    { params: { id: "c26" } },
    { params: { id: "cve" } },
    { params: { id: "dhp" } },
    { params: { id: "MTUwMTUwNQ" } },
    { params: { id: "MTc4OTc0MA" } },
    { params: { id: "xNuSF5YWY" } },
  ];

  catIds.map((catId) =>
    catsData.push({
      id: catId.params.id,
      url: `https://cdn2.thecatapi.com/images/${catId.params.id}.jpg`,
    })
  );

  // Pass data to the page via props
  return { props: { cats: catsData } };
}
