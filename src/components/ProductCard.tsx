import type { ComponentType, SVGProps } from "react";
import { StaggerItem } from "./Reveal";

type ProductCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
};

export function ProductCard({ icon: Icon, name, description }: ProductCardProps) {
  return (
    <StaggerItem>
      <div className="group relative h-full overflow-hidden rounded-xl2 border border-forest-700/10 bg-cream-50 p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-forest-700/20 hover:shadow-card">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-700/8 text-forest-700 transition-colors duration-300 group-hover:bg-forest-700 group-hover:text-cream-100">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-display text-xl font-medium text-ink">{name}</h3>
        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-muted">{description}</p>
      </div>
    </StaggerItem>
  );
}
