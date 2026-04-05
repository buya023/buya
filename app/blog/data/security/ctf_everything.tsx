import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const CtfEverythingBlog = () => {
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
            Attack & Defense CTF: Everything You Need to Know
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya &bull; April 2026</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-red-100 text-red-800">Security</Badge>

      <CardContent className="space-y-6 text-gray-700">
        <p className="text-lg font-semibold">
          A comprehensive guide to Capture The Flag (CTF) competitions, focusing on the Attack/Defense format.
        </p>

        <Separator />

        <h2 className="text-xl font-bold">What is CTF?</h2>
        <p>
          <strong>CTF (Capture The Flag)</strong> is a cybersecurity competition where you find hidden strings called &quot;flags&quot; by hacking into systems. There are two main types:
        </p>

        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">How it works</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2"><strong>Jeopardy</strong></td>
                <td className="border px-4 py-2">Solve standalone puzzles (like a quiz)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2"><strong>Attack/Defense</strong></td>
                <td className="border px-4 py-2">Hack other teams while protecting your own systems</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h2 className="text-xl font-bold">How Attack/Defense Works</h2>
        <p>Every team gets an <strong>identical server</strong> running the same vulnerable apps. You must:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Attack</strong> other teams&apos; servers to steal their flags</li>
          <li><strong>Defend</strong> your own server by patching vulnerabilities</li>
          <li>A <strong>checker bot</strong> visits your server every 30 seconds to verify it still works</li>
        </ul>
        <blockquote className="border-l-4 border-red-500 pl-4 italic bg-gray-50 py-2">
          If your service is down, you lose points. If it&apos;s vulnerable, others steal your flags.
        </blockquote>

        <Separator />

        <h2 className="text-xl font-bold">Common Vulnerability Types</h2>

        <h3 className="font-semibold mt-2">1. SQL Injection (SQLi)</h3>
        <p>When user input goes directly into a database query.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`# VULNERABLE
query = f"SELECT * FROM users WHERE name = '{user_input}'"

# SAFE - parameterized query
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (user_input,))`}
        </pre>
        <p><strong>What attackers do:</strong> Input <code>&apos; OR 1=1 --</code> to dump the entire database.</p>

        <h3 className="font-semibold mt-2">2. Path Traversal</h3>
        <p>When a file download endpoint doesn&apos;t validate the path.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`# Normal request
/download?file=photo.jpg

# Attack - reads system files
/download?file=../../etc/passwd`}
        </pre>
        <p><strong>How to prevent:</strong> Block <code>..</code> in file paths and restrict access to one directory.</p>

        <h3 className="font-semibold mt-2">3. Predictable Tokens</h3>
        <p>When authentication tokens are generated from known values.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`# VULNERABLE - anyone can recreate this
token = md5(username + "secret_key")

# SAFE - random and unpredictable
token = secrets.token_hex(32)`}
        </pre>
        <p><strong>What attackers do:</strong> Forge tokens for any user without knowing their password.</p>

        <h3 className="font-semibold mt-2">4. Broken Cryptography</h3>
        <p>When custom encryption looks complex but is actually weak.</p>
        <p><strong>Common mistakes:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>XOR with a short repeating key</li>
          <li>Using MD5 or SHA1 for passwords</li>
          <li>Hardcoded encryption keys in source code</li>
          <li>Operations that cancel each other out</li>
        </ul>
        <p><strong>Rule:</strong> Never write your own crypto. Use proven libraries like AES-256-GCM.</p>

        <h3 className="font-semibold mt-2">5. Command Injection</h3>
        <p>When user input is passed to a system command.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`# VULNERABLE
os.system(f"ping {user_input}")
# attacker sends: 127.0.0.1; cat /etc/passwd

# SAFE - use subprocess with list args
subprocess.run(["ping", user_input])`}
        </pre>

        <Separator />

        <h2 className="text-xl font-bold">Attack Strategy Basics</h2>
        <pre className="bg-gray-800 text-teal-400 p-4 rounded text-sm font-mono overflow-x-auto">
{`Step 1: Scan the network     -> Find other teams' IPs
Step 2: Read source code     -> Identify vulnerabilities
Step 3: Write exploits       -> Automate flag extraction
Step 4: Submit flags         -> Send to scoring server
Step 5: Loop                 -> Flags rotate, so repeat fast`}
        </pre>

        <Separator />

        <h2 className="text-xl font-bold">Defense Strategy Basics</h2>
        <pre className="bg-gray-800 text-teal-400 p-4 rounded text-sm font-mono overflow-x-auto">
{`Step 1: Read your own code       -> Find the bugs
Step 2: Patch vulnerabilities    -> Fix the code
Step 3: Restart services         -> Apply changes
Step 4: Test the service         -> Make sure checker bot still works
Step 5: Monitor logs             -> Watch for incoming attacks`}
        </pre>

        <Separator />

        <h2 className="text-xl font-bold">Essential Skills for CTF</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Skill</th>
                <th className="border px-4 py-2">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Python scripting</td>
                <td className="border px-4 py-2">Automate exploits and flag submission</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Linux terminal</td>
                <td className="border px-4 py-2">Navigate servers, read logs, manage processes</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">SQL basics</td>
                <td className="border px-4 py-2">Understand and exploit database queries</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Networking</td>
                <td className="border px-4 py-2">Port scanning, HTTP requests, TCP sockets</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Source code reading</td>
                <td className="border px-4 py-2">Find vulnerabilities in unfamiliar code</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator />

        <h2 className="text-xl font-bold">Useful Tools</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>nmap</strong> — Network/port scanning</li>
          <li><strong>curl</strong> — Send HTTP requests</li>
          <li><strong>Burp Suite</strong> — Intercept and modify web traffic</li>
          <li><strong>sqlmap</strong> — Automated SQL injection testing</li>
          <li><strong>Wireshark</strong> — Analyze network traffic</li>
          <li><strong>Python</strong> — Write custom exploit scripts</li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold">OWASP Top 10</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Broken Access Control</li>
          <li>Cryptographic Failures</li>
          <li>Injection (SQL, Command, etc.)</li>
          <li>Insecure Design</li>
          <li>Security Misconfiguration</li>
          <li>Vulnerable Components</li>
          <li>Authentication Failures</li>
          <li>Data Integrity Failures</li>
          <li>Logging & Monitoring Failures</li>
          <li>Server-Side Request Forgery (SSRF)</li>
        </ol>
      </CardContent>
    </Card>
  );
};
