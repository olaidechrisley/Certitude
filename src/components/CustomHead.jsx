import Head from "next/head";
import React from "react";

export default function CustomHead({ pageName, descriptionContent }) {
  return (
    <Head>
      <title>{`Certitude || ${pageName}`}</title>
      <link rel="icon" href="/logo.png" type="image/png"/>
      <meta name="description" content={descriptionContent} />
    </Head>
  );
}
