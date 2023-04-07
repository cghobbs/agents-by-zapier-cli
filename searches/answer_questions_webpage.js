module.exports = {
  key: 'answer_questions_webpage',
  noun: 'Answer',
  display: {
    label: 'Answer Questions from Web Page',
    description:
      'Use natural language to ask questions about a web page and get natural language responses.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'url',
        label: 'Web Page URL',
        type: 'string',
        helpText:
          'Enter a fully qualified web page URL that is publicly available on the internet.',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'prompt',
        label: 'Prompt',
        type: 'text',
        helpText:
          'Enter a prompt. For example, this could be one or more questions about the document.',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: {
      body: {
        url: '{{bundle.inputData.url}}',
        prompt: '{{bundle.inputData.prompt}}',
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
      url: 'https://agents-by-zapier.cghobbs.repl.co/document_qa',
    },
    sample: {
      id: 'dqa-f5f92c07-d3d5-43f7-8c20-bd3ffdcab242',
      response: 'Zapier was founded in 2011.',
    },
    outputFields: [
      { key: 'id', label: 'ID', type: 'string' },
      { key: 'response', label: 'Response', type: 'text' },
    ],
  },
};
