import Link from "next/link";

function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <Link href="/admin">
            <a>Admin</a>
          </Link>
        </li>
      </ul>
      <p>Home</p>
    </>
  );
}

export default Home;
