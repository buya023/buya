import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const SymfonyFaviconBlog = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-10 p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/img/myAvatar1.png"
          alt="Author avatar"
          width={48}
          height={48}
          className="rounded-full border-2 border-yellow-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            🖼️ Understanding Favicon Usage in Symfony: Why It Sometimes Sticks &
            How to Fix It
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya • November 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-yellow-100 text-yellow-800">
        Symfony • Assets • Browser Caching
      </Badge>

      <CardContent className="space-y-6 text-gray-700">
        {/* Intro */}
        <p className="text-lg font-semibold">
          Favicons look simple — but in practice, browsers cache them
          aggressively, which leads to an annoying problem: you update your
          icon, refresh the page… and the old one still shows. Here’s how
          favicons work inside a Symfony project and the best ways to force
          updates.
        </p>

        <Separator />

        {/* Section 1 */}
        <h2 className="text-xl font-bold">📌 1. Favicon Basics in Symfony</h2>

        <p>
          In a Symfony application, the typical way to define a favicon is using
          Twig’s <code>asset()</code> helper:
        </p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`<link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}">`}
        </pre>

        <p>Or using PNG:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`<link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">`}
        </pre>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            Store the file in <code>public/images/</code>
          </li>
          <li>
            Use <code>asset()</code> so Symfony resolves the correct path
          </li>
        </ul>

        <p className="font-semibold">
          💡 Bonus: Browsers automatically check <code>/favicon.ico</code> even
          without a link tag.
        </p>

        <Separator />

        {/* Section 2 */}
        <h2 className="text-xl font-bold">
          🧠 2. Why Browsers Show the Old Favicon
        </h2>

        <p>
          Browsers treat favicons differently than normal images. They often
          cache them for days or weeks.
        </p>

        <p>The main reasons include:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            The browser has a separate favicon cache (not cleared on normal
            reload).
          </li>
          <li>
            Symfony’s <code>asset()</code> generates the same URL, so the
            browser sees no change.
          </li>
          <li>
            CDNs or proxies may cache <code>favicon.ico</code> aggressively.
          </li>
        </ul>

        <p>
          This is why even after replacing <strong>favicon.ico</strong>, your
          browser may still show the previous icon.
        </p>

        <Separator />

        {/* Section 3 */}
        <h2 className="text-xl font-bold">
          🛠️ 3. How to Solve Favicon Caching Issues
        </h2>

        <h3 className="font-semibold mt-3">✔️ (a) Version the favicon URL</h3>
        <p>Appending a query string forces a refresh:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`<link rel="icon" href="{{ asset('images/favicon.ico') }}?v=2">`}
        </pre>

        <p>
          Increase <code>v=2</code> to <code>v=3</code> anytime you update the
          file.
        </p>

        <Separator />

        <h3 className="font-semibold mt-3">✔️ (b) Hard Reload the Browser</h3>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            Use <strong>Ctrl + F5</strong>
          </li>
          <li>
            Or right-click ➝ <strong>Reload frame / Hard reload</strong>
          </li>
          <li>Or open the favicon URL manually in your browser</li>
        </ul>

        <p>
          Opening <code>http://localhost:8000/images/favicon.ico</code> directly
          often forces browsers to re-fetch it.
        </p>

        <Separator />

        <h3 className="font-semibold mt-3">
          ✔️ (c) Use Webpack Encore Versioning
        </h3>

        <p>If your project uses Webpack Encore:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`// webpack.config.js
Encore.enableVersioning();`}
        </pre>

        <p>This will generate hashed filenames like:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`favicon.23af91.ico`}
        </pre>

        <p>
          Each build forces the browser to fetch the new asset automatically.
        </p>

        <Separator />

        <h3 className="font-semibold mt-3">
          ✔️ (d) Use favicon.ico in the Project Root
        </h3>

        <p>
          Browsers automatically request <code>/favicon.ico</code> from the site
          root. Placing the file here often works without any additional
          configuration:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            Drop <strong>favicon.ico</strong> into <code>public/</code>
          </li>
          <li>No Twig changes required</li>
        </ul>

        <p>
          If you need multiple sizes or PNGs, then include explicit{" "}
          <code>&lt;link&gt;</code> tags.
        </p>

        <Separator />

        {/* Section 4 */}
        <h2 className="text-xl font-bold">📐 4. Extra Tips</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>.ico</strong> has best browser compatibility.
          </li>
          <li>Provide multiple PNG sizes for modern devices:</li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicon-32x32.png') }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicon-16x16.png') }}">`}
        </pre>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            Use DevTools → Network to check whether the browser loads the
            correct file.
          </li>
        </ul>

        <Separator />

        {/* Takeaways */}
        <h2 className="text-xl font-bold">✨ Key Takeaways</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>Favicons are heavily cached — more than normal images.</li>
          <li>Use query strings or versioning to force refreshes.</li>
          <li>Webpack Encore hashing reliably busts cache.</li>
          <li>
            Using <code>/favicon.ico</code> in <code>public/</code> is the
            simplest approach.
          </li>
          <li>
            Always verify which favicon file the browser is actually loading.
          </li>
        </ul>

        <p className="font-semibold text-gray-800">
          By understanding how browsers cache favicons, you can confidently
          update your Symfony application's icon without running into confusing
          “stuck” icons again.
        </p>
      </CardContent>
    </Card>
  );
};
