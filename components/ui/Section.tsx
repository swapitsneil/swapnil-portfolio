import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  withGradient?: boolean;
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
  withGradient = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-24 sm:py-28 lg:py-28",
        className
      )}
    >
      {withGradient && <div className="absolute inset-0 section-gradient" aria-hidden="true" />}
      <Container className={cn("relative z-10", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
