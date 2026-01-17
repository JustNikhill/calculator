import { Link } from 'react-router-dom'

export default function Careers() {
  const openRoles = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      description: 'Build and optimize multi-agent systems, LLM inference, and agent coordination protocols.',
    },
    {
      title: 'Enterprise Solutions Engineer',
      department: 'Solutions',
      location: 'Remote',
      description: 'Work with enterprise customers to deploy Coreva, design integrations, and ensure success.',
    },
    {
      title: 'Product Engineer',
      department: 'Product',
      location: 'Remote',
      description: 'Design and build features that make Coreva intuitive and powerful for organizations.',
    },
    {
      title: 'Infrastructure Engineer',
      department: 'Engineering',
      location: 'Remote',
      description: 'Build scalable, reliable infrastructure that supports thousands of agents coordinating simultaneously.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Careers
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Join us in building the infrastructure for autonomous organizational coordination.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Coreva
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Work on Hard Problems',
                description: 'Build systems that coordinate thousands of AI agents, handle real-time orchestration, and scale to enterprise needs.',
              },
              {
                title: 'Real Impact',
                description: 'Your work directly enables organizations to operate more efficiently and scale without proportional overhead.',
              },
              {
                title: 'Technical Excellence',
                description: 'We prioritize building systems that work in production, with a focus on reliability, security, and performance.',
              },
              {
                title: 'Autonomous Culture',
                description: 'We trust our team to make decisions, own outcomes, and work independently while collaborating effectively.',
              },
              {
                title: 'Remote First',
                description: 'Work from anywhere. We\'re a distributed team that values async communication and flexible schedules.',
              },
              {
                title: 'Early Stage',
                description: 'Join at the ground floor and help shape the direction of the company, product, and culture.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Roles
            </h2>
            <p className="text-lg text-gray-600">
              We're always looking for exceptional people. Don't see a role that fits? Reach out anyway.
            </p>
          </div>
          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span>{role.department}</span>
                      <span>•</span>
                      <span>{role.location}</span>
                    </div>
                    <p className="text-gray-700">{role.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-lg text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in joining?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Even if you don't see a specific role, we'd love to hear from you. We're always looking for exceptional people who share our vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
