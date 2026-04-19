module {
  public type Stage = { #arrival; #settling; #professional };
  public type DeadlineStatus = { #urgent; #upcoming; #completed };
  public type VisaType = { #student; #blueCard; #generalResidence };

  public type Deadline = {
    id : Nat;
    title : Text;
    dueDate : Text;
    stage : Stage;
    status : DeadlineStatus;
    description : Text;
    officialLink : Text;
  };
};
