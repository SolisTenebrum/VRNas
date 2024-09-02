interface IArticle {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  mainImage: string;
  paragraphs: string[];
  articleImages: string[];
  postTags: string;
}

interface IArticleProps {
  category: string;
  title: string;
  author: string;
  date: string;
  mainImage: string;
  paragraphs: string[];
  articleImages: string[];
  postTags: string;
  id: number;
}

interface IArticleSliderProps {
  articles: IArticle[];
}

interface IBenefitsFull {
  variant: string;
}

interface IFAQProps {
  title: string;
  text: string;
  index: number;
  toggleVisibility: (index: number) => void;
  faqCardsOpened: number[];
}

interface INavigationItemProps {
  href: string;
  navName: string;
  setBurgerActive: (isActive: boolean) => void;
}

interface IPricingCardProps {
  title: string;
  price: string;
  text: string;
  list: string[];
  buttonText: string;
  index: number;
}

interface IClientProps {
  image: string;
  name: string;
  company: string;
  message: string;
  index: number;
}

interface IServiceTextProps {
  subtitle: string;
  title: string;
  text: string[];
  listTitle: string;
  listItems: string[];
}

export type {
  IArticle,
  IArticleSliderProps,
  IBenefitsFull,
  IFAQProps,
  INavigationItemProps,
  IPricingCardProps,
  IClientProps,
  IServiceTextProps,
  IArticleProps,
};
