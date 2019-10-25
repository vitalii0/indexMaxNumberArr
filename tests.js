describe("Большее значение 12", function() {

  it("Наибольшее значение содержится в позиции 2", function() {
    assert.strictEqual(MaxValue(numbers), 2);
  });
  it("Наибольшее значение содержится в позиции 2", function() {
    assert.strictEqual(MaxOfArray(numbers), 2);
  });
  it("Наибольшее значение содержится в позиции 2", function() {
    assert.strictEqual(indexOfMax(numbers), 2);
  });
  
});
