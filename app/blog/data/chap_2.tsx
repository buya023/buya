import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Chap2Blog = () => {
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
            Breaking Down Chapter 2 of System Design Interview by Alex Xu
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya &bull; September 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-teal-100 text-teal-800">System Design</Badge>

      <CardContent className="space-y-4 text-gray-700">
        <p className="text-lg font-semibold">
          Back-of-the-Envelope Estimations for Real-World System Design
        </p>

        <p>
          Chapter 2 of Alex Xu's <strong>System Design Interview</strong> shifts from concepts to math. This chapter introduces <em>back-of-the-envelope estimation</em> — quick calculations to sanity-check your design ideas.
        </p>

        <p>Here's my blog-style summary with examples, quick formulas, and insights I've picked up along the way.</p>

        <Separator />

        {/* Sections */}
        <h2 className="text-xl font-bold">🔢 1. Thinking in Units and Conversions</h2>
        <p>Every estimation starts with data units. Keep these basics in your head:</p>
        <ul className="list-disc pl-5">
          <li><strong>1 character = 1 byte</strong> (approximation, assuming UTF-8/ASCII).</li>
          <li><strong>1 byte = 8 bits</strong>.</li>
          <li>Use powers of 10 for quick math: 1 KB ≈ 1,000 bytes, 1 MB ≈ 1,000 KB, etc.</li>
        </ul>
        <p className="italic text-gray-500">💡 Tip: Don’t get hung up on exact numbers. In interviews, speed and ballpark accuracy are more important.</p>

        <Separator />

        <h2 className="text-xl font-bold">⏱️ 2. Latency Numbers to Keep in Mind</h2>
        <p>Latency is crucial in distributed systems:</p>
        <ul className="list-disc pl-5">
          <li>L1 cache reference: ~0.5 ns</li>
          <li>L2 cache reference: ~7 ns</li>
          <li>Main memory (RAM): ~100 ns</li>
          <li>SSD random read: ~100 μs</li>
          <li>Disk seek (HDD): ~10 ms</li>
          <li>Cross data center round trip: ~0.5–1 ms</li>
          <li>Intercontinental round trip: 100–200 ms</li>
        </ul>
        <p className="italic text-gray-500">🧠 Key takeaway: Memory is blazing fast, disk is slow, and network is slower. Use this to justify caching, replication, and minimizing network calls.</p>

        <Separator />

        <h2 className="text-xl font-bold">📊 3. QPS (Queries Per Second) Estimation</h2>
        <p>Estimate how many requests your system must handle:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
1M users × 10 req/day = 10M req/day
10M ÷ 86,400 sec/day ≈ 116 QPS
        </pre>
        <p>This helps size your servers, caches, and databases.</p>

        <Separator />

        <h2 className="text-xl font-bold">💾 4. Storage Estimation</h2>
        <p>Estimate storage needs per request:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
10M requests × 1 KB = 10 GB/day
10 GB × 365 ≈ 3.6 TB/year
        </pre>

        <Separator />

        <h2 className="text-xl font-bold">🛡️ 5. High Availability and SLAs</h2>
        <p>Availability measures system uptime. SLAs often expressed in nines:</p>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Availability</th>
              <th className="border px-2 py-1">Downtime/Year</th>
              <th className="border px-2 py-1">Downtime/Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">99%</td>
              <td className="border px-2 py-1">3.65 days</td>
              <td className="border px-2 py-1">14.4 minutes</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">99.9%</td>
              <td className="border px-2 py-1">8.76 hours</td>
              <td className="border px-2 py-1">1.44 minutes</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">99.99%</td>
              <td className="border px-2 py-1">52.6 minutes</td>
              <td className="border px-2 py-1">8.6 seconds</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">99.999%</td>
              <td className="border px-2 py-1">5.26 minutes</td>
              <td className="border px-2 py-1">0.86 seconds</td>
            </tr>
          </tbody>
        </table>
        <p className="italic text-gray-500">🎯 Insight: Going from 99.9% to 99.99% cuts downtime 10x but costs significantly more. Design based on business needs.</p>

        <Separator />

        <h2 className="text-xl font-bold">🧮 6. A Repeatable Framework</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Clarify assumptions:</strong> DAU, actions per user, request size.</li>
          <li><strong>Compute QPS:</strong> Requests per second across the system.</li>
          <li><strong>Estimate storage:</strong> Daily → monthly → yearly growth.</li>
          <li><strong>Think latency:</strong> Is caching required? Do we need async processing?</li>
          <li><strong>Check SLA targets:</strong> How many replicas or failover strategies do we need?</li>
        </ol>

        <p>When you present this in an interview, narrate your thought process. Structured reasoning matters more than perfect arithmetic.</p>
      </CardContent>
    </Card>
  );
};
