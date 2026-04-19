import RightsTypes "../types/rights";
import RightsLib "../lib/rights";
import Runtime "mo:core/Runtime";

mixin () {
  public query func getRightsQuestions() : async [RightsTypes.RightsQuestion] {
    Runtime.trap("not implemented");
  };

  public query func getRightsResult(answers : [(Nat, Text)]) : async [RightsTypes.RightsResult] {
    Runtime.trap("not implemented");
  };
};
