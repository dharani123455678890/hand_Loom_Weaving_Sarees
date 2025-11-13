import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  blank?: boolean; // force open in new tab
};

export default function ExternalLink({ href, blank, target, rel, children, ...rest }: Props) {
  const isAbsolute = /^https?:\/\//i.test(href);
  const openInNewTab = Boolean(blank) || target === "_blank" || isAbsolute;
  const safeRel = rel ?? (openInNewTab ? "noopener noreferrer" : undefined);

  return (
    <a {...rest} href={href} target={openInNewTab ? "_blank" : target} rel={safeRel}>
      {children}
    </a>
  );
}
