import Types "../types/profile";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

module {
  public func saveUserProfile(profiles : Map.Map<Text, Types.UserProfile>, userId : Text, profile : Types.UserProfile) {
    Runtime.trap("not implemented");
  };

  public func getUserProfile(profiles : Map.Map<Text, Types.UserProfile>, userId : Text) : ?Types.UserProfile {
    Runtime.trap("not implemented");
  };

  public func getPrefilledForm(profile : ?Types.UserProfile, formType : Text) : [Types.FormField] {
    Runtime.trap("not implemented");
  };
};
