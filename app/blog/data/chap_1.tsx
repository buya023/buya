// app/blog/data/chap_1.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Chap1Blog = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-10 p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/img/myAvatar1.png"
          alt="Author avatar"
          width={48}
          height={48}
          className="rounded-full border-2 border-teal-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Breaking Down Chapter 1 of System Design Interview by Alex Xu
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya &bull; August 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-teal-100 text-teal-800">System Design</Badge>

      <CardContent className="space-y-4 text-gray-700">
        <p className="text-lg font-semibold">
          A Practical Guide to Core System Design Concepts
        </p>

        <p>
          If you're starting your journey into system design, Alex Xu's{" "}
          <strong>System Design Interview</strong> is one of the most widely recommended books. Chapter 1 is more than an introduction—it's a foundation. It outlines the fundamental building blocks of large-scale systems and explains how they interact to handle millions of users reliably.
        </p>

        <p>I revisited this chapter recently, and here's a deep-dive summary with a few additional insights beyond the book's main points.</p>

        <Separator />

        {/* Sections */}
        <h2 className="text-xl font-bold">🗄️ 1. Databases: SQL vs. NoSQL</h2>
        <p>Every system starts with data—and the database is where it lives.</p>

        <h3 className="font-semibold mt-2">SQL Databases (e.g., MySQL, PostgreSQL)</h3>
        <ul className="list-disc pl-5">
          <li>Store data in tables and rows with a fixed schema.</li>
          <li>Strong consistency and relational integrity.</li>
          <li>Excellent for complex queries and transactions (e.g., banking).</li>
        </ul>

        <h3 className="font-semibold mt-2">NoSQL Databases</h3>
        <p>Designed for scalability, flexible schemas, and massive datasets. Types include:</p>
        <ul className="list-disc pl-5">
          <li><strong>Key-Value Stores</strong> (e.g., Redis) – lightning-fast lookups.</li>
          <li><strong>Document Stores</strong> (e.g., MongoDB) – store semi-structured JSON-like documents.</li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold">📈 2. Scaling: Vertical vs. Horizontal</h2>
        <p>When your user base grows, your system needs to grow with it.</p>

        <h3 className="font-semibold mt-2">Vertical Scaling (Scale Up)</h3>
        <ul className="list-disc pl-5">
          <li>Add CPU, RAM, or faster disks to a single machine.</li>
          <li>✅ Simple to implement.</li>
          <li>❌ Expensive, with physical limits.</li>
        </ul>

        <h3 className="font-semibold mt-2">Horizontal Scaling (Scale Out)</h3>
        <ul className="list-disc pl-5">
          <li>Add more servers to share the workload.</li>
          <li>✅ Higher fault tolerance.</li>
          <li>❌ Requires careful coordination (data distribution, consistency).</li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold">⚖️ 3. Load Balancers</h2>
        <p>A load balancer acts like the receptionist of your system: it decides where each request should go.</p>
        <ul className="list-disc pl-5">
          <li>Routes traffic across multiple servers using algorithms like round robin, least connections, or IP hash.</li>
          <li>Improves reliability—if one server fails, traffic is rerouted.</li>
          <li>Supports auto-scaling by adding/removing servers as needed.</li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold">💭 Final Thoughts</h2>
        <p>
          Chapter 1 of <strong>System Design Interview</strong> is a crash course in the fundamental pieces of large-scale systems. From databases to CDNs, from load balancers to queues—these are your building blocks.
        </p>
      </CardContent>
    </Card>
  );
};
