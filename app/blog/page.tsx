"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogPage() {
  const categories = [
    {
      name: "System Design",
      description: "Notes and summaries from System Design Interview book and practices.",
      slug: "system-design",
    },
    {
      name: "LeetCode",
      description: "Solutions and insights from algorithm challenges.",
      slug: "leetcode",
    },
    {
      name: "Books & Learning",
      description: "Other tech books and learning experiences.",
      slug: "learning",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 min-h-screen">
      <section className="w-full pt-28 pb-16 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 text-teal-600">My Blogs</h1>
        <p className="text-lg text-gray-600 mb-6">
          Click a category to explore a series of blogs on what I've learned.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((cat) => (
            <Card
              key={cat.slug}
              className="shadow-lg hover:shadow-xl transition-shadow rounded-xl"
            >
              <CardHeader>
                <CardTitle>{cat.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cat.description}</p>
                <div className="flex justify-center mt-4">
                  <Link
                    href={`/blog/${cat.slug}`}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Explore
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
