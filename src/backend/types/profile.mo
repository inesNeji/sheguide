import CommonTypes "common";

module {
  public type VisaType = { #student; #blueCard; #generalResidence };

  public type UserProfile = {
    fullName : Text;
    visaType : VisaType;
    arrivalDate : Text;
    city : Text;
    familySituation : Text;
    profession : Text;
    nationality : Text;
  };

  public type FormField = {
    key : Text;
    value : Text;
  };
};
