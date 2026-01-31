import { Car } from "lucide-react";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export function Logo({
  variant = "dark",
  size = "md",
  showIcon = true,
}: LogoProps) {
  const sizeClasses = {
    sm: {
      container: "gap-2",
      icon: "w-8 h-8",
      iconInner: "w-4 h-4",
      text: "text-[16px]",
      tech: "text-[16px]",
    },
    md: {
      container: "gap-3",
      icon: "w-10 h-10",
      iconInner: "w-5 h-5",
      text: "text-[20px]",
      tech: "text-[20px]",
    },
    lg: {
      container: "gap-4",
      icon: "w-14 h-14",
      iconInner: "w-7 h-7",
      text: "text-[28px]",
      tech: "text-[28px]",
    },
  };

  const colorClasses = {
    light: {
      iconBg: "bg-white/15",
      iconColor: "text-white",
      parkText: "text-white",
      techText: "text-white/80",
    },
    dark: {
      iconBg: "bg-[#1F4E79]",
      iconColor: "text-white",
      parkText: "text-[#1F4E79]",
      techText: "text-[#3C6FA3]",
    },
  };

  const sizes = sizeClasses[size];
  const colors = colorClasses[variant];

  return (
    <div className={`flex items-center ${sizes.container}`}>
      {showIcon && (
        <div
          className={`${sizes.icon} ${colors.iconBg} rounded-xl flex items-center justify-center shadow-sm`}
        >
          <Car
            className={`${sizes.iconInner} ${colors.iconColor}`}
            strokeWidth={2.5}
          />
        </div>
      )}
      <div className="flex items-baseline">
        <span
          className={`${sizes.text} font-bold ${colors.parkText} tracking-tight`}
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
        >
          Park
        </span>
        <span
          className={`${sizes.tech} font-semibold ${colors.techText}`}
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
        >
          Tech
        </span>
      </div>
    </div>
  );
}
