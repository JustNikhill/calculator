import AgentConnection from '../components/AgentConnection'

export default function Product() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Product Overview
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Coreva is an enterprise AI coordination platform that deploys autonomous agents across your organization to automate workflows, scheduling, and task execution.
          </p>
        </div>
      </section>

      {/* Personal AI Agents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Personal AI Agents
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every employee receives a dedicated AI agent that understands their role, responsibilities, and context. These agents learn from daily interactions and become more effective over time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Role-specific knowledge and context awareness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Continuous learning from interactions and feedback</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Natural language interface for seamless interaction</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 availability for asynchronous coordination</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Agent</div>
                    <div className="text-sm text-gray-600">Personal AI assistant</div>
                  </div>
                </div>
                <div className="pl-16 space-y-3">
                  <div className="text-sm text-gray-600">✓ Understands role & context</div>
                  <div className="text-sm text-gray-600">✓ Learns from interactions</div>
                  <div className="text-sm text-gray-600">✓ Executes tasks autonomously</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Agent Collaboration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multi-Agent Collaboration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Agents communicate with each other to coordinate complex workflows across departments and teams.
            </p>
          </div>
          <div className="space-y-8">
            <AgentConnection from="Engineering" to="Product" />
            <AgentConnection from="Product" to="Sales" />
            <AgentConnection from="Sales" to="Operations" />
          </div>
          <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How Agents Collaborate</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">1. Request</div>
                <p className="text-gray-700">Agent A identifies a need and requests assistance from Agent B</p>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">2. Coordinate</div>
                <p className="text-gray-700">Agents share context, priorities, and constraints to align on approach</p>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">3. Execute</div>
                <p className="text-gray-700">Agents execute their parts and provide status updates automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Workflow Automation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded border border-gray-200">
                    <span className="text-gray-700 font-medium">Bug Report</span>
                    <span className="text-xs text-gray-500">Engineering Agent</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded border border-gray-200">
                    <span className="text-gray-700 font-medium">Ticket Created</span>
                    <span className="text-xs text-gray-500">Product Agent</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded border border-gray-200">
                    <span className="text-gray-700 font-medium">Status Update</span>
                    <span className="text-xs text-gray-500">Sales Agent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enterprise Workflow Automation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Agents automate end-to-end workflows by coordinating across multiple systems and teams. From bug reports to customer updates, agents handle the entire lifecycle.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Cross-system task orchestration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Intelligent routing and prioritization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Automatic status updates and notifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Error handling and retry logic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Task Execution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-Time Task Execution
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Agents execute tasks immediately when conditions are met, without waiting for human approval.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scheduling',
                description: 'Automatically coordinate meetings, resolve conflicts, and send calendar invites.',
                example: 'Engineering Agent schedules design review with Product Agent',
              },
              {
                title: 'Communication',
                description: 'Send updates, notifications, and status reports to relevant stakeholders.',
                example: 'Sales Agent updates customer on deal progress',
              },
              {
                title: 'Data Updates',
                description: 'Sync information across systems, update records, and maintain consistency.',
                example: 'Operations Agent updates inventory across all systems',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-sm text-gray-500 italic">"{item.example}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secure Data Handling */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Secure Data Handling
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Enterprise-grade security built into every agent interaction. All data is encrypted, access is controlled, and every action is audited.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">End-to-End Encryption</h3>
                    <p className="text-gray-600">All agent communications and data are encrypted in transit and at rest.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Role-Based Access Control</h3>
                    <p className="text-gray-600">Agents only access data and systems permitted by their user's role.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Complete Audit Trails</h3>
                    <p className="text-gray-600">Every agent action is logged with full context for compliance and debugging.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">SOC 2 Type II</span>
                  <span className="text-xs text-green-600 font-medium">✓ Certified</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
                  <span className="text-xs text-green-600 font-medium">✓ Compliant</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">HIPAA Ready</span>
                  <span className="text-xs text-green-600 font-medium">✓ Available</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">ISO 27001</span>
                  <span className="text-xs text-green-600 font-medium">✓ Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
