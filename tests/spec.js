// https://blog.taller.net.br/testando-aplicacoes-angularjs-com-protractor/
// spec.js
describe('angularjs todo mvc homepage', function() {  
    it('should have a title', function() {
      browser.get('http://todomvc.com/examples/angularjs/#/');
   
      expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
    });

    it('should be able to type a text in the text field', function() {
      element(by.id('new-todo')).sendKeys('Teste de digitação em campo texto');
    });
});