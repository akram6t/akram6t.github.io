import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "HTML",
    "CSS",
    "Python",
    "Git",
    "SQL",
  ]

  return (
    <section id="skills" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills</h2>
      <div className="mt-8 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}