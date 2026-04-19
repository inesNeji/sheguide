module {
  public type BuddyProfile = {
    id : Nat;
    name : Text;
    city : Text;
    professionalField : Text;
    countryOfOrigin : Text;
    bio : Text;
    isAvailable : Bool;
    languages : [Text];
  };

  public type BuddyMatch = {
    profile : BuddyProfile;
    score : Nat;
  };
};
