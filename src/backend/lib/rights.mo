import Types "../types/rights";
import Runtime "mo:core/Runtime";

module {
  public func getRightsQuestions() : [Types.RightsQuestion] {
    Runtime.trap("not implemented");
  };

  public func getRightsResult(answers : [(Nat, Text)]) : [Types.RightsResult] {
    Runtime.trap("not implemented");
  };
};
