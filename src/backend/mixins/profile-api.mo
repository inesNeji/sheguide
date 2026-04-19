import ProfileTypes "../types/profile";
import ProfileLib "../lib/profile";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

mixin (profiles : Map.Map<Text, ProfileTypes.UserProfile>) {
  public shared ({ caller }) func saveUserProfile(profile : ProfileTypes.UserProfile) : async () {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getUserProfile() : async ?ProfileTypes.UserProfile {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getPrefilledForm(formType : Text) : async [ProfileTypes.FormField] {
    Runtime.trap("not implemented");
  };
};
