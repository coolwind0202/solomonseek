const skipTextsContent = () => {
  for (const text of document.querySelectorAll("[class^=text]"))
    text.style.display = "block";
};

const skipAnimationContent = () => {
  if (typeof exportRoot == "undefined") return;

  const match = exportRoot.main.text.match(/(.*)\*?end$/)[1];
  const subText = exportRoot.sub.text;
  if (match) {
    Array.from(match).forEach((c, i) => {
      exportRoot[c]?.gotoAndStop?.(Number.MAX_SAFE_INTEGER);
      exportRoot[subText[i]]?.gotoAndStop?.(Number.MAX_SAFE_INTEGER);
    });
  }
};

const skipAllContent = () => {
  skipTextsContent();
  skipAnimationContent();
};

// https://stackoverflow.com/a/326076
const inIframe = () => window.self !== window.top;

if (inIframe()) {
  setTimeout(skipAllContent, 1000);
}
