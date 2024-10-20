import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function Page() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error("Failed to get Hume access token");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-gray-100 to-gray-200" aria-label="Empathic Voice Interface Page">
      <main className="w-full max-w-2xl">
        <Card className="w-full mb-8">
          <CardHeader>
            <CardTitle>Welcome to Empathic Voice Interface</CardTitle>
            <CardDescription>Experience the power of AI-driven voice interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This starter kit allows you to create a voice chat using Hume AI's Empathic Voice Interface.
              Click the button below to start your voice interaction.
            </p>
            <Button className="w-full" onClick={() => document.getElementById('chat-container').scrollIntoView({ behavior: 'smooth' })}>
              Start Voice Interaction
            </Button>
          </CardContent>
        </Card>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Real-time voice analysis</li>
                <li>Emotion detection</li>
                <li>Natural language processing</li>
                <li>Customizable responses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Click the "Start Voice Interaction" button</li>
                <li>Allow microphone access when prompted</li>
                <li>Speak clearly into your microphone</li>
                <li>Wait for the AI's response</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <button id="chat-container" className="w-full" aria-label="Open chat interface">
          <Chat accessToken={accessToken} />
        </button>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Powered by Hume AI and Next.js</p>
        <Link href="https://hume.ai" className="text-blue-500 hover:underline" title="Learn more about Hume AI">
          Learn more about Hume AI
        </Link>
      </footer>
    </div>
  );
}
