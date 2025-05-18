import { AlertTriangle, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Legal() {
  return (
    <section id="legal" className="w-full py-12 md:py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Legal & Ethics</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Important information about the legal and ethical use of the Radar Jamming Suite.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          <Alert variant="destructive" className="border-red-900 bg-red-950">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="text-lg font-bold">Legal Disclaimer</AlertTitle>
            <AlertDescription className="mt-2 text-gray-300">
              The Radar Jamming Suite is intended for research, educational, and authorized testing purposes only.
              Unauthorized jamming or interference with radar systems is illegal in most jurisdictions and may violate
              local, state, federal, and international laws, including but not limited to:
              <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>Communications Act regulations</li>
                <li>FCC regulations in the United States</li>
                <li>Aviation safety regulations</li>
                <li>Maritime safety regulations</li>
                <li>Military and defense regulations</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 h-5 w-5 text-emerald-500" />
              Responsible Usage Guidelines
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Authorized Testing Only</h4>
                <p className="text-gray-400">
                  Only use this software in controlled environments with proper authorization. Never deploy jamming
                  capabilities against operational radar systems without explicit legal permission.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Research & Education</h4>
                <p className="text-gray-400">
                  This tool is valuable for understanding radar vulnerabilities, developing countermeasures, and
                  advancing electronic warfare research. Use it responsibly to contribute to the field.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Safety Considerations</h4>
                <p className="text-gray-400">
                  Never use this software in ways that could endanger public safety, interfere with emergency services,
                  or disrupt critical infrastructure. Safety must always be the top priority.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Licensing & Attribution</h4>
                <p className="text-gray-400">
                  The Radar Jamming Suite is released under the MIT License for research purposes. Proper attribution is
                  required when using or referencing this software in academic or research contexts.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-xl font-bold mb-4">Compliance Requirements</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-md bg-gray-800 p-4">
                <h4 className="font-medium mb-2">Required Permissions</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                  <li>Written authorization from facility owners</li>
                  <li>Proper licensing for radio frequency transmission</li>
                  <li>Compliance with local electromagnetic regulations</li>
                  <li>Notification to relevant authorities when required</li>
                  <li>Documented test plans and safety procedures</li>
                </ul>
              </div>

              <div className="rounded-md bg-gray-800 p-4">
                <h4 className="font-medium mb-2">Documentation Requirements</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                  <li>Maintain detailed logs of all testing activities</li>
                  <li>Document all authorizations and permissions</li>
                  <li>Record frequency ranges and power levels used</li>
                  <li>Maintain records of all personnel involved</li>
                  <li>Document any incidents or unexpected results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
