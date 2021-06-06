import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/dont-cleanup-after-each';

window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  };
};
