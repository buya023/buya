import { Chap1Blog } from "./chap_1";
import { Chap2Blog } from "./chap_2";
import { ChapUseFormBlog } from "./learning/useform";
import { ChapHeapBlog } from "./leetcode/heap";

export const allBlogs = {
  "system-design": [
    {
      title: "Breaking Down Chapter 1 of System Design Interview",
      description: "Summary and notes from System Design Interview book.",
      slug: "chapter-1",
      date: "August 2025",
      component: Chap1Blog, 
    },
     {
      title: "Breaking Down Chapter 2 of System Design Interview",
      description: "Back-of-the-envelope estimations and QPS/storage calculations.",
      slug: "chapter-2",
      date: "September 2025",
      component: Chap2Blog, 
    },
  ],
  leetcode: [
     {
      title: "Understanding Heap and heapq in Python",
      description: "A practical guide to heaps, heapq operations, and top-K algorithms in Python.",
      slug: "heapq-python",
      date: "November 2025",
      component: ChapHeapBlog,
    },
  ],
  learning: [
    {
      title: "My Journey Learning React Hook Form",
      description: "How I mastered form handling in React with React Hook Form.",
      slug: "learning-react-hook-form",
      date: "May 2025",
      component: ChapUseFormBlog,
    }
  ]
};

export function findBlog(category: string, slug: string) {
  console.log("Looking for category:", category, "slug:", slug); // debug
  const blogs = allBlogs[category]; // must match the key exactly
  if (!blogs) return undefined;
  return blogs.find((b) => b.slug === slug);
}
