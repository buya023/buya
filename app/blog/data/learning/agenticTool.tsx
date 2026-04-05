import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const AgenticAiToolUseBlog = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-10 p-8 shadow-lg">
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
            🤖 Agentic AI — Tool Use Explained (From Andrew Ng’s Course)
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya • December 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-blue-100 text-blue-800">
        Agentic AI • Tools • Andrew Ng
      </Badge>

      <CardContent className="space-y-6 text-gray-700">
        {/* Intro */}
        <p className="text-lg font-semibold">
          Andrew Ng describes tool use as the most important upgrade that turns
          a passive LLM into an <strong>active, goal-achieving agent</strong>.
          With tools, the model can interact with the real world — not just
          generate text.
        </p>

        <Separator />

        {/* What is Tool Use */}
        <h2 className="text-xl font-bold">🧰 What Is Tool Use in Agentic AI?</h2>

        <p>
          Tool use means allowing an AI agent to call external functions or
          systems to complete a task. Instead of only replying in text, the
          model can take actions using:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>APIs (weather, flights, payments, GitHub)</li>
          <li>Python execution (data analysis, file generation)</li>
          <li>Databases (SQL queries)</li>
          <li>Web browsing</li>
          <li>Internal business tools</li>
        </ul>

        <blockquote className="border-l-4 border-blue-400 pl-4 italic">
          “Tool use is what transforms LLMs into agents.” — Andrew Ng
        </blockquote>

        <Separator />

        {/* Why Tools Matter */}
        <h2 className="text-xl font-bold">✨ Why Tool Use Matters</h2>

        <p>Language models have 3 major limitations:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>They cannot access real-time information.</li>
          <li>They cannot take actions (only output text).</li>
          <li>They can hallucinate missing facts.</li>
        </ul>

        <p>
          Tool use solves these constraints by allowing the agent to fetch real
          data, execute code, and control systems — making it reliable and
          actionable.
        </p>

        <Separator />

        <h2 className="text-xl font-bold">
          🧩 Example: Tool Use Loop (From Andrew Ng)
        </h2>

        <p>When you ask an agent:</p>

        <blockquote className="border-l-4 border-blue-400 pl-4 italic">
          "Analyze last year’s sales and create a forecast report."
        </blockquote>

        <p>The agent follows this loop:</p>

        <ul className="list-decimal pl-5 space-y-1">
          <li>Plan the task</li>
          <li>Call the SQL tool → retrieve data</li>
          <li>Call the Python tool → clean + analyze</li>
          <li>Generate a forecast model</li>
          <li>Reflect → verify if output is correct</li>
          <li>Write final summary</li>
        </ul>

        <p>
          Each of these steps is powered by tools, not just text generation.
        </p>

        <Separator />

        {/* Tools in Detail */}
        <h2 className="text-xl font-bold">
          🔧 Types of Tools Covered in Andrew Ng’s Course
        </h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Function calling</strong> — safest way to expose external
            actions.
          </li>
          <li>
            <strong>Code execution</strong> — run Python for analysis, charts,
            agents.
          </li>
          <li>
            <strong>Retrieval tools</strong> — vector DBs for long-term memory.
          </li>
          <li>
            <strong>External APIs</strong> — integrate real-world information.
          </li>
          <li>
            <strong>Action tools</strong> — emails, scheduling, automation.
          </li>
        </ul>

        <Separator />

        {/* Behind the scenes */}
        <h2 className="text-xl font-bold">⚙️ How Tool Use Works Internally</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>1. LLM decides</strong> which tool to call.
          </li>
          <li>
            <strong>2. Controller validates</strong> the tool call (safety guardrails).
          </li>
          <li>
            <strong>3. The tool executes</strong> (API, Python, DB query).
          </li>
          <li>
            <strong>4. Output returned</strong> to the model.
          </li>
          <li>
            <strong>5. LLM integrates results</strong> into the final answer.
          </li>
        </ul>

        <p>
          This pattern — LLM → Tool → Result → LLM — is the heart of agentic
          workflows.
        </p>

        <Separator />

        {/* Reflection role */}
        <h2 className="text-xl font-bold">🪞 Reflection + Tool Use</h2>

        <p>
          Andrew Ng emphasizes that <strong>reflection loops</strong> make tool
          use far more effective. Agents can:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>evaluate if the tool output is valid</li>
          <li>detect mistakes</li>
          <li>retry with improvements</li>
        </ul>

        <p>
          Example: if a Python script errors, the agent inspects the traceback
          and rewrites the code.
        </p>

        <Separator />

        <h2 className="text-xl font-bold">🚀 Real-World Use Cases</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>Financial report generators</li>
          <li>Travel planning agents</li>
          <li>Customer support automation</li>
          <li>Data analysis copilots</li>
          <li>AI software engineers</li>
        </ul>

        <Separator />

        {/* Best Practices */}
        <h2 className="text-xl font-bold">✨ Best Practices from the Course</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Keep tool interfaces structured</strong> (JSON-based
            function calling).
          </li>
          <li>
            <strong>Validate tool inputs</strong> before execution.
          </li>
          <li>
            <strong>Add rate limits & audit logs</strong> for safety.</li>
          <li>
            <strong>Use a controller layer</strong> to avoid infinite loops.
          </li>
          <li>
            <strong>Use reflection</strong> for complex multi-step tasks.
          </li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold">🏁 Key Takeaways</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>Tool use is what makes LLMs become real agents.</li>
          <li>Agents can plan, act, call tools, and verify results.</li>
          <li>
            Andrew Ng’s framework emphasizes safety, structure, and reflection.
          </li>
          <li>
            Designing strong tool APIs is one of the most important parts of
            agentic AI.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
