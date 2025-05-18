"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Radar, Radio, Shield, Zap } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our suite consists of three powerful modules working together to provide complete radar signal control.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="scanner" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="scanner" className="data-[state=active]:bg-emerald-600">
                Scanner
              </TabsTrigger>
              <TabsTrigger value="spoofer" className="data-[state=active]:bg-emerald-600">
                Spoofer
              </TabsTrigger>
              <TabsTrigger value="jammer" className="data-[state=active]:bg-emerald-600">
                Jammer
              </TabsTrigger>
            </TabsList>
            <TabsContent value="scanner" className="mt-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Radar className="h-5 w-5 text-emerald-500" />
                    Radar Signal Scanner
                  </CardTitle>
                  <CardDescription>Detect and analyze radar signals across multiple frequency bands</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Key Features</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Wide-band frequency detection (1-40 GHz)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Automatic signal classification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Real-time spectrum analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Pulse pattern recognition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Signal strength mapping</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-black p-6">
                      <div className="h-[200px] w-full bg-black relative overflow-hidden rounded-md border border-gray-800">
                        <div className="absolute inset-0">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute bottom-0 bg-emerald-500"
                              style={{
                                left: `${i * 10}%`,
                                height: `${Math.random() * 80 + 20}%`,
                                width: "8%",
                                opacity: 0.7,
                              }}
                            />
                          ))}
                          <div className="absolute bottom-0 left-0 w-full h-px bg-emerald-500/50" />
                          <div className="absolute left-0 top-0 h-full w-px bg-emerald-500/50" />
                          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-emerald-500/20 to-transparent" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-1 w-full bg-emerald-500/20 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="spoofer" className="mt-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Radio className="h-5 w-5 text-emerald-500" />
                    Signal Spoofer
                  </CardTitle>
                  <CardDescription>
                    Create and transmit synthetic radar signals to simulate false targets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Key Features</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Precise signal replication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Multiple target simulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Doppler effect emulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Range gate manipulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Custom waveform generation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-black p-6">
                      <div className="relative h-[200px] w-full rounded-md border border-gray-800 overflow-hidden">
                        <div className="absolute inset-0 bg-black">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute h-1 bg-emerald-500/70 animate-pulse"
                              style={{
                                width: `${Math.random() * 30 + 20}%`,
                                top: `${i * 20 + 10}%`,
                                left: `${Math.random() * 50}%`,
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-700" />
                          <div className="absolute h-full w-px bg-gray-700 left-1/2 top-0" />
                        </div>
                        <div className="absolute top-2 left-2 text-xs text-emerald-500">SIGNAL PATTERN</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="jammer" className="mt-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald-500" />
                    Radar Jammer
                  </CardTitle>
                  <CardDescription>
                    Disrupt and neutralize radar systems with advanced jamming techniques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Key Features</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Noise jamming capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Sweep jamming patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Barrage jamming mode</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Deceptive jamming techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>Adaptive power management</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-black p-6">
                      <div className="relative h-[200px] w-full rounded-md border border-gray-800 overflow-hidden">
                        <div className="absolute inset-0 bg-black">
                          {Array.from({ length: 50 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute bg-emerald-500/60"
                              style={{
                                width: "2px",
                                height: "2px",
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                boxShadow: "0 0 8px 2px rgba(16, 185, 129, 0.6)",
                              }}
                            />
                          ))}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-pulse" />
                        </div>
                        <div className="absolute top-2 left-2 text-xs text-emerald-500">JAMMING ACTIVE</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-xl font-bold mb-4">System Architecture</h3>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-lg border border-gray-800 bg-black p-4">
                    <Radar className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
                    <h4 className="font-medium">Scanner</h4>
                    <p className="text-xs text-gray-400 mt-1">Signal Detection</p>
                  </div>
                  <div className="rounded-lg border border-gray-800 bg-black p-4">
                    <Radio className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
                    <h4 className="font-medium">Spoofer</h4>
                    <p className="text-xs text-gray-400 mt-1">Signal Replication</p>
                  </div>
                  <div className="rounded-lg border border-gray-800 bg-black p-4">
                    <Zap className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
                    <h4 className="font-medium">Jammer</h4>
                    <p className="text-xs text-gray-400 mt-1">Signal Disruption</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <div className="relative h-20 w-full">
                    <div className="absolute top-0 left-1/6 h-full w-px border-l border-dashed border-gray-700"></div>
                    <div className="absolute top-0 left-1/2 h-full w-px border-l border-dashed border-gray-700"></div>
                    <div className="absolute top-0 left-5/6 h-full w-px border-l border-dashed border-gray-700"></div>

                    <div className="absolute bottom-0 w-full h-px border-t border-gray-700"></div>

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      <div className="rounded-lg border border-gray-800 bg-black p-4 w-64 text-center">
                        <Shield className="mx-auto h-6 w-6 text-emerald-500 mb-1" />
                        <h4 className="font-medium">Core Controller</h4>
                        <p className="text-xs text-gray-400 mt-1">Unified Command Interface</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
