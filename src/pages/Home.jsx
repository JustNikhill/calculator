import { Link } from 'react-router-dom'
import AgentIllustration from '../components/AgentIllustration'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                AI agents that run your organization.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Coreva provides every employee with a context-aware AI agent that collaborates across teams to automate communication, scheduling, and execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
                >
                  Get Started
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <AgentIllustration className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deploy AI agents across your organization that learn, coordinate, and execute autonomously.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Connect Tools',
                description: 'Integrate with your existing enterprise systems and workflows.',
              },
              {
                step: '2',
                title: 'Assign Agents',
                description: 'Each employee gets a personal AI agent that understands their role.',
              },
              {
                step: '3',
                title: 'Learn Context',
                description: 'Agents learn from interactions and understand team dynamics.',
              },
              {
                step: '4',
                title: 'Execute Automatically',
                description: 'Agents coordinate across departments to complete tasks seamlessly.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade AI infrastructure for autonomous coordination and execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Multi-Agent Coordination',
                description: 'Agents communicate and collaborate across teams, departments, and time zones to execute complex workflows.',
              },
              {
                title: 'Context-Aware Intelligence',
                description: 'Each agent understands its role, team dynamics, and organizational context to make informed decisions.',
              },
              {
                title: 'Enterprise Integration',
                description: 'Seamlessly connects with your existing tools: Slack, Jira, Salesforce, GitHub, and more.',
              },
              {
                title: 'Autonomous Execution',
                description: 'Agents handle scheduling, task assignment, status updates, and coordination without human intervention.',
              },
              {
                title: 'Real-Time Orchestration',
                description: 'Dynamic task routing and priority management across thousands of concurrent workflows.',
              },
              {
                title: 'Secure & Compliant',
                description: 'Enterprise-grade security with role-based access control and audit trails for all agent actions.',
              },
            ].map((capability, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Works with the tools your team already uses.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Slack', 'Jira', 'Salesforce', 'GitHub', 'Notion', 'Google Workspace', 'Microsoft 365', 'Asana', 'Linear', 'HubSpot', 'Zapier', 'API'].map((tool) => (
              <div
                key={tool}
                className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
              >
                <span className="text-gray-700 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Coreva */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Coreva
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Not a chatbot. An AI operating system.
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Autonomous execution, not just conversation</p>
                    <p className="text-gray-600 mt-1">Agents take action, coordinate tasks, and execute workflows independently.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Enterprise-scale coordination</p>
                    <p className="text-gray-600 mt-1">Designed for organizations with hundreds or thousands of employees and complex workflows.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Built for trust and security</p>
                    <p className="text-gray-600 mt-1">Enterprise-grade security, compliance, and audit capabilities from day one.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">Organizations</div>
                  <div className="text-3xl font-bold text-gray-900">Enterprise-ready</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">Agents per company</div>
                  <div className="text-3xl font-bold text-gray-900">Unlimited</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">Integration time</div>
                  <div className="text-3xl font-bold text-gray-900">&lt; 1 week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to deploy AI agents across your organization?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            See how Coreva can automate workflows and coordinate execution at scale.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
