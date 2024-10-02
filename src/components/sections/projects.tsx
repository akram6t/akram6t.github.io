import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  return (
    <section id="projects" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Image src="/placeholder.svg" alt="Project 1" width={300} height={200} className="rounded-lg" />
            <CardTitle>Project 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A brief description of Project 1 and the technologies used.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </CardFooter>
        </Card>
        {/* Add more project cards as needed */}
      </div>
    </section>
  )
}