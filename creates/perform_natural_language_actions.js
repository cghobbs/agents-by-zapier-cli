module.exports = {
  key: 'perform_natural_language_actions',
  noun: 'Actions',
  display: {
    label: 'Perform Natural Language Actions',
    description:
      'Performs a series of actions based on the natural language prompt provided. The prompt can contain dynamic data and can specify logic (if this, then do this) and formatting.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'prompt',
        label: 'Prompt',
        type: 'string',
        helpText:
          'Write a prompt in natural language about about the actions you want to perform.',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      id: 'actn-8339cd1b-46bc-4986-a59e-2e99fb56dd05',
      response: 'The email was sent successfully.',
    },
    outputFields: [
      { key: 'id', label: 'ID', type: 'string' },
      { key: 'response', label: 'Response', type: 'string' },
    ],
    perform: {
      body: { prompt: '{{bundle.inputData.prompt}}' },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
      url: 'https://agents-by-zapier.cghobbs.repl.co/actions',
    },
  },
};
