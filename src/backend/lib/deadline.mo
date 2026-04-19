import Types "../types/deadline";
import Runtime "mo:core/Runtime";

module {
  public func getDeadlines(visaType : Types.VisaType, arrivalDate : Text) : [Types.Deadline] {
    Runtime.trap("not implemented");
  };
};
