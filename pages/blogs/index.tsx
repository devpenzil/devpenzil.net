/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import { devArticlesType } from "@/types/service";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState<devArticlesType>();
  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=devpenzil")
      .then((response) => {
        setBlogs(response.data);
      });
  }, []);

  return (
    <div className="container mx-auto w-2/3">
      <Spacer gap="h-20" />
      <PageHeader
        label="MY BLOG"
        heading="Insightful and helpful content curated for you."
      />
      <Spacer gap="h-20" />
      <div className="grid grid-cols-3 gap-4">
        {blogs?.map((obj, index) => {
          return (
            <a href={obj.url} key={index}>
              <div className="card card-compact bg-base-100 w-96 shadow-xl ">
                <figure>
                  <img src={obj?.cover_image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title h-20">{obj?.title}</h2>
                  <p>{obj?.readable_publish_date}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
