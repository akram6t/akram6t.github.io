import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Smartphone } from "lucide-react"

export default function WhatIdo() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What I Do</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Code className="h-8 w-8" />
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Creating responsive and dynamic web applications using modern technologies.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Palette className="h-8 w-8" />
            <CardTitle>UI/UX Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Designing intuitive and visually appealing user interfaces and experiences.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Smartphone className="h-8 w-8" />
            <CardTitle>Mobile App Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Building cross-platform mobile applications for iOS and Android.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}