import Button from "@protolane/button";
import React from "react";

export default {
  title: 'Protolane/Button',
  component: Button,
}

export const Basic = () => {
  return <Button onClick={() => alert(1)} />
}
