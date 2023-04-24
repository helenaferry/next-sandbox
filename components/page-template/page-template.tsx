import Link from "next/link";

export default function PageTemplate(props: any) {
  return (
    <main className="w-[500px] mx-auto my-10">
      <Link className="hover:underline text-blue-600 text-xs" href="/">
        Home
      </Link>
      {props.heading && <h1 className="text-xl my-3">{props.heading}</h1>}
      <p className="mb-5">
        <Link
          className="hover:underline text-blue-600"
          href={`${props.urlPrefix || ""}random-cat-fact`}
        >
          Random cat fact
        </Link>{" "}
        |{" "}
        <Link
          className="hover:underline text-blue-600"
          href={`${props.urlPrefix || ""}static-cat-fact`}
        >
          Static cat fact
        </Link>{" "}
        |{" "}
        <Link
          className="hover:underline text-blue-600"
          href={`${props.urlPrefix || ""}client-side-fetched-cat`}
        >
          Client side
        </Link>{" "}
        |{" "}
        <Link
          className="hover:underline text-blue-600"
          href={`${props.urlPrefix || ""}gallery`}
        >
          Static gallery
        </Link>
      </p>
      {props.children}
    </main>
  );
}
