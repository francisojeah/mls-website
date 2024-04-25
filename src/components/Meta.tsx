import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href={"/assets/images/mls_logo.png"} />
      <link rel="canonical" href="https://modern-logistics-services.netlify.app/" />
      <title>{title}</title>
      <meta
        name="og:title"
        content="Modern Logistics Services Limited"
      />
      <meta
        name="og:description"
        content="We simply add quality to your business by giving you the best service you could ever get"
      />
      <meta name="og:image" content={"/assets/images/mls_logo.png"} />
      <meta name="og:url" content="https://modern-logistics-services.netlify.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Modern Logistics Services Limited"
      />
      <meta
        name="twitter:description"
        content="We simply add quality to your business by giving you the best service you could ever get"
      />
      <meta name="twitter:image" content={"/assets/images/mls_logo.png"} />
    </Helmet>
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
