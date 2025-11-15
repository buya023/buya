// app/blog/data/react-hook-form/ChapUseFormBlog.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const ChapUseFormBlog = () => {
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
            🧾 Understanding <code>useForm</code> & <code>formState</code> in React Hook Form
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya &bull; October 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-purple-100 text-purple-800">React</Badge>

      <CardContent className="space-y-6 text-gray-700">
        <p className="text-lg font-semibold">
          React Hook Form is a performant library for handling forms in React. <code>useForm()</code> gives you full
          control over your form state, validation, and submission while reducing re-renders.
        </p>

        <Separator />

        {/* useForm Introduction */}
        <h2 className="text-xl font-bold">🌱 What is <code>useForm()</code>?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Tracks form state (<code>isDirty</code>, <code>isValid</code>, <code>isSubmitting</code>, etc.)</li>
          <li>Registers inputs and validation rules</li>
          <li>Handles submission and errors</li>
          <li>Resets and sets field values</li>
          <li>Watches field changes in real-time</li>
        </ul>

        <h2 className="text-xl font-bold">🧩 Basic Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`import { useForm } from "react-hook-form";

function MyForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors, isDirty, isSubmitting, isValid },
  } = useForm();

  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: "Username is required" })} />
      {errors.username && <p>{errors.username.message}</p>}
      <button disabled={!isValid || isSubmitting}>Submit</button>
    </form>
  );
}`}
        </pre>

        <Separator />

        {/* Core Features */}
        <h2 className="text-xl font-bold">🧰 Core Features of <code>useForm()</code></h2>

        <h3 className="font-semibold mt-2">1. <code>register(name, options)</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`<input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^\\S+@\\S+$/i,
      message: "Invalid email format",
    },
  })}
/>`}
        </pre>

        <h3 className="font-semibold mt-2">2. <code>handleSubmit(onSubmit, onError)</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`const onSubmit = (data) => console.log(data);
const onError = (errors) => console.error(errors);

<form onSubmit={handleSubmit(onSubmit, onError)}></form>`}
        </pre>

        <h3 className="font-semibold mt-2">3. <code>watch(name?)</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`const watchedEmail = watch("email");
console.log("Email typed:", watchedEmail);`}
        </pre>

        <h3 className="font-semibold mt-2">4. <code>formState</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`const { errors, isDirty, isValid, isSubmitting, touchedFields, dirtyFields } = formState;`}
        </pre>
        <ul className="list-disc pl-5 space-y-1">
          <li>Disable submit until valid (<code>isValid</code>)</li>
          <li>Show loader during submission (<code>isSubmitting</code>)</li>
          <li>Track unsaved changes (<code>isDirty</code>)</li>
        </ul>

        <h3 className="font-semibold mt-2">5. <code>reset(values?, options?)</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`reset(); // reset all fields
reset({ username: "Buya", email: "buya@example.com" }); // set defaults`}
        </pre>

        <h3 className="font-semibold mt-2">6. <code>setValue(name, value, options?)</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`setValue("email", "test@example.com", { shouldValidate: true });`}
        </pre>

        <h3 className="font-semibold mt-2">7. <code>getValues(name?)</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`const allValues = getValues(); // all fields
const username = getValues("username"); // specific field`}
        </pre>

        <h3 className="font-semibold mt-2">8. <code>trigger(name?)</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`await trigger("email"); // validate single
await trigger(); // validate all`}
        </pre>

        <Separator />

        {/* Configuration */}
        <h2 className="text-xl font-bold">⚙️ Configuration Options</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`const { register, handleSubmit } = useForm({
  mode: "onChange",
  reValidateMode: "onBlur",
  defaultValues: { email: "", password: "" },
  resolver: yupResolver(schema),
});`}
        </pre>

        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Option</th>
              <th className="border px-2 py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1"><code>mode</code></td>
              <td className="border px-2 py-1">When to trigger validation (onSubmit, onChange, onBlur, all)</td>
            </tr>
            <tr>
              <td className="border px-2 py-1"><code>reValidateMode</code></td>
              <td className="border px-2 py-1">When to revalidate after an error</td>
            </tr>
            <tr>
              <td className="border px-2 py-1"><code>defaultValues</code></td>
              <td className="border px-2 py-1">Initial form values</td>
            </tr>
            <tr>
              <td className="border px-2 py-1"><code>resolver</code></td>
              <td className="border px-2 py-1">Schema validation (Yup, Zod, Joi)</td>
            </tr>
            <tr>
              <td className="border px-2 py-1"><code>shouldFocusError</code></td>
              <td className="border px-2 py-1">Auto-focus first invalid field on submit</td>
            </tr>
            <tr>
              <td className="border px-2 py-1"><code>criteriaMode</code></td>
              <td className="border px-2 py-1">Show all errors (<code>all</code>) or first (<code>firstError</code>)</td>
            </tr>
          </tbody>
        </table>

        <Separator />

        <h2 className="text-xl font-bold">🚀 Why <code>useForm</code> is Powerful</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Declarative:</strong> No manual state management</li>
          <li><strong>Performant:</strong> Minimal re-renders</li>
          <li><strong>Flexible:</strong> Works with controlled & uncontrolled inputs</li>
          <li><strong>Extensible:</strong> Supports dynamic fields, arrays, and complex schemas</li>
        </ul>
      </CardContent>
    </Card>
  );
};
