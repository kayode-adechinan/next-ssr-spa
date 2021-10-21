import Link from "next/link";

function Page({stars}) {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <div>Next stars: {stars}</div>{" "}
    </>
  );
}

Page.getInitialProps = async ctx => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {stars: json.stargazers_count};
};

// export async function getServerSideProps(context) {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();

//   return {
//     props: {
//       stars: json.stargazers_count,
//     }, // will be passed to the page component as props
//   };
// }

export default Page;
