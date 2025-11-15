import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allBlogs } from "../data/blog";

interface Props {
  params: { category: string };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params; 

  if (!category) {
    return <p className="text-center mt-20">Category not found</p>;
  }

  const blogs = allBlogs[category] || [];

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 min-h-screen">
      <section className="w-full pt-28 pb-16 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 text-teal-600">
          {category.replace("-", " ")}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A series of blogs on {category.replace("-", " ")}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogs.map((blog, idx) => (
            <Card
              key={idx}
              className="shadow-lg hover:shadow-xl transition-shadow rounded-xl p-4 bg-white"
            >
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{blog.description}</p>
                <p className="text-sm text-gray-400 mt-2">{blog.date}</p>
                <div className="flex justify-center mt-4">
                  <Link
                     href={`/blog/${category}/${blog.slug}`}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Read Blog
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
