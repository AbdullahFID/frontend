import { useSettingsStore } from "@/stores/settings";
import { Turnstile, TurnstileInstance, TurnstileProps } from "@marsidev/react-turnstile";
import * as React from "react";

type TurnstileWidgetProps = Omit<TurnstileProps, "siteKey">;

export const TurnstileWidget = React.forwardRef<TurnstileInstance | undefined, TurnstileWidgetProps>((props, ref) => {
  const theme = useSettingsStore((state) => state.theme);

  return (
    <Turnstile
      {...props}
      options={{
        theme,
      }}
      ref={ref}
      siteKey="0x4AAAAAAAhednrFondcId0A"
    />
  );
});
