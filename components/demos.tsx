import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Demos() {
  return (
    <section id="demos" className="w-full py-12 md:py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Live Demos</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See the Radar Jamming Suite in action with these demonstration videos and visualizations.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="scanner-demo" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="scanner-demo" className="data-[state=active]:bg-emerald-600">
                Scanner Demo
              </TabsTrigger>
              <TabsTrigger value="spoofer-demo" className="data-[state=active]:bg-emerald-600">
                Spoofer Demo
              </TabsTrigger>
              <TabsTrigger value="jammer-demo" className="data-[state=active]:bg-emerald-600">
                Jammer Demo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="scanner-demo" className="mt-6">
              <Card className="border-gray-800 bg-gray-900 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative bg-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Radar Scanner Demo"
                        width={1280}
                        height={720}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                        <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm">
                          <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-black"
                            >
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                        <p className="mt-4 text-lg font-medium">Scanner Module Demo</p>
                        <p className="text-sm text-gray-400">Click to play video</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">Radar Signal Detection</h3>
                    <p className="text-gray-400">
                      This demonstration shows the scanner module detecting and analyzing various radar signals in
                      real-time. The system automatically classifies signals by type and displays detailed frequency
                      information.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-md bg-gray-800 p-3">
                        <span className="text-emerald-500 font-medium">Signal Types:</span>
                        <p className="text-gray-400 mt-1">Pulse, Continuous Wave, Frequency Modulated</p>
                      </div>
                      <div className="rounded-md bg-gray-800 p-3">
                        <span className="text-emerald-500 font-medium">Frequency Range:</span>
                        <p className="text-gray-400 mt-1">1 GHz - 40 GHz</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="spoofer-demo" className="mt-6">
              <Card className="border-gray-800 bg-gray-900 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative bg-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Radar Spoofer Demo"
                        width={1280}
                        height={720}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                        <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm">
                          <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-black"
                            >
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                        <p className="mt-4 text-lg font-medium">Spoofer Module Demo</p>
                        <p className="text-sm text-gray-400">Click to play video</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">Radar Signal Spoofing</h3>
                    <p className="text-gray-400">
                      This demonstration shows the spoofer module creating synthetic radar returns to simulate false
                      targets. The system can generate multiple targets with realistic movement patterns and radar
                      cross-sections.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-md bg-gray-800 p-3">
                        <span className="text-emerald-500 font-medium">Spoofing Techniques:</span>
                        <p className="text-gray-400 mt-1">Range Gate Pull-Off, Velocity Gate Pull-Off</p>
                      </div>
                      <div className="rounded-md bg-gray-800 p-3">
                        <span className="text-emerald-500 font-medium">Target Simulation:</span>
                        <p className="text-gray-400 mt-1">Up to 8 simultaneous false targets</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jammer-demo" className="mt-6">
              <Card className="border-gray-800 bg-gray-900 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative bg-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Radar Jammer Demo"
                        width={1280}
                        height={720}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                        <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm">
                          <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-black"
                            >
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                        <p className="mt-4 text-lg font-medium">Jammer Module Demo</p>
                        <p className="text-sm text-gray-400">Click to play video</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">Radar Signal Jamming</h3>
                    <p className="text-gray-400">
                      This demonstration shows the jammer module disrupting radar systems using various jamming
                      techniques. The system can adaptively select the most effective jamming method based on the
                      detected radar type.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-md bg-gray-800 p-3">
                        <span className="text-emerald-500 font-medium">Jamming Methods:</span>
                        <p className="text-gray-400 mt-1">Noise, Sweep, Barrage, Deceptive</p>
                      </div>
                      <div className="rounded-md bg-gray-800 p-3">
                        <span className="text-emerald-500 font-medium">Effectiveness:</span>
                        <p className="text-gray-400 mt-1">Up to 95% signal degradation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
