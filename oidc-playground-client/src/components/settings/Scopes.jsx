import React from "react";
import { ReactSelect } from "components";

export function Scopes(props) {
  var fixedValues = [];

  if (props.moderators.auth_protocol === "OpenID") {
    fixedValues = ["openid"];

    if (!props.value.includes("openid")) {
      props.value.unshift("openid");
    }
  }

  return (
    <fieldset>
      <label>Scopes</label>
      <ReactSelect
        {...props}
        className="select-scopes"
        fixedValues={fixedValues}
        isMulti
        freeFormat
      />
    </fieldset>
  );
}
