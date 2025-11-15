// app/blog/data/leetcode/ChapHeapBlog.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const ChapHeapBlog = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-10 p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/img/myAvatar1.png"
          alt="Author avatar"
          width={48}
          height={48}
          className="rounded-full border-2 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            ⚙️ Understanding Heap and <code>heapq</code> in Python
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya &bull; November 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-blue-100 text-blue-800">Python</Badge>

      <CardContent className="space-y-4 text-gray-700">
        <p className="text-lg font-semibold">
          Heaps are priority-based data structures. Python’s <code>heapq</code> module simplifies their usage.
        </p>

        <Separator />

        {/* Heap Basics */}
        <h2 className="text-xl font-bold">🧠 What is a Heap?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Min-Heap:</strong> Parent ≤ children</li>
          <li><strong>Max-Heap:</strong> Parent ≥ children</li>
        </ul>

        <h3 className="font-semibold mt-2">🪜 Example of a Min-Heap</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
{`        1
      /   \\
     3     5
    / \\   / \\
   4   8 6   9`}
        </pre>

        <Separator />

        {/* Basic Operations */}
        <h2 className="text-xl font-bold">🐍 Basic heapq Operations</h2>

        <h3 className="font-semibold mt-2">1. Create a Heap</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
{`import heapq

nums = [5, 3, 8, 1, 2]
heapq.heapify(nums)
print(nums)  # [1, 2, 8, 5, 3]`}
        </pre>

        <h3 className="font-semibold mt-2">2. Push Elements</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
{`heapq.heappush(nums, 0)
print(nums)  # [0, 1, 8, 5, 3, 2]`}
        </pre>

        <h3 className="font-semibold mt-2">3. Pop the Smallest Element</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
{`smallest = heapq.heappop(nums)
print(smallest)  # 0
print(nums)      # [1, 3, 8, 5, 2]`}
        </pre>

        <Separator />

        {/* Top-K / Merge */}
        <h2 className="text-xl font-bold">🧮 Top-K & Merging</h2>
        <h3 className="font-semibold mt-2">K Smallest Pair Sums</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
{`import heapq

nums1 = [1, 7, 11]
nums2 = [2, 4, 6]
k = 3

heap = []
for i in range(len(nums1)):
    heapq.heappush(heap, (nums1[i] + nums2[0], i, 0))

res = []
while heap and len(res) < k:
    s, i, j = heapq.heappop(heap)
    res.append([nums1[i], nums2[j]])
    if j + 1 < len(nums2):
        heapq.heappush(heap, (nums1[i] + nums2[j+1], i, j+1))

print(res)  # [[1, 2], [1, 4], [1, 6]]`}
        </pre>

        <h3 className="font-semibold mt-2">Max-Heap Trick</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
{`nums = [5, 3, 8, 1, 2]
max_heap = [-n for n in nums]
heapq.heapify(max_heap)

max_val = -heapq.heappop(max_heap)
print(max_val)  # 8`}
        </pre>

        <Separator />

        {/* Summary */}
        <h2 className="text-xl font-bold">✅ Summary</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Heap: fast min/max access</li>
          <li><code>heapq</code>: Python module for heap operations</li>
          <li>Functions: <code>heapify</code>, <code>heappush</code>, <code>heappop</code>, <code>nlargest</code>, <code>nsmallest</code></li>
          <li>Max-heap simulation via negation</li>
          <li>Great for priority queues, leaderboards, and top-K algorithms</li>
        </ul>
      </CardContent>
    </Card>
  );
};
