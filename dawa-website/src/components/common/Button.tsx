import { Button as ShadcnButton } from '../ui/button';
import { cn } from '@/lib/utils';
import { ReactNode, FC } from 'react';

type IconPosition = 'left' | 'right';

interface ButtonProps {
  children: ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: IconPosition;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  return (
    <ShadcnButton
      className={cn(
        'flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors',
        iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row',
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span className="text-center">{children}</span>
    </ShadcnButton>
  );
};

export default Button;
