import React, { FC } from "react";

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Meta: FC<MetaProps> = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default Meta;
