export const useElement = (elementName: string) => {
  try {
    return document.querySelector<HTMLElement>(elementName)!;
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.warn(e);
  }
};
