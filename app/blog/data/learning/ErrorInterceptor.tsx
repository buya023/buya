import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const RtkIsErrorInterceptorBlog = () => {
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
            🧠 Understanding isError in RTK Query — with a Real Interceptor
            Example
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya • November 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-purple-100 text-purple-800">
        RTK Query • TypeScript • Interceptors
      </Badge>

      <CardContent className="space-y-6 text-gray-700">
        {/* Intro */}
        <p className="text-lg font-semibold">
          When working with APIs that return{" "}
          <strong>custom error formats</strong> — such as your Lend app with
          tokens, contracts, and business rules — a simple HTTP 200/400 check
          isn’t enough. RTK Query gives you a universal flag:{" "}
          <code>isError</code>. But to make it meaningful, you need to
          understand how it behaves and how your interceptor transforms API
          responses.
        </p>

        <Separator />

        {/* Section 1 */}
        <h2 className="text-xl font-bold">
          ⚙️ 1. How <code>fetchBaseQuery</code> Sets isError
        </h2>

        <p>
          RTK Query’s <code>fetchBaseQuery</code> is the foundation. By default,
          it marks a request as an error <strong>only</strong> when the HTTP
          status is not 2xx.
        </p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`const baseQuery = fetchBaseQuery({
  baseUrl: environmentConfigs.apiUrl,
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    ...
  },
});`}
        </pre>

        <p>So by default:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            ❌ <code>401, 404, 500</code> → <strong>isError = true</strong>
          </li>
          <li>
            ⚠️ <code>200 but code !== 0</code> →{" "}
            <strong>isError = false</strong> (still treated as success)
          </li>
        </ul>

        <p>
          But your backend uses{" "}
          <strong>200 responses for logical errors</strong>, such as "contract
          not signed" or "invalid action." This means you need something
          smarter.
        </p>

        <Separator />

        {/* Section 2 */}
        <h2 className="text-xl font-bold">
          🧩 2. The Interceptor — Making Errors Actually Meaningful
        </h2>

        <p>
          You wrap <code>fetchBaseQuery</code> with an interceptor to unify your
          logic:
        </p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  ...
  return result;
};`}
        </pre>

        <p>This layer lets you:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Refresh tokens automatically</li>
          <li>Transform business logic failures into real errors</li>
          <li>Show toast notifications</li>
          <li>
            Convert 200 responses that contain errors into{" "}
            <code>{`{ error: ... }`}</code>
          </li>
        </ul>

        <p>
          And that last part is exactly how you control <strong>isError</strong>
          .
        </p>

        <Separator />

        {/* Section 3 */}
        <h2 className="text-xl font-bold">
          🚨 3. When RTK Query Sets <code>isError = true</code>
        </h2>

        <p>RTK Query considers a request failed when you return:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`return {
  error: {
    status: number | string,
    data: any
  }
};`}
        </pre>

        <h3 className="font-semibold mt-2">Inside your interceptor:</h3>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            Thrown error → caught → returned as <code>{`{ error: ... }`}</code>
          </li>
          <li>
            HTTP-level error → already has <code>result.error</code>
          </li>
          <li>
            Logical errors → you throw, then convert to{" "}
            <code>{`{ error }`}</code>
          </li>
        </ul>

        <p>This ensures the UI receives one consistent truth.</p>

        <Separator />

        {/* Section 4 */}
        <h2 className="text-xl font-bold">
          🧩 4. How You Handle Different Error Categories
        </h2>

        {/* Token Expiration */}
        <h3 className="font-semibold">🔑 Token expiration (401)</h3>
        <p>You check whether the error is from token failure:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`if ((result.error && result.error.status === 401) ||
    (result.data && result.data.code === 401)) {
  // attempt refresh...
}`}
        </pre>

        <p>
          If refresh fails → interceptor returns <code>{`{ error }`}</code> →{" "}
          <strong>isError = true</strong>.
        </p>

        {/* Server / network */}
        <h3 className="font-semibold mt-4">
          🌐 Network or server errors (503, timeout)
        </h3>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`if (result.error.status === "PARSING_ERROR" || result.error.status === 503) {
  toast({ type: "error", text: "Сервертэй холбогдоход алдаа гарлаа." });
  throw new Error("Сервертэй холбогдоход алдаа гарлаа.");
}`}
        </pre>

        <p>
          Thrown → caught → <strong>converted to RTK error</strong>.
        </p>

        {/* Logic errors */}
        <h3 className="font-semibold mt-4">
          🧩 Internal logic errors (code !== 0)
        </h3>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`if (parsedData.code !== 0) {
  toast({ type: "error", text });
  throw new Error(text);
}`}
        </pre>

        <p>
          Even though the HTTP response is 200, your interceptor ensures RTK
          Query handles it as an actual error.
        </p>

        <Separator />

        {/* Section 5 */}
        <h2 className="text-xl font-bold">🧭 5. What the Component Sees</h2>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`const { data, isError, error } = useGetMasterContractQuery();`}
        </pre>

        <p>Now your component can simply do:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`if (isError) {
  return <Text>{error.data}</Text>;
}

return <Contract html={data} />;`}
        </pre>

        <p>
          No matter if the error is token-related, network-related, or
          contract-related — the UI reacts consistently.
        </p>

        <Separator />

        {/* Section 6 */}
        <h2 className="text-xl font-bold">
          🧱 6. Why Your Approach Is a Best Practice
        </h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>Centralized error handling instead of scattered checks</li>
          <li>Transforms backend logic errors into proper RTK Query errors</li>
          <li>Ensures UI treats all failures the same way</li>
          <li>Simplifies component-level error states</li>
          <li>Allows automatic retry (token refresh)</li>
        </ul>

        <Separator />

        {/* Takeaways */}
        <h2 className="text-xl font-bold">🚀 Key Takeaways</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>fetchBaseQuery</strong> → handles HTTP errors
          </li>
          <li>
            <strong>Interceptor</strong> → handles token, logic, and parsing
            errors
          </li>
          <li>
            <strong>throw Error</strong> → converts logical errors to RTK-style
            errors
          </li>
          <li>
            <strong>{`{ error: ... }`}</strong> → triggers{" "}
            <code>isError = true</code>
          </li>
          <li>
            <strong>Components stay clean</strong> with unified error states
          </li>
        </ul>

        <p className="font-semibold text-gray-800">
          You’ve essentially trained RTK Query to understand your backend’s
          rules — making <code>isError</code> a truly reliable signal for your
          UI.
        </p>
      </CardContent>
    </Card>
  );
};
