import Types "../types/buddy";
import Runtime "mo:core/Runtime";

module {
  public func getBuddies() : [Types.BuddyProfile] {
    Runtime.trap("not implemented");
  };

  public func getTopMatches(city : Text, field : Text, origin : Text) : [Types.BuddyMatch] {
    Runtime.trap("not implemented");
  };
};
