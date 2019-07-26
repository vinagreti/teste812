import { mockReadOnlyProperties } from "./functions";

describe('TestingFunctions', () => {
  it('should override navigator language', () => {
    const newLanguage = 'qualquercoisa';
    mockReadOnlyProperties(navigator, 'language', newLanguage);
    expect(navigator.language).toBeTruthy(newLanguage);
  });
});
