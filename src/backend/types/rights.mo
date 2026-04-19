module {
  public type RightsQuestion = {
    id : Nat;
    question : Text;
    options : [Text];
  };

  public type RightsResult = {
    violationType : Text;
    summary : Text;
    legalBasis : Text;
    contactInfo : Text;
  };
};
