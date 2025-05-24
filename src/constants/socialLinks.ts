// src/constants/socialLinks.ts
import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/yourprofile",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/yourprofile",
    icon: FaTwitter,
    label: "Twitter",
  },
];
