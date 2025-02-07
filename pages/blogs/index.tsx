import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import { blogs } from "@/db/blogs";
import React from "react";

function Blogs() {
  return (
    <div className="container mx-auto w-2/3">
      <Spacer gap="h-20" />
      <PageHeader
        label="MY BLOG"
        heading="Insightful and helpful content curated for you."
      />
      <Spacer gap="h-20" />
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((obj, index) => {
          return (
            <a href={obj.link} key={index}>
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
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
