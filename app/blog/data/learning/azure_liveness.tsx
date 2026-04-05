import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const AzureLivenessBlog = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-10 p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/img/myAvatar1.png"
          alt="Author avatar"
          width={48}
          height={48}
          className="rounded-full border-2 border-purple-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Integrating Azure AI Vision Face Liveness SDK: Lessons from Production
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya &bull; April 2026</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-purple-100 text-purple-800">Learning</Badge>

      <CardContent className="space-y-6 text-gray-700">
        <p className="text-lg font-semibold">
          Integrating facial liveness detection is a major security upgrade for any mobile app. However, the official documentation can sometimes miss the &quot;real-world&quot; hurdles.
        </p>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">1. Quick Overview</h2>
        <p>
          <strong>Azure AI Vision Face Liveness</strong> detects if a face is &quot;live&quot; or a spoof. It&apos;s powered by a dedicated UI SDK that handles the camera, high-security data submission, and real-time user feedback.
        </p>

        <h3 className="font-semibold text-lg">Key Requirements</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Android:</strong> Kotlin/Java (API 21+)</li>
          <li><strong>iOS:</strong> Swift/Objective-C (Xcode 26+ is highly recommended)</li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">2. Architecture & Flow</h2>
        <p>The flow is simple but must be secure:</p>
        
        {/* Architecture Flow Diagram (Simulated) */}
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center gap-4 w-full">
               <div className="bg-white border-2 border-teal-500 p-3 rounded shadow text-center w-32">Mobile App</div>
               <div className="text-gray-400">↓</div>
               <div className="bg-white border-2 border-teal-500 p-3 rounded shadow text-center w-32 text-sm italic">Launch SDK</div>
               <div className="text-gray-400">↓</div>
               <div className="bg-white border-2 border-teal-500 p-3 rounded shadow text-center w-32 font-semibold">Camera UI</div>
            </div>
            
            <div className="hidden md:block text-teal-500 text-2xl font-bold">⇌</div>
            <div className="md:hidden text-teal-500 text-2xl font-bold">⇅</div>

            <div className="flex flex-col items-center gap-4 w-full">
               <div className="bg-gray-100 border-2 border-gray-400 p-3 rounded shadow text-center w-32">Backend</div>
               <div className="text-gray-400">↓</div>
               <div className="bg-gray-100 border-2 border-gray-400 p-3 rounded shadow text-center w-32 text-sm italic">Check</div>
               <div className="text-gray-400">↓</div>
               <div className="bg-gray-100 border-2 border-gray-400 p-3 rounded shadow text-center w-32 font-semibold">Azure Face API</div>
            </div>
          </div>
        </div>

        <ol className="list-decimal pl-5 space-y-1 mt-4">
          <li><strong>Backend:</strong> Creates a session and returns a <code>sessionToken</code>.</li>
          <li><strong>App:</strong> Launches the SDK with the token and a <code>deviceCorrelationId</code>.</li>
          <li><strong>Azure:</strong> Performs the check and returns a <code>resultId</code>.</li>
          <li><strong>Backend:</strong> Verifies the final result using the <code>sessionId</code>.</li>
        </ol>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">3. The <code>deviceCorrelationId</code>: Advice from Experience</h2>
        <p>One of the most critical (yet easy to overlook) parameters is the <code>deviceCorrelationId</code>.</p>
        <blockquote className="border-l-4 border-yellow-500 pl-4 italic bg-gray-50 py-2">
          Make sure to add this in both iOS and Android. It&apos;s your primary key for correlating app behavior with backend logs.
        </blockquote>
        <p><strong>Tip:</strong> Generate a fresh <code>UUID</code> for every single session attempt.</p>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">4. Platform Integration</h2>

        <h3 className="font-semibold text-lg">Android (v1.4.7)</h3>
        <p>In your <code>app/build.gradle</code>:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto text-gray-800">
{`implementation("com.azure:azure-ai-vision-face-ui:1.4.7")`}
        </pre>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto text-gray-800">
{`val correlationId = java.util.UUID.randomUUID().toString()

FaceLivenessDetector(
    sessionAuthorizationToken = token,
    deviceCorrelationId = correlationId, 
    onSuccess = { /* Handle success */ },
    onError = { /* Handle error */ }
)`}
        </pre>

        <h3 className="font-semibold text-lg">iOS (SwiftUI)</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto text-gray-800">
{`let correlationId = UUID().uuidString

FaceLivenessDetectorView(
    result: $result,
    sessionAuthorizationToken: token,
    deviceCorrelationId: correlationId
)`}
        </pre>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">5. 🛠 Troubleshooting: DerivedData & LFS Fix</h2>
        <p>This is the most common issue on iOS: building for debugging but failing during Archiving. This happens when Git LFS doesn&apos;t pull the actual framework files.</p>
        
        <div className="bg-gray-800 text-teal-400 p-4 rounded text-sm font-mono overflow-x-auto space-y-3">
          <div>
            <p className="text-gray-400"># 1. Navigate to DerivedData checkout</p>
            <code>cd ~/Library/Developer/Xcode/DerivedData/&lt;Hash&gt;/SourcePackages/checkouts/AzureAIVisionFaceUI</code>
          </div>
          <div>
            <p className="text-gray-400"># 2. Manually Pull LFS Binaries</p>
            <code>git lfs pull</code>
          </div>
          <div>
            <p className="text-gray-400"># 3. Resolve Dependencies</p>
            <code>xcodebuild -resolvePackageDependencies -project YourProject.xcodeproj -scheme YourScheme</code>
          </div>
        </div>

        <Separator />

        <h2 className="text-xl font-bold text-gray-800">6. Best Practices</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Xcode Version:</strong> Always use the latest stable version of Xcode (26+).</li>
          <li><strong>Expired PAT:</strong> Tokens for Azure Maven/Git repos often expire every 2 days. Refresh if builds fail suddenly.</li>
          <li><strong>Camera Permissions:</strong> Check and request camera permissions <em>before</em> initializing the SDK.</li>
          <li><strong>Audit Logs:</strong> Log the <code>deviceCorrelationId</code> on your backend for every attempt.</li>
        </ul>

        <Separator />

        <p className="italic text-gray-500">I hope this guide helps you avoid the common pitfalls and get your liveness detection running smoothly!</p>
      </CardContent>
    </Card>
  );
};
