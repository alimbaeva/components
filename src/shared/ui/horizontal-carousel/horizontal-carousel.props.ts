import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  isControlButton?: boolean;
  isRight?: boolean;
  button?: ReactNode;
  className?: string;
};

export type { Props };
