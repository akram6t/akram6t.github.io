import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Hello, I'm [Your Name]<br className="hidden sm:inline" />
          A [Your Profession] based in [Your Location]
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I specialize in [Your Specialties]. Let's create something amazing together!
        </p>
      </div>
      <div className="flex gap-4">
        <Button>
          Contact Me <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline">View Projects</Button>
      </div>
    </section>
  )
}