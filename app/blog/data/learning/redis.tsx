import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const SymfonyRedisUserCacheBlog = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-10 p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/img/myAvatar1.png"
          alt="Author avatar"
          width={48}
          height={48}
          className="rounded-full border-2 border-red-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            ⚡ How We Use Redis to Cache User Information in Symfony
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya • November 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-red-100 text-red-800">
        Symfony • Redis • Caching
      </Badge>

      <CardContent className="space-y-6 text-gray-700">
        {/* Intro */}
        <p className="text-lg font-semibold">
          Modern apps need to be both fast and scalable. One of the most effective ways to achieve
          this in Symfony is by caching frequently accessed data — especially user profiles — using{" "}
          <strong>Redis</strong>. Here’s a breakdown of how we implemented Redis caching for user
          information and the lessons learned along the way.
        </p>

        <Separator />

        {/* Section 1 */}
        <h2 className="text-xl font-bold">🚀 1. Why Redis?</h2>

        <p>
          Redis is an in-memory data store, meaning it can deliver data extremely fast — far faster
          than reading from a database. By caching user information in Redis, we can:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Reduce the number of database queries</li>
          <li>Improve response times</li>
          <li>Support higher traffic more efficiently</li>
        </ul>

        <p>
          User profiles are requested frequently, making them a perfect candidate for caching.
        </p>

        <Separator />

        {/* Section 2 */}
        <h2 className="text-xl font-bold">⚙️ 2. How Our Caching Flow Works</h2>

        <p>Whenever a user requests their profile, the system follows this flow:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>➡️ Check Redis for cached data</li>
          <li>✔️ If cached → return it instantly</li>
          <li>❌ If not cached → fetch from DB, store in Redis, then return</li>
          <li>♻️ When the user updates their profile → delete the cache entry</li>
        </ul>

        <p>
          This ensures Redis always stores the <strong>latest</strong> information while maximizing
          performance.
        </p>

        <Separator />

        {/* Section 3 */}
        <h2 className="text-xl font-bold">🧩 3. Implementing Redis in Symfony</h2>

        <p>Symfony makes it easy to interact with Redis using the built-in cache system.</p>

        <h3 className="font-semibold mt-3">✔️ Fetching or storing user info</h3>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`$userInfo = $this->cache->get($cacheKey, function (ItemInterface $item) use ($userData) {
    $item->expiresAfter(3600); // Cache for 1 hour
    return $userData;
});`}
        </pre>

        <h3 className="font-semibold mt-3">✔️ Clearing cache after updates</h3>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`$this->cache->deleteItem($cacheKey);`}
        </pre>

        <p>
          This ensures that outdated user info is never served to clients, and fresh data will be
          cached automatically on the next request.
        </p>

        <Separator />

        {/* Section 4 */}
        <h2 className="text-xl font-bold">🔑 4. Cache Key Strategy</h2>

        <p>
          We use structured cache keys to keep user data organized. For example:
        </p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`CacheService::USER_INFO_CACHE_KEY_PATTERN = 'user_info_%d';`}
        </pre>

        <p>
          By replacing <code>%d</code> with the user’s ID, each user has their own Redis entry, which
          prevents conflicts and simplifies cache invalidation.
        </p>

        <Separator />

        {/* Section 5 */}
        <h2 className="text-xl font-bold">♻️ 5. When We Clear the Cache</h2>

        <p>We invalidate a user’s cache whenever:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>They update their profile</li>
          <li>They modify financial or related information</li>
          <li>Any dependent data changes</li>
          <li>We need to force-refresh stale cache during deployment</li>
        </ul>

        <p>
          This ensures every user always sees <strong>correct</strong> and <strong>up-to-date</strong> information.
        </p>

        <Separator />

        {/* Takeaways */}
        <h2 className="text-xl font-bold">✨ Key Takeaways</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>Redis delivers fast, scalable storage for frequently accessed data.</li>
          <li>Invalidate user cache immediately after profile updates.</li>
          <li>Use structured cache keys based on user IDs.</li>
          <li>Let Redis auto-refresh cache on next request.</li>
        </ul>

        <p className="font-semibold text-gray-800">
          By combining Redis with Symfony’s caching system, we built a faster and more scalable
          application — without sacrificing data accuracy.
        </p>
      </CardContent>
    </Card>
  );
};
