import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experiences() {
  return (
    <section id="experiences" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Work Experience</h2>
      <div className="mt-8 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Senior Developer at TechCorp</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">2020 - Present</p>
            <ul className="mt-2 list-inside list-disc">
              <li>Led development of flagship product</li>
              <li>Mentored junior developers</li>
              <li>Implemented CI/CD pipelines</li>
            </ul>
          </CardContent>
        </Card>
        {/* Add more experience cards as needed */}
      </div>
    </section>
  )
}