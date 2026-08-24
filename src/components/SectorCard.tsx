import type { ComponentType, SVGProps } from "react";
import { StaggerItem } from "./Reveal";

type SectorCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
  index: number;
};

export function SectorCard({ icon: Icon, name, description, index }: SectorCardProps) {
  return (
    <StaggerItem>
      <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl2 bg-forest-800 p-7 text-cream-100 transition-all duration-300 ease-premium hover:-translate-y-1 hover:bg-forest-700">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100">
            <Icon className="h-6 w-6" />
          </div>
          <span className="font-display text-3xl font-light text-cream-100/15">
            {String(index).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-8">
          <h3 className="font-display text-lg font-medium">{name}</h3>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-cream-200/85">{description}</p>
        </div>
      </div>
    </StaggerItem>
  );
}
