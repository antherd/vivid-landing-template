import Image from "next/image";
import Link from "next/link";

// Built with Vivid ⚡️

export const Footer = () => {
  return (
    <footer className="bg-extra-strong">
      <div className="items-center justify-between px-12 py-4 mx-auto row max-w-7xl">
        <div className="items-center gap-4 row">
          <Image
            src="/images/logo.png"
            alt="Vivid Logo"
            height="40"
            width="40"
          />
          <div className="text-sm text-light">&copy; Vivid Labs, Inc. 2022</div>
        </div>
        <Link
          href="https://join.slack.com/t/vivid-jqa6824/shared_invite/zt-1f7tbxl86-wruO1aM7FYmEdNaOOnYCMQ"
          className="text-sm text-light"
          aria-label="Slack"
        >
          Join our Slack!
        </Link>
      </div>
    </footer>
  );
};
