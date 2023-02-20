import Link from "next/link";
import { useRouter } from "next/router";
import { Component } from "react";
import "../styles/global.css";

export default function App({Component, pageProps}) {
  const router = useRouter();

  return (
    <>
      <div>
        <h1>Our Site</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link
                className={router.pathname == "/" ? "active" : ""}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/blog" ? "active" : ""}
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/about" ? "active" : ""}
                href={"/about"}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <props.Component></props.Component> */}
      <Component {...pageProps}></Component>
      <h4>Footer</h4>
    </>
  );
}
