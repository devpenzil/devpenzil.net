import { blogs } from "@/db/blogs";
import Link from "next/link";

function BlogPreview() {
  return (
    <div>
      <div className="text-3xl font-semibold">
        I love to share my knowledge through writing.
      </div>
      <div className="text-sm mt-4">
        Check out a few of my most recent publishing.
      </div>
      <div className="flex flex-row gap-3 mt-4">
        {blogs.slice(0, 3).map((obj, index) => {
          return (
            <a href={obj.link} key={index} className="w-1/3">
              <div className="card bg-base-100 w-96 shadow-xl">
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
      <div className="flex mt-8">
        <Link href="/blogs">
          <div className="bg-slate-800 py-3 px-8 rounded-full text-white font-semibold ring-4 ring-slate-800 hover:ring-offset-4 transition duration-150">
            Read my Blogs
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogPreview;
