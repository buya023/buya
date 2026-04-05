import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const CtfFirstCompBlog = () => {
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
            What I Learned From My First Attack/Defense CTF Competition
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya &bull; April 2026</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-red-100 text-red-800">Security</Badge>

      <CardContent className="space-y-6 text-gray-700">
        <p>
          Last night I competed in my first ever Attack/Defense CTF competition. Unlike Jeopardy-style CTFs where you solve standalone challenges, Attack/Defense gives each team a virtual machine running identical vulnerable services. Your job: patch your own services to defend against attacks while simultaneously exploiting the same vulnerabilities on other teams&apos; machines to steal their flags.
        </p>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">The Setup</h2>
        <p>Our VM had 4 services:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>QuickAuth</strong> (Python/Flask) — a secrets vault with token-based authentication</li>
          <li><strong>FileDrop</strong> (PHP) — a file upload and sharing service</li>
          <li><strong>NoteKeeper</strong> (Python/Flask) — a note-taking app with search functionality</li>
          <li><strong>CipherStore</strong> (Java) — an encrypted blob storage service</li>
        </ul>
        <p>Each service held one flag that was renewed every 2 minutes. 8 teams total, all attacking each other simultaneously.</p>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">Finding the Vulnerabilities</h2>
        
        <h3 className="font-semibold text-lg">1. QuickAuth — Predictable Token Generation</h3>
        <p>The authentication token was generated using <code>MD5(username + &quot;s3cr3t_k3y_2024&quot;)</code>. This is completely deterministic — if you know someone&apos;s username, you can forge their token without ever needing their password.</p>

        <h3 className="font-semibold text-lg">2. FileDrop — Path Traversal</h3>
        <p>The <code>/api/download?path=</code> endpoint used <code>resolveRelative()</code> which simply concatenated the data directory with the user-supplied path. No validation for <code>..</code> sequences meant you could read any file on the system: <code>/api/download?path=../../etc/passwd</code>.</p>

        <h3 className="font-semibold text-lg">3. NoteKeeper — SQL Injection</h3>
        <p>The search function had a classic SQLi vulnerability. While there was an <code>InputValidator</code> that blocked keywords like <code>union</code>, <code>select</code>, <code>or</code>, <code>and</code>, and <code>--</code>, it missed the <code>LIKE</code> operator. The payload <code>&apos; LIKE &apos;%</code> bypassed the filter and dumped all notes from the database, including flags.</p>

        <h3 className="font-semibold text-lg">4. CipherStore — Broken Cryptography</h3>
        <p>This one looked intimidating with its &quot;enterprise-grade multi-round stream cipher&quot; comments. But the pre-whitening transform (XOR with 0xA5) and post-whitening transform (XOR with 0xA5) cancel each other out. The entire encryption reduces to XOR with a repeating 16-byte keystream.</p>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">The Attack Script</h2>
        <p>I wrote a Python script that automated the entire attack pipeline:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`1. Discover teams — port scan the subnet to find all 8 team IPs
2. Exploit all 4 services on each enemy team
3. Extract flags from responses using regex
4. Submit flags to the scoring server via TCP
5. Loop continuously every 5 seconds`}
        </pre>
        <p>One lesson learned: always plan for minimal dependency environments. The script used only Python stdlib (urllib, socket, hashlib) since the VM didn&apos;t have pip/requests installed.</p>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">Defense: Patching Our Services</h2>
        <p>Patching was just as critical as attacking. Every 30 seconds, a checker bot would verify our services were functional and deposit new flags.</p>

        <h3 className="font-semibold">What Went Wrong:</h3>
        <p>The biggest issue was <strong>database permissions</strong>. When we restarted the patched services, the SQLite database files became read-only, which meant the checker bot couldn&apos;t write new flags. Our services went &quot;Down&quot; and we lost points.</p>
        <blockquote className="border-l-4 border-red-500 pl-4 italic bg-gray-50 py-2">
          <strong>Lesson:</strong> Always test that the checker bot can still write to your service after patching. A patched but broken service loses more points than a vulnerable but running one.
        </blockquote>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Speed Matters:</strong> Reduce loop intervals. A 5-second loop is much better than a 90-second one.</li>
          <li><strong>Source IP:</strong> Flags must be submitted from the VM, not your local machine.</li>
          <li><strong>Don&apos;t Be Intimidated:</strong> Complex-looking code often hides simple logic errors.</li>
          <li><strong>Database Permissions:</strong> Restarting services can change ownership. Always verify write operations.</li>
          <li><strong>Automate Everything:</strong> Manual flag submission is impossible when flags rotate every 30 seconds.</li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">What I Would Do Differently</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Patch services <strong>first</strong> before writing attack scripts.</li>
          <li>Test patches with a mock checker to ensure services still function correctly.</li>
          <li>Use <code>nohup</code> and background processes from the start.</li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">Final Thoughts</h2>
        <p>
          Attack/Defense CTF is a completely different experience from Jeopardy CTF. It&apos;s real-time, adversarial, and stressful. Finishing 2nd in my first competition feels great, but I know exactly where we lost points. The best part? Every vulnerability I exploited is something I&apos;ll now recognize and prevent in production code.
        </p>
      </CardContent>
    </Card>
  );
};
