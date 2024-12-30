import React from "react";
import Product from "./Product";

export default function Products() {
  const products = [
    {
      title: "Slack",
      descriptions:
        "A collaboration platform for teams, offering messaging, file sharing, and integration with other productivity tools.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      descriptions:
        "A powerful image editing software used for photo manipulation, graphic design, and digital artwork creation.",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      descriptions:
        "A platform for version control and collaborative software development, using Git for code repository management.",
      live: true,
      case: true,
    },
    {
      title: "Trello",
      descriptions:
        "A task and project management tool that uses boards, lists, and cards to organize workflows and tasks.",
      live: true,
      case: true,
    }
  ];
  return (
    <div className="w-full">
      {products.map((item,index)=>(
        <Product key={index} data={item} />
      ))}
    </div>
  );
}
