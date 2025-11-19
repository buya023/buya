import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const SymfonyUserCacheClearBlog = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-10 p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/img/myAvatar1.png"
          alt="Author avatar"
          width={48}
          height={48}
          className="rounded-full border-2 border-green-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            🗄️ Clearing User Cache After Updates in Symfony — A Practical Guide
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya • November 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-green-100 text-green-800">
        Symfony • PHP • Caching
      </Badge>

      <CardContent className="space-y-6 text-gray-700">
        {/* Intro */}
        <p className="text-lg font-semibold">
          When building Symfony apps that use caching (like Redis) to store user
          data, there’s a critical problem you must solve:{" "}
          <strong>ensuring users never see outdated information</strong>. The
          simplest and most reliable fix? Clear the specific cache entry
          whenever a user updates their profile.
        </p>

        <Separator />

        {/* Section 1 */}
        <h2 className="text-xl font-bold">
          🧠 1. Why Clearing the Cache Matters
        </h2>

        <p>
          Caching helps your system respond faster by avoiding database queries
          for frequently used data — such as user info. But when a user updates
          their profile:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            The cached data becomes <strong>stale</strong>.
          </li>
          <li>
            The user may still see <strong>old information</strong>.
          </li>
          <li>This creates inconsistent UI and a poor user experience.</li>
        </ul>

        <p>
          The fix is straightforward: whenever a user updates their data, remove
          their cache entry so Symfony regenerates it with fresh values.
        </p>

        <Separator />

        {/* Section 2 */}
        <h2 className="text-xl font-bold">
          ⚙️ 2. How Symfony Cache Removal Works
        </h2>

        <p>Here’s the general flow you’ll implement:</p>

        <h3 className="font-semibold mt-3">
          ✔️ Step 1 — Generate the cache key
        </h3>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`$cacheKey = sprintf(CacheService::USER_INFO_CACHE_KEY_PATTERN, $userId);`}
        </pre>

        <p>
          The cache key typically includes the user’s ID so each user has a
          unique stored entry.
        </p>

        <h3 className="font-semibold mt-3">
          ✔️ Step 2 — Retrieve the cache item
        </h3>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`$cacheItem = $this->getItem($cacheKey);

if (null !== $cacheItem->get()) {
    $this->cache->deleteItem($cacheItem->getKey());
}`}
        </pre>

        <p>
          If the cache entry exists, delete it. This ensures that future
          requests fetch fresh data and repopulate the cache automatically.
        </p>

        <Separator />

        {/* Section 3 */}
        <h2 className="text-xl font-bold">
          📌 3. A Real Example Inside UserService
        </h2>

        <p>Whenever a user updates their profile, you simply call:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`$userService->clearUserInfoCache($user->getId());`}
        </pre>

        <p>
          This ensures the exact cache key linked to that user is cleared
          instantly — preventing any outdated profile info from being served.
        </p>

        <Separator />

        {/* Section 4 */}
        <h2 className="text-xl font-bold">🚀 4. Why This Matters</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>No stale data</strong> — users always see the latest profile
            updates.
          </li>
          <li>
            <strong>Better UX</strong> — information stays consistent across
            devices.
          </li>
          <li>
            <strong>Simpler logic</strong> — no need to manually refresh every
            component.
          </li>
          <li>
            <strong>Predictable behavior</strong> — cache regenerates only when
            needed.
          </li>
        </ul>

        <p className="font-semibold text-gray-800">
          Clearing cache after updates is a small practice that delivers a huge
          boost to application consistency and reliability.
        </p>

        <Separator />

        {/* Takeaways */}
        <h2 className="text-xl font-bold">✨ Key Takeaways</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>Caching speeds up your Symfony app — but must stay fresh.</li>
          <li>Always clear user-specific cache after profile updates.</li>
          <li>Use structured cache keys (like patterns with user IDs).</li>
          <li>Deleting the cache triggers a fresh rebuild on next request.</li>
        </ul>
      </CardContent>
    </Card>
  );
};
