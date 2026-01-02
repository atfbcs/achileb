"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const domains = ["dazzap.com", "ticketbalie.com", "trapspotter.com"];
const baseEmail = "achile@";
const gmailParts = {
  base: "achile",
  middle: "batier",
  domain: "@gmail.com",
};

type EmailState = "domain" | "gmail-base" | "gmail-middle" | "gmail-domain" | "gmail-delete";

export function AnimatedEmail() {
  const [displayText, setDisplayText] = useState(baseEmail + domains[0]);
  const [domainIndex, setDomainIndex] = useState(0);
  const [emailState, setEmailState] = useState<EmailState>("domain");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(domains[0].length);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let isMounted = true;

    if (emailState === "domain") {
      const currentDomain = domains[domainIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          timeoutId = setTimeout(() => {
            if (isMounted) {
              setDisplayText(baseEmail + currentDomain.slice(0, charIndex - 1));
              setCharIndex(charIndex - 1);
            }
          }, 50);
        } else {
          // Transition to next state
          timeoutId = setTimeout(() => {
            if (isMounted) {
              setIsDeleting(false);
              if (domainIndex === domains.length - 1) {
                setEmailState("gmail-base");
                setDisplayText(gmailParts.base);
                setCharIndex(0);
              } else {
                setDomainIndex(domainIndex + 1);
                setCharIndex(0);
              }
            }
          }, 50);
        }
      } else {
        if (charIndex < currentDomain.length) {
          timeoutId = setTimeout(() => {
            if (isMounted) {
              setDisplayText(baseEmail + currentDomain.slice(0, charIndex + 1));
              setCharIndex(charIndex + 1);
            }
          }, 100);
        } else {
          timeoutId = setTimeout(() => {
            if (isMounted) {
              setIsDeleting(true);
            }
          }, 2000);
        }
      }
    } else if (emailState === "gmail-base") {
      timeoutId = setTimeout(() => {
        if (isMounted) {
          setEmailState("gmail-middle");
          setCharIndex(0);
        }
      }, 500);
    } else if (emailState === "gmail-middle") {
      if (charIndex < gmailParts.middle.length) {
        timeoutId = setTimeout(() => {
          if (isMounted) {
            setDisplayText(gmailParts.base + gmailParts.middle.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          if (isMounted) {
            setEmailState("gmail-domain");
            setCharIndex(0);
          }
        }, 800);
      }
    } else if (emailState === "gmail-domain") {
      if (charIndex < gmailParts.domain.length) {
        timeoutId = setTimeout(() => {
          if (isMounted) {
            setDisplayText(
              gmailParts.base + gmailParts.middle + gmailParts.domain.slice(0, charIndex + 1)
            );
            setCharIndex(charIndex + 1);
          }
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          if (isMounted) {
            setEmailState("gmail-delete");
            setCharIndex(gmailParts.middle.length + gmailParts.domain.length);
          }
        }, 2000);
      }
    } else if (emailState === "gmail-delete") {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          if (isMounted) {
            const remaining = charIndex - 1;
            if (remaining >= gmailParts.middle.length) {
              const domainChars = remaining - gmailParts.middle.length;
              setDisplayText(
                gmailParts.base + gmailParts.middle + gmailParts.domain.slice(0, domainChars)
              );
            } else if (remaining > 0) {
              setDisplayText(gmailParts.base + gmailParts.middle.slice(0, remaining));
            } else {
              setDisplayText(gmailParts.base);
            }
            setCharIndex(remaining);
          }
        }, 50);
      } else {
        timeoutId = setTimeout(() => {
          if (isMounted) {
            setEmailState("domain");
            setDomainIndex(0);
            setCharIndex(0);
            setIsDeleting(false);
            setDisplayText(baseEmail);
          }
        }, 500);
      }
    }

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [domainIndex, emailState, isDeleting, charIndex]);

  const getHref = () => {
    if (emailState === "gmail-domain" || (emailState === "gmail-delete" && charIndex > gmailParts.middle.length)) {
      return `mailto:${gmailParts.base}${gmailParts.middle}${gmailParts.domain}`;
    }
    if (emailState === "gmail-base" || emailState === "gmail-middle" || (emailState === "gmail-delete" && charIndex <= gmailParts.middle.length)) {
      return `mailto:${gmailParts.base}${gmailParts.middle}${gmailParts.domain}`;
    }
    const currentDomain = domains[domainIndex];
    return `mailto:${baseEmail}${currentDomain}`;
  };

  return (
    <a
      href={getHref()}
      className="flex items-center gap-2 text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 hover:decoration-zinc-500 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50 dark:hover:decoration-zinc-400"
    >
      <Mail className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
      <span>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </a>
  );
}

