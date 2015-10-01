findAndReplaceDOMText(document.body, {
  find: new RegExp('man', 'gi'),
  replace: 'PERSON'
  }
);
findAndReplaceDOMText(document.body, {
  find: new RegExp('men', 'gi'),
  replace: 'PERSONS'
  }
);
