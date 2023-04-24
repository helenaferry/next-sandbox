import PageTemplate from "./../components/page-template/page-template";
import Link from "next/link";
export default function Home() {
  return (
    <PageTemplate heading="Next Sandbox / Cats Next">
      <p className="my-5">
        <span className="font-bold">Random cat fact:</span> fetches data on each
        request. Reload to see new data.
      </p>
      <p className="my-5">
        <span className="font-bold">Static cat fact:</span> fetches data on
        build. Reload shows same data (unless you are running npm run dev).
      </p>
      <p className="my-5">
        <span className="font-bold">Client side:</span> no pre-rendering,
        fetches data in useEffect.
      </p>
      <p className="my-5">
        <span className="font-bold">Static gallery:</span> a bunch of static
        paths with data fetched during build.
      </p>
    </PageTemplate>
  );
}
