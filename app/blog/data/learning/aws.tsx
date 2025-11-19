import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const S3GetObjectBlog = () => {
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
            📦 Using AWS S3 getObject to Fetch Images in PHP/Symfony
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya • November 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-yellow-100 text-yellow-800">
        AWS • PHP • Symfony
      </Badge>

      <CardContent className="space-y-6 text-gray-700">
        <p className="text-lg font-semibold">
          When working with user-generated content like KYC documents, AWS S3 is
          one of the most scalable and secure ways to store files. But
          retrieving those files is just as important— and that’s where{" "}
          <code>getObject</code> comes in.
        </p>

        <Separator />

        {/* What is getObject */}
        <h2 className="text-xl font-bold">
          🔍 What is <code>getObject</code>?
        </h2>

        <p>
          The <code>getObject</code> method of the AWS S3 PHP SDK allows your
          application to fetch any file stored in an S3 bucket. Think of it as
          telling S3:
        </p>

        <blockquote className="border-l-4 border-yellow-400 pl-4 italic">
          “Please give me this file I uploaded earlier.”
        </blockquote>

        <p>Every S3 object includes:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Bucket name</strong> – e.g. <code>asc-beta</code>
          </li>
          <li>
            <strong>Key</strong> – path to the file inside the bucket
          </li>
          <li>
            <strong>Content</strong> – the binary file data
          </li>
          <li>
            <strong>Metadata</strong> – content type, timestamps, etc.
          </li>
        </ul>

        <Separator />

        {/* Basic Example */}
        <h2 className="text-xl font-bold">🧩 Basic Example Usage</h2>

        <p>Here’s how to fetch a file using the PHP AWS SDK:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`$s3Client = new S3Client([
    'version' => 'latest',
    'region'  => 'eu-central-1',
    'credentials' => [
        'key'    => $_ENV['AWS_S3_CORE_KEY'],
        'secret' => $_ENV['AWS_S3_CORE_SECRET'],
    ],
]);

try {
    $result = $s3Client->getObject([
        'Bucket' => 'asc-beta',
        'Key'    => 'kyc/6d05d4d7-172f-449f-9d26-27543cdd8190.png',
    ]);

    $content = $result['Body'];
    $contentType = $result['ContentType'];

    echo "File fetched successfully.";
} catch (AwsException $e) {
    echo "Error fetching file: " . $e->getMessage();
}`}
        </pre>

        <Separator />

        {/* Behind the Scenes */}
        <h2 className="text-xl font-bold">
          ⚙️ What Happens Behind the Scenes?
        </h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Request Generation:</strong>
            The SDK sends a signed GET request to S3.
          </li>
          <li>
            <strong>Permission Check:</strong>
            S3 checks if the requester has <code>s3:GetObject</code>.
          </li>
          <li>
            <strong>Object Retrieval:</strong>
            S3 locates the object by key and streams the content.
          </li>
          <li>
            <strong>Response Handling:</strong>
            Metadata and content are returned to the SDK.
          </li>
          <li>
            <strong>Error Handling:</strong>
            Missing objects or permission issues throw exceptions.
          </li>
        </ul>

        <Separator />

        {/* Symfony Integration */}
        <h2 className="text-xl font-bold">
          🧩 Integrating <code>getObject</code> in Symfony
        </h2>

        <p>
          In Symfony, you can wrap S3 access inside a service to return images
          directly to the browser:
        </p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
          {`public function getKycImageByType(int $kycId, int $type): Response
{
    $kycFile = $this->em->getRepository(KycFile::class)->findOneBy([
        'kyc' => $kycId,
        'type' => $type,
        'status' => KycFile::STATUS_ACTIVE
    ]);

    if (!$kycFile) {
        return new Response("KycFile not found", 404);
    }

    $s3File = $kycFile->getS3File();
    $key = $s3File->getKeyName() ?: $s3File->getFilePath();

    try {
        $result = $this->client->getObject([
            'Bucket' => $this->s3Bucket,
            'Key' => $key,
        ]);

        return new Response($result['Body'], 200, [
            'Content-Type' => $result['ContentType'] ?? 'image/jpeg',
            'Content-Length' => strlen($result['Body']),
            'Content-Disposition' => 'inline; filename="' . basename($key) . '"',
        ]);
    } catch (S3Exception $e) {
        return new Response('Failed to get image: ' . $e->getMessage(), 500);
    }
}`}
        </pre>

        <h3 className="font-semibold mt-3">Why this works well:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>No local storage needed</li>
          <li>Streaming supports large files</li>
          <li>Uses S3 permissions securely</li>
          <li>Directly returns dynamic images</li>
        </ul>

        <Separator />

        <h2 className="text-xl font-bold">✨ Best Practices</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Use the Key, not filePath</strong> → safer for long-term
            structure.
          </li>
          <li>
            <strong>Stream large files</strong> → avoid high memory usage.
          </li>
          <li>
            <strong>Catch S3Exception</strong> → return user-friendly errors.
          </li>
          <li>
            <strong>Use presigned URLs</strong> for public temporary access.
          </li>
        </ul>

        <Separator />

        {/* Takeaways */}
        <h2 className="text-xl font-bold">🚀 Key Takeaways</h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            AWS S3 <code>getObject</code> is the simplest way to retrieve stored
            files.
          </li>
          <li>Symfony can return image responses directly from S3.</li>
          <li>Streaming is efficient and production-ready.</li>
          <li>Use presigned URLs when you want client-side direct access.</li>
        </ul>
      </CardContent>
    </Card>
  );
};
