export const useFont = () => {
  if (typeof document !== 'undefined') {
    let rootHtml: any = (document as any)!.documentElement;
    const clientWidth = rootHtml.clientWidth;
    const clientHeight = rootHtml.clientHeight;
    const pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
    // const pageH = pageWidth / (16 / 9);
    let tagHtml = document.getElementsByTagName('html')[0];
    tagHtml.style.cssText = 'font-size: ' + `${pageWidth / 100}px`;
  }

};
if (typeof window !== 'undefined') {
  window.onresize = (() => {
    useFont();
  });
}
