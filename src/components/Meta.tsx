import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="2WxeB47QwUgB4OtawGepEVh_ISIlKflFNyYzYsGXQ9k"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href={"/assets/images/mls_logo.png"} />
      <link rel="canonical" href="https://www.cspxysma.art" />
      <title>{title}</title>
      <meta
        name="og:title"
        content="CSP Silent Auction | Art for a Cause - CSPxYSMA"
      />
      <meta
        name="og:description"
        content="Join us for the CSP Silent Auction, an exciting event showcasing a diverse collection of artwork, all for a great cause. Immerse yourself in the world of art while supporting the mission of CSP in collaboration with YSMA. Bid on your favorite pieces and engage in friendly competition with fellow art enthusiasts, collectors, and philanthropists. Don't miss this opportunity to acquire remarkable artwork while making a positive impact on society."
      />
      <meta name="og:image" content={"/assets/images/mls_logo.png"} />
      <meta name="og:url" content="https://www.cspxysma.art" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="CSP Silent Auction | Art for a Cause - CSPxYSMA"
      />
      <meta
        name="twitter:description"
        content="Join us for the CSP Silent Auction, an exciting event showcasing a diverse collection of artwork, all for a great cause. Immerse yourself in the world of art while supporting the mission of CSP in collaboration with YSMA. Bid on your favorite pieces and engage in friendly competition with fellow art enthusiasts, collectors, and philanthropists. Don't miss this opportunity to acquire remarkable artwork while making a positive impact on society."
      />
      <meta name="twitter:image" content={"/assets/images/mls_logo.png"} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Modern Logistics Services Limited",
  description:
    "We simply add quality to your business by giving you the best service you could ever get",
  keywords:
    "Logistics, Modern Logistics, Trucks, Delivery, Services, Modern Logistics Services Limited, Business",
};

export default Meta;
