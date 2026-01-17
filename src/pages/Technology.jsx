export default function Technology() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technology
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Built on cutting-edge AI infrastructure designed for enterprise-scale coordination and execution.
          </p>
        </div>
      </section>

      {/* Technical Foundation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Multi-Agent Systems',
                description: 'Advanced multi-agent architectures enable thousands of agents to coordinate simultaneously with minimal latency and maximum reliability.',
                details: [
                  'Distributed agent orchestration',
                  'Message passing protocols',
                  'Consensus mechanisms',
                  'Conflict resolution',
                ],
              },
              {
                title: 'Distributed AI Architecture',
                description: 'Horizontally scalable infrastructure that grows with your organization, from startups to Fortune 500 companies.',
                details: [
                  'Microservices architecture',
                  'Container-based deployment',
                  'Auto-scaling capabilities',
                  'Multi-region support',
                ],
              },
              {
                title: 'Large Language Models',
                description: 'State-of-the-art LLMs fine-tuned for enterprise coordination, understanding context, and executing tasks reliably.',
                details: [
                  'Fine-tuned models',
                  'Context window optimization',
                  'Tool use and function calling',
                  'Continuous model updates',
                ],
              },
              {
                title: 'API-based Enterprise Integrations',
                description: 'RESTful APIs and webhooks connect Coreva to your existing tools with enterprise-grade reliability and security.',
                details: [
                  'REST API architecture',
                  'Webhook support',
                  'OAuth 2.0 authentication',
                  'Rate limiting and throttling',
                ],
              },
              {
                title: 'Real-time Orchestration',
                description: 'Event-driven architecture ensures agents respond instantly to changes, updates, and new tasks across all systems.',
                details: [
                  'Event streaming',
                  'Real-time message queues',
                  'WebSocket connections',
                  'Low-latency execution',
                ],
              },
              {
                title: 'Security & Compliance',
                description: 'Enterprise-grade security built into every layer, from encryption to access control to audit logging.',
                details: [
                  'End-to-end encryption',
                  'Role-based access control',
                  'Audit logging',
                  'SOC 2, GDPR, HIPAA',
                ],
              },
            ].map((tech, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Architecture
            </h2>
            <p className="text-lg text-gray-600">
              How Coreva's distributed system coordinates agents at scale
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              {/* Layer 1: Enterprise Tools */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Enterprise Layer</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Slack', 'Jira', 'Salesforce', 'GitHub', 'Notion', 'API'].map((tool) => (
                    <div key={tool} className="px-4 py-2 bg-gray-100 rounded border border-gray-200 text-sm font-medium text-gray-700">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Layer 2: Coreva Platform */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Coreva Platform</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                    <div className="text-sm font-semibold text-primary-900 mb-2">Orchestration Layer</div>
                    <div className="text-xs text-primary-700 space-y-1">
                      <div>• Task routing</div>
                      <div>• Agent coordination</div>
                      <div>• Workflow engine</div>
                    </div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                    <div className="text-sm font-semibold text-primary-900 mb-2">AI Layer</div>
                    <div className="text-xs text-primary-700 space-y-1">
                      <div>• LLM inference</div>
                      <div>• Context management</div>
                      <div>• Decision making</div>
                    </div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                    <div className="text-sm font-semibold text-primary-900 mb-2">Integration Layer</div>
                    <div className="text-xs text-primary-700 space-y-1">
                      <div>• API connectors</div>
                      <div>• Webhooks</div>
                      <div>• Data sync</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Layer 3: AI Agents */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Agent Layer</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Engineering Agent', 'Product Agent', 'Sales Agent', 'Ops Agent', 'Leadership Agent'].map((agent) => (
                    <div key={agent} className="px-4 py-2 bg-gradient-to-br from-primary-500 to-primary-700 rounded text-sm font-medium text-white">
                      {agent}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Infrastructure & Scale
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalability</h3>
                  <p className="text-gray-600">
                    Coreva is built to handle organizations of any size. From 10 employees to 10,000+, our distributed architecture scales automatically.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
                  <p className="text-gray-600">
                    99.9% uptime SLA with multi-region redundancy, automatic failover, and comprehensive monitoring.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                  <p className="text-gray-600">
                    Sub-second response times for agent coordination, with optimized LLM inference and efficient message routing.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Development & Updates
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    Our AI models are continuously fine-tuned based on real-world usage patterns, ensuring agents become more effective over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">API-First Design</h3>
                  <p className="text-gray-600">
                    Everything in Coreva is accessible via API, enabling custom integrations, automation, and programmatic control.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Open Standards</h3>
                  <p className="text-gray-600">
                    Built on open standards and protocols, ensuring compatibility and avoiding vendor lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
