export default function Solutions() {
  const solutions = [
    {
      team: 'Engineering',
      icon: '⚙️',
      title: 'Automatic Bug Coordination and Ticket Updates',
      description: 'Engineering agents automatically coordinate bug reports, create tickets, assign priorities, and update stakeholders across Product, QA, and Customer Success teams.',
      features: [
        'Automatic ticket creation from bug reports',
        'Cross-team coordination for critical issues',
        'Status updates to all stakeholders',
        'Priority routing based on impact',
      ],
      example: 'When a critical bug is reported, the Engineering Agent creates a ticket, notifies the Product Agent for prioritization, and updates the Sales Agent if customers are affected.',
    },
    {
      team: 'Sales',
      icon: '💼',
      title: 'Intelligent Deal Coordination and Scheduling',
      description: 'Sales agents coordinate deal progression, schedule demos, update CRM systems, and ensure all stakeholders are aligned on customer needs and next steps.',
      features: [
        'Automatic demo scheduling coordination',
        'CRM updates across all systems',
        'Internal stakeholder alignment',
        'Customer communication automation',
      ],
      example: 'Sales Agent schedules a demo by coordinating with Product Agent for technical details, Engineering Agent for custom features, and automatically updates Salesforce and HubSpot.',
    },
    {
      team: 'Operations',
      icon: '📦',
      title: 'Automated Logistics and Team Workflows',
      description: 'Operations agents handle logistics, resource allocation, vendor coordination, and internal workflow automation to keep the organization running smoothly.',
      features: [
        'Vendor and supplier coordination',
        'Resource allocation and scheduling',
        'Internal workflow automation',
        'Cross-department logistics',
      ],
      example: 'Operations Agent coordinates office supplies by checking inventory, ordering from vendors, scheduling deliveries, and updating Finance Agent for budget tracking.',
    },
    {
      team: 'Leadership',
      icon: '🎯',
      title: 'Executive Agents Managing Company Priorities',
      description: 'Executive agents provide high-level coordination, strategic alignment, and priority management across all departments to ensure organizational goals are met.',
      features: [
        'Strategic priority alignment',
        'Cross-department coordination',
        'Executive reporting and insights',
        'Resource allocation decisions',
      ],
      example: 'Leadership Agent coordinates Q4 planning by gathering priorities from all departments, identifying conflicts, and scheduling alignment meetings automatically.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solutions by Team
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how different teams use Coreva to automate workflows and coordinate execution across departments.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, idx) => (
              <div
                key={solution.team}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{solution.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900">{solution.team}</h2>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start">
                        <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
                    <p className="text-sm text-gray-700 italic">
                      <span className="font-semibold">Example:</span> {solution.example}
                    </p>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                    <div className="space-y-6">
                      {/* Agent visualization */}
                      <div className="text-center">
                        <div className="inline-block p-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mb-4">
                          <span className="text-3xl text-white font-bold">{solution.team[0]}</span>
                        </div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">{solution.team} Agent</div>
                        <div className="text-xs text-gray-600">Coordinating workflows</div>
                      </div>

                      {/* Connection lines */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex-1 h-0.5 bg-primary-200"></div>
                        <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                        <div className="flex-1 h-0.5 bg-primary-200"></div>
                      </div>

                      {/* Connected agents */}
                      <div className="grid grid-cols-3 gap-4">
                        {['Product', 'Sales', 'Ops'].map((team, teamIdx) => (
                          <div key={teamIdx} className="text-center">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2">
                              <span className="text-xs font-semibold text-gray-600">{team[0]}</span>
                            </div>
                            <div className="text-xs text-gray-600">{team}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Team Coordination */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cross-Team Coordination
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Agents don't work in isolation. They coordinate across all departments to execute complex workflows.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Engineering', 'Product', 'Sales', 'Operations', 'Marketing', 'Support', 'Finance', 'Leadership'].map((team) => (
                <div key={team} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-semibold text-sm">{team[0]}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{team}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                All agents communicate and coordinate seamlessly across departments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Customer onboarding coordination',
              'Feature release management',
              'Incident response automation',
              'Budget approval workflows',
              'Hiring process coordination',
              'Vendor management',
              'Quarterly planning alignment',
              'Customer success workflows',
              'Security compliance checks',
            ].map((useCase, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
