import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Project</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn about the team behind the Radar Jamming Suite and our mission.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-4">
                The Radar Jamming Suite was developed to advance the field of electronic warfare research and provide
                security researchers with tools to understand radar vulnerabilities and develop effective
                countermeasures.
              </p>
              <p className="text-gray-400 mb-4">
                Our goal is to promote responsible research in radar security while providing educational resources for
                those interested in electronic warfare technologies. We believe that understanding these systems is
                essential for developing better protection mechanisms.
              </p>
              <p className="text-gray-400">
                This project is maintained by a team of security researchers, radio frequency engineers, and software
                developers passionate about advancing the state of the art in electronic warfare research.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                </Link>
                <Link href="mailto:contact@example.com">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Core Team</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-gray-800 bg-gray-900">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gray-800 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Team Member"
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Dr. Alex Chen</h4>
                        <p className="text-sm text-gray-400">Lead Researcher</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-800 bg-gray-900">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gray-800 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Team Member"
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Sarah Johnson</h4>
                        <p className="text-sm text-gray-400">RF Engineer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-800 bg-gray-900">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gray-800 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Team Member"
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Michael Torres</h4>
                        <p className="text-sm text-gray-400">Software Developer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-800 bg-gray-900">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gray-800 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Team Member"
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Dr. Emily Patel</h4>
                        <p className="text-sm text-gray-400">Security Researcher</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <h4 className="font-medium mb-2">Open Source Contributors</h4>
                <p className="text-sm text-gray-400">
                  We'd like to thank the 50+ open source contributors who have helped make this project possible. Join
                  our community on GitHub to contribute to the project.
                </p>
                <div className="mt-3">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-800">
                      <Github className="mr-2 h-4 w-4" />
                      View Contributors
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
