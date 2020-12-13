type propsType = {
  buttonAction: any;
  buttonValue: string;
};

function TimerButton({ buttonAction, buttonValue }: propsType) {
  return (
    <div onClick={() => buttonAction()} className="TimerButton">
      {buttonValue}
    </div>
  );
}

export default TimerButton;
