interface INavigationItemProps {
  href: string;
  navName: string;
  setBurgerActive: (isActive: boolean) => void;
}

interface IBenefitsFull {
  variant: string;
}

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
  alt: string;
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

interface IArticleSmallCardProps {
  image: string;
  title: string;
  span: string;
  variant: string;
  id: number;
  alt: string;
}

interface IBlogArticleCardProps {
  image: string;
  subtitle: string;
  title: string;
  span: string;
  id: number;
  alt: string;
}

interface IFAQProps {
  title: string;
  text: string;
  index: number;
  toggleVisibility: (index: number) => void;
  faqCardsOpened: number[];
}

interface IPricingCardProps {
  title: string;
  price: string;
  text: string;
  list: string[];
  buttonText: string;
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

interface IServiceCardProps {
  icon: string;
  title: string;
  text: string;
  buttonText: string;
  index: number;
}
interface ITeamCardProps {
  team: any;
  variant: string;
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
  IArticleSmallCardProps,
  IBlogArticleCardProps,
  IServiceCardProps,
  ITeamCardProps,
};
