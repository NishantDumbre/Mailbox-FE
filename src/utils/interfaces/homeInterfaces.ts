export interface LoadingPropsInterface {
  dimensions: string;
}

export interface NavbarPropsInterface {
  onToggleLoading: (e: boolean) => void;
  onToggleEditor: (e: boolean) => void;
}

export interface ComposeEmailPropsInterface{
    onToggleEditor: (e: boolean) => void;
}