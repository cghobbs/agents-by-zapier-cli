module.exports = {
  key: 'available_actions',
  noun: 'Action',
  display: {
    label: 'Available Actions',
    description:
      'Lists all of the available actions that can be used with the "Perform Natural Language Actions" action.',
    hidden: true,
    important: false,
  },
  operation: {
    perform: {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      url: 'https://agents-by-zapier.cghobbs.repl.co/tools',
    },
    sample: {
      id: 'tls-8061ba51-36b7-4d8b-a701-9d499961914a',
      tool_names: [
        'Google Calendar: Create Detailed Event',
        'Gmail: Send Email',
        'Create a Task',
      ],
    },
    outputFields: [
      { key: 'id', label: 'ID', type: 'string' },
      { key: 'tool_names', label: 'Tool Names', type: 'string' },
    ],
  },
};
