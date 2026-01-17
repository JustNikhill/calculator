export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect Enterprise Tools',
      description: 'Integrate Coreva with your existing systems: Slack, Jira, Salesforce, GitHub, and more. Our API connects to 100+ enterprise tools.',
      details: [
        'Single sign-on (SSO) integration',
        'API-based connections',
        'Real-time data synchronization',
        'Custom integrations available',
      ],
    },
    {
      number: '2',
      title: 'Assign AI Agents to Each Employee',
      description: 'Every employee receives a personal AI agent that understands their role, responsibilities, and team context.',
      details: [
        'Automatic agent provisioning',
        'Role-based configuration',
        'Department and team assignment',
        'Custom agent personalities',
      ],
    },
    {
      number: '3',
      title: 'Agents Learn Each Role\'s Context',
      description: 'Agents observe interactions, learn from feedback, and build understanding of workflows, priorities, and team dynamics.',
      details: [
        'Continuous learning from interactions',
        'Context awareness building',
        'Workflow pattern recognition',
        'Team relationship mapping',
      ],
    },
    {
      number: '4',
      title: 'Agents Coordinate and Execute Tasks Automatically',
      description: 'Agents communicate with each other to coordinate workflows, schedule meetings, update systems, and execute tasks without human intervention.',
      details: [
        'Cross-team coordination',
        'Automatic task routing',
        'Intelligent scheduling',
        'Status updates and notifications',
      ],
    },
    {
      number: '5',
      title: 'Teams Operate Faster and With Less Overhead',
      description: 'Organizations see immediate improvements in coordination speed, reduced meeting overhead, and faster task completion.',
      details: [
        '50% reduction in coordination time',
        'Automated status updates',
        'Fewer status meetings',
        'Faster decision-making cycles',
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Deploy AI agents across your organization in five simple steps. Start seeing results in days, not months.
          </p>
        </div>
      </section>

      {/* Step-by-Step Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-100 hidden md:block" />
                )}

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Flow Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              System Flow
            </h2>
            <p className="text-lg text-gray-600">
              See how agents coordinate across your organization
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Enterprise Tools */}
              <div className="flex-1 text-center">
                <div className="mb-4">
                  <div className="inline-block p-4 bg-gray-100 rounded-lg">
                    <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise Tools</h3>
                <p className="text-sm text-gray-600">Slack, Jira, Salesforce, etc.</p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Coreva Platform */}
              <div className="flex-1 text-center">
                <div className="mb-4">
                  <div className="inline-block p-4 bg-primary-100 rounded-lg">
                    <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Coreva Platform</h3>
                <p className="text-sm text-gray-600">AI Agent Coordination</p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              {/* AI Agents */}
              <div className="flex-1 text-center">
                <div className="mb-4">
                  <div className="inline-block p-4 bg-gray-100 rounded-lg">
                    <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Agents</h3>
                <p className="text-sm text-gray-600">One per employee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Results You Can Expect
            </h2>
            <p className="text-lg text-gray-600">
              Organizations using Coreva see measurable improvements in coordination and execution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '50%',
                label: 'Faster Coordination',
                description: 'Tasks move between teams in half the time',
              },
              {
                metric: '30%',
                label: 'Fewer Meetings',
                description: 'Status updates happen automatically',
              },
              {
                metric: '24/7',
                label: 'Always On',
                description: 'Agents work across time zones continuously',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-5xl font-bold text-primary-600 mb-2">{item.metric}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{item.label}</div>
                <div className="text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
