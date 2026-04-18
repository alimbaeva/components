import type { ReactNode } from 'react';

type Props = {
  className?: string;
  description?: string;
  icon?: ReactNode;
  size?: 'sm' | 'md';
  title: string;
  index?: number;
};

export type { Props };
