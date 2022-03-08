export interface IMenuProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

export interface IMenuListValues {
  title: string;
  path: string;
  imgSrc: string;
}
