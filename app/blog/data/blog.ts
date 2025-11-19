import { JSX } from "react";
import { Chap1Blog } from "./chap_1";
import { Chap2Blog } from "./chap_2";
import { ChapUseFormBlog } from "./learning/useform";
import { ChapHeapBlog } from "./leetcode/heap";
import { ChapKeychainBlog } from "./learning/keychain";
import { S3GetObjectBlog } from "./learning/aws";
import { RtkIsErrorInterceptorBlog } from "./learning/ErrorInterceptor";
import { SymfonyUserCacheClearBlog } from "./learning/CacheClear";
import { SymfonyRedisUserCacheBlog } from "./learning/redis";
import { SymfonyFaviconBlog } from "./learning/favicon";

export type BlogEntry = {
  title: string;
  description: string;
  slug: string;
  date: string;
  component: () => JSX.Element;
};

export type BlogCategory = "system-design" | "leetcode" | "learning";

export const allBlogs: Record<BlogCategory, BlogEntry[]> = {
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
      description:
        "Back-of-the-envelope estimations and QPS/storage calculations.",
      slug: "chapter-2",
      date: "September 2025",
      component: Chap2Blog,
    },
  ],
  leetcode: [
    {
      title: "Understanding Heap and heapq in Python",
      description:
        "A practical guide to heaps, heapq operations, and top-K algorithms in Python.",
      slug: "heapq-python",
      date: "November 2025",
      component: ChapHeapBlog,
    },
  ],
  learning: [
    {
      title: "My Journey Learning React Hook Form",
      description:
        "How I mastered form handling in React with React Hook Form.",
      slug: "learning-react-hook-form",
      date: "May 2025",
      component: ChapUseFormBlog,
    },
    {
      title: "Deep Dive into React Native Keychain",
      description:
        "Securely store user credentials and implement biometric login in React Native apps using react-native-keychain.",
      slug: "react-native-keychain",
      date: "November 2025",
      component: ChapKeychainBlog,
    },
    {
      title: "AWS S3 ",
      description: "Using AWS S3 to Fetch Images in PHP/Symfony",
      slug: "aws-s3-getobject-php-symfony",
      date: "November 2025",
      component: S3GetObjectBlog,
    },
    {
      title: "RTK Query isError + interceptor",
      description:
        "Handling global error states in Redux Toolkit Query with interceptors.",
      slug: "rtk-query-iserror-interceptor",
      date: "November 2025",
      component: RtkIsErrorInterceptorBlog,
    },
    {
      title: "Clearing User Cache After Updates in Symfony",
      description:
        "Best practices for managing and clearing user cache in Symfony applications after data updates.",
      slug: "symfony-clear-user-cache",
      date: "November 2025",
      component: SymfonyUserCacheClearBlog,
    },
    {
      title: "How We Use Redis to Cache User Information in Symfony",
      description:
        "Implementing Redis caching for user profiles in Symfony applications to enhance performance and scalability.",
      slug: "redis-cache-user-info-symfony",
      date: "November 2025",
      component: SymfonyRedisUserCacheBlog,
    },
    {
      title: "Understanding Favicon Usage in Symfony",
      description:
        "A guide to implementing and managing favicons in Symfony applications",
      slug: "favicon-usage-symfony",
      date: "November 2025",
      component: SymfonyFaviconBlog,
    }
  ],
};

export function findBlog(
  category: BlogCategory,
  slug: string
): BlogEntry | undefined {
  const blogs = allBlogs[category];
  return blogs.find((b) => b.slug === slug);
}
