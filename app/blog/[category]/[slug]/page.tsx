import { BlogCategory, findBlog } from "@/app/blog/data/blog";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { category, slug } = await params;

  const blog = findBlog(category as BlogCategory, slug);

  if (!blog) {
    return <p className="text-center mt-20">Blog not found</p>;
  }

  const BlogContent = blog.component;

  return (
    <section className="max-w-4xl mx-auto pt-28 pb-16 px-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">
        {blog.date} · {category.replace("-", " ")}
      </p>

      {BlogContent ? <BlogContent /> : <p>No content available</p>}
    </section>
  );
}
