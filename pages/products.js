import Link from "next/link";
import {useState, useEffect} from "react";
const isServerReq = req => !req.url.startsWith("/_next");

/**
 * Do not SSR the page when navigating.
 * Has to be added right before the final getServerSideProps function
 */
export const hasNavigationCSR = next => async ctx => {
  if (ctx.req.url?.startsWith("/_next")) {
    return {
      props: {},
    };
  }
  return next(ctx);
};

function Page(props) {
  // const [stars, setStars] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <div>Next stars: {props.stars}</div>
    </>
  );
}

// Page.getInitialProps = async ctx => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();
//   return {stars: json.stargazers_count};
// };

async function getProps(ctx) {
  // my logic
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();

  return {
    props: {
      stars: json.stargazers_count,
    }, // will be passed to the page component as props
  };
}

//export const getServerSideProps = hasNavigationCSR(getProps);

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();

  return {
    props: {
      stars: json.stargazers_count,
    }, // will be passed to the page component as props
  };
}

export default Page;
