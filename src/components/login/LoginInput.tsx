import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";

interface LoginInputProps {
  icon: LucideIcon;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  tooltipText: string;
  autoComplete?: string;
}

export const LoginInput = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  tooltipText,
  autoComplete,
}: LoginInputProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="pl-10 form-input-transition"
              disabled={disabled}
              autoComplete={autoComplete}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};