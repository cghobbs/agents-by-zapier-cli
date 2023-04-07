const performNaturalLanguageActionsCreate = require('./creates/perform_natural_language_actions.js');
const availableActionsCreate = require('./creates/available_actions.js');
const answerQuestionsWebpageSearch = require('./searches/answer_questions_webpage.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  creates: {
    [performNaturalLanguageActionsCreate.key]:
      performNaturalLanguageActionsCreate,
    [availableActionsCreate.key]: availableActionsCreate,
  },
  searches: {
    [answerQuestionsWebpageSearch.key]: answerQuestionsWebpageSearch,
  },
};
