import DeadlineTypes "../types/deadline";
import DeadlineLib "../lib/deadline";
import Runtime "mo:core/Runtime";

mixin () {
  public query func getDeadlines(visaType : DeadlineTypes.VisaType, arrivalDate : Text) : async [DeadlineTypes.Deadline] {
    Runtime.trap("not implemented");
  };
};
