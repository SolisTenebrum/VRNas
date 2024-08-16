function scrollToElement(hash: string) {
  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
  const additionalHeight = 25;

  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - (headerHeight + additionalHeight);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}

export default scrollToElement;
