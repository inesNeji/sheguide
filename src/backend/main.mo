import ProfileTypes "types/profile";
import Map "mo:core/Map";
import BuddyApi "mixins/buddy-api";
import DeadlineApi "mixins/deadline-api";
import ProfileApi "mixins/profile-api";
import RightsApi "mixins/rights-api";

actor {
  let profiles = Map.empty<Text, ProfileTypes.UserProfile>();

  include BuddyApi();
  include DeadlineApi();
  include ProfileApi(profiles);
  include RightsApi();
};
