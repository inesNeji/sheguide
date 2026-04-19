import BuddyTypes "../types/buddy";
import BuddyLib "../lib/buddy";
import Runtime "mo:core/Runtime";

mixin () {
  public query func getBuddies() : async [BuddyTypes.BuddyProfile] {
    Runtime.trap("not implemented");
  };

  public query func getTopMatches(city : Text, field : Text, origin : Text) : async [BuddyTypes.BuddyMatch] {
    Runtime.trap("not implemented");
  };
};
