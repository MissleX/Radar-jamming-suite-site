"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check, Terminal, FileCode, Package, Settings } from "lucide-react"
import { useState } from "react"

export default function Documentation() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="docs" className="w-full py-12 md:py-24 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Documentation</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know to install, configure, and use the Radar Jamming Suite.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="installation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800">
              <TabsTrigger value="installation" className="data-[state=active]:bg-emerald-600">
                Installation
              </TabsTrigger>
              <TabsTrigger value="configuration" className="data-[state=active]:bg-emerald-600">
                Configuration
              </TabsTrigger>
              <TabsTrigger value="usage" className="data-[state=active]:bg-emerald-600">
                Usage
              </TabsTrigger>
              <TabsTrigger value="api" className="data-[state=active]:bg-emerald-600">
                API
              </TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="mt-6">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-xl font-bold mb-4">Installation Guide</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 flex items-center">
                      <Package className="mr-2 h-5 w-5 text-emerald-500" />
                      System Requirements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 pl-5">
                      <li>Linux-based operating system (Ubuntu 20.04+ recommended)</li>
                      <li>Software-defined radio hardware (HackRF, USRP, or BladeRF)</li>
                      <li>Minimum 8GB RAM, 4-core CPU</li>
                      <li>Python 3.8+ and GNU Radio 3.8+</li>
                      <li>50GB free disk space</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2 flex items-center">
                      <Terminal className="mr-2 h-5 w-5 text-emerald-500" />
                      Installation Steps
                    </h4>

                    <div className="space-y-4">
                      <div className="rounded-md bg-black p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-400">1. Clone the repository</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() =>
                              copyToClipboard("git clone https://github.com/radar-jamming-suite/rjs.git", "clone")
                            }
                          >
                            {copied === "clone" ? (
                              <Check className="h-4 w-4 text-emerald-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <pre className="mt-2 text-sm text-emerald-500 overflow-x-auto">
                          <code>git clone https://github.com/radar-jamming-suite/rjs.git</code>
                        </pre>
                      </div>

                      <div className="rounded-md bg-black p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-400">2. Install dependencies</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => copyToClipboard("cd rjs && ./install_dependencies.sh", "deps")}
                          >
                            {copied === "deps" ? (
                              <Check className="h-4 w-4 text-emerald-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <pre className="mt-2 text-sm text-emerald-500 overflow-x-auto">
                          <code>cd rjs && ./install_dependencies.sh</code>
                        </pre>
                      </div>

                      <div className="rounded-md bg-black p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-400">3. Build the project</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => copyToClipboard("make && make install", "build")}
                          >
                            {copied === "build" ? (
                              <Check className="h-4 w-4 text-emerald-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <pre className="mt-2 text-sm text-emerald-500 overflow-x-auto">
                          <code>make && make install</code>
                        </pre>
                      </div>

                      <div className="rounded-md bg-black p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-400">4. Verify installation</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => copyToClipboard("rjs --version", "verify")}
                          >
                            {copied === "verify" ? (
                              <Check className="h-4 w-4 text-emerald-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <pre className="mt-2 text-sm text-emerald-500 overflow-x-auto">
                          <code>rjs --version</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="configuration" className="mt-6">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-xl font-bold mb-4">Configuration Guide</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 flex items-center">
                      <Settings className="mr-2 h-5 w-5 text-emerald-500" />
                      Basic Configuration
                    </h4>
                    <p className="text-gray-400 mb-4">
                      The main configuration file is located at{" "}
                      <code className="text-emerald-500">~/.config/rjs/config.yaml</code>. You&apos;ll need to configure
                      your SDR hardware settings and default operating parameters.
                    </p>

                    <div className="rounded-md bg-black p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">Example configuration</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            copyToClipboard(
                              `# Radar Jamming Suite Configuration
sdr:
  device: "hackrf"
  sample_rate: 20000000
  center_freq: 2400000000
  gain: 40

scanner:
  min_freq: 1000000000
  max_freq: 6000000000
  fft_size: 4096
  integration_time: 0.5

spoofer:
  max_targets: 4
  default_rcs: 10.0
  
jammer:
  default_method: "noise"
  max_power: 80`,
                              "config",
                            )
                          }
                        >
                          {copied === "config" ? (
                            <Check className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <pre className="mt-2 text-xs text-emerald-500 overflow-x-auto">
                        <code>{`# Radar Jamming Suite Configuration
sdr:
  device: "hackrf"
  sample_rate: 20000000
  center_freq: 2400000000
  gain: 40

scanner:
  min_freq: 1000000000
  max_freq: 6000000000
  fft_size: 4096
  integration_time: 0.5

spoofer:
  max_targets: 4
  default_rcs: 10.0
  
jammer:
  default_method: "noise"
  max_power: 80`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2 flex items-center">
                      <FileCode className="mr-2 h-5 w-5 text-emerald-500" />
                      Advanced Configuration
                    </h4>
                    <p className="text-gray-400 mb-2">
                      For advanced users, you can create custom jamming profiles and signal patterns:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 pl-5">
                      <li>
                        Create custom profiles in <code className="text-emerald-500">~/.config/rjs/profiles/</code>
                      </li>
                      <li>
                        Define signal patterns in <code className="text-emerald-500">~/.config/rjs/patterns/</code>
                      </li>
                      <li>
                        Configure hardware-specific settings in{" "}
                        <code className="text-emerald-500">~/.config/rjs/hardware/</code>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="usage" className="mt-6">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-xl font-bold mb-4">Usage Guide</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Basic Commands</h4>

                    <div className="space-y-3">
                      <div className="rounded-md bg-black p-3">
                        <p className="text-sm font-medium text-emerald-500">Start the GUI</p>
                        <pre className="mt-1 text-sm text-gray-400">
                          <code>rjs --gui</code>
                        </pre>
                      </div>

                      <div className="rounded-md bg-black p-3">
                        <p className="text-sm font-medium text-emerald-500">Start scanner module</p>
                        <pre className="mt-1 text-sm text-gray-400">
                          <code>rjs scanner --range 2400-2500</code>
                        </pre>
                      </div>

                      <div className="rounded-md bg-black p-3">
                        <p className="text-sm font-medium text-emerald-500">Start spoofer module</p>
                        <pre className="mt-1 text-sm text-gray-400">
                          <code>rjs spoofer --targets 2 --distance 500,1200 --velocity 50,-30</code>
                        </pre>
                      </div>

                      <div className="rounded-md bg-black p-3">
                        <p className="text-sm font-medium text-emerald-500">Start jammer module</p>
                        <pre className="mt-1 text-sm text-gray-400">
                          <code>rjs jammer --method noise --freq 2450 --bandwidth 20</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Common Workflows</h4>

                    <div className="space-y-4">
                      <div className="rounded-md bg-gray-800 p-4">
                        <h5 className="font-medium mb-2">Detect and Jam a Specific Radar</h5>
                        <ol className="list-decimal list-inside space-y-2 text-gray-400 pl-2">
                          <li>
                            Scan for active radar signals: <code className="text-emerald-500">rjs scanner --auto</code>
                          </li>
                          <li>
                            Analyze detected signals: <code className="text-emerald-500">rjs analyze --last</code>
                          </li>
                          <li>
                            Target specific radar: <code className="text-emerald-500">rjs target --id 3</code>
                          </li>
                          <li>
                            Deploy jamming:{" "}
                            <code className="text-emerald-500">rjs jammer --target-id 3 --method sweep</code>
                          </li>
                        </ol>
                      </div>

                      <div className="rounded-md bg-gray-800 p-4">
                        <h5 className="font-medium mb-2">Create Multiple False Targets</h5>
                        <ol className="list-decimal list-inside space-y-2 text-gray-400 pl-2">
                          <li>
                            Identify radar parameters: <code className="text-emerald-500">rjs scanner --detailed</code>
                          </li>
                          <li>
                            Create target profile:{" "}
                            <code className="text-emerald-500">rjs profile --create targets.yaml</code>
                          </li>
                          <li>
                            Deploy spoofing:{" "}
                            <code className="text-emerald-500">rjs spoofer --profile targets.yaml</code>
                          </li>
                          <li>
                            Monitor effectiveness: <code className="text-emerald-500">rjs monitor --spoof</code>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="api" className="mt-6">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-xl font-bold mb-4">API Reference</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2">RESTful API</h4>
                    <p className="text-gray-400 mb-4">
                      The Radar Jamming Suite provides a RESTful API for remote control and integration with other
                      systems. The API server runs on port 8080 by default.
                    </p>

                    <div className="space-y-3">
                      <div className="rounded-md bg-black p-3">
                        <p className="text-sm font-medium text-emerald-500">Start the API server</p>
                        <pre className="mt-1 text-sm text-gray-400">
                          <code>rjs api --start</code>
                        </pre>
                      </div>

                      <div className="rounded-md bg-black p-3">
                        <p className="text-sm font-medium text-emerald-500">Example API request (Scanner)</p>
                        <pre className="mt-1 text-sm text-gray-400 overflow-x-auto">
                          <code>{`curl -X POST http://localhost:8080/api/scanner/start \\
  -H "Content-Type: application/json" \\
  -d '{"min_freq": 2400, "max_freq": 2500, "integration_time": 0.5}'`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Python Library</h4>
                    <p className="text-gray-400 mb-4">
                      You can also use the Python library to integrate the Radar Jamming Suite into your own
                      applications.
                    </p>

                    <div className="rounded-md bg-black p-4">
                      <pre className="text-sm text-emerald-500 overflow-x-auto">
                        <code>{`import radarjs as rjs

# Initialize the system
system = rjs.System()

# Start the scanner
scanner = system.get_scanner()
scanner.set_frequency_range(2400e6, 2500e6)
scanner.start()

# Wait for signals
signals = scanner.wait_for_signals(timeout=10)

# Analyze the first detected signal
if signals:
    signal = signals[0]
    print(f"Detected signal at {signal.frequency/1e6} MHz")
    
    # Start jamming the signal
    jammer = system.get_jammer()
    jammer.set_target(signal)
    jammer.set_method("noise")
    jammer.start()
    
    # Run for 30 seconds
    import time
    time.sleep(30)
    
    # Stop jamming
    jammer.stop()

# Cleanup
scanner.stop()
system.shutdown()`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
