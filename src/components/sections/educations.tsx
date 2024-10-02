import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Educations() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Education</h2>
      <div className="mt-8 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Science in Computer Science</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">University of Technology, 2016 - 2020</p>
            <p className="mt-2">Graduated with honors, GPA: 3.8/4.0</p>
          </CardContent>
        </Card>
        {/* Add more education cards as needed */}
      </div>
    </section>
  )
}