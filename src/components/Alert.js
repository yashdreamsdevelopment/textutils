import React from "react";

function Alert(props) {
  const capatilize = (word) => {
    let lower = word.toLocaleLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {/* // here, if the props.alert is not null then the further code will run i.e. the alert div. and if the props.alert is null then it will be false and futher code will not run. */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capatilize(props.alert.type)}:</strong> {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
